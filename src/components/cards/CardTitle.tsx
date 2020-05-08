import React from 'react';
import styled from '../../base/styled';

export const CardTitle: React.FC = ({ children }) => {
  return <H2>{children}</H2>;
};

const H2 = styled.h2`
  color: ${({ theme }) => theme.colors.primaryFont};
  font-weight: 500;
  margin: 0 0 1.5rem 0;
  font-size: 1.5rem;
`;
