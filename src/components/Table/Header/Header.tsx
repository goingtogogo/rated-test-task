import { HeaderGroup, flexRender } from "@tanstack/react-table";
import { THead, Th } from "./Header.styled";

type Props<DataType> = {
  getHeaderGroups: () => HeaderGroup<DataType>[];
}

export const Header = <DataType,>({ getHeaderGroups }: Props<DataType>) => {
  return (
    <THead>
      {getHeaderGroups().map(headerGroup => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map(header => (
            <Th key={header.id}>
              {flexRender(
                header.column.columnDef.header,
                header.getContext()
              )}
            </Th>
          ))}
        </tr>
      ))}
    </THead>
  )
}