import { useContext } from 'react';

import { LanguageContext } from '../contexts/language/LanguageContext';

export const useLanguage = () => {
  const { language, switchLanguage } = useContext(LanguageContext);

  return [language, switchLanguage];
};
