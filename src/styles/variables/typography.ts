import { DefaultTheme, css } from 'styled-components';

export const jacarta = 'Plus Jakarta Sans';
export const grotesk = 'Space Grotesk';

export const createTypography = (fontSize: number, lineHeight: number, weight: number, fontFamily: string) => {
  return css`
        font-size: ${fontSize}px;
        line-height: ${lineHeight}px;
        font-weight: ${weight};
        font-family: ${fontFamily}, sans-serif
    `;
};

const header = {
  1: createTypography(40, 54, 700, grotesk),
  2: createTypography(21, 32, 700, grotesk),
  3: createTypography(16, 24, 700, jacarta),
};

const body = {
  1: createTypography(16, 24, 500, jacarta),
};

const caption = {
  1: createTypography(11, 16, 700, jacarta),
};

export const typography = {
  header,
  body,
  caption
}


export default (type: keyof typeof typography, level: number) => (props: { theme: DefaultTheme }) =>
  props.theme.typography[type][level];