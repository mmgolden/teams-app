import React from 'react';
import styled from '../base/styled';
import { BaseButton } from './buttons';
import { UserContext } from './UserProvider';
import { useHistory } from 'react-router';
import { clearLocalStorageAuth } from '../base/auth/clearLocalStorageAuth';
import { ROUTES } from '../base/routes';

export const AccountMenu: React.FC = () => {
  const { setUser } = React.useContext(UserContext);
  const history = useHistory();

  const handleLogout = () => {
    clearLocalStorageAuth();
    setUser(undefined);
    history.push(ROUTES.SIGN_IN);
  };

  return (
    <MenuContainer>
      <h2 className="account-menu-heading">Account</h2>
      <BaseButton onClick={handleLogout} className="account-menu-button">
        Sign out
      </BaseButton>
    </MenuContainer>
  );
};

const MenuContainer = styled.div`
  background: ${({ theme }) => theme.colors.cardBackground};
  padding: 1rem 1.5rem;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 8px 0px;
  text-align: center;

  .account-menu-heading {
    color: ${({ theme }) => theme.colors.primaryFont};
    font-size: 1rem;
    margin: 0 0 0.75rem 0;
  }

  .account-menu-button {
    color: ${({ theme }) => theme.colors.subtleFont};
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.colors.primaryFont};
    }
  }
`;
