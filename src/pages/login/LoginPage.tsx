import React from 'react';
import styled from '../../base/styled';
import { Card } from '../../components/Card';
import { LoginForm } from './LoginForm';
import logo from '../../assets/wethos.png';
import { useHistory } from 'react-router';
import { UserContext } from '../../components/UserProvider';
import { login } from '../../base/auth/login';
import { Authentication } from '../../typings/authentication';
import { User } from '../../typings/user';
import { isAccessTokenValid } from '../../base/auth/isAccessTokenValid';

export const LoginPage: React.FC = () => {
  const history = useHistory();
  const { setUser } = React.useContext(UserContext);

  const handleSuccess = React.useCallback(
    (authentication: Authentication, user: User) => {
      login({
        authentication,
        user,
      });
      setUser(user);
      history.push('/home');
    },
    [history, setUser]
  );

  React.useEffect(() => {
    if (isAccessTokenValid()) {
      history.push('/home');
      return;
    }
  }, [history]);

  return (
    <LoginPageContainer>
      <div className="login-container">
        <img src={logo} alt="Wethos logo" className="login-logo" />
        <Card>
          <LoginForm onSuccess={handleSuccess} />
        </Card>
      </div>
    </LoginPageContainer>
  );
};

const LoginPageContainer = styled.main`
  background: ${({ theme }) => theme.colors.pageBackground};
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1.875rem;

  .login-container {
    width: 100%;

    @media screen and (min-width: 767px) {
      max-width: 400px;
    }
  }

  .login-logo {
    display: block;
    width: 180px;
    margin: 0 auto 2rem auto;
  }
`;
