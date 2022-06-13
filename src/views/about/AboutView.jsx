import parse from 'html-react-parser';

import { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import {
  Entry,
  List,
  Paragraph,
  Section,
  Wrapper,
  FadedHeader,
  NavigationButtons,
} from '../../shared';
import { useLanguage } from '../../hooks';

import content from './content.json';

import './AboutView.scss';

const AboutView = () => {
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
            {entry.body.type === 'paragraph' && (
              <Paragraph>{parse(entry.body[language])}</Paragraph>
            )}
            {entry.body.type === 'list' &&
              entry.body.elements?.map((list, id) => (
                <Fragment key={id}>
                  {list.description && (
                    <Paragraph>{parse(list.description[language])}</Paragraph>
                  )}
                  <List items={list.items} language={language} />
                </Fragment>
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
