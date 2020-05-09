import React from 'react';
import styled from '../../base/styled';
import { BaseButton } from './BaseButton';

interface Props {
  isMenuOpen: boolean;
  handleMenuToggle: () => void;
}

interface ButtonProps {
  isMenuOpen: boolean;
}

export const BurgerButton: React.FC<Props> = ({
  isMenuOpen,
  handleMenuToggle,
}) => {
  return (
    <Button
      onClick={handleMenuToggle}
      ariaLabel="Toggle navigation"
      isMenuOpen={isMenuOpen}
    >
      <span className="burger-button-line first-line" />
      <span className="burger-button-line second-line" />
      <span className="burger-button-line third-line" />
    </Button>
  );
};

const Button = styled(BaseButton)<ButtonProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  outline: none;
  padding: 0;
  border-radius: 0;

  @media screen and (min-width: 992px) {
    display: none;
  }

  .burger-button-line {
    display: block;
    background: ${({ theme }) => theme.colors.primaryFont};
    height: 3px;
    width: 28px;
    transform-origin: 1px;
    transition: all 0.3s linear;
  }

  .first-line {
    transform: ${({ isMenuOpen }) => (isMenuOpen ? 'rotate(45deg)' : 'none')};
  }

  .second-line {
    opacity: ${({ isMenuOpen }) => (isMenuOpen ? '0' : '1')};
  }

  .third-line {
    transform: ${({ isMenuOpen }) => (isMenuOpen ? 'rotate(-45deg)' : 'none')};
  }
`;
