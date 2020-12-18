import './Button.scss';

const Button = ({
  text,
  icon,
  hoverBackground,
  opaque,
  className,
  ...rest
}) => {
  return opaque ? (
    <button
      className={`p-3 text-xs font-bold text-black duration-200 bg-white rounded sm:text-base hover:text-white hover:bg-${hoverBackground} ${
        className && className
      }`}
      {...rest}
    >
      {text} <i className={`${icon} ml-3`}></i>
    </button>
  ) : (
    <button
      className={`p-3 text-gray-600 text-xs sm:text-base hover:text-white duration-200 sm:block ${className}`}
      {...rest}
    >
      <i className={`${icon} mr-3`}></i>
      {text}
    </button>
  );
};

export default Button;
