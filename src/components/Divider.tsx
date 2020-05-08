import React from 'react';
import styled from '../base/styled';

export const Divider: React.FC = () => {
  return <StyledDivider />;
};

const StyledDivider = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.colors.dividerBackground};
`;
