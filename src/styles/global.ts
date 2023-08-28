import { createGlobalStyle } from 'styled-components'
import color from './variables/colors'
import { jacarta } from './variables/typography'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    color: ${color('textPrimary')};
    background-color: ${color('bg02')};
    padding: 0;
    margin: 0;
    font-family: ${jacarta}, sans-serif;
    overflow-x: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
`

export default GlobalStyle