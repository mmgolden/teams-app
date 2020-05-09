import React from 'react';
import styled from '../../base/styled';
import { Card, CardTitle, EmptyText } from '../../components/cards';
import { Project } from '../../typings/project';
import { Avatar } from '../../components/Avatar';

interface Props {
  project: Project;
}

export const SpecialistsCard: React.FC<Props> = ({ project }) => {
  const { specialists } = project;

  return (
    <StyledSpecialistsCard>
      <CardTitle>Specialists</CardTitle>
      {specialists.length > 0 ? (
        <div>
          {specialists.map((specialist) => {
            const {
              id,
              user: { first_name, last_name },
              profile_image,
            } = specialist;

            const name = `${first_name} ${last_name}`;

            return (
              <div key={id} className="specialist-container">
                <Avatar image={profile_image} name={name} isSmall />
                <h3 className="specialist-name">{name}</h3>
              </div>
            );
          })}
        </div>
      ) : (
        <EmptyText>No specialists found</EmptyText>
      )}
    </StyledSpecialistsCard>
  );
};

const StyledSpecialistsCard = styled(Card)`
  margin-bottom: 3rem;

  .specialist-container {
    display: flex;
    align-items: center;
  }

  .specialist-name {
    color: ${({ theme }) => theme.colors.primaryFont};
    font-size: 1rem;
    line-height: 1.5rem;
    margin: 0 0 0 1rem;
  }
`;
