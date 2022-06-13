import parse from 'html-react-parser';

import './Entry.scss';

export const Title = ({ children }) => {
  return (
    <h3 className="mb-6 text-xl font-bold text-left text-white sm:text-2xl">
      {children}
    </h3>
  );
};

export const Body = ({ children }) => {
  return <div className="text-gray-600 text-left">{children}</div>;
};

export const Paragraph = ({ children }) => {
  return (
    <p className="mb-6 text-sm sm:text-base text-left text-gray-600">
      {children}
    </p>
  );
};

export const List = ({ items, language }) => {
  return (
    <ul className="mb-6">
      {items.map((item, id) => (
        <li id={id} key={id}>
          {parse(item[language])}
        </li>
      ))}
    </ul>
  );
};

const Entry = ({ title, children }) => {
  return (
    <div className="mb-12">
      <Title>{title}</Title>
      <Body>{children}</Body>
    </div>
  );
};

export default Entry;
