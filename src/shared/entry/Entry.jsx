import './Entry.scss';

export const Title = ({ children }) => {
  return (
    <h3 className="mb-6 text-xl font-bold text-left text-white sm:text-2xl">
      {children}
    </h3>
  );
};

export const Body = ({ children }) => {
  return (
    <p className="text-xs leading-loose text-left text-gray-600 sm:text-base">
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
