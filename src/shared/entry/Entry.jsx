import './Entry.scss';

export const Title = ({ children }) => {
  return (
    <h3 className="mb-6 text-xl sm:text-2xl text-white font-bold text-left">
      {children}
    </h3>
  );
};

export const Body = ({ children }) => {
  return (
    <p className="text-left text-xs sm:text-base leading-loose text-gray-400">
      {children}
    </p>
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
