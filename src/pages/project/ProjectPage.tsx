import React from 'react';
import styled from '../../base/styled';
import { Layout } from '../../components/Layout';
import { useParams } from 'react-router';
import { Project } from '../../typings/project';
import { PageError } from '../../components/PageError';
import axios from 'axios';
import {
  ACCESS_TOKEN_KEY,
  TOKEN_TYPE,
  ERROR_MESSAGES,
} from '../../base/constants';
import { ProjectDetailsCard } from './ProjectDetailsCard';
import { ContactCard } from './ContactCard';
import { ProjectLeadCard } from './ProjectLeadCard';
import { AccountStrategistCard } from './AccountStrategistCard';
import { SpecialistsCard } from './SpecialistsCard';
import { LinksCard } from './LinksCard';
import { PageLoader } from '../../components/PageLoader';

export const ProjectPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();

  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | undefined>(undefined);
  const [project, setProject] = React.useState<Project | undefined>(undefined);

  React.useEffect(() => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
    const tokenType = localStorage.getItem(TOKEN_TYPE);

    if (!accessToken || !tokenType) {
      setError(ERROR_MESSAGES.GENERIC);
      return;
    }

    // Get the project data from the API
    axios
      .get(`${process.env.REACT_APP_API_URL}/projects/${projectId}`, {
        headers: {
          Authorization: `${tokenType} ${accessToken}`,
          'X-Requested-With': 'XMLHttpRequest',
        },
      })
      .then((res) => {
        setProject(res.data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(ERROR_MESSAGES.GENERIC);
        setIsLoading(false);
      });
  }, [projectId]);

  if (isLoading) {
    return (
      <Layout>
        <PageLoader />
      </Layout>
    );
  }

  if (error || !project) {
    return (
      <Layout>
        <PageError error={error || ERROR_MESSAGES.GENERIC} />
      </Layout>
    );
  }

  return (
    <Layout>
      <ProjectPageContainer>
        <ProjectDetailsCard project={project} />
        <div className="project-column">
          <ContactCard project={project} />
          <ProjectLeadCard project={project} />
          <AccountStrategistCard project={project} />
          <SpecialistsCard project={project} />
          <LinksCard project={project} />
        </div>
      </ProjectPageContainer>
    </Layout>
  );
};

const ProjectPageContainer = styled.div`
  padding: 2rem 0;

  @media screen and (min-width: 992px) {
    display: flex;
  }

  .project-column {
    @media screen and (min-width: 992px) {
      flex: 1;
    }
  }
`;
