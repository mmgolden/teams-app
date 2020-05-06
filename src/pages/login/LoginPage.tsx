import React from 'react';
import styled from '../../base/styled';
import { Card } from '../../components/Card';
import { LoginForm } from './LoginForm';
import logo from '../../assets/wethos.png';

export const LoginPage: React.FC = () => {
  return (
    <PageContainer>
      <div className="login-container">
        <img src={logo} alt="Wethos logo" className="login-logo" />
        <Card>
          <LoginForm />
        </Card>
      </div>
    </PageContainer>
  );
};

const PageContainer = styled.main`
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
