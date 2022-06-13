import parse from 'html-react-parser';
import { Helmet } from 'react-helmet';

import {
  Entry,
  Section,
  Wrapper,
  FadedHeader,
  NavigationButtons,
  SocialMediaButtons,
} from '../../shared';
import { useLanguage } from '../../hooks';

import content from './content.json';

import './ContactView.scss';

const SocialMedia = ({ body, language }) => {
  return (
    <div className="mb-12">
      <p className="mb-6 text-xs leading-loose text-left text-gray-600 sm:text-base">
        {parse(body[language])}
      </p>
      <SocialMediaButtons />
    </div>
  );
};

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
              <SocialMedia body={entry.body} language={language} />
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
