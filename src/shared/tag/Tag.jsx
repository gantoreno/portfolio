import tags from '../../extras/tags.json';

import './Tag.scss';

const Tag = ({ title }) => {
  const meta = tags.find(tag => tag.title === title);

  if (!meta) return <></>;

  return (
    <span
      class={`tag text-${meta.color}-400 bg-${meta.color}-400 bg-opacity-25 border border-${meta.color}-400 border-opacity-75 p-0 text-xs sm:text-xs font-medium mr-1`}
    >
      {title}
    </span>
  );
};

export default Tag;
