import { NavLink } from 'react-router-dom';

import logo from '../../assets/svg/logo.svg';

import './ProfileView.scss';

const ProfileView = () => {
  return (
    <div className="w-20 xl:w-2/5 p-6 h-full xl:p-24 flex flex-col justify-center items-center bg-gray-900 border-r-2 border-gray-800">
      <img src={logo} className="w-10 mb-12" alt="Logo" />
      <div className="hidden xl:block">
        <h1 className="mb-6 text-2xl font-bold">Gabriel A. Moreno H.</h1>
        <h3 className="mb-12 text-base text-gray-600">
          Software Engineer, Web Developer
        </h3>
      </div>
      <div className="w-full xl:mb-12 text-gray-600">
        <NavLink exact to="/" activeClassName="text-white">
          <div className="w-full mb-6 flex items-center text-base text-left hover:text-white duration-200">
            <div className="w-8 h-8 flex justify-center items-center bg-green-400 rounded">
              <i class="fas fa-home text-white"></i>
            </div>
            <span className="hidden xl:block ml-6 font-medium">Home</span>
          </div>
        </NavLink>
        <NavLink exact to="/about" activeClassName="text-white">
          <div className="w-full mb-6 flex items-center text-base text-left hover:text-white duration-200">
            <div className="w-8 h-8 flex justify-center items-center bg-yellow-400 rounded">
              <i class="fas fa-user text-white"></i>
            </div>
            <span className="hidden xl:block ml-6 font-medium">About</span>
          </div>
        </NavLink>
        <NavLink exact to="/projects" activeClassName="text-white">
          <div className="w-full mb-6 flex items-center text-base text-left hover:text-white duration-200">
            <div className="w-8 h-8 flex justify-center items-center bg-red-400 rounded">
              <i class="fas fa-code text-white"></i>
            </div>
            <span className="hidden xl:block ml-6 font-medium">Projects</span>
          </div>
        </NavLink>
        <NavLink exact to="/contact" activeClassName="text-white">
          <div className="w-full flex items-center text-base text-left hover:text-white duration-200">
            <div className="w-8 h-8 flex justify-center items-center bg-indigo-400 rounded">
              <i class="fas fa-phone-alt text-white"></i>
            </div>
            <span className="hidden xl:block ml-6 font-medium">Contact</span>
          </div>
        </NavLink>
      </div>
      <div className="hidden xl:flex xl:flex-col xl:items-center xl:justify-center">
        <div className="w-full mb-6 text-center text-xl text-gray-600">
          <a
            href="https://instagram.com/gantoreno"
            target="_blank"
            rel="noreferrer"
            className="p-3 hover:text-pink-400"
          >
            <i className="fab fa-instagram duration-200"></i>
          </a>
          <a
            href="https://twitter.com/gantoreno"
            target="_blank"
            rel="noreferrer"
            className="p-3 hover:text-blue-400"
          >
            <i className="fab fa-twitter duration-300"></i>
          </a>
          <a
            href="https://github.com/gantoreno"
            target="_blank"
            rel="noreferrer"
            className="p-3 hover:text-white"
          >
            <i className="fab fa-github duration-200"></i>
          </a>
          <a
            href="https://linkedin.com/in/gantoreno"
            target="_blank"
            rel="noreferrer"
            className="p-3 hover:text-blue-400"
          >
            <i className="fab fa-linkedin duration-200"></i>
          </a>
          <a
            href="https://behance.net/gantoreno"
            target="_blank"
            rel="noreferrer"
            className="p-3 hover:text-indigo-400"
          >
            <i className="fab fa-behance duration-200"></i>
          </a>
        </div>
        <small className="text-gray-600">
          Copyright &copy; Gabriel Moreno 2020
        </small>
      </div>
    </div>
  );
};

export default ProfileView;
