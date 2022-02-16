import { LanguageContext } from '../contexts/language/LanguageContext';

import { useLocalStorage } from '../hooks';

import languages from '../extras/languages.json';

const LanguageWrapper = ({ children }) => {
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

export const withLanguage = Component => {
  return () => (
    <LanguageWrapper>
      <Component />
    </LanguageWrapper>
  );
};
