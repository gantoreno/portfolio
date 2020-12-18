import { Button } from '../';

import languages from '../../extras/languages.json';

import './Project.scss';

const Project = ({ pictureUrl, title, behanceLink, language }) => {
  return (
    <div className="mb-6 lg:flex content-center flex-wrap bg-grey rounded shadow-lg">
      <div className="lg:flex lg:w-1/3">
        <div className="lg:flex-1 rounded overflow-hidden">
          <img src={pictureUrl} alt={title} />
        </div>
      </div>
      <div className="lg:flex lg:w-2/3">
        <div className="lg:flex-1">
          <div className="mt-6 lg:mt-0 lg:ml-6 text-left flex flex-col justify-center items-start h-full">
            <h1 className="mb-6 font-bold text-xl sm:text-2xl text-left text-white">
              {title}
            </h1>
            <a href={behanceLink} target="_blank" rel="noreferrer">
              <Button
                icon={'fab fa-behance ml-3'}
                text={
                  language === languages.EN
                    ? 'View on Bēhance'
                    : 'Ver en Bēhance'
                }
                hoverBackground="red-400"
                opaque
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
