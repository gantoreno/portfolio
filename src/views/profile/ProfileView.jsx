import { NavLink } from 'react-router-dom';

import { Wrapper, SocialMediaButtons } from '../../shared';

import logo from '../../assets/svg/logo.svg';

import react from '../../assets/img/react.png';
import tailwind from '../../assets/img/tailwind.png';

import './ProfileView.scss';

const Logo = () => {
  return <img src={logo} className="w-10 mb-12" alt="Logo" />;
};

const Banner = ({ title, subtitle }) => (
  <div className="hidden text-center xl:block">
    <h1 className="mb-6 text-2xl font-bold">{title}</h1>
    <h3 className="mb-6 text-base text-gray-600">{subtitle}</h3>
  </div>
);

const NavigationLink = ({ to, icon, title }) => (
  <NavLink
    to={to}
    className="font-medium mr-auto"
    activeClassName="text-white font-bold active"
    exact
  >
    <div className="flex items-center w-full text-left duration-200 hover:text-white navigation-link mb-6">
      <span className="mx-auto xl:mx-0 text-xl xl:text-base navicon">
        {icon}
      </span>
      <span className="hidden ml-2 xl:block link-name">{title}</span>
    </div>
  </NavLink>
);

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

const ProfileView = () => (
  <Wrapper className="flex flex-col items-center justify-center h-full p-6 bg-gray-800 border-r border-gray-725 xl:w-2/5 xl:p-24 overflow-hidden overflow-y-hidden profile-view">
    <Logo />
    <Banner
      title="Gabriel A. Moreno H."
      subtitle="Software Engineer, Full-Stack Web Developer &amp; IT Consultant"
    />
    <NavigationLink to="/" icon="🏠" title="Home" />
    <NavigationLink to="/about" icon="📖" title="About" />
    <NavigationLink to="/projects" icon="💻" title="Projects" />
    <NavigationLink to="/contact" icon="☎️" title="Contact" />
    <SocialMediaButtons className="hidden xl:flex xl:mb-6" />
    <Copyright />
    <MadeWith />
  </Wrapper>
);

export default ProfileView;
