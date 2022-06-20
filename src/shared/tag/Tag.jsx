import tags from '../../extras/tags.json';

import './Tag.scss';

const Tag = ({ title }) => {
  const meta = tags.find(tag => tag.title === title);

  if (!meta) return <></>;

  return (
    <span
      className={`tag text-${meta.color}-400 bg-${meta.color}-400 bg-opacity-25 border border-${meta.color}-400 border-opacity-75 font-medium mr-1 rounded`}
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
