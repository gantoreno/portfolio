import { LanguageContext } from '../contexts/language/LanguageContext';

import { useLocalStorage } from '../hooks';

import languages from '../extras/languages.json';

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useLocalStorage('language', languages.EN);

  const switchLanguage = () => {
    setLanguage(language === languages.EN ? languages.ES : languages.EN);
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
