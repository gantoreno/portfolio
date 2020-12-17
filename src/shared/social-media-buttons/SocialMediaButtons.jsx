import './SocialMediaButtons.scss';

import content from './content.json';

const Icon = ({ icon, link, color }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className={`p-3 hover:text-${color} cursor-pointer`}
    >
      <i className={`${icon} duration-200`}></i>
    </a>
  );
};

const SocialMediaButtons = ({ className }) => {
  return (
    <div
      className={`flex xl:flex-col xl:items-center xl:justify-center ${className}`}
    >
      <div className="w-full text-center text-xl text-gray-600">
        {content.map(media => (
          <Icon
            id={media.id}
            key={media.id}
            link={media.link}
            icon={media.icon}
            color={media.color}
          />
        ))}
      </div>
    </div>
  );
};

export default SocialMediaButtons;
