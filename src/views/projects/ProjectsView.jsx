import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import Card from '../../shared/card/Card';
import Button from '../../shared/button/Button';
import Project from '../../shared/project/Project';
import Wrapper from '../../shared/wrapper/Wrapper';

import './ProjectsView.scss';

const ProjectsView = () => {
  return (
    <Wrapper>
      <Helmet>
        <title>Gabriel Moreno - About</title>
      </Helmet>
      <div className="min-h-1/2 p-24 w-full projects black-fades"></div>
      <div className="h-auto p-6 md:p-24 text-center">
        <h1 className="mb-6 font-bold text-xl sm:text-2xl">
          My projects {'👨🏻‍💻'}
        </h1>
        <h3 className="mb-12 text-xs sm:text-base text-gray-600">
          Take a look at some of the things I've worked on
        </h3>
        <h3 className="mb-6 text-xl sm:text-2xl text-white font-bold text-left">
          Commercial projects
        </h3>
        <p className="mb-6 text-left text-xs sm:text-base leading-loose text-gray-400">
          For the past 2+ years, I've been working really close to known
          companies from my city, doing{' '}
          <u className="text-white">web consulting</u> &amp;{' '}
          <u className="text-white">project assessments</u>. These are some of
          the most remarkable projects I've had the fortune to develop and{' '}
          <u className="text-white">see in action</u>:
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
          />
        </div>
        <h3 className="mb-6 text-xl sm:text-2xl text-white font-bold text-left">
          Personal &amp; open source
        </h3>
        <p className="mb-6 text-left text-xs sm:text-base leading-loose text-gray-400">
          <u className="text-white">Open source</u> &amp;{' '}
          <u className="text-white">side projects</u> are important too! I've
          spent a major part of the past couple years working on{' '}
          <u className="text-white">web development</u>,{' '}
          <u className="text-white">ai-related</u> stuff &amp;{' '}
          <u className="text-white">small interesting projects</u>. Some of them
          are:
        </p>
        <div className="mb-12 flex flex-col lg:flex-row">
          <div className="lg:w-1/2 lg:mr-3 mr-0 mb-6 w-full">
            <Card
              emoji={'🐘'}
              title={'Bango'}
              description={
                'The zero-tricks lightweight framework - just you, and PHP.'
              }
              link={'https://github.com/gantoreno/bango'}
              className="mb-6"
            />
            <Card
              emoji={'📝'}
              title={'Aether'}
              description={
                'An interactive editor that performs JavaScript code analysis, and runs on Electron.'
              }
              link={'https://github.com/gantoreno/aether'}
              className="mb-6"
            />
            <Card
              emoji={'🎧'}
              title={'Shagram Bot'}
              description={
                'A Telegram bot that listens to voice messages, and recognizes music.'
              }
              link={'https://github.com/gantoreno/shagram-bot'}
            />
          </div>
          <div className="lg:w-1/2 lg:ml-3 ml-0 w-full">
            <Card
              emoji={'🧠'}
              title={'Iris'}
              description={'A C++ neural networks engine.'}
              link={'https://github.com/gantoreno/iris'}
              className="mb-6"
            />
            <Card
              emoji={'🩺'}
              title={'PyTop'}
              description={'A Python-based Windows app monitor.'}
              link={'https://github.com/gantoreno/pytop'}
              className="mb-6"
            />
            <Card
              emoji={'🤫'}
              title={'Among Bot'}
              description={
                'A Discord bot to mute everyone during Among Us parties.'
              }
              link={'https://github.com/gantoreno/among-bot'}
            />
          </div>
        </div>
        <div className="flex justify-center sm:justify-between items-center">
          <Link to="/about">
            <Button icon="fas fa-arrow-left" text="Back to about" />
          </Link>
          <Link to="/contact">
            <Button
              icon={'fas fa-arrow-right'}
              text={'Contact me'}
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
