import React from 'react';
import styled from '../../base/styled';
import { Card } from '../../components/Card';
import { Specialist } from '../../typings/specialist';
import DOMPurify from 'dompurify';
import { sanitizeUrl } from '@braintree/sanitize-url';
import { Divider } from '../../components/Divider';

interface Props {
  specialist: Specialist;
}

export const ExperienceCard: React.FC<Props> = ({ specialist }) => {
  const { experience } = specialist;

  return (
    <StyledExperienceCard>
      <h2 className="experience-card-title">Experience</h2>
      {experience.length > 0 ? (
        <>
          {experience.map((exp, index) => {
            const { title, company, description, links } = exp;

            return (
              <React.Fragment key={`${title}-${index}`}>
                <div>
                  <h3 className="experience-title">{title}</h3>
                  {company && <h4 className="experience-company">{company}</h4>}
                  {description && (
                    <p
                      className="experience-description"
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(description),
                      }}
                    />
                  )}
                  {links && links.length > 0 && (
                    <ul className="experience-link-list">
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
                  )}
                </div>
                {index !== experience.length - 1 && (
                  <div className="experience-spacer">
                    <Divider />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </>
      ) : (
        <p className="empty-text">No experience found</p>
      )}
    </StyledExperienceCard>
  );
};

const StyledExperienceCard = styled(Card)`
  .experience-card-title {
    color: ${({ theme }) => theme.colors.primaryFont};
    font-weight: 500;
    margin: 0 0 1.5rem 0;
    font-size: 1.5rem;
  }

  .empty-text {
    color: ${({ theme }) => theme.colors.subtleFont};
    font-size: 1rem;
    margin: 0;
  }

  .experience-title {
    color: ${({ theme }) => theme.colors.primaryFont};
    font-weight: 500;
    margin: 0;
    font-size: 1.25rem;
    line-height: 2rem;
  }

  .experience-company {
    color: ${({ theme }) => theme.colors.subtleFont};
    font-weight: 400;
    margin: 0;
    font-size: 1rem;
    line-height: 1.75rem;
  }

  .experience-description {
    color: ${({ theme }) => theme.colors.primaryFont};
    margin: 0;
    font-size: 0.875rem;
    line-height: 1.5rem;

    ul {
      padding-left: 1.25rem;
    }
  }

  .experience-link-list {
    padding: 0;
    margin: 0;
    list-style: none;

    a {
      color: ${({ theme }) => theme.colors.primary};
      text-decoration: none;
      display: block;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .experience-spacer {
    padding: 2rem 0;
  }
`;
