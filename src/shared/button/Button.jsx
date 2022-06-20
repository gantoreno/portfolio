import { Link } from 'react-router-dom';

import './Button.scss';

export const ExternalLinkButton = ({ href, ...rest }) => {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <Button {...rest} />
    </a>
  );
};

export const LinkButton = ({ to, ...rest }) => {
  return (
    <Link to={to}>
      <Button {...rest} />
    </Link>
  );
};

const Button = ({
  text,
  leftIcon,
  rightIcon,
  hoverBackground,
  opaque,
  className,
  ...rest
}) => {
  return (
    <button
      className={`p-3 text-sm sm:text-base duration-200 rounded sm:block  ${
        opaque
          ? `bg-white text-black font-bold hover:bg-gray-100`
          : `text-gray-600 hover:text-white`
      } ${className && className}`}
      {...rest}
    >
      {leftIcon && <i className={`${leftIcon} mr-3`}></i>}
      {text}
      {rightIcon && <i className={`${rightIcon} ml-3`}></i>}
    </button>
  );
};

export default Button;
