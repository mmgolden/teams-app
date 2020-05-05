import styled, { CreateStyled } from '@emotion/styled';

export const theme = Object.freeze({
  colors: {
    pageBackground: '#f5f7fc',
  },
});

export type Theme = typeof theme;

export default styled as CreateStyled<Theme>;
