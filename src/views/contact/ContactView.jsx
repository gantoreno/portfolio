import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

import languages from '../../extras/languages';

import Button from '../../shared/button/Button';
import Wrapper from '../../shared/wrapper/Wrapper';

import './ContactView.scss';

const ContactView = ({ language }) => {
  return (
    <Wrapper>
      <Helmet>
        <title>
          {language === languages.EN
            ? `Gabriel Moreno - Contact`
            : `Gabriel Moreno - Contáctame`}
        </title>
      </Helmet>
      <div className="min-h-1/2 p-24 w-full contact black-fades"></div>
      <div className="h-auto p-6 md:p-24 text-center">
        <h1 className="mb-6 font-bold text-xl sm:text-2xl">
          {parse(
            language === languages.EN
              ? `Get in touch 📱`
              : `Ponte en contacto 📱`
          )}
        </h1>
        <h3 className="mb-12 text-xs sm:text-base text-gray-600">
          {parse(
            language === languages.EN
              ? `Let's build something awesome`
              : `¡Construyamos algo asombroso!`
          )}
        </h3>
        <h3 className="mb-6 text-xl sm:text-2xl text-white font-bold text-left">
          {parse(
            language === languages.EN ? `Social media` : `¿Dónde encontrarme?`
          )}
        </h3>
        <p className="mb-6 text-left text-xs sm:text-base leading-loose text-gray-400">
          {parse(
            language === languages.EN
              ? `If you have an idea about <u class="text-white">something you'd like to create</u>, <u class="text-white">a website you have in mind</u>, or <u class="text-white">a business you want to start</u>, don't worry – <u class="text-white">I got you covered</u>. You can find me on my social media, I'm constantly updating on each one, so response times might be faster.`
              : `Si hay algo que <u class="text-white">quisieras crear</u>, <u class="text-white">un sitio web que quieres diseñar</u>, or <u class="text-white">un negocio que quieres empezar</u>, no te preocupes – <u class="text-white">estoy para ayudar</u>. Puedes encontrarme en mis redes sociales, estoy activo constantemente en ellas, con lo cual, los tiempos de respuesta serán más rápidos.`
          )}
        </p>
        <div className="flex xl:flex-col xl:items-center xl:justify-center">
          <div className="w-full mb-12 text-center text-xl text-gray-600">
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
          {parse(
            language === languages.EN
              ? `Leave me a message`
              : `Déjame un mensaje`
          )}
        </h3>
        <p className="mb-6 text-left text-xs sm:text-base leading-loose text-gray-400">
          {parse(
            language === languages.EN
              ? `Alternatively, you can fill in the form below with your message and I'll get back to you as soon as possible to hear more about your ideas – I'm always open to start new projects.`
              : `Alternativamente, puedes llenar el formulario abajo con tu mensaje y estaré contigo lo antes posible para escuchar más de tus ideas – siempre estoy abierto a iniciar nuevos proyectos.`
          )}
        </p>
        <div className="mb-6 text-gray-600 text-xs sm:text-base">
          <div className="grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 lg:mb-6">
            <input
              type="text"
              placeholder={language === languages.EN ? `First name` : `Nombre`}
              className="p-3 lg:mr-3 mb-6 lg:mb-0 bg-transparent rounded text-gray-600 border-2 border-gray-600 focus:text-white focus:border-white"
              required
            />
            <input
              type="text"
              placeholder={language === languages.EN ? `Last name` : `Apellido`}
              className="p-3 lg:ml-3 mb-6 lg:mb-0 bg-transparent rounded text-gray-600 border-2 border-gray-600 focus:text-white focus:border-white"
              required
            />
          </div>
          <div className="grid grid-cols-1 mb-6">
            <input
              type="email"
              placeholder={
                language === languages.EN ? `E-mail` : `Correo electrónico`
              }
              className="p-3 rounded bg-transparent text-gray-600 border-2 border-gray-600 focus:text-white focus:border-white"
              required
            />
          </div>
          <div className="grid grid-cols-1 mb-6">
            <textarea
              name="message"
              rows="10"
              className="p-3 bg-transparent rounded border-2 text-gray-600 border-gray-600 focus:text-white focus:border-white"
              placeholder={
                language === languages.EN
                  ? `What would you like to build?`
                  : `¿Qué te gustaría construir?`
              }
              resize="vertical"
              required
            ></textarea>
          </div>
        </div>
        <Button
          icon="fas fa-paper-plane"
          text={language === languages.EN ? `Send` : `Enviar`}
          isOpaque={true}
          className="mb-12"
          hoverBackground="indigo-400"
        />
        <div className="flex justify-start sm:justify-between items-center">
          <Link to="/projects">
            <Button
              icon="fas fa-arrow-left"
              text={
                language === languages.EN
                  ? `Back to projects`
                  : `Volver a mis proyectos`
              }
            />
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default ContactView;
