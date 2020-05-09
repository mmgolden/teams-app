import React from 'react';
import styled from '../../base/styled';
import { Card } from '../../components/cards';
import { Project } from '../../typings/project';
import { Divider } from '../../components/Divider';

interface Props {
  project: Project;
}

export const ProjectDetailsCard: React.FC<Props> = ({ project }) => {
  const {
    name,
    organization: { name: organizationName },
    slug,
    description,
    statement_of_purpose,
  } = project;

  return (
    <StyledProjectDetailsCard>
      <h1 className="project-name">{name}</h1>
      {organizationName && (
        <h2 className="project-organization-name">{organizationName}</h2>
      )}
      {(slug || description || statement_of_purpose) && (
        <div className="project-spacer">
          <Divider />
        </div>
      )}
      {slug && (
        <>
          <h3 className="project-details-heading">Slug</h3>
          <p className="project-details-text">{slug}</p>
        </>
      )}
      {description && (
        <>
          <h3 className="project-details-heading">Description</h3>
          <p className="project-details-text">{description}</p>
        </>
      )}
      {statement_of_purpose && (
        <>
          <h3 className="project-details-heading">Statement of Purpose</h3>
          <p className="project-details-text">{statement_of_purpose}</p>
        </>
      )}
    </StyledProjectDetailsCard>
  );
};

const StyledProjectDetailsCard = styled(Card)`
  height: 100%;
  margin: 0 0 3rem 0;

  @media screen and (min-width: 992px) {
    flex-basis: 400px;
    margin: 0 3rem 0 0;
  }

  .project-name {
    color: ${({ theme }) => theme.colors.primaryFont};
    font-size: 1.75rem;
    line-height: 2.25rem;
    margin: 0 0 0.75rem 0;
  }

  .project-organization-name {
    color: ${({ theme }) => theme.colors.primaryFont};
    font-size: 1.25rem;
    line-height: 1.75rem;
    margin: 0;
  }

  .project-spacer {
    margin: 1.5rem 0;
  }

  .project-details-heading {
    color: ${({ theme }) => theme.colors.primaryFont};
    font-size: 1rem;
    line-height: 1.5rem;
    margin: 0 0 0.75rem 0;
  }

  .project-details-text {
    color: ${({ theme }) => theme.colors.primaryFont};
    font-size: 0.875rem;
    line-height: 1.25rem;
    margin: 0 0 0.75rem 0;
  }
`;
