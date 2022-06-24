import { Emoji as E } from 'react-apple-emojis';
import { default as M, ResponsiveMasonry } from 'react-responsive-masonry';
import { useSnackbar } from 'react-simple-snackbar';

import { snackbarSettings } from '../../settings';
import { joinClassNames } from '../../utils';

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
      className={joinClassNames(
        'mb-6 text-sm sm:text-base text-left text-gray-600',
        className
      )}
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

export const Emoji = ({ name, className, ...rest }) => {
  return (
    <E name={name} className={joinClassNames('emoji', className)} {...rest} />
  );
};

export const ExternalLink = ({ href, children }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="text-white underline hover:text-yellow-400 duration-200"
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

List.Item = ListItem;

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
  <code class="bg-gray-800 text-white rounded">{children}</code>
);

export const CodeBlock = ({ children }) => {
  const [open] = useSnackbar(snackbarSettings);

  const copy = () => {
    navigator.clipboard.writeText(children).then(() => {
      open('✅ Command copied to the clipboard');
    });
  };

  return (
    <div className="relative mb-6">
      <pre className="text-left w-full text-white p-3 rounded bg-gray-800 text-xs sm:text-sm">
        {children}
      </pre>
      <span
        className="absolute top-3 text-xs sm:text-sm right-3 cursor-pointer text-gray-600 opacity-50 hover:opacity-100 transition-all"
        onClick={copy}
      >
        {<Emoji name="clipboard" />}
      </span>
    </div>
  );
};

const Entry = ({ children }) => {
  return (
    <article className="mb-12 text-left text-gray-600">{children}</article>
  );
};

Entry.Title = EntryTitle;

export default Entry;
