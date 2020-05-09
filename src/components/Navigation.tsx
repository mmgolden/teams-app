import React from 'react';
import styled from '../base/styled';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../base/routes';
import logo from '../assets/wethos.png';

export const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <div className="navigation-container">
        <img src={logo} alt="Wethos logo" className="navigation-logo" />
        <nav>
          <NavList>
            <li>
              <NavLink to={ROUTES.HOME}>Home</NavLink>
            </li>
            <li>
              <NavLink to={ROUTES.PROJECTS}>Projects</NavLink>
            </li>
          </NavList>
        </nav>
      </div>
    </NavigationContainer>
  );
};

const NavigationContainer = styled.header`
  background: ${({ theme }) => theme.colors.navigationBackground};
  height: 70px;
  display: flex;
  justify-content: center;
  padding: 0 1.875rem;

  .navigation-container {
    display: flex;
    align-items: center;
    width: 100%;

    @media screen and (min-width: 992px) {
      max-width: 1134px;
    }
  }

  .navigation-logo {
    width: 50px;
    margin-right: 3rem;
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
