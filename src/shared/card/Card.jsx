import { Button } from '../';

import languages from '../../extras/languages.json';

import './Card.scss';

const Card = ({ emoji, title, description, link, className, language }) => {
  return (
    <div
      className={`bg-gray-900 rounded border-2 border-gray-800 text-center ${className}`}
    >
      <div className="p-6 border-b-2 border-gray-800">
        <h3 className="text-6xl mb-6">{emoji}</h3>
        <h3 className="text-xl sm:text-2xl font-bold text-white">{title}</h3>
      </div>
      <div className="p-6 border-b-2 border-gray-800">
        <p className=" text-left text-xs sm:text-base leading-loose text-gray-400">
          {description}
        </p>
      </div>
      <div className="p-6">
        <a href={link} target="_blank" rel="noreferrer">
          <Button
            icon={'fab fa-github'}
            text={
              language === languages.EN ? `View on GitHub` : `Ver en GitHub`
            }
            hoverBackground={'red-400'}
            opaque
          />
        </a>
      </div>
    </div>
  );
};

export default Card;
