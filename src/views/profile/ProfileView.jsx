import { NavLink } from 'react-router-dom';

import { Wrapper, SocialMediaButtons } from '../../shared';
import { useLanguage } from '../../hooks';

import content from './content.json';
import logo from '../../assets/svg/logo.svg';

import react from '../../assets/img/react.png';
import tailwind from '../../assets/img/tailwind.png';

import './ProfileView.scss';

const Logo = () => {
  return <img src={logo} className="w-10 mb-12" alt="Logo" />;
};

const Header = ({ name, occupation }) => {
  return (
    <div className="hidden text-center xl:block">
      <h1 className="mb-6 text-2xl font-bold">{name}</h1>
      <h3 className="mb-6 text-base text-gray-600">{occupation}</h3>
    </div>
  );
};

const NavigationLinks = ({ links, language }) => {
  return (
    <div className="w-full text-gray-600 xl:mb-6">
      {links.map((link, id) => (
        <NavLink
          id={id}
          key={id}
          to={link.path}
          className="font-medium"
          activeClassName="text-white font-bold active"
          exact
        >
          <div
            className={`flex items-center w-full text-left duration-200 hover:text-white navigation-link ${
              id !== links.length - 1 ? 'mb-6' : ''
            }`}
          >
            <span className="mx-auto xl:mx-0 text-xl xl:text-base navicon">
              {link.icon}
            </span>
            <span className="hidden ml-2 xl:block link-name">
              {link.name[language]}
            </span>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

const Copyright = () => (
  <small className="text-gray-600 hidden xl:flex mb-6">
    &copy; {new Date().getFullYear()} Gabriel Moreno. All Rights Reserved.
  </small>
);

const MadeWith = () => (
  <small className="text-gray-600 hidden xl:flex made-with items-center">
    Made with{' '}
    <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
      <img src={react} alt="react" className="mx-1" />
    </a>
    and
    <a
      href="https://tailwindcss.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={tailwind} alt="tailwind" className="ml-1" />
    </a>
  </small>
);

const ProfileView = () => {
  const [language] = useLanguage();

  return (
    <Wrapper className="flex flex-col items-center justify-center h-full p-6 bg-gray-800 border-r border-gray-725 xl:w-2/5 xl:p-24 overflow-hidden overflow-y-hidden profile-view">
      <Logo />
      <Header name={content.name} occupation={content.occupation[language]} />
      <NavigationLinks links={content.links} language={language} />
      <SocialMediaButtons className="hidden xl:flex xl:mb-6" />
      <Copyright />
      <MadeWith />
    </Wrapper>
  );
};

export default ProfileView;
