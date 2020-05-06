import styled, { CreateStyled } from '@emotion/styled';

export const theme = Object.freeze({
  colors: {
    primary: '#711fff',
    pageBackground: '#f5f7fc',
    cardBackground: '#ffffff',
    contrastFont: '#ffffff',
    primaryFont: '#333333',
    inputBorder: '#dddddd',
    error: '#e50000',
  },
});

export type Theme = typeof theme;

export default styled as CreateStyled<Theme>;
