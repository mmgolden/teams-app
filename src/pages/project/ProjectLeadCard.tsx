import React from 'react';
import styled from '../../base/styled';
import { Card, CardTitle } from '../../components/cards';
import { Project } from '../../typings/project';

interface Props {
  project: Project;
}

export const ProjectLeadCard: React.FC<Props> = ({ project }) => {
  const {
    teamlead: { first_name, last_name, email },
  } = project;

  return (
    <StyledProjectLeadCard>
      <CardTitle>Team Lead</CardTitle>
      <h3 className="project-lead-name">{`${first_name} ${last_name}`}</h3>
      <p className="project-lead-email">{email}</p>
    </StyledProjectLeadCard>
  );
};

const StyledProjectLeadCard = styled(Card)`
  margin-bottom: 3rem;

  .project-lead-name {
    color: ${({ theme }) => theme.colors.primaryFont};
    font-size: 1rem;
    line-height: 1.5rem;
    margin: 0 0 0.5rem 0;
  }

  .project-lead-email {
    color: ${({ theme }) => theme.colors.primaryFont};
    font-size: 0.875rem;
    line-height: 1.25rem;
    margin: 0;
  }
`;
