import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import Button from '../../shared/button/Button';
import Wrapper from '../../shared/wrapper/Wrapper';

import './AboutView.scss';

const AboutView = () => {
  return (
    <Wrapper>
      <Helmet>
        <title>Gabriel Moreno - About</title>
      </Helmet>
      <div className="min-h-1/2 p-24 w-full profile black-fades"></div>
      <div className="h-auto p-6 md:p-24 text-center">
        <h1 className="mb-6 font-bold text-xl sm:text-2xl">
          Hello there! {'👋🏻'}
        </h1>
        <h3 className="mb-12 text-xs sm:text-base text-gray-600">
          I'm Gabriel, from {'🇻🇪'} &mdash; I'll make your dreams come true
        </h3>
        <h3 className="mb-6 text-xl sm:text-2xl text-white font-bold text-left">
          What I do
        </h3>
        <p className="mb-12 text-left text-xs sm:text-base leading-loose text-gray-400">
          I'm a software engineer &amp; full-stack web developer specialized in{' '}
          <u className="text-white">commercial projects</u>,{' '}
          <u className="text-white">startup creations</u>,{' '}
          <u className="text-white">corporate identity</u>, and{' '}
          <u className="text-white">personal websites</u>. My job is to bring
          ideas to life through dynamic client-developer experiences, working as
          a team to transform amazing ideas into exceptional realities.
        </p>
        <h3 className="mb-6 text-xl sm:text-2xl text-white font-bold text-left">
          What I <u>also</u> do
        </h3>
        <p className="mb-12 text-left text-xs sm:text-base leading-loose text-gray-400">
          When I'm not developing commercial applications, I'm working on{' '}
          <a
            href="https://github.com/gantoreno"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-yellow-400 duration-200"
          >
            <u>personal &amp; open source projects</u>
          </a>
          , as well as mentoring beginner programmers and students with an
          awesome team at <u className="text-white">The Electric Hive</u>; but
          the most important thing is, I'm always discovering, learning, and
          improving, one day at a time.
        </p>
        <h3 className="mb-6 text-xl sm:text-2xl text-white font-bold text-left">
          The technologies I use
        </h3>
        <p className="mb-3 text-left text-xs sm:text-base leading-loose text-gray-400">
          You'll often see me using my preferred tech stack, which consists of:
        </p>
        <ul className="mb-3 text-left text-xs sm:text-base leading-loose text-gray-400">
          <li>
            &bull; {'🐝'} <b className="text-white">Node.js</b> (with Express
            for back-end development).
          </li>
          <li>
            &bull; {'⚛️'} <b className="text-white">React</b> (front-end library
            of choice).
          </li>
          <li>
            &bull; {'📱'} <b className="text-white">React Native</b> (for native
            mobile applications).
          </li>
          <li>
            &bull; {'🍃'} <b className="text-white">MongoDB</b> (NoSQL
            databases).
          </li>
        </ul>
        <p className="mb-3 text-left text-xs sm:text-base leading-loose text-gray-400">
          Although I can also (and usually) work with:
        </p>
        <ul className="mb-12 text-left text-xs sm:text-base leading-loose text-gray-400">
          <li>
            &bull; {'🐍'} <b className="text-white">Python</b> (TensorFlow,
            Pandas, NumPy, Django, Flask).
          </li>
          <li>
            &bull; {'🐘'} <b className="text-white">PHP</b> (Laravel and{' '}
            <a
              href="https://github.com/gantoreno/bango"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-yellow-400 duration-200"
            >
              <u>Bango</u>
            </a>{' '}
            &mdash; my framework).
          </li>
          <li>
            &bull; {'☕️'} <b className="text-white">Java</b> (AWT &amp;
            graphical applications).
          </li>
          <li>
            &bull; {'➕'} <b className="text-white">C++</b> (Data structures
            &amp; algorithms, machine learning).
          </li>
          <li>
            &bull; {'🐬'} <b className="text-white">MySQL</b> (Relational
            databases).
          </li>
        </ul>
        <div className="flex justify-center sm:justify-between items-center">
          <Link to="/">
            <Button icon="fas fa-arrow-left" text="Back to home" />
          </Link>
          <Link to="/projects">
            <Button
              icon={'fas fa-arrow-right'}
              text={'See my projects'}
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
