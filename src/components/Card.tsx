import React from 'react';
import styled from '../base/styled';

export const Card: React.FC = ({ children }) => {
  return <CardContainer>{children}</CardContainer>;
};

const CardContainer = styled.div`
  background: ${({ theme }) => theme.colors.cardBackground};
  padding: 1.875rem;
  border-radius: 8px;
`;
