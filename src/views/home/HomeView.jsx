import parse from 'html-react-parser';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import { Button, Wrapper } from '../../shared/';
import { useLanguage } from '../../hooks/';

import content from './content.json';
import languages from '../../extras/languages.json';

import './HomeView.scss';

const LanguageSwitcher = ({ language, switchLanguage }) => {
  return (
    <Button
      text={
        language === languages.EN
          ? `Cambiar a versión en español`
          : `Switch to english version`
      }
      leftIcon={'fas fa-globe-americas'}
      className={'block px-0'}
      onClick={() => switchLanguage()}
    />
  );
};

const CallToAction = ({ route, text, color }) => {
  return (
    <Link to={route} className="mb-6">
      <Button
        text={text}
        rightIcon={'fas fa-arrow-right'}
        hoverBackground={'green-400'}
        opaque
      />
    </Link>
  );
};

const Header = ({
  title,
  subtitle,
  callToAction,
  language,
  switchLanguage,
}) => {
  return (
    <div className="flex flex-col items-center justify-center w-full text-center h-1/2 xl:h-full xl:w-1/2 xl:text-left xl:mr-12 xl:flex xl:flex-col xl:items-start xl:justify-center">
      <h1 className="mb-6 text-3xl font-bold sm:text-4xl">{title}</h1>
      <h2 className="mb-6 text-lg text-gray-600 sm:text-xl">{subtitle}</h2>
      <CallToAction route={callToAction.route} text={callToAction[language]} />
      <LanguageSwitcher language={language} switchLanguage={switchLanguage} />
    </div>
  );
};

const Avatar = () => {
  return (
    <div className="flex items-center justify-center mb-6 text-center xl:h-full xl:w-1/2 xl:text-right xl:mb-0 xl:ml-12 xl:flex xl:flex-col md:items-start md:justify-center">
      <img
        className="w-64 h-64 mx-auto border border-gray-700 rounded-full xl:w-64 xl:h-64"
        src="/assets/img/profile.png"
        alt="Avatar"
      />
    </div>
  );
};

const HomeView = () => {
  const [language, switchLanguage] = useLanguage();

  return (
    <Wrapper className="items-start justify-center p-6 sm:p-24">
      <Helmet>
        <title>{parse(content.windowTitle[language])}</title>
      </Helmet>
      <div className="flex flex-col-reverse w-full h-full xl:flex-row">
        <Header
          title={parse(content.title[language])}
          subtitle={parse(content.subtitle[language])}
          language={language}
          switchLanguage={switchLanguage}
          callToAction={content.callToAction}
        />
        <Avatar />
      </div>
    </Wrapper>
  );
};

export default HomeView;
