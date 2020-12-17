import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

import Button from '../../shared/button/Button';
import Wrapper from '../../shared/wrapper/Wrapper';

import languages from '../../extras/languages';

import './HomeView.scss';

const HomeView = ({ language, switchLanguage }) => {
  return (
    <Wrapper className="p-6 sm:p-24 justify-center items-start">
      <Helmet>
        <title>
          {language === languages.EN
            ? `Gabriel Moreno - Home`
            : `Gabriel Moreno - Inicio`}
        </title>
      </Helmet>
      <div className="flex flex-col-reverse xl:flex-row w-full h-full">
        <div className="flex flex-col items-center justify-center h-1/2 w-full xl:h-full xl:w-1/2 text-center xl:text-left xl:mr-12 xl:flex xl:flex-col xl:items-start xl:justify-center">
          <h1 className="mb-6 text-2xl sm:text-4xl font-bold">
            {parse(
              language === languages.EN
                ? `If you can <u>imagine</u> it, I can <u>create</u> it.`
                : `Si puedes <u>imaginarlo</u>, yo puedo <u>crearlo</u>.`
            )}
          </h1>
          <h2 className="mb-12 text-base sm:text-xl text-gray-600">
            {language === languages.EN
              ? `Innovation starts here.`
              : `La innovación comienza aquí.`}
          </h2>
          <Link to="/about" className="mb-6">
            <Button
              icon={'fas fa-arrow-right'}
              text={language === languages.EN ? `Get started` : `Empezar`}
              hoverBackground={'green-400'}
              isOpaque={true}
            />
          </Link>
          <Button
            icon={'fas fa-globe-americas'}
            text={
              language === languages.EN
                ? `Cambiar a versión en español`
                : `Switch to english version`
            }
            className={'block px-0'}
            isOpaque={false}
            onClick={() => switchLanguage()}
          />
        </div>
        <div className="flex items-center justify-center xl:h-full xl:w-1/2 text-center xl:text-right mb-6 xl:mb-0 xl:ml-12 xl:flex xl:flex-col md:items-start md:justify-center">
          <img
            className="w-64 xl:w-full xl:h-auto mx-auto rounded-full border-2 border-gray-800"
            src="https://avatars0.githubusercontent.com/u/43397475?v=4"
            alt="Avatar"
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default HomeView;
