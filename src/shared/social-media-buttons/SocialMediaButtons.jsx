import { joinClassNames } from '../../utils';

import './SocialMediaButtons.scss';

const Icon = ({ icon, url, color }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className={joinClassNames('p-3 cursor-pointer', `hover:text-${color}`)}
    >
      <i className={joinClassNames('duration-200', icon)}></i>
    </a>
  );
};

const SocialMediaButtons = ({ className }) => {
  return (
    <div
      className={joinClassNames(
        'flex xl:flex-col xl:items-center xl:justify-center',
        className
      )}
    >
      <div className="w-full text-xl text-center text-gray-600">
        <Icon
          url="https://instagram.com/gantoreno"
          icon="fab fa-instagram"
          color="red-400"
        />
        <Icon
          icon="fab fa-twitter"
          url="https://twitter.com/gantoreno"
          color="blue-400"
        />
        <Icon
          icon="fab fa-github"
          url="https://github.com/gantoreno"
          color="white"
        />
        <Icon
          icon="fab fa-linkedin-in"
          url="https://linkedin.com/in/gantoreno"
          color="blue-400"
        />
        <Icon
          icon="fab fa-behance"
          url="https://behance.net/gantoreno"
          color="purple-400"
        />
      </div>
    </div>
  );
};

export default SocialMediaButtons;
