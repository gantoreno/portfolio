import { NavLink } from 'react-router-dom';

import { SocialMediaButtons } from '../../shared';

import logo from '../../assets/svg/logo.svg';
import content from './content.json';

import './ProfileView.scss';

const Logo = () => {
  return <img src={logo} className="w-10 mb-12" alt="Logo" />;
};

const Header = ({ name, occupation }) => {
  return (
    <div className="hidden xl:block text-center">
      <h1 className="mb-6 text-2xl font-bold">{name}</h1>
      <h3 className="mb-12 text-base text-gray-600">{occupation}</h3>
    </div>
  );
};

const LinksList = ({ links, language }) => {
  return (
    <div className="w-full xl:mb-12 text-gray-600">
      {links.map(link => (
        <NavLink exact to={link.path} activeClassName="text-white">
          <div className="w-full mb-6 flex items-center text-base text-left hover:text-white duration-200">
            <div
              className={`w-8 h-8 flex justify-center items-center bg-${link.color}-400 rounded`}
            >
              <i className={`${link.icon} text-white`}></i>
            </div>
            <span className="hidden xl:block ml-6 font-medium">
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
    <div className="w-20 xl:w-2/5 p-6 h-full xl:p-24 flex flex-col justify-center items-center bg-gray-900 border-r-2 border-gray-800">
      <Logo />
      <Header name={content.name} occupation={content.occupation[language]} />
      <LinksList links={content.links} language={language} />
      <SocialMediaButtons className={'hidden xl:flex'} />
    </div>
  );
};

export default ProfileView;
