import React from 'react';
import styled from '../base/styled';
import { NavLink, Link } from 'react-router-dom';
import { ROUTES } from '../base/routes';
import logo from '../assets/wethos.png';
import { BaseButton, PrimaryButton } from './buttons';
import { ReactComponent as ProfileIcon } from '../assets/profile.svg';
import Tippy from '@tippyjs/react';
import { AccountMenu } from './AccountMenu';
import { BurgerButton } from './buttons/BurgerButton';
import { UserContext } from './UserProvider';
import { useHistory } from 'react-router';
import { clearLocalStorageAuth } from '../base/auth/clearLocalStorageAuth';

interface NavProps {
  isMenuOpen: boolean;
}

export const Navigation: React.FC = () => {
  const { setUser } = React.useContext(UserContext);
  const history = useHistory();

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);

  const handleLogout = () => {
    clearLocalStorageAuth();
    setUser(undefined);
    history.push(ROUTES.SIGN_IN);
  };

  return (
    <NavigationContainer isMenuOpen={isMenuOpen}>
      <Nav isMenuOpen={isMenuOpen}>
        <div className="logo-container">
          <Link to={ROUTES.HOME}>
            <img src={logo} alt="Wethos logo" className="navigation-logo" />
          </Link>
          <BurgerButton
            isMenuOpen={isMenuOpen}
            handleMenuToggle={handleMenuToggle}
          />
        </div>
        <NavList isMenuOpen={isMenuOpen}>
          <li>
            <NavLink to={ROUTES.HOME}>Home</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.PROJECTS}>Projects</NavLink>
          </li>
          <li className="mobile-sign-out">
            <PrimaryButton onClick={handleLogout}>Sign out</PrimaryButton>
          </li>
        </NavList>
        <Tippy
          content={<AccountMenu onLogout={handleLogout} />}
          trigger="click"
          placement="bottom"
          interactive
          animation="shift-away"
          duration={[200, 200]}
        >
          <BaseButton className="account-button" ariaLabel="Account menu">
            <ProfileIcon className="account-icon" />
          </BaseButton>
        </Tippy>
      </Nav>
    </NavigationContainer>
  );
};

const NavigationContainer = styled.header<NavProps>`
  background: ${({ theme }) => theme.colors.navigationBackground};
  height: 70px;
  display: flex;
  justify-content: center;
  padding: ${({ isMenuOpen }) => (isMenuOpen ? '0' : '0 1.875rem')};
`;

const Nav = styled.nav<NavProps>`
  display: flex;
  align-items: center;
  flex: 1;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (min-width: 992px) {
    max-width: 1134px;
    flex-wrap: nowrap;
  }

  .logo-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    flex: 1;
    padding: ${({ isMenuOpen }) => (isMenuOpen ? '0 1.875rem' : '0')};
  }

  .navigation-logo {
    width: 50px;

    @media screen and (min-width: 992px) {
      margin-right: 3rem;
    }
  }

  .account-button {
    display: none;

    @media screen and (min-width: 992px) {
      display: block;
      background: ${({ theme }) => theme.colors.primary};
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
    }
  }

  .account-icon {
    fill: ${({ theme }) => theme.colors.contrastFont};
    width: 20px;
  }
`;

const NavList = styled.ul<NavProps>`
  margin: 0;
  padding: 0 0 0 1rem;
  list-style: none;
  display: ${({ isMenuOpen }) => (isMenuOpen ? 'flex' : 'none')};
  flex-direction: column;
  flex-basis: 100%;
  height: 100vh;
  z-index: 999;
  width: 100%;
  background: ${({ theme }) => theme.colors.cardBackground};

  @media screen and (min-width: 992px) {
    display: flex;
    flex-direction: row;
    flex-basis: auto;
    height: auto;
    padding: 0;
  }

  li {
    margin-bottom: 1rem;

    @media screen and (min-width: 992px) {
      margin: 0;
    }
  }

  li a {
    color: ${({ theme }) => theme.colors.subtleFont};
    text-decoration: none;
    padding: 0.75rem 1.5rem;
    font-weight: 500;
    display: inline-block;
    position: relative;

    &:hover {
      color: ${({ theme }) => theme.colors.primaryFont};
    }
  }

  .active {
    color: ${({ theme }) => theme.colors.primaryFont};

    &:after {
      content: '';
      bottom: 4px;
      left: 24px;
      width: 24px;
      height: 4px;
      border-radius: 2px;
      position: absolute;
      background: ${({ theme }) => theme.colors.primary};
    }
  }

  .mobile-sign-out {
    button {
      margin-left: 1rem;
    }

    @media screen and (min-width: 992px) {
      display: none;
    }
  }
`;
