import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { Wrapper, SocialMediaButtons } from '../../shared';
import { useLanguage, useIndexedContent } from '../../hooks';

import content from './content.json';
import logo from '../../assets/svg/logo.svg';

import './ProfileView.scss';

const Logo = () => {
  return <img src={logo} className="w-10 mb-12" alt="Logo" />;
};

const Header = ({ name, occupation }) => {
  return (
    <div className="hidden text-center xl:block">
      <h1 className="mb-6 text-2xl font-bold">{name}</h1>
      <h3 className="mb-12 text-base text-gray-600">{occupation}</h3>
    </div>
  );
};

const NavigationLinks = ({ links, language }) => {
  return (
    <div className="w-full text-gray-600 xl:mb-12">
      {links.map(link => (
        <NavLink
          id={link.id}
          key={link.id}
          to={link.path}
          activeClassName="text-white"
          exact
        >
          <div className="flex items-center w-full mb-6 text-gray-600 text-left duration-200 hover:text-white navigation-link">
            <div
              className={`w-8 h-8 flex justify-center items-center bg-${link.color}-400 rounded`}
            >
              <i className={`${link.icon} text-white`}></i>
            </div>
            <span className="hidden ml-6 font-medium xl:block link-name">
              {link.name[language]}
            </span>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

const ProfileView = () => {
  const indexedContent = useIndexedContent(content);
  const [language] = useLanguage();

  useEffect(() => {
    console.log(language);
  }, [language]);

  return (
    <Wrapper className="flex flex-col items-center justify-center h-full p-6 bg-gray-800 border-r border-gray-700 xl:w-2/5 xl:p-24 overflow-hidden overflow-y-hidden profile-view">
      <Logo />
      <Header
        name={indexedContent.name}
        occupation={indexedContent.occupation[language]}
      />
      <NavigationLinks links={indexedContent.links} language={language} />
      <SocialMediaButtons className="hidden xl:flex" />
    </Wrapper>
  );
};

export default ProfileView;
