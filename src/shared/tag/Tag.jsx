import tags from '../../extras/tags.json';

import './Tag.scss';

const Tag = ({ title }) => {
  const meta = tags.find(tag => tag.title === title);

  if (!meta) return <></>;

  return (
    <span
      class={`tag text-${meta.color}-400 bg-${meta.color}-400 bg-opacity-25 border border-${meta.color}-400 border-opacity-75 font-medium mr-1 rounded-full text-xs sm:text-sm`}
    >
      <span class="icon mr-2">{meta.icon}</span>
      {title}
    </span>
  );
};

export default Tag;
