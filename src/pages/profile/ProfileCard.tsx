import React from 'react';
import styled from '../../base/styled';
import { Specialist } from '../../typings/specialist';
import { Card } from '../../components/cards';
import { Divider } from '../../components/Divider';
import { SpecialistDetails } from './SpecialistDetails';
import { SpecialistLanguages } from './SpecialistLanguages';
import { SpecialistLinks } from './SpecialistLinks';

interface Props {
  specialist: Specialist;
}

export const ProfileCard: React.FC<Props> = ({ specialist }) => {
  const { links, languages } = specialist;

  console.log(specialist);

  return (
    <StyledProfileCard>
      <SpecialistDetails specialist={specialist} />
      {(links.length > 0 || languages.length > 0) && (
        <div className="profile-spacer">
          <Divider />
        </div>
      )}
      <SpecialistLinks specialist={specialist} />
      <SpecialistLanguages specialist={specialist} />
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
`;
