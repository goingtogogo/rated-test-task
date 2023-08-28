import { color, space, typography } from '@/styles/variables';
import styled from 'styled-components';

import Image from 'next/image'

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: ${space('s')} 0
`;

export const ArrowLeft = styled(Image)`
`

export const ArrowRight = styled(Image)`
  transform: rotate(180deg)
`

export const Text = styled.span`
  margin-right: ${space('xs')};
  ${typography('body', 1)};
  color: rgb(178, 184, 200);
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 4px;
  padding: ${space('m')} ${space('xxl')};
  cursor: pointer;
  border: none;
  color: ${color('textSecondary')};
  background-color: rgba(255, 255, 255, 0.15);

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.25);
  }
`;