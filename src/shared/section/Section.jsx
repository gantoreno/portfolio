import './Section.scss';

export const Title = ({ children }) => {
  return <h1 className="mb-6 font-bold text-xl sm:text-2xl">{children}</h1>;
};

export const Subtitle = ({ children }) => {
  return (
    <h2 className="mb-12 text-xs sm:text-base text-gray-600">{children}</h2>
  );
};

const Section = ({ title, subtitle, children }) => {
  return (
    <div className="h-auto p-6 md:p-24 text-center">
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      {children}
    </div>
  );
};

export default Section;
