import './NavigationButtons.scss';

export const NavigationBar = ({ children }) => (
  <div className="flex items-center justify-between">{children}</div>
);

export default NavigationBar;
