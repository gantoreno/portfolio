import './Section.scss';

export const Title = ({ children }) => {
  return <h1 className="mb-6 text-xl sm:text-2xl font-bold">{children}</h1>;
};

export const Subtitle = ({ children }) => {
  return (
    <h2 className="mb-12 text-sm text-gray-600 sm:text-base">{children}</h2>
  );
};

const Section = ({ title, subtitle, children }) => {
  return (
    <div className="h-auto p-6 text-center md:p-24">
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      {children}
    </div>
  );
};

export default Section;
