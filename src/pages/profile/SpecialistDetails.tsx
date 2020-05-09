import React from 'react';
import styled from '../../base/styled';
import dayjs from 'dayjs';
import { Specialist } from '../../typings/specialist';
import DOMPurify from 'dompurify';
import { Avatar } from '../../components/Avatar';

interface Props {
  specialist: Specialist;
}

export const SpecialistDetails: React.FC<Props> = ({
  specialist: {
    profile_image,
    user: { first_name, last_name, created_at },
    title,
    description,
    city,
  },
}) => {
  const formattedCreatedAt = dayjs(created_at).format('MMMM D, YYYY');

  const name = `${first_name} ${last_name}`;

  return (
    <DetailsContainer>
      <Avatar image={profile_image} name={name} />
      <h1 className="specialist-name">{name}</h1>
      <p className="specialist-text">{`Member since ${formattedCreatedAt}`}</p>
      {title && (
        <>
          <h2 className="specialist-heading">Title</h2>
          <p className="specialist-text">{title}</p>
        </>
      )}
      {city && (
        <>
          <h2 className="specialist-heading">Location</h2>
          <p className="specialist-text">{`${city.name}, ${city.region.name}`}</p>
        </>
      )}
      {description && (
        <>
          <h2 className="specialist-heading">Description</h2>
          <div
            className="specialist-description"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(description),
            }}
          />
        </>
      )}
    </DetailsContainer>
  );
};

const DetailsContainer = styled.div`
  .specialist-name {
    color: ${({ theme }) => theme.colors.primaryFont};
    font-size: 2rem;
    margin: 1.5rem 0 0.75rem 0;
  }

  .specialist-text {
    color: ${({ theme }) => theme.colors.primaryFont};
    font-size: 1rem;
    margin: 0 0 1.5rem 0;
  }

  .specialist-heading {
    color: ${({ theme }) => theme.colors.primaryFont};
    font-weight: 500;
    margin: 0 0 0.75rem 0;
    font-size: 1.25rem;
  }

  .specialist-description {
    color: ${({ theme }) => theme.colors.primaryFont};
    margin: 0;
    font-size: 0.875rem;
    line-height: 1.5rem;
    text-align: left;

    a {
      color: ${({ theme }) => theme.colors.primary};
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
