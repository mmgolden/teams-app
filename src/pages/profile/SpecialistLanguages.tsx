import React from 'react';
import { Specialist } from '../../typings/specialist';
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

export const SpecialistLanguages: React.FC<Props> = ({ specialist }) => {
  const { languages } = specialist;

  if (languages.length === 0) {
    return null;
  }

  const formattedLanguages = languages.map((language) =>
    getLanguage(language.code)
  );

  return (
    <>
      <h2 className="profile-heading">Languages</h2>
      {languages.length > 0 && <Tags tags={formattedLanguages} />}
    </>
  );
};
