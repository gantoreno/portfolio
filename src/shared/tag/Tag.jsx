import tags from '../../extras/tags.json';
import { joinClassNames } from '../../utils';

import './Tag.scss';

const Tag = ({ title }) => {
  const meta = tags.find(tag => tag.title === title);

  if (!meta) return <></>;

  return (
    <span
      className={joinClassNames(
        'tag bg-opacity-25 border border-opacity-75 font-medium mr-1 rounded',
        `text-${meta.color}-400`,
        `bg-${meta.color}-400`,
        `border-${meta.color}-400`
      )}
    >
      <>
        {meta.type === 'icon' && <i className={meta.icon}></i>}
        {meta.type === 'svg' && (
          <img
            className="inline-block"
            src={require(`../../assets/svg/${meta.icon}`).default}
            alt={meta.title}
          ></img>
        )}
      </>{' '}
      {title}
    </span>
  );
};

export default Tag;
