import { color, space, typography } from '@/styles/variables';
import styled from 'styled-components'

export const THead = styled.thead`
  position: sticky;
  top: 0;
  background-color: #1f2b51;
`

export const Th = styled.th`
  padding: ${space('m')} ${space('xxl')};
  letter-spacing: 1.5px;
  text-transform: uppercase;
  text-align: left;
  ${typography('caption', 1)};
  color: ${color('textSecondary')};
  background-color: #1f2b51;
`