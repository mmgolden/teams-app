import React from 'react';
import styled from '../../base/styled';
import { Specialist } from '../../typings/specialist';
import { Card } from '../../components/Card';
import dayjs from 'dayjs';
import { sanitizeUrl } from '@braintree/sanitize-url';
import { Divider } from '../../components/Divider';
import { Tags } from '../../components/Tags';

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
  const {
    profile_image,
    links,
    user: { created_at, first_name, last_name },
    languages,
  } = specialist;

  const formattedLanguages = languages.map((language) =>
    getLanguage(language.code)
  );

  const formattedCreatedAt = dayjs(created_at).format('MMMM D, YYYY');

  return (
    <StyledProfileCard>
      {profile_image ? (
        <img
          src={sanitizeUrl(profile_image)}
          alt={`${first_name} ${last_name}`}
          className="profile-image"
        />
      ) : (
        <div className="profile-image-placeholder" />
      )}
      <h1 className="profile-title">{`${first_name} ${last_name}`}</h1>
      <p className="profile-created-at">{`Member since ${formattedCreatedAt}`}</p>
      <h2 className="profile-section-title">Social Links</h2>
      {links.length > 0 ? (
        <ul className="social-links-list">
          {links.map((link) => {
            return (
              <li key={link.title}>
                <a
                  href={sanitizeUrl(link.url)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.title}
                </a>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="empty-text">No social links found</p>
      )}
      <div className="profile-spacer">
        <Divider />
      </div>
      <h2 className="profile-section-title">Languages</h2>
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
    margin: 2rem 0;
  }

  .empty-text {
    color: ${({ theme }) => theme.colors.subtleFont};
    font-size: 1rem;
    margin: 0;
  }

  .profile-image,
  .profile-image-placeholder {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin: 0 auto;
  }

  .profile-image-placeholder {
    background: ${({ theme }) => theme.colors.placeholderBackground};
  }

  .profile-title {
    color: ${({ theme }) => theme.colors.primaryFont};
    font-size: 2rem;
    margin: 1.5rem 0 0.75rem 0;
  }

  .profile-created-at {
    color: ${({ theme }) => theme.colors.primaryFont};
    font-size: 1rem;
    margin: 0 0 1.5rem 0;
  }

  .profile-section-title {
    color: ${({ theme }) => theme.colors.primaryFont};
    font-weight: 500;
    margin: 0 0 0.75rem 0;
    font-size: 1.25rem;
  }

  .social-links-list {
    margin: 0;
    padding: 0;
    list-style: none;
    text-align: center;

    a {
      display: block;
      color: ${({ theme }) => theme.colors.primary};
      padding: 0.25rem 0;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
