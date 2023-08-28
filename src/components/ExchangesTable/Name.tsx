import { Row } from "@tanstack/react-table"
import Image from "next/image";
import { styled } from "styled-components";

import { Exchange } from "@/domain/exchanges";
import { space } from "@/styles/variables";

export const Name = ({ row }: { row: Row<Exchange> }) => {
  const { original: { name, image } } = row;
  return (
    <Wrapper>
      <Image src={image} width={25} height={25} alt={`${name} logo`} />
      <Text>{name}</Text>
    </Wrapper>
  )
}


const Wrapper = styled.span`
  display: flex;
  align-items: center;
`

const Text = styled.span`
  margin-left: ${space('s')}
`;
