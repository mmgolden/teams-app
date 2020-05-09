import React from 'react';
import styled from '../base/styled';

interface Props {
  error: string;
}

export const PageError: React.FC<Props> = ({ error }) => {
  return (
    <PageErrorContainer>
      <h1 className="error-title">{error}</h1>
    </PageErrorContainer>
  );
};

const PageErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 2rem;

  .error-title {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.primaryFont};
    font-weight: 400;
    margin: 0;
  }
`;
