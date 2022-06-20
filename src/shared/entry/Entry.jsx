import { default as M, ResponsiveMasonry } from 'react-responsive-masonry';

import './Entry.scss';

export const EntryTitle = ({ children }) => {
  return (
    <h3 className="mb-6 text-xl font-bold text-left text-white sm:text-2xl">
      {children}
    </h3>
  );
};

export const Paragraph = ({ children, className }) => {
  return (
    <p
      className={`mb-6 text-sm sm:text-base text-left text-gray-600 ${className}`}
    >
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

export const Masonry = ({ children }) => (
  <ResponsiveMasonry columnsCountBreakPoints={{ 200: 1, 1024: 2 }}>
    <M gutter="24px">{children}</M>
  </ResponsiveMasonry>
);

export const Figure = ({ src, alt, caption }) => (
  <figure className="mb-6">
    <img src={src} alt={alt} />
    {caption && (
      <center>
        <figcaption>
          <small className="text-xs sm:text-sm">{caption}</small>
        </figcaption>
      </center>
    )}
  </figure>
);

export const Code = ({ children }) => (
  <code class="bg-gray-750 text-gray-600 rounded">{children}</code>
);

const Entry = ({ children }) => {
  return <div className="mb-12 text-left text-gray-600">{children}</div>;
};

Entry.Title = EntryTitle;

export default Entry;
