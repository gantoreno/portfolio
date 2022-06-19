import './Section.scss';

export const SectionTitle = ({ children }) => {
  return <h1 className="mb-6 text-xl sm:text-2xl font-bold">{children}</h1>;
};

export const SectionSubtitle = ({ children }) => {
  return (
    <h2 className="mb-12 text-sm text-gray-600 sm:text-base">{children}</h2>
  );
};

const Section = ({ title, subtitle, children }) => {
  return (
    <div className="h-auto p-6 text-center md:p-24">
      <SectionTitle>{title}</SectionTitle>
      <SectionSubtitle>{subtitle}</SectionSubtitle>
      {children}
    </div>
  );
};

export default Section;
