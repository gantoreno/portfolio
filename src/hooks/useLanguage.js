import { useLocalStorage } from './useLocalStorage';

import languages from '../extras/languages.json';

export const useLanguage = () => {
  const [language, setLanguage] = useLocalStorage('language', languages.EN);

  const switchLanguage = () => {
    setLanguage(language === languages.EN ? languages.ES : languages.EN);
  };

  return [language, switchLanguage];
};
