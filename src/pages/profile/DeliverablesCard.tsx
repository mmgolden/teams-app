import React from 'react';
import styled from '../../base/styled';
import { Specialist } from '../../typings/specialist';
import { Card, CardTitle, EmptyText } from '../../components/card';

interface Props {
  specialist: Specialist;
}

export const DeliverablesCard: React.FC<Props> = ({ specialist }) => {
  const { deliverables } = specialist;

  return (
    <StyledDeliverablesCard>
      <CardTitle>Deliverables</CardTitle>
      {deliverables.length > 0 ? (
        <div className="deliverables-container">
          {deliverables.map((deliverable) => {
            return (
              <div className="deliverable-container" key={deliverable.id}>
                <h3 className="deliverable-name">{deliverable.name}</h3>
              </div>
            );
          })}
        </div>
      ) : (
        <EmptyText>No deliverables found</EmptyText>
      )}
    </StyledDeliverablesCard>
  );
};

const StyledDeliverablesCard = styled(Card)`
  margin-bottom: 3rem;

  .deliverables-container {
    display: grid;
    grid-row-gap: 1rem;

    @media screen and (min-width: 767px) {
      grid-column-gap: 1rem;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: auto;
    }
  }

  .deliverable-container {
    border: ${({ theme }) => `1px solid ${theme.colors.dividerBackground}`};
    border-radius: 4px;
    padding: 0.75rem;
  }

  .deliverable-name {
    color: ${({ theme }) => theme.colors.primaryFont};
    font-weight: 500;
    margin: 0;
    font-size: 1rem;
    line-height: 1.75rem;
  }
`;
