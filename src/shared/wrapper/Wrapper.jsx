import './Wrapper.scss';

const Wrapper = ({ children, className }) => {
  return (
    <div
      className={`h-screen flex flex-col overflow-y-scroll relative ${className}`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
