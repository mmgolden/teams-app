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

  if (isLoading || !project) {
    return null;
  }

  if (error) {
    return (
      <Layout>
        <ProjectPageContainer>
          <PageError error={error} />
        </ProjectPageContainer>
      </Layout>
    );
  }

  return (
    <Layout>
      <ProjectPageContainer>
        <h1>hello</h1>
      </ProjectPageContainer>
    </Layout>
  );
};

const ProjectPageContainer = styled.div``;
