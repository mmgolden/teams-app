import React from 'react';
import { Specialist } from '../../typings/specialist';
import { Tags } from '../../components/Tags';

interface Props {
  specialist: Specialist;
}

const getLanguage = (code: string) => {
  switch (code) {
    case 'eng':
      return 'English';
    case 'spa':
      return 'Spanish';
    case 'chi':
      return 'Chinese';
    case 'tgl':
      return 'Tagalog';
    case 'vie':
      return 'Vietnamese';
    case 'ara':
      return 'Arabic';
    case 'por':
      return 'Portuguese';
    case 'kor':
      return 'Korean';
    case 'rus':
      return 'Russian';
    case 'ger':
      return 'German';
    case 'hat':
      return 'Haitian Creole';
    case 'hin':
      return 'Hindi';
    case 'fre':
      return 'French';
    case 'ita':
      return 'Italian';
    case 'pol':
      return 'Polish';
    case 'urd':
      return 'Urdu';
    case 'jpn':
      return 'Japanese';
    case 'per':
      return 'Persian';
    case 'tel':
      return 'Telugu';
    case 'guj':
      return 'Gujarati';
    case 'ben':
      return 'Bengali';
    case 'tai':
      return 'Tai';
    case 'gre':
      return 'Greek';
    case 'pan':
      return 'Punjabi';
    case 'tam':
      return 'Tamil';
    case 'arm':
      return 'Armenian';
    case 'bos':
      return 'Bosnian';
    case 'hrv':
      return 'Croatian';
    case 'cnr':
      return 'Montenegrin';
    case 'srp':
      return 'Serbian';
    case 'heb':
      return 'Hebrew';
    case 'hmn':
      return 'Hmong';
    case 'bnt':
      return 'Bantu';
    case 'swa':
      return 'Swahili';
    case 'khm':
      return 'Khmer';
    case 'nav':
      return 'Navajo';
    default:
      throw new Error('Unknown language code passed');
  }
};

const getProficiency = (level: number) => {
  switch (level) {
    case 1:
      return 'Elementary proficiency';
    case 2:
      return 'Limited working proficiency';
    case 3:
      return 'Professional working proficiency';
    case 4:
      return 'Full professional proficiency';
    case 5:
      return 'Native or bilingual proficiency ';
    default:
      throw new Error('Unknown language level passed');
  }
};

export const SpecialistLanguages: React.FC<Props> = ({ specialist }) => {
  const { languages } = specialist;

  if (languages.length === 0) {
    return null;
  }

  const formattedLanguages = languages.map((language) => {
    if (language.level) {
      return `${getLanguage(language.code)} - ${getProficiency(
        language.level
      )}`;
    }

    return getLanguage(language.code);
  });

  return (
    <>
      <h2 className="profile-heading">Languages</h2>
      {languages.length > 0 && <Tags tags={formattedLanguages} />}
    </>
  );
};
