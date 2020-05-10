import React from 'react';
import styled from '../../base/styled';

interface Props {
  className?: string;
  ariaLabel?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
}

/*
 * BaseButton should be used for any new button components
 * This resets some of the default styling
 */
export const BaseButton = React.forwardRef<HTMLButtonElement, Props>(
  (
    {
      children,
      className,
      ariaLabel,
      type = 'button',
      onClick = () => {},
      disabled = false,
    },
    ref
  ) => {
    return (
      <StyledBaseButton
        type={type}
        aria-label={ariaLabel}
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
