import parse from 'html-react-parser';
import { Helmet } from 'react-helmet';
import {
  Entry,
  Section,
  Wrapper,
  FadedHeader,
  NavigationButtons,
} from '../../shared';

import content from './content.json';

import './AboutView.scss';

const SmallDescription = ({ children }) => {
  return <p className="mb-3">{children}</p>;
};

const SmallList = ({ list, language }) => {
  return (
    <ul>
      {list.items.map(item => (
        <li id={item.id} key={item.id}>
          {parse(item[language])}
        </li>
      ))}
    </ul>
  );
};

const ListedBody = ({ list, language }) => {
  return (
    <div className="mb-3">
      <SmallDescription>{parse(list.description[language])}</SmallDescription>
      <SmallList list={list} language={language} />
    </div>
  );
};

const AboutView = ({ language }) => {
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
            {entry.body.type === 'paragraph' && parse(entry.body[language])}
            {entry.body.type === 'list' &&
              entry.body.lists?.map(list => (
                <ListedBody
                  id={list.id}
                  key={list.id}
                  list={list}
                  language={language}
                />
              ))}
          </Entry>
        ))}
        <NavigationButtons
          prev={content.navigation.previous}
          next={content.navigation.next}
          color={'yellow-400'}
          language={language}
        />
      </Section>
    </Wrapper>
  );
};

export default AboutView;
