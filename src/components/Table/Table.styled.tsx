import { css, styled } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  overflow-x: auto;
`
export const TableUI = styled.table<{ loading: string }>`
  position: relative;
  width: 100%;
  border-spacing: 0;
  }
`

// for loader
// &:after {
// ${props => props.isLoading && css`
//     position: absolute;
//     content: '';
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     z-index: 10;
//     background: rgba(0, 0, 0, 0.01);

//     display: flex;
//     overflow: auto;
// `}