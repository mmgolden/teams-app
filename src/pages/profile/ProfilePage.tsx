import React from 'react';
import styled from '../../base/styled';
import { Layout } from '../../components/Layout';
import axios from 'axios';
import {
  ACCESS_TOKEN_KEY,
  TOKEN_TYPE,
  ERROR_MESSAGES,
} from '../../base/constants';
import { Specialist } from '../../typings/specialist';
import { PageError } from '../../components/PageError';
import { ProfileCard } from './ProfileCard';
import { ExperienceCard } from './ExperienceCard';
import { DeliverablesCard } from './DeliverablesCard';

export const ProfilePage: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | undefined>(undefined);
  const [specialist, setSpecialist] = React.useState<Specialist | undefined>(
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
        setSpecialist(res.data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(ERROR_MESSAGES.GENERIC);
        setIsLoading(false);
      });
  }, []);

  if (isLoading || !specialist) {
    return null;
  }

  if (error) {
    return (
      <Layout>
        <ProfilePageContainer>
          <PageError error={error} />
        </ProfilePageContainer>
      </Layout>
    );
  }

  return (
    <Layout>
      <ProfilePageContainer>
        <ProfileCard specialist={specialist} />
        <div className="profile-column">
          <ExperienceCard specialist={specialist} />
          <DeliverablesCard specialist={specialist} />
        </div>
      </ProfilePageContainer>
    </Layout>
  );
};

const ProfilePageContainer = styled.div`
  padding: 2rem 0;

  @media screen and (min-width: 992px) {
    display: flex;
  }

  .profile-column {
    @media screen and (min-width: 992px) {
      flex: 1;
    }
  }
`;
