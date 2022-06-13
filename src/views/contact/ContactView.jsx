import parse from 'html-react-parser';
import { Helmet } from 'react-helmet';

import {
  Entry,
  FadedHeader,
  NavigationButtons,
  Paragraph,
  Section,
  SocialMediaButtons,
  Wrapper,
} from '../../shared';
import { useLanguage } from '../../hooks';

import content from './content.json';

import './ContactView.scss';

const ContactView = () => {
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
            {entry.body.type === 'contact:media' && (
              <>
                <Paragraph>{parse(entry.body[language])}</Paragraph>
                <SocialMediaButtons />
              </>
            )}
          </Entry>
        ))}
        <NavigationButtons
          prev={content.navigation.previous}
          color={'magenta-400'}
          language={language}
        />
      </Section>
    </Wrapper>
  );
};

export default ContactView;
