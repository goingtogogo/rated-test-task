import { color, space, typography } from '@/styles/variables';
import styled from 'styled-components'

export const Tr = styled.tr`
  cursor: pointer;
  background-color: ${color('bg01')};

  &:hover {
    background-color: #303c6c;
  }
`

export const Td = styled.th`
  padding: ${space('m')} ${space('xxl')};
  overflow-wrap: break-word;
  white-space: nowrap;
  text-align: left;
  ${typography('body', 1)};
  color: ${color('textPrimary')};
  border-bottom: 2px solid #314c79;
`