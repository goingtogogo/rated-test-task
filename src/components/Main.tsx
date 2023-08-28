import { color, space, typography } from '@/styles/variables';
import styled from 'styled-components'

export const Wrapper = styled.main`
  padding: 0 38px;
`

export const Header = styled.header`
  position: sticky;
  height: 74px;
  display: flex;
  align-items: center;
  padding: ${space('xs')} ${space('xl')};
  background-color: ${color('bg01')};
`

export const Title = styled.h1`
  ${typography('header', 1)};
  margin-top: 48px;
  margin-bottom: 104px;
`