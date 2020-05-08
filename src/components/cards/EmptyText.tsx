import React from 'react';
import styled from '../../base/styled';

export const EmptyText: React.FC = ({ children }) => {
  return <P>{children}</P>;
};

const P = styled.p`
  color: ${({ theme }) => theme.colors.subtleFont};
  font-size: 1rem;
  margin: 0;
`;
