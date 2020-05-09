import React from 'react';
import styled from '../base/styled';
import { NavLink, Link } from 'react-router-dom';
import { ROUTES } from '../base/routes';
import logo from '../assets/wethos.png';
import { BaseButton } from './buttons';
import { ReactComponent as ProfileIcon } from '../assets/profile.svg';
import Tippy from '@tippyjs/react';
import { AccountMenu } from './AccountMenu';

export const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Nav>
        <div className="flex-container">
          <Link to={ROUTES.HOME}>
            <img src={logo} alt="Wethos logo" className="navigation-logo" />
          </Link>
          <NavList>
            <li>
              <NavLink to={ROUTES.HOME}>Home</NavLink>
            </li>
            <li>
              <NavLink to={ROUTES.PROJECTS}>Projects</NavLink>
            </li>
          </NavList>
        </div>
        <Tippy
          content={<AccountMenu />}
          trigger="click"
          placement="bottom"
          interactive
          animation="shift-away"
          duration={[200, 200]}
        >
          <BaseButton className="account-button" label="Account menu">
            <ProfileIcon className="account-icon" />
          </BaseButton>
        </Tippy>
      </Nav>
    </NavigationContainer>
  );
};

const NavigationContainer = styled.header`
  background: ${({ theme }) => theme.colors.navigationBackground};
  height: 70px;
  display: flex;
  justify-content: center;
  padding: 0 1.875rem;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;

  @media screen and (min-width: 992px) {
    max-width: 1134px;
  }

  .flex-container {
    display: flex;
    align-items: center;
  }

  .navigation-logo {
    width: 50px;
    margin-right: 3rem;
  }

  .account-button {
    background: ${({ theme }) => theme.colors.primary};
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }

  .account-icon {
    fill: ${({ theme }) => theme.colors.contrastFont};
    width: 20px;
  }
`;

const NavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;

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
`;
