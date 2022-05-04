import parse from 'html-react-parser';
import { Helmet } from 'react-helmet';

import {
  Entry,
  Button,
  Section,
  Wrapper,
  FadedHeader,
  NavigationButtons,
} from '../../shared';
import { useLanguage } from '../../hooks';

import content from './content.json';
import languages from '../../extras/languages.json';

import './ProjectsView.scss';

const CommercialProjectOverview = ({ pictureUrl, title, source, language }) => {
  return (
    <div className="flex-wrap content-center mb-6 rounded shadow-lg lg:flex bg-grey">
      <div className="lg:flex lg:w-1/3">
        <div className="overflow-hidden rounded lg:flex-1">
          <img src={pictureUrl} alt={title} />
        </div>
      </div>
      <div className="lg:flex lg:w-2/3">
        <div className="lg:flex-1">
          <div className="flex flex-col items-start justify-center h-full mt-6 text-left lg:mt-0 lg:ml-6">
            <h1 className="mb-6 text-xl font-bold text-left text-white sm:text-2xl">
              {title}
            </h1>
            <a href={source.link} target="_blank" rel="noreferrer">
              {source.name === 'live' && (
                <Button
                  text={language === languages.EN ? 'View live' : 'Ver en vivo'}
                  rightIcon={'fab fa-brands fa-chrome ml-3'}
                  hoverBackground="red-400"
                  opaque
                />
              )}
              {source.name === 'behance' && (
                <Button
                  text={
                    language === languages.EN
                      ? 'View on Bēhance'
                      : 'Ver en Bēhance'
                  }
                  rightIcon={'fab fa-behance ml-3'}
                  hoverBackground="red-400"
                  opaque
                />
              )}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const GitHubProjectCard = ({
  emoji,
  title,
  description,
  link,
  className,
  language,
}) => {
  return (
    <div
      className={`project-card bg-gray-800 rounded border border-gray-700 text-center ${className}`}
    >
      <div className="p-6 border-b-2 border-gray-700">
        <h3 className="mb-6 text-6xl">{emoji}</h3>
        <h3 className="text-xl font-bold text-white sm:text-2xl">{title}</h3>
      </div>
      <div className="p-6 border-b-2 border-gray-700">
        <p className="text-xs leading-loose text-left text-gray-600 sm:text-base">
          {description}
        </p>
      </div>
      <div className="p-6">
        <a href={link} target="_blank" rel="noreferrer">
          <Button
            text={
              language === languages.EN ? `View on GitHub` : `Ver en GitHub`
            }
            rightIcon={'fab fa-github'}
            hoverBackground={'red-400'}
            className={'mx-auto'}
            opaque
          />
        </a>
      </div>
    </div>
  );
};

const CommercialProjectsList = ({ body, language }) => {
  return (
    <div className="mb-12">
      <p className="mb-6">{parse(body[language])}</p>
      {body.projects.map((project, id) => (
        <CommercialProjectOverview
          id={id}
          key={id}
          title={project.title[language]}
          pictureUrl={project.pictureUrl}
          source={project.source}
          language={language}
        />
      ))}
    </div>
  );
};

const PersonalProjectsGrid = ({ body, language }) => {
  return (
    <div className="mb-6">
      <p className="mb-6">{parse(body[language])}</p>
      <div className="flex flex-col mb-12 lg:flex-row">
        <div className="w-full mb-6 mr-0 lg:w-1/2 lg:mr-3 project-grid">
          {body.projects.map(
            (project, id) =>
              id % 2 === 0 && (
                <GitHubProjectCard
                  id={id}
                  key={id}
                  emoji={project.emoji}
                  title={project.title}
                  description={project.description[language]}
                  link={project.githubLink}
                  className="mb-6"
                  language={language}
                />
              )
          )}
        </div>
        <div className="w-full ml-0 lg:w-1/2 lg:ml-3 project-grid">
          {body.projects.map(
            (project, id) =>
              id % 2 !== 0 && (
                <GitHubProjectCard
                  id={id}
                  key={id}
                  emoji={project.emoji}
                  title={project.title}
                  description={project.description[language]}
                  link={project.githubLink}
                  className="mb-6"
                  language={language}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

const ThemesAndTools = ({ body, language }) => {
  return (
    <div>
      <p className="mb-6">{parse(body[language])}</p>
      <figure className="mb-6">
        <img src={body.pictureUrl} alt="Themes and tools" />
        <center>
          <figcaption>
            <small>{parse(body.pictureCaption[language])}</small>
          </figcaption>
        </center>
      </figure>
      <p className="mb-6">{parse(body.bottomText[language])}</p>
    </div>
  );
};

const ProjectsView = () => {
  const [language] = useLanguage();

  return (
    <Wrapper>
      <Helmet>
        <title>{content.windowTitle[language]}</title>
      </Helmet>
      <FadedHeader pictureUrl={content.headerPictureUrl} />
      <Section
        title={parse(content.title[language])}
        subtitle={parse(content.subtitle[language])}
      >
        {content.entries.map((entry, id) => (
          <Entry id={id} key={id} title={parse(entry.title[language])}>
            {entry.body.type === 'projects:tools' && (
              <ThemesAndTools body={entry.body} language={language} />
            )}
            {entry.body.type === 'projects:commercial' && (
              <CommercialProjectsList body={entry.body} language={language} />
            )}
            {entry.body.type === 'projects:personal' && (
              <PersonalProjectsGrid body={entry.body} language={language} />
            )}
          </Entry>
        ))}
        <NavigationButtons
          prev={content.navigation.previous}
          next={content.navigation.next}
          color={'red-400'}
          language={language}
        />
      </Section>
    </Wrapper>
  );
};

export default ProjectsView;
