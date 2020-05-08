import React from 'react';
import styled from '../base/styled';
import { Link } from 'react-router-dom';
import { ROUTES } from '../base/routes';
import logo from '../assets/wethos.png';
import { useHistory } from 'react-router-dom';

export const Navigation: React.FC = () => {
  const history = useHistory();
  const {
    location: { pathname },
  } = history;

  return (
    <NavigationContainer>
      <div className="navigation-container">
        <img src={logo} alt="Wethos logo" className="navigation-logo" />
        <nav>
          <NavList>
            <li>
              <Link
                to={ROUTES.HOME}
                className={
                  pathname === ROUTES.HOME
                    ? 'active-navigation-link'
                    : undefined
                }
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={ROUTES.PROJECTS}
                className={
                  pathname === ROUTES.PROJECTS
                    ? 'active-navigation-link'
                    : undefined
                }
              >
                Projects
              </Link>
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

  .active-navigation-link {
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
