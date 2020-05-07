import React from 'react';
import styled from '../base/styled';

interface Props {
  className?: string;
}

export const Card: React.FC<Props> = ({ children, className }) => {
  return <CardContainer className={className}>{children}</CardContainer>;
};

const CardContainer = styled.div`
  background: ${({ theme }) => theme.colors.cardBackground};
  padding: 1.875rem;
  border-radius: 8px;
`;
