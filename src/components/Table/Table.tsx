import { useCallback, useMemo, useState } from 'react';
import useSWR from 'swr'
import { ColumnDef, PaginationState, Row, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { styled } from 'styled-components';

import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from '@/utils/constants';
import { URLBuilder } from '@/utils/URLBuilder';

import { Header } from './Header/Header';
import { Body } from './Body/Body';
import { Pagination } from './Pagination/Pagination';
import { useRouter } from 'next/router';

type Props<DataType> = {
  apiUrl: string;
  schema: ColumnDef<DataType, any>[]
  onRowClick: (row: Row<DataType>) => void;
}

export const Table = <DataType,>({ schema, apiUrl, onRowClick }: Props<DataType>) => {
  const router = useRouter();

  const [{ pageIndex, pageSize }, setPagination] =
    useState<PaginationState>({
      pageIndex: router.query.page ? Number(router.query.page) - 1 : DEFAULT_PAGE,
      pageSize: DEFAULT_PAGE_SIZE,
    })

  const pagination = useMemo(
    () => ({
      pageIndex,
      pageSize,
      key: new URLBuilder(apiUrl)
        .setParams({ page: pageIndex + 1, per_page: pageSize })
        .toString()
    }),
    [pageIndex, pageSize]
  )

  const { data, error, isLoading } = useSWR(pagination.key);

  const handlePaginationChange = useCallback((cb: (state: PaginationState) => PaginationState) => {
    const nextState = cb(pagination);

    router.push({
      query: {
        page: nextState.pageIndex + 1
      }
    })

    setPagination(cb)
  }, [])

  const table = useReactTable({
    data,
    columns: schema,
    state: {
      pagination,
    },
    pageCount: 40,
    onPaginationChange: handlePaginationChange,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
  })

  if (isLoading && !data) {
    return <div>Loading...</div>
  }

  if (error) {
    <div>{error}</div>
  }

  if (data.length === 0) {
    return (
      <div>No items</div>
    );
  }

  return (
    <Wrapper>
      <Pagination
        previousPage={table.previousPage}
        nextPage={table.nextPage}
        getCanPreviousPage={table.getCanNextPage}
        getCanNextPage={table.getCanNextPage}
        getState={table.getState}
        getPageCount={table.getPageCount}
        setPageIndex={table.setPageIndex}
        setPageSize={table.setPageSize}
      />
      <TableUI>
        <Header getHeaderGroups={table.getHeaderGroups} />
        <Body getRowModel={table.getRowModel} onRowClick={onRowClick} />
      </TableUI>
      <Pagination
        previousPage={table.previousPage}
        nextPage={table.nextPage}
        getCanPreviousPage={table.getCanNextPage}
        getCanNextPage={table.getCanNextPage}
        getState={table.getState}
        getPageCount={table.getPageCount}
        setPageIndex={table.setPageIndex}
        setPageSize={table.setPageSize}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  overflow-x: auto;
`
const TableUI = styled.table`
  width: 100%;
  border-spacing: 0;
`