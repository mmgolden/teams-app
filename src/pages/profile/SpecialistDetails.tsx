import React from 'react';
import styled from '../../base/styled';
import { sanitizeUrl } from '@braintree/sanitize-url';
import dayjs from 'dayjs';
import { Specialist } from '../../typings/specialist';
import DOMPurify from 'dompurify';

interface Props {
  specialist: Specialist;
}

export const SpecialistDetails: React.FC<Props> = ({
  specialist: {
    profile_image,
    user: { first_name, last_name, created_at },
    title,
    description,
  },
}) => {
  const formattedCreatedAt = dayjs(created_at).format('MMMM D, YYYY');

  // TODO: Add city information
  return (
    <DetailsContainer>
      {profile_image ? (
        <img
          src={sanitizeUrl(profile_image)}
          alt={`${first_name} ${last_name}`}
          className="specialist-image"
        />
      ) : (
        <div className="specialist-image-placeholder" />
      )}
      <h1 className="specialist-name">{`${first_name} ${last_name}`}</h1>
      <p className="specialist-text">{`Member since ${formattedCreatedAt}`}</p>
      {title && (
        <>
          <h2 className="specialist-heading">Title</h2>
          <p className="specialist-text">{title}</p>
        </>
      )}
      {description && (
        <>
          <h2 className="specialist-heading">Description</h2>
          <p
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
  .specialist-image,
  .specialist-image-placeholder {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin: 0 auto;
  }

  .specialist-image-placeholder {
    background: ${({ theme }) => theme.colors.placeholderBackground};
  }

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
  }
`;
