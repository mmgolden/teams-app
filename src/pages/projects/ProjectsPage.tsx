import React from 'react';
import styled from '../../base/styled';
import { Link } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import axios from 'axios';
import {
  ACCESS_TOKEN_KEY,
  TOKEN_TYPE,
  ERROR_MESSAGES,
} from '../../base/constants';
import { Project } from '../../typings/project';
import { PageError } from '../../components/PageError';
import { Card } from '../../components/cards';
import { ROUTES } from '../../base/routes';

export const ProjectsPage: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | undefined>(undefined);
  const [projects, setProjects] = React.useState<Project[] | undefined>(
    undefined
  );

  React.useEffect(() => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
    const tokenType = localStorage.getItem(TOKEN_TYPE);

    if (!accessToken || !tokenType) {
      setError(ERROR_MESSAGES.GENERIC);
      return;
    }

    axios
      .get(`${process.env.REACT_APP_API_URL}/currentspecialist`, {
        headers: {
          Authorization: `${tokenType} ${accessToken}`,
          'X-Requested-With': 'XMLHttpRequest',
        },
      })
      .then((res) => {
        setProjects(res.data.data.projects);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(ERROR_MESSAGES.GENERIC);
        setIsLoading(false);
      });
  }, []);

  if (isLoading || !projects) {
    return null;
  }

  if (error) {
    return (
      <Layout>
        <ProjectsPageContainer>
          <PageError error={error} />
        </ProjectsPageContainer>
      </Layout>
    );
  }

  return (
    <Layout>
      <ProjectsPageContainer>
        {projects.length > 0 &&
          projects.map((project) => {
            return (
              <Link
                to={`${ROUTES.PROJECTS}/${project.id}`}
                key={project.id}
                className="project-link"
              >
                <ProjectCard>
                  <h2 className="project-name">{project.name}</h2>
                </ProjectCard>
              </Link>
            );
          })}
      </ProjectsPageContainer>
    </Layout>
  );
};

const ProjectsPageContainer = styled.div`
  padding: 2rem 0;
  display: grid;
  grid-row-gap: 1rem;

  @media screen and (min-width: 767px) {
    grid-column-gap: 1rem;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }

  .project-link {
    text-decoration: none;
  }
`;

const ProjectCard = styled(Card)`
  .project-name {
    color: ${({ theme }) => theme.colors.primaryFont};
    font-weight: 500;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2.25rem;
    text-align: center;
  }
`;
