import { Link } from 'react-router-dom';

import { joinClassNames } from '../../utils';

import './Button.scss';

export const ExternalLinkButton = ({
  href,
  text,
  leftIcon,
  rightIcon,
  hoverBackground,
  opaque,
  className,
  ...rest
}) => {
  return (
    <a
      href={href}
      className={joinClassNames(
        'p-3 text-sm sm:text-base duration-200 rounded sm:block',
        opaque
          ? `bg-white text-black font-bold hover:bg-gray-100`
          : `text-gray-600 hover:text-white`,
        className
      )}
      target="_blank"
      rel="noreferrer"
      {...rest}
    >
      {leftIcon && <i className={`${leftIcon} mr-3`}></i>}
      {text}
      {rightIcon && <i className={`${rightIcon} ml-3`}></i>}
    </a>
  );
};

export const LinkButton = ({
  to,
  text,
  leftIcon,
  rightIcon,
  hoverBackground,
  opaque,
  className,
  ...rest
}) => {
  return (
    <Link
      to={to}
      className={joinClassNames(
        'p-3 text-sm sm:text-base duration-200 rounded sm:block',
        opaque
          ? `bg-white text-black font-bold hover:bg-gray-100`
          : `text-gray-600 hover:text-white`,
        className
      )}
      {...rest}
    >
      {leftIcon && <i className={`${leftIcon} mr-3`}></i>}
      {text}
      {rightIcon && <i className={`${rightIcon} ml-3`}></i>}
    </Link>
  );
};

const Button = ({
  text,
  leftIcon,
  rightIcon,
  hoverBackground,
  opaque,
  className = '',
  ...rest
}) => {
  return (
    <button
      className={joinClassNames(
        'p-3 text-sm sm:text-base duration-200 rounded sm:block',
        opaque
          ? `bg-white text-black font-bold hover:bg-gray-100`
          : `text-gray-600 hover:text-white`,
        className
      )}
      {...rest}
    >
      {leftIcon && <i className={`${leftIcon} mr-3`}></i>}
      {text}
      {rightIcon && <i className={`${rightIcon} ml-3`}></i>}
    </button>
  );
};

export default Button;
