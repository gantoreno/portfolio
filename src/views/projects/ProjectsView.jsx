import parse from 'html-react-parser';
import { Helmet } from 'react-helmet';
import {
  Section,
  Entry,
  FadedHeader,
  Wrapper,
  NavigationButtons,
  Card,
  Project,
} from '../../shared';

import content from './content.json';

import './ProjectsView.scss';

const CommercialProjectsList = ({ body, language }) => {
  return (
    <div className="mb-12">
      <p className="mb-6">{parse(body[language])}</p>
      {body.projects.map(project => (
        <Project
          id={project.id}
          key={project.id}
          title={project.title[language]}
          pictureUrl={project.pictureUrl}
          behanceLink={project.behanceLink}
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
      <div className="mb-12 flex flex-col lg:flex-row">
        <div className="lg:w-1/2 lg:mr-3 mr-0 mb-6 w-full">
          {body.projects.map(
            (project, index) =>
              index % 2 === 0 && (
                <Card
                  id={project.id}
                  key={project.id}
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
        <div className="lg:w-1/2 lg:ml-3 ml-0 w-full">
          {body.projects.map(
            (project, index) =>
              index % 2 !== 0 && (
                <Card
                  id={project.id}
                  key={project.id}
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

const ProjectsView = ({ language }) => {
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
        {content.entries.map(entry => (
          <Entry
            id={parse(entry.id)}
            key={parse(entry.id)}
            title={parse(entry.title[language])}
          >
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
