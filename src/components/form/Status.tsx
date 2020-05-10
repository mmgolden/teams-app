import React from 'react';
import styled from '../../base/styled';
import { ReactComponent as CloseIcon } from '../../assets/close.svg';

interface Props {
  status: string;
  close: () => void;
}

/**
 * Status should be used for form server error messages
 */
export const Status: React.FC<Props> = ({ status, close }) => {
  return (
    <StatusContainer onClick={close}>
      <p>{status}</p>
      <CloseIcon />
    </StatusContainer>
  );
};

const StatusContainer = styled.div`
  border: ${({ theme }) => `1px solid ${theme.colors.error}`};
  border-radius: 4px;
  padding: 0.75rem;
  background: ${({ theme }) => theme.colors.errorBackground};
  margin-bottom: 1rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    color: ${({ theme }) => theme.colors.error};
    margin: 0;
  }

  svg {
    fill: ${({ theme }) => theme.colors.error};
    width: 16px;
  }
`;
