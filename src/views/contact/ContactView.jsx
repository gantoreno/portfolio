import parse from 'html-react-parser';
import { Helmet } from 'react-helmet';
import {
  Section,
  Entry,
  FadedHeader,
  Wrapper,
  NavigationButtons,
  SocialMediaButtons,
  Button,
} from '../../shared';

import content from './content.json';
import languages from '../../extras/languages';

import './ContactView.scss';

const SocialMedia = ({ body, language }) => {
  return (
    <div className="mb-12">
      <p className="mb-6 text-left text-xs sm:text-base leading-loose text-gray-400">
        {parse(body[language])}
      </p>
      <SocialMediaButtons />
    </div>
  );
};

const ContactForm = ({ body, language }) => {
  return (
    <div className="mb-12">
      <p className="mb-6 text-left text-xs sm:text-base leading-loose text-gray-400">
        {parse(body[language])}
      </p>
      <div className="mb-6 text-gray-600 text-xs sm:text-base">
        <div className="grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 lg:mb-6">
          <input
            type="text"
            placeholder={language === languages.EN ? `First name` : `Nombre`}
            className="p-3 lg:mr-3 mb-6 lg:mb-0 bg-transparent rounded text-gray-600 border-2 border-gray-600 focus:text-white focus:border-white"
            required
          />
          <input
            type="text"
            placeholder={language === languages.EN ? `Last name` : `Apellido`}
            className="p-3 lg:ml-3 mb-6 lg:mb-0 bg-transparent rounded text-gray-600 border-2 border-gray-600 focus:text-white focus:border-white"
            required
          />
        </div>
        <div className="grid grid-cols-1 mb-6">
          <input
            type="email"
            placeholder={
              language === languages.EN ? `E-mail` : `Correo electrónico`
            }
            className="p-3 rounded bg-transparent text-gray-600 border-2 border-gray-600 focus:text-white focus:border-white"
            required
          />
        </div>
        <div className="grid grid-cols-1 mb-6">
          <textarea
            name="message"
            rows="10"
            className="p-3 bg-transparent rounded border-2 text-gray-600 border-gray-600 focus:text-white focus:border-white"
            placeholder={
              language === languages.EN
                ? `What would you like to build?`
                : `¿Qué te gustaría construir?`
            }
            resize="vertical"
            required
          ></textarea>
        </div>
        <div className="text-center">
          <Button
            hoverBackground={'purple-400'}
            text={'Send'}
            icon={'fas fa-paper-plane'}
            opaque
          />
        </div>
      </div>
    </div>
  );
};

const ContactView = ({ language }) => {
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
            {entry.body.type === 'contact:media' && (
              <SocialMedia body={entry.body} language={language} />
            )}
            {entry.body.type === 'contact:form' && (
              <ContactForm body={entry.body} language={language} />
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
