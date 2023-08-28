import { Row, RowModel, flexRender } from "@tanstack/react-table";
import { Tr, Td } from './Body.styled';


type Props<DataType> = {
  getRowModel: () => RowModel<DataType>;
  onRowClick: (row: Row<DataType>) => void;
}

export const Body = <DataType,>({ getRowModel, onRowClick }: Props<DataType>) => {
  return (
    <tbody>
      {getRowModel().rows.map(row => (
        <Tr key={row.id} onClick={(e) => { e.preventDefault(); onRowClick(row) }}>
          {row.getVisibleCells().map(cell => (
            <Td key={cell.id}>
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </Td>
          ))}
        </Tr>
      ))}
    </tbody>
  )
}