import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

import Card from '../../shared/card/Card';
import Button from '../../shared/button/Button';
import Project from '../../shared/project/Project';
import Wrapper from '../../shared/wrapper/Wrapper';

import languages from '../../extras/languages';

import './ProjectsView.scss';

const ProjectsView = ({ language }) => {
  return (
    <Wrapper>
      <Helmet>
        <title>
          {language === languages.EN
            ? `Gabriel Moreno - Projects`
            : `Gabriel Moreno - Proyectos`}
        </title>
      </Helmet>
      <div className="min-h-1/2 p-24 w-full projects black-fades"></div>
      <div className="h-auto p-6 md:p-24 text-center">
        <h1 className="mb-6 font-bold text-xl sm:text-2xl">
          {parse(
            language === languages.EN ? `My projects 👨🏻‍💻` : `Mis proyectos 👨🏻‍💻`
          )}
        </h1>
        <h3 className="mb-12 text-xs sm:text-base text-gray-600">
          {parse(
            language === languages.EN
              ? `Take a look at some of the things I've worked on`
              : `Échale un ojo a las cosas en las que he trabajado`
          )}
        </h3>
        <h3 className="mb-6 text-xl sm:text-2xl text-white font-bold text-left">
          {parse(
            language === languages.EN
              ? `Commercial projects`
              : `Proyectos comerciales`
          )}
        </h3>
        <p className="mb-6 text-left text-xs sm:text-base leading-loose text-gray-400">
          {parse(
            language === languages.EN
              ? `For the past 2+ years, I've been working really close to known companies from my city, doing <u class="text-white">web consulting</u> &amp; <u class="text-white">project assessments</u>. These are some of the most remarkable projects I've had the fortune to develop and <u class="text-white">see in action</u>:`
              : `Desde hace dos o más años he estado trabajando de manera cercana con compañías de renombre en mi ciudad, realizando <u class="text-white">consultoría web</u> y <u class="text-white">asesoría de proyectos</u>. Estos son algunos de los más remarcables en los cuales he tenido la fortuna de desarrollar y <u class="text-white">ver en acción</u>:`
          )}
        </p>
        <div className="mb-12">
          <Project
            title={'Totalcom Venezuela – ISP'}
            src={
              'https://mir-s3-cdn-cf.behance.net/projects/max_808/0d25a0109534879.Y3JvcCwxNTk4MiwxMjUwMSwyNDEzLDA.png'
            }
            alt={'Totalcom Venezuela – ISP'}
            link={
              'https://www.behance.net/gallery/109534879/Totalcom-Venezuela-ISP'
            }
            language={language}
          />
          <Project
            title={'Resivenca – Internet + Energia'}
            src={
              'https://mir-s3-cdn-cf.behance.net/projects/max_808/9a9f98109535527.Y3JvcCwxNTk4MSwxMjUwMCwyNjUwLDA.png'
            }
            alt={'Resivenca – Internet + Energia'}
            link={
              'https://www.behance.net/gallery/109535527/Resivenca-Internet-Energia'
            }
            language={language}
          />
          <Project
            title={'CWV – Project Management System'}
            src={
              'https://mir-s3-cdn-cf.behance.net/projects/max_808/bc47d3109540181.Y3JvcCwxNTk4MSwxMjUwMCwyNDEyLDA.png'
            }
            alt={'CWV – Project Management System'}
            link={
              'https://www.behance.net/gallery/109540181/CWV-Project-Management-System'
            }
            language={language}
          />
        </div>
        <h3 className="mb-6 text-xl sm:text-2xl text-white font-bold text-left">
          {parse(
            language === languages.EN
              ? `Personal &amp; open source`
              : `Personales y open source`
          )}
        </h3>
        <p className="mb-6 text-left text-xs sm:text-base leading-loose text-gray-400">
          {parse(
            language === languages.EN
              ? `<u class="text-white">Open source</u> &amp; <u class="text-white">side projects</u> are important too! I've spent a major part of the past couple years working on <u class="text-white">web development</u>, <u class="text-white">ai-related</u> stuff &amp; <u class="text-white">small interesting projects</u>. Some of them are:`
              : `El <u class="text-white">open source</u> y los <u class="text-white">proyectos personales</u> también son importantes. He dedicado gran parte de los años pasados trabajando en <u class="text-white">desarrollo web</u>, <u class="text-white">inteligencia artificial</u> y <u class="text-white">pequeños proyectos</u>. Algunos de ellos son:`
          )}
        </p>
        <div className="mb-12 flex flex-col lg:flex-row">
          <div className="lg:w-1/2 lg:mr-3 mr-0 mb-6 w-full">
            <Card
              emoji={'🐘'}
              title={'Bango'}
              description={
                language === languages.EN
                  ? `The zero-tricks lightweight framework - just you, and PHP.`
                  : `El framework ligero y sin trucos – solo tú, y PHP.`
              }
              link={'https://github.com/gantoreno/bango'}
              className="mb-6"
              language={language}
            />
            <Card
              emoji={'📝'}
              title={'Aether'}
              description={
                language === languages.EN
                  ? `An interactive editor that performs JavaScript code analysis, and runs on Electron.`
                  : `Un editor de código interactivo que realiza análisis de código en JavaScript, ejecutado en Electron.`
              }
              link={'https://github.com/gantoreno/aether'}
              className="mb-6"
              language={language}
            />
            <Card
              emoji={'🎧'}
              title={'Shagram Bot'}
              description={
                language === languages.EN
                  ? `A Telegram bot that listens to voice messages, and recognizes music.`
                  : `Un bot de Telegram que escucha mensajes de voz, y reconoce música.`
              }
              link={'https://github.com/gantoreno/shagram-bot'}
              language={language}
            />
          </div>
          <div className="lg:w-1/2 lg:ml-3 ml-0 w-full">
            <Card
              emoji={'🧠'}
              title={'Iris'}
              description={
                language === languages.EN
                  ? `A C++ neural networks engine.`
                  : `Un motor de C++ para redes neuronales.`
              }
              link={'https://github.com/gantoreno/iris'}
              className="mb-6"
              language={language}
            />
            <Card
              emoji={'🩺'}
              title={'PyTop'}
              description={
                language === languages.EN
                  ? `A Python-based Windows app monitor.`
                  : `Un monitor de aplicaciones para Windows basado en Python.`
              }
              link={'https://github.com/gantoreno/pytop'}
              className="mb-6"
              language={language}
            />
            <Card
              emoji={'🤫'}
              title={'Among Bot'}
              description={
                language === languages.EN
                  ? `A Discord bot to mute everyone during Among Us parties.`
                  : `Un bot de Discord para mutear durante partidas de Among Us.`
              }
              link={'https://github.com/gantoreno/among-bot'}
              language={language}
            />
          </div>
        </div>
        <div className="flex justify-center sm:justify-between items-center">
          <Link to="/about">
            <Button
              icon="fas fa-arrow-left"
              text={
                language === languages.EN
                  ? `Back to about`
                  : `Volver a acerca de mí`
              }
              className="hidden"
            />
          </Link>
          <Link to="/contact">
            <Button
              icon={'fas fa-arrow-right'}
              text={language === languages.EN ? `Contact me` : `Contáctame`}
              hoverBackground={'red-400'}
              isOpaque={true}
            />
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default ProjectsView;
