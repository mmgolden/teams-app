import React from 'react';
import styled from '../../base/styled';
import { Specialist } from '../../typings/specialist';
import { Card, CardTitle, EmptyText } from '../../components/card';

interface Props {
  specialist: Specialist;
}

export const CausesCard: React.FC<Props> = ({ specialist }) => {
  const { causes } = specialist;

  return (
    <StyledCausesCard>
      <CardTitle>Causes</CardTitle>
      {causes.length > 0 ? (
        <div>
          {causes.map((cause) => {
            return (
              <div key={cause.id}>
                <h3 className="cause-name">{cause.name}</h3>
              </div>
            );
          })}
        </div>
      ) : (
        <EmptyText>No causes found</EmptyText>
      )}
    </StyledCausesCard>
  );
};

const StyledCausesCard = styled(Card)`
  .cause-name {
    color: ${({ theme }) => theme.colors.primaryFont};
    font-weight: 500;
    margin: 0 0 1rem 0;
    font-size: 1rem;
    line-height: 1.75rem;
  }
`;
