import { NavLink } from 'react-router-dom';
import { SocialMediaButtons } from '../../shared';

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
          <div className="flex items-center w-full mb-6 text-base text-left duration-200 hover:text-white">
            <div
              className={`w-8 h-8 flex justify-center items-center bg-${link.color}-400 rounded`}
            >
              <i className={`${link.icon} text-white`}></i>
            </div>
            <span className="hidden ml-6 font-medium xl:block">
              {link.name[language]}
            </span>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

const ProfileView = ({ language }) => {
  return (
    <div className="flex flex-col items-center justify-center w-20 h-full p-6 bg-gray-900 border-r-2 border-gray-800 xl:w-2/5 xl:p-24">
      <Logo />
      <Header name={content.name} occupation={content.occupation[language]} />
      <NavigationLinks links={content.links} language={language} />
      <SocialMediaButtons className={'hidden xl:flex'} />
    </div>
  );
};

export default ProfileView;
