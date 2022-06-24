import { NavLink } from 'react-router-dom';

import { Emoji, SocialMediaButtons } from '../../shared';

import logo from '../../assets/svg/logo.svg';
import react from '../../assets/img/react.png';
import tailwind from '../../assets/img/tailwind.png';

import './NavigationView.scss';

const Logo = () => {
  return <img src={logo} className="w-10 mb-12 mx-auto" alt="Logo" />;
};

const Banner = ({ title, subtitle }) => (
  <div className="hidden text-center xl:block">
    <h4 className="mb-6 text-2xl font-bold">{title}</h4>
    <h5 className="mb-6 text-base text-gray-600">{subtitle}</h5>
  </div>
);

const NavigationLink = ({ to, icon, title }) => (
  <NavLink
    to={to}
    className="font-medium mx-auto lg:mr-auto xl:ml-0 mb-6"
    activeClassName="text-white font-bold active"
    exact
  >
    <div className="flex items-center w-full text-left duration-200 hover:text-white navigation-link">
      <span className="mx-auto xl:mx-0 text-xl xl:text-base navicon">
        {icon}
      </span>
      <span className="hidden ml-2 xl:block link-name">{title}</span>
    </div>
  </NavLink>
);

const Copyright = () => (
  <small className="text-gray-600 hidden xl:flex mb-6 mx-auto">
    &copy; {new Date().getFullYear()} Gabriel Moreno. All Rights Reserved.
  </small>
);

const MadeWith = () => (
  <small className="text-gray-600 hidden xl:flex made-with items-center mx-auto">
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

const NavigationView = () => (
  <nav className="absolute top-0 left-0 h-full w-1/6 xl:w-2/5">
    <div className="sticky top-0 left-0 z-10 h-screen bg-gray-800 border-r border-gray-700 flex flex-col justify-center align-middle p-3 xl:p-24">
      <Logo />
      <Banner
        title="Gabriel A. Moreno H."
        subtitle="Software Engineer, Full-Stack Web Developer &amp; IT Consultant"
      />
      <NavigationLink to="/" icon={<Emoji name="house" />} title="Home" />
      <NavigationLink
        to="/about"
        icon={<Emoji name="open-book" />}
        title="About"
      />
      <NavigationLink
        to="/projects"
        icon={<Emoji name="laptop" />}
        title="Projects"
      />
      <NavigationLink
        to="/contact"
        icon={<Emoji name="telephone" />}
        title="Contact"
      />
      <SocialMediaButtons className="hidden xl:flex xl:mb-6" />
      <Copyright />
      <MadeWith />
    </div>
  </nav>
);

export default NavigationView;
