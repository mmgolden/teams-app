import styled, { CreateStyled } from '@emotion/styled';

export const theme = Object.freeze({
  colors: {
    primary: '#711fff',
    pageBackground: '#f5f7fc',
    cardBackground: '#ffffff',
    contrastFont: '#ffffff',
  },
});

export type Theme = typeof theme;

export default styled as CreateStyled<Theme>;
