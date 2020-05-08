import React from 'react';
import styled from '../../base/styled';
import { Specialist } from '../../typings/specialist';
import { sanitizeUrl } from '@braintree/sanitize-url';
import { Divider } from '../../components/Divider';

interface Props {
  specialist: Specialist;
}

export const SpecialistLinks: React.FC<Props> = ({ specialist }) => {
  const { links } = specialist;

  if (links.length === 0) {
    return null;
  }

  return (
    <LinksContainer>
      <h2 className="social-links-heading">Social Links</h2>
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
      <div className="profile-spacer">
        <Divider />
      </div>
    </LinksContainer>
  );
};

const LinksContainer = styled.div`
  .social-links-heading {
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

  .profile-spacer {
    margin: 1.5rem 0;
  }
`;
