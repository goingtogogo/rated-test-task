import { useCallback, useMemo, useState } from 'react';
import useSWR from 'swr'
import { ColumnDef, PaginationState, Row, getCoreRowModel, useReactTable } from '@tanstack/react-table';


import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from '@/utils/constants';
import { URLBuilder } from '@/utils/URLBuilder';

import { Header } from './Header/Header';
import { Body } from './Body/Body';
import { Pagination } from './Pagination/Pagination';
import { useRouter } from 'next/router';
import { Text } from './Pagination/Pagination.styled';
import { TableUI, Wrapper } from './Table.styled';

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
    [pageIndex, pageSize, apiUrl]
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
  }, [router, pagination])

  const table = useReactTable({
    data,
    columns: schema,
    state: {
      pagination,
    },
    pageCount: 42,
    // @ts-ignore
    onPaginationChange: handlePaginationChange,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
  })

  if (!data && isLoading) {
    return <Text>🤖: Loading...</Text>
  }

  if (error || data.error || data.status) {
    return (
      <Text>
        🤖: Oops! It looks like something happened <br />
        Reason: {error?.toString() || data.error || `${data.status?.error_code} ${data.status?.error_message}`}
      </Text>
    )
  }

  if (data.length === 0) {
    return (
      <Text>🤖: Oops! No data to show. Please try again later, something might have happened.</Text>
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
      <TableUI loading={String(isLoading)}>
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