import React from 'react';
import styled, { Theme } from '../base/styled';
import Loader from 'react-loader-spinner';
import { useTheme } from 'emotion-theming';

export const PageLoader: React.FC = () => {
  const theme = useTheme<Theme>();

  return (
    <LoaderContainer>
      <Loader
        type="Rings"
        color={theme.colors.primary}
        height={100}
        width={100}
      />
    </LoaderContainer>
  );
};

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 2rem;
`;
