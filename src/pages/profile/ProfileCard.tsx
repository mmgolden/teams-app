import React from 'react';
import styled from '../../base/styled';
import { Specialist } from '../../typings/specialist';
import { Card } from '../../components/Card';
import { Divider } from '../../components/Divider';
import { Tags } from '../../components/Tags';
import { SpecialistDetails } from './SpecialistDetails';
import { SpecialistLinks } from './SpecialistLinks';

interface Props {
  specialist: Specialist;
}

// TODO: Get full list of language codes
const getLanguage = (code: string) => {
  switch (code) {
    case 'eng':
      return 'English';
    default:
      throw new Error('Unknown language code passed');
  }
};

export const ProfileCard: React.FC<Props> = ({ specialist }) => {
  const { languages } = specialist;

  const formattedLanguages = languages.map((language) =>
    getLanguage(language.code)
  );

  return (
    <StyledProfileCard>
      <SpecialistDetails specialist={specialist} />
      <div className="profile-spacer">
        <Divider />
      </div>
      <SpecialistLinks specialist={specialist} />
      <div className="profile-spacer">
        <Divider />
      </div>
      <h2 className="profile-heading">Languages</h2>
      {languages.length > 0 ? (
        <Tags tags={formattedLanguages} />
      ) : (
        <p className="empty-text">No languages found</p>
      )}
    </StyledProfileCard>
  );
};

const StyledProfileCard = styled(Card)`
  margin: 0 0 2rem 0;
  padding: 3rem 2rem;
  height: 100%;
  text-align: center;

  @media screen and (min-width: 992px) {
    flex-basis: 400px;
    margin: 0 3rem 0 0;
  }

  .profile-spacer {
    margin: 1.5rem 0;
  }

  .profile-heading {
    color: ${({ theme }) => theme.colors.primaryFont};
    font-weight: 500;
    margin: 0 0 0.75rem 0;
    font-size: 1.25rem;
  }

  .empty-text {
    color: ${({ theme }) => theme.colors.subtleFont};
    font-size: 1rem;
    margin: 0;
  }
`;
