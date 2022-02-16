import parse from 'html-react-parser';
import { Helmet } from 'react-helmet';

import {
  Entry,
  Button,
  Section,
  Wrapper,
  FadedHeader,
  NavigationButtons,
  SocialMediaButtons,
} from '../../shared';
import { useLanguage, useIndexedContent } from '../../hooks';

import content from './content.json';
import languages from '../../extras/languages';

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

const ContactForm = ({ body, language }) => {
  return (
    <div className="mb-12">
      <p className="mb-6 text-xs leading-loose text-left text-gray-600 sm:text-base">
        {parse(body[language])}
      </p>
      <div className="mb-6 text-xs text-gray-600 sm:text-base">
        <div className="grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 lg:mb-6">
          <input
            type="text"
            placeholder={language === languages.EN ? `First name` : `Nombre`}
            className="p-3 mb-6 text-gray-600 bg-transparent border border-gray-700 rounded lg:mr-3 lg:mb-0 focus:text-white focus:border-white"
            required
          />
          <input
            type="text"
            placeholder={language === languages.EN ? `Last name` : `Apellido`}
            className="p-3 mb-6 text-gray-600 bg-transparent border border-gray-700 rounded lg:ml-3 lg:mb-0 focus:text-white focus:border-white"
            required
          />
        </div>
        <div className="grid grid-cols-1 mb-6">
          <input
            type="email"
            placeholder={
              language === languages.EN ? `E-mail` : `Correo electrónico`
            }
            className="p-3 text-gray-700 bg-transparent border border-gray-700 rounded focus:text-white focus:border-white"
            required
          />
        </div>
        <div className="grid grid-cols-1 mb-6">
          <textarea
            name="message"
            rows="10"
            className="p-3 text-gray-600 bg-transparent border border-gray-700 rounded focus:text-white focus:border-white"
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
            text={'Send'}
            rightIcon={'fas fa-paper-plane'}
            hoverBackground={'purple-400'}
            className={'mx-auto'}
            opaque
          />
        </div>
      </div>
    </div>
  );
};

const ContactView = () => {
  const indexedContent = useIndexedContent(content);
  const [language] = useLanguage();

  return (
    <Wrapper>
      <Helmet>
        <title>{indexedContent.windowTitle[language]}</title>
      </Helmet>
      <FadedHeader pictureUrl={indexedContent.headerPictureUrl} />
      <Section
        title={parse(indexedContent.title[language])}
        subtitle={parse(indexedContent.subtitle[language])}
      >
        {indexedContent.entries.map(entry => (
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
          prev={indexedContent.navigation.previous}
          color={'magenta-400'}
          language={language}
        />
      </Section>
    </Wrapper>
  );
};

export default ContactView;
