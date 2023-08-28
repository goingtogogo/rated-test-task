import { DefaultTheme } from "styled-components";

export const spacing = {
  xs: 10,
  s: 12,
  m: 16,
  l: 20,
  xl: 24,
  xxl: 32,
}

const space = (code: keyof typeof spacing) => (props: { theme: DefaultTheme }) => `${props.theme.spacing[code]}px`;

export default space;
