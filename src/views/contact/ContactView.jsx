import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import Button from '../../shared/button/Button';
import Wrapper from '../../shared/wrapper/Wrapper';

import './ContactView.scss';

const ContactView = () => {
  return (
    <Wrapper>
      <Helmet>
        <title>Gabriel Moreno - Contact</title>
      </Helmet>
      <div className="min-h-1/2 p-24 w-full contact black-fades"></div>
      <div className="h-auto p-6 md:p-24 text-center">
        <h1 className="mb-6 font-bold text-xl sm:text-2xl">
          Get in touch {'📱'}
        </h1>
        <h3 className="mb-12 text-xs sm:text-base text-gray-600">
          Let's build something awesome
        </h3>
        <h3 className="mb-6 text-xl sm:text-2xl text-white font-bold text-left">
          Social media
        </h3>
        <p className="mb-6 text-left text-xs sm:text-base leading-loose text-gray-400">
          If you have an idea about{' '}
          <u className="text-white">something you'd like to create</u>,{' '}
          <u className="text-white">a website you have in mind</u>, or{' '}
          <u className="text-white">a business you want to star</u>, don't worry
          – <u className="text-white">I got you covered</u>. You can find me on
          my social media, I'm constantly updating on each one, so response
          times might be faster.
        </p>
        <div className="hidden xl:flex xl:flex-col xl:items-center xl:justify-center">
          <div className="w-full mb-12 text-center text-xl text-gray-600">
            <a
              href="https://facebook.com/gantoreno"
              target="_blank"
              rel="noreferrer"
              className="p-3 hover:text-blue-400"
            >
              <i className="fab fa-facebook duration-200"></i>
            </a>
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
        </div>
        <h3 className="mb-6 text-xl sm:text-2xl text-white font-bold text-left">
          Leave me a message
        </h3>
        <p className="mb-6 text-left text-xs sm:text-base leading-loose text-gray-400">
          Alternatively, you can fill in the form below with your message and
          I'll get back to you as soon as possible to hear more about your ideas
          – I'm always open to start new projects.
        </p>
        <div className="mb-6 text-gray-600 text-xs sm:text-base">
          <div className="grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 lg:mb-6">
            <input
              type="text"
              placeholder="First name"
              className="p-3 lg:mr-3 mb-6 lg:mb-0 bg-transparent rounded text-gray-600 border-2 border-gray-600 focus:text-white focus:border-white"
              required
            />
            <input
              type="text"
              placeholder="Last name"
              className="p-3 lg:ml-3 mb-6 lg:mb-0 bg-transparent rounded text-gray-600 border-2 border-gray-600 focus:text-white focus:border-white"
              required
            />
          </div>
          <div className="grid grid-cols-1 mb-6">
            <input
              type="email"
              placeholder="E-mail"
              className="p-3 rounded bg-transparent text-gray-600 border-2 border-gray-600 focus:text-white focus:border-white"
              required
            />
          </div>
          <div className="grid grid-cols-1 mb-6">
            <textarea
              name="message"
              rows="10"
              className="p-3 bg-transparent rounded border-2 text-gray-600 border-gray-600 focus:text-white focus:border-white"
              placeholder="What would you like to build?"
              resize="vertical"
              required
            ></textarea>
          </div>
        </div>
        <Button
          icon="fas fa-paper-plane"
          text="Send"
          isOpaque={true}
          className="mb-12"
          hoverBackground="indigo-400"
        />
        <div className="flex justify-start sm:justify-between items-center">
          <Link to="/projects">
            <Button icon="fas fa-arrow-left" text="Back to projects" />
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default ContactView;
