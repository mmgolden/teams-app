import React from 'react';
import styled from '../../base/styled';

interface Props {
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
}

export const BaseButton: React.FC<Props> = ({
  children,
  type = 'button',
  onClick = () => {},
  disabled = false,
}) => {
  return (
    <StyledBaseButton type={type} onClick={onClick} disabled={disabled}>
      {children}
    </StyledBaseButton>
  );
};

export const StyledBaseButton = styled.button`
  cursor: pointer;
  border: none;
  background: transparent;

  &:disabled {
    opacity: 0.5;
  }
`;
