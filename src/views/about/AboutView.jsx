import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

import Button from '../../shared/button/Button';
import Wrapper from '../../shared/wrapper/Wrapper';

import languages from '../../extras/languages';

import './AboutView.scss';

const AboutView = ({ language }) => {
  return (
    <Wrapper>
      <Helmet>
        <title>
          {language === languages.EN
            ? 'Gabriel Moreno - About'
            : 'Gabriel Moreno - Acerca de mí'}
        </title>
      </Helmet>
      <div className="min-h-1/2 p-24 w-full profile black-fades"></div>
      <div className="h-auto p-6 md:p-24 text-center">
        <h1 className="mb-6 font-bold text-xl sm:text-2xl">
          {parse(language === languages.EN ? `Hello there! 👋🏻` : `¡Hola! 👋🏻`)}
        </h1>
        <h3 className="mb-12 text-xs sm:text-base text-gray-600">
          {parse(
            language === languages.EN
              ? `I'm Gabriel, from 🇻🇪 &mdash; I'll make your dreams come true`
              : `Soy Gabriel, de 🇻🇪 &mdash; haré tus sueños realidad`
          )}
        </h3>
        <h3 className="mb-6 text-xl sm:text-2xl text-white font-bold text-left">
          {parse(
            language === languages.EN ? `What I do` : `¿Quién soy? ¿qué hago?`
          )}
        </h3>
        <p className="mb-12 text-left text-xs sm:text-base leading-loose text-gray-400">
          {parse(
            language === languages.EN
              ? `I'm a software engineer &amp; full-stack web developer specialized in <u class="text-white">commercial projects</u>, <u class="text-white">startup creations</u>, <u class="text-white">corporate identity</u>, and <u class="text-white">personal websites</u>. My job is to bring ideas to life through dynamic client-developer experiences, working as a team to transform amazing ideas into exceptional realities.`
              : `Soy un ingeniero de software y desarrollador web full-stack especializado en <u class="text-white">proyectos comerciales</u>, <u class="text-white">creación de startups</u>, <u class="text-white">identidad corporativa</u>, y <u class="text-white">sitios web personales</u>. Mi trabajo es traer ideas a la realidad a través de experiencias dinámicas entre el cliente y el desarrollador, trabajando en equipo para transformar ideas asombrosas en realidades excepcionales.`
          )}
        </p>
        <h3 className="mb-6 text-xl sm:text-2xl text-white font-bold text-left">
          {parse(
            language === languages.EN
              ? `What I <u>also</u> do`
              : `Lo que <u>también</u> hago`
          )}
        </h3>
        <p className="mb-12 text-left text-xs sm:text-base leading-loose text-gray-400">
          {parse(
            language === languages.EN
              ? `When I'm not developing commercial applications, I'm working on <a href="https://github.com/gantoreno" target="_blank" rel="noreferrer" class="text-white hover:text-yellow-400 duration-200"><u>personal &amp; open source projects</u></a>, as well as mentoring beginner programmers and students with an awesome team at <u class="text-white">The Electric Hive</u>; but the most important thing is, I'm always discovering, learning, and improving, one day at a time.`
              : `Cuando no estoy desarrollando proyectos comerciales, estoy trabajando en <a href="https://github.com/gantoreno" target="_blank" rel="noreferrer" class="text-white hover:text-yellow-400 duration-200"><u>proyectos personales &amp; open source</u></a>, al igual que siendo mentor de estudiantes y principiantes de la programación en <u class="text-white">The Electric Hive</u>; pero lo más importante es, siempre estoy descubriendo, aprendiendo, y mejorando &mdash; un día a la vez.`
          )}
        </p>
        <h3 className="mb-6 text-xl sm:text-2xl text-white font-bold text-left">
          {parse(
            language === languages.EN
              ? `The technologies I use`
              : `Mis tecnologías`
          )}
        </h3>
        <p className="mb-3 text-left text-xs sm:text-base leading-loose text-gray-400">
          {parse(
            language === languages.EN
              ? `You'll often see me using my preferred tech stack, which consists of:`
              : `Comúnmente uso mi stack de tecnologías preferido, el cual consiste en:`
          )}
        </p>
        <ul className="mb-3 text-left text-xs sm:text-base leading-loose text-gray-400">
          <li>
            &bull; {'🐝'} <b className="text-white">Node.js</b> (
            {parse(
              language === languages.EN
                ? `with Express for back-end development`
                : `con Express para desarrollo back-end`
            )}
            ).
          </li>
          <li>
            &bull; {'⚛️'} <b className="text-white">React</b> (
            {parse(
              language === languages.EN
                ? `front-end library of choice`
                : `librería front-end de preferencia`
            )}
            ).
          </li>
          <li>
            &bull; {'📱'} <b className="text-white">React Native</b> (
            {parse(
              language === languages.EN
                ? `for mobile applications`
                : `para aplicaciones móviles`
            )}
            ).
          </li>
          <li>
            &bull; {'🍃'} <b className="text-white">MongoDB</b> (
            {parse(
              language === languages.EN
                ? `NoSQL databases`
                : `bases de datos NoSQL`
            )}
            ).
          </li>
        </ul>
        <p className="mb-3 text-left text-xs sm:text-base leading-loose text-gray-400">
          {parse(
            language === languages.EN
              ? `Although I can also (and usually) work with:`
              : `Aunque también puedo trabajar (y usualmente lo hago) con:`
          )}
        </p>
        <ul className="mb-12 text-left text-xs sm:text-base leading-loose text-gray-400">
          <li>
            &bull; {'🐍'} <b className="text-white">Python</b> (
            {parse(
              language === languages.EN
                ? `with TensorFlow, Pandas, NumPy, Django, Flask`
                : `con TensorFlow, Pandas, NumPy, Django, Flask`
            )}
            ).
          </li>
          <li>
            &bull; {'🐘'} <b className="text-white">PHP</b> (
            {parse(
              language === languages.EN
                ? `using Laravel and<a href="https://github.com/gantoreno/bango" target="_blank" rel="noreferrer" class="text-white hover:text-yellow-400 duration-200"><u>Bango</u></a> &mdash; my framework`
                : `usando Laravel y <a href="https://github.com/gantoreno/bango" target="_blank" rel="noreferrer" class="text-white hover:text-yellow-400 duration-200"><u>Bango</u></a> &mdash; mi framework`
            )}
            ).
          </li>
          <li>
            &bull; {'☕️'} <b className="text-white">Java</b> (
            {parse(
              language === languages.EN
                ? `through AWT for graphical applications`
                : `a través de AWT para aplicaciones gráficas`
            )}
            ).
          </li>
          <li>
            &bull; {'➕'} <b className="text-white">C++</b> (
            {parse(
              language === languages.EN
                ? `for data structures &amp; algorithms, machine learning`
                : `para estructuras de datos, algoritmos, machine learning`
            )}
            ).
          </li>
          <li>
            &bull; {'🐬'} <b className="text-white">MySQL</b> (
            {parse(
              language === languages.EN
                ? `for relational databases`
                : `para bases de datos relacionales`
            )}
            ).
          </li>
        </ul>
        <div className="flex justify-center sm:justify-between items-center">
          <Link to="/">
            <Button
              icon="fas fa-arrow-left"
              text={
                language === languages.EN ? 'Back to home' : 'Volver a inicio'
              }
              className="hidden"
            />
          </Link>
          <Link to="/projects">
            <Button
              icon={'fas fa-arrow-right'}
              text={
                language === languages.EN ? 'See my projects' : 'Mis proyectos'
              }
              hoverBackground={'yellow-400'}
              isOpaque={true}
            />
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default AboutView;
