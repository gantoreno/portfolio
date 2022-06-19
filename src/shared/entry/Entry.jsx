import './Entry.scss';

export const EntryTitle = ({ children }) => {
  return (
    <h3 className="mb-6 text-xl font-bold text-left text-white sm:text-2xl">
      {children}
    </h3>
  );
};

export const EntryBody = ({ children }) => {
  return <div className="text-gray-600 text-left">{children}</div>;
};

export const Paragraph = ({ children }) => {
  return (
    <p className="mb-6 text-sm sm:text-base text-left text-gray-600">
      {children}
    </p>
  );
};

export const Underline = ({ children }) => {
  return <u className="text-white">{children}</u>;
};

export const Bold = ({ children }) => {
  return <strong className="text-white">{children}</strong>;
};

export const ExternalLink = ({ href, children }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      class="text-white underline hover:text-yellow-400 duration-200"
    >
      {children}
    </a>
  );
};

export const List = ({ children, ...rest }) => (
  <ul className="mb-6 text-sm sm:text-base" {...rest}>
    {children}
  </ul>
);

export const ListItem = ({ title, children, ...rest }) => (
  <li {...rest}>
    {title && <strong className="text-white">{title + ' '}</strong>}
    {children}
  </li>
);

const Entry = ({ title, children }) => {
  return (
    <div className="mb-12 text-left text-gray-600">
      <EntryTitle>{title}</EntryTitle>
      {children}
    </div>
  );
};

export default Entry;
