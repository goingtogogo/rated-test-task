import { TableState, Updater } from "@tanstack/react-table";

import { Button, Wrapper, Text, ArrowLeft, ArrowRight } from "./Pagination.styled";

type Props = {
  previousPage: () => void;
  nextPage: () => void;
  getCanPreviousPage: () => boolean;
  getCanNextPage: () => boolean;
  getState: () => TableState;
  getPageCount: () => number;
  setPageIndex: (updater: Updater<number>) => void;
  setPageSize: (updater: Updater<number>) => void
}

export const Pagination = ({
  previousPage,
  nextPage,
  getCanNextPage,
  getState,
  getPageCount,
}: Props) => {
  return (
    <Wrapper>
      <Text>
        Page{' '}
        {getState().pagination.pageIndex + 1} out of{' '}
        {getPageCount()}
      </Text>
      <Button
        onClick={() => previousPage()}
        disabled={getState().pagination.pageIndex === 0}
        aria-label="Previous page"
      >
        <ArrowLeft src="/arrow.svg" width="20" height="16" alt="arrow left" priority={true} />
      </Button>
      <Button
        onClick={() => nextPage()}
        disabled={!getCanNextPage()}
        aria-label="Next page"
      >
        <ArrowRight src="/arrow.svg" width="20" height="16" alt="arrow right" priority={true} />
      </Button>
      {/* <span>
        | Go to page:
        <input
          type="number"
          defaultValue={getState().pagination.pageIndex + 1}
          onChange={e => {
            const page = e.target.value ? Number(e.target.value) - 1 : 0
            setPageIndex(page)
          }} />
      </span> */}
      {/* <select
        value={getState().pagination.pageSize}
        onChange={e => {
          setPageSize(Number(e.target.value))
        }}
      >
        {[10, 20, 30, 40, 50].map(pageSize => (
          <option key={pageSize} value={pageSize}>
            Show {pageSize}
          </option>
        ))}
      </select> */}
    </Wrapper>
  )
}