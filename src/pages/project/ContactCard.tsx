import React from 'react';
import styled from '../../base/styled';
import { Card, CardTitle, EmptyText } from '../../components/cards';
import { Project } from '../../typings/project';

interface Props {
  project: Project;
}

export const ContactCard: React.FC<Props> = ({ project }) => {
  const { contacts } = project;

  // TODO: Add contact information
  return (
    <StyledContactCard>
      <CardTitle>Contact</CardTitle>
      {contacts.length > 0 ? (
        <div>
          {contacts.map((contact) => {
            return <div />;
          })}
        </div>
      ) : (
        <EmptyText>This project has no contacts</EmptyText>
      )}
    </StyledContactCard>
  );
};

const StyledContactCard = styled(Card)`
  margin-bottom: 3rem;
`;
