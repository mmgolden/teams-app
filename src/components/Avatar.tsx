import React from 'react';
import styled from '../base/styled';
import { ReactComponent as ProfileIcon } from '../assets/profile.svg';
import { sanitizeUrl } from '@braintree/sanitize-url';

interface StyledAvatarProps {
  isSmall?: boolean;
}

interface Props {
  image: string;
  name: string;
  isSmall?: boolean;
}

export const Avatar: React.FC<Props> = ({ image, name, isSmall }) => {
  return (
    <StyledAvatar isSmall={isSmall}>
      {image ? (
        <img src={sanitizeUrl(image)} alt={name} className="avatar-image" />
      ) : (
        <div className="avatar-image-placeholder">
          <ProfileIcon />
        </div>
      )}
    </StyledAvatar>
  );
};

const StyledAvatar = styled.div<StyledAvatarProps>`
  .avatar-image,
  .avatar-image-placeholder {
    width: ${({ isSmall }) => (isSmall ? '60px' : '200px')};
    height: ${({ isSmall }) => (isSmall ? '60px' : '200px')};
    border-radius: 50%;
    margin: 0 auto;
  }

  .avatar-image-placeholder {
    background: ${({ theme }) => theme.colors.placeholderBackground};
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      width: ${({ isSmall }) => (isSmall ? '30px' : '120px')};
      fill: ${({ theme }) => theme.colors.contrastFont};
    }
  }
`;
