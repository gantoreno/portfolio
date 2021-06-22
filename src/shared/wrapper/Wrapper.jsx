import './Wrapper.scss';

const Wrapper = ({ children, className }) => {
  return (
    <div
      className={`wrapper h-screen flex flex-col overflow-y-scroll relative ${className}`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
