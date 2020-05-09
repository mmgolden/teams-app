import React from 'react';
import styled from '../../base/styled';

interface Props {
  className?: string;
  label?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
}

export const BaseButton = React.forwardRef<HTMLButtonElement, Props>(
  (
    {
      children,
      className,
      label,
      type = 'button',
      onClick = () => {},
      disabled = false,
    },
    ref
  ) => {
    return (
      <StyledBaseButton
        type={type}
        aria-label={label}
        onClick={onClick}
        disabled={disabled}
        className={className}
        ref={ref}
      >
        {children}
      </StyledBaseButton>
    );
  }
);

export const StyledBaseButton = styled.button`
  cursor: pointer;
  border: none;
  background: transparent;

  &:disabled {
    opacity: 0.5;
  }
`;
