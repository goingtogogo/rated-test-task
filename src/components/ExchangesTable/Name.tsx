import { Row } from "@tanstack/react-table"
import Image from "next/image";
import { styled } from "styled-components";

import { Exchange } from "@/domain/exchanges";
import { space } from "@/styles/variables";
import { useMemo } from "react";

export const Name = ({ row }: { row: Row<Exchange> }) => {
  const { original: { name, image } } = row;

  const safeUrl = useMemo(() => {
    try {
      new URL(image);

      return image;
    }

    catch (e) {
      return '🤖'
    }
  }, [image])

  return (
    <Wrapper>
      {safeUrl === '🤖' ? '🤖' : <Image src={safeUrl} width={25} height={25} alt={`${name} logo`} loading="lazy" />}
      <Text>{name}</Text>
    </Wrapper>
  )
}


const Wrapper = styled.span`
  display: flex;
  width: 230px;
  align-items: center;
`

const Text = styled.span`
  margin-left: ${space('s')}
`;
