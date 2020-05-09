import React from 'react';
import styled from '../../base/styled';
import { Card, CardTitle, EmptyText } from '../../components/cards';
import { Project } from '../../typings/project';
import { sanitizeUrl } from '@braintree/sanitize-url';

interface Props {
  project: Project;
}

export const LinksCard: React.FC<Props> = ({ project }) => {
  const { links } = project;

  return (
    <StyledLinkCard>
      <CardTitle>Links</CardTitle>
      {links.length > 0 ? (
        <ul className="project-links-list">
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
        <EmptyText>No links have been added yet</EmptyText>
      )}
    </StyledLinkCard>
  );
};

const StyledLinkCard = styled(Card)`
  .project-links-list {
    margin: 0;
    padding: 0;
    list-style: none;

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
