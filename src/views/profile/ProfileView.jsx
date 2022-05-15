import { NavLink } from 'react-router-dom';

import { Wrapper, SocialMediaButtons } from '../../shared';
import { useLanguage } from '../../hooks';

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
      {links.map((link, id) => (
        <NavLink
          id={id}
          key={id}
          to={link.path}
          className="font-medium"
          activeClassName="text-white font-bold"
          exact
        >
          <div className="flex items-center w-full mb-6 text-left duration-200 hover:text-white navigation-link">
            <div
              className={`w-8 h-8 flex justify-center items-center bg-${link.color}-400 rounded`}
            >
              <i className={`${link.icon} text-white`}></i>
            </div>
            <span className="hidden ml-6 xl:block link-name">
              {link.name[language]}
            </span>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

const ProfileView = () => {
  const [language] = useLanguage();

  return (
    <Wrapper className="flex flex-col items-center justify-center h-full p-6 bg-gray-800 border-r border-gray-700 xl:w-2/5 xl:p-24 overflow-hidden overflow-y-hidden profile-view">
      <Logo />
      <Header name={content.name} occupation={content.occupation[language]} />
      <NavigationLinks links={content.links} language={language} />
      <SocialMediaButtons className="hidden xl:flex" />
    </Wrapper>
  );
};

export default ProfileView;
