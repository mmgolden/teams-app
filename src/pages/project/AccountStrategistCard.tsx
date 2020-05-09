import React from 'react';
import styled from '../../base/styled';
import { Card, CardTitle } from '../../components/cards';
import { Project } from '../../typings/project';

interface Props {
  project: Project;
}

export const AccountStrategistCard: React.FC<Props> = ({ project }) => {
  const {
    accountstrategist: { first_name, last_name, email },
  } = project;

  return (
    <StyledAccountStrategistCard>
      <CardTitle>Account Strategist</CardTitle>
      <h3 className="account-strategist-name">{`${first_name} ${last_name}`}</h3>
      <p className="account-strategist-email">{email}</p>
    </StyledAccountStrategistCard>
  );
};

const StyledAccountStrategistCard = styled(Card)`
  margin-bottom: 3rem;

  .account-strategist-name {
    color: ${({ theme }) => theme.colors.primaryFont};
    font-size: 1rem;
    line-height: 1.5rem;
    margin: 0 0 0.5rem 0;
  }

  .account-strategist-email {
    color: ${({ theme }) => theme.colors.primaryFont};
    font-size: 0.875rem;
    line-height: 1.25rem;
    margin: 0;
  }
`;
