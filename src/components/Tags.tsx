import React from 'react';
import styled from '../base/styled';

interface Props {
  tags: string[];
}

export const Tags: React.FC<Props> = ({ tags }) => {
  return (
    <TagList>
      {tags.map((tag) => {
        return (
          <li key={tag}>
            <span>{tag}</span>
          </li>
        );
      })}
    </TagList>
  );
};

const TagList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  text-align: center;

  li {
    display: inline-flex;
    background: ${({ theme }) => theme.colors.pageBackground};
    padding: 0.5rem 0.75rem;
    border-radius: 4px;
    margin: 0.25rem;

    span {
      color: ${({ theme }) => theme.colors.primaryFont};
      font-size: 0.875rem;
    }
  }
`;
