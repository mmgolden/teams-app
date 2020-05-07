import React from 'react';
import styled from '../../base/styled';
import { Card } from '../../components/Card';
import { Specialist } from '../../typings/specialist';

interface Props {
  specialist: Specialist;
}

export const ExperienceCard: React.FC<Props> = ({ specialist }) => {
  const { experience } = specialist;

  return (
    <StyledExperienceCard>
      <h2 className="experience-title">Experience</h2>
      {experience.length > 0 ? (
        <>
          {experience.map((exp, index) => {
            return (
              <div key={`${exp.title}-${index}`}>
                <h3>{exp.title}</h3>
                {exp.company && <h4>{exp.company}</h4>}
                {exp.description && (
                  <p dangerouslySetInnerHTML={{ __html: exp.description }} />
                )}
                {exp.links && exp.links.length > 0 && (
                  <ul>
                    {exp.links.map((link) => {
                      return (
                        <li key={link.url}>
                          <a href={link.url}>{link.title}</a>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            );
          })}
        </>
      ) : (
        <p className="empty-text">
          It looks like you don't have any experience yet. Get out there and
          show your stuff!
        </p>
      )}
    </StyledExperienceCard>
  );
};

const StyledExperienceCard = styled(Card)`
  .experience-title {
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
