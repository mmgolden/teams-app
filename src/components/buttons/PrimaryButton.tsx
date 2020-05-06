import React from 'react';
import styled from '../../base/styled';
import { StyledBaseButton } from './BaseButton';

interface Props {
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
}

export const PrimaryButton: React.FC<Props> = ({
  children,
  type = 'button',
  onClick = () => {},
  disabled = false,
}) => {
  return (
    <StyledPrimaryButton type={type} onClick={onClick} disabled={disabled}>
      {children}
    </StyledPrimaryButton>
  );
};

const StyledPrimaryButton = styled(StyledBaseButton)`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.contrastFont};
  font-size: 1.125rem;
  font-weight: 500;
  padding: 0.75rem;
  border-radius: 4px;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;
