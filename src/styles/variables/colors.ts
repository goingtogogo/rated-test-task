import { DefaultTheme } from "styled-components";

export const defaultColors = {
  none: 'transparent',
  bg01: '#243361',
  bg02: '#192548',
  bg03: '#0a111e',
  textPrimary: '#ffffff',
  textSecondary: '#dee1ed',
}

const color = (code: keyof typeof defaultColors) => (props: { theme: DefaultTheme }) => props.theme.colors[code];

export default color;
