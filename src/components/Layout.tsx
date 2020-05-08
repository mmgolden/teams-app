import React from 'react';
import styled from '../base/styled';
import { Global, css } from '@emotion/core';
import { Navigation } from './Navigation';
import { useTheme } from 'emotion-theming';
import { Theme } from '../base/styled';

export const Layout: React.FC = ({ children }) => {
  const theme = useTheme<Theme>();

  return (
    <>
      <Global
        styles={css`
          body {
            background: ${theme.colors.pageBackground};
          }
        `}
      />
      <Navigation />
      <PageContainer>
        <div className="page-container">{children}</div>
      </PageContainer>
    </>
  );
};

const PageContainer = styled.main`
  padding: 0 1.875rem;

  .page-container {
    margin: 0 auto;

    @media screen and (min-width: 992px) {
      max-width: 1134px;
    }
  }
`;
