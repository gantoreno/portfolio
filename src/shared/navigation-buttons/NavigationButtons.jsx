import { Link } from 'react-router-dom';
import { Button } from '../';

import './NavigationButtons.scss';

export const NavigationBar = ({ children }) => (
  <div className="flex items-center justify-between">{children}</div>
);

const NavigationButtons = ({ prev, next, color, language }) => {
  return (
    <div className="flex items-center justify-center sm:justify-between">
      {prev && (
        <Link to={prev.route}>
          <Button
            text={prev.text[language]}
            leftIcon="fas fa-arrow-left"
            className={prev.shouldBeHidden ? 'hidden' : ''}
          />
        </Link>
      )}
      {next && (
        <Link to={next.route}>
          <Button
            text={next.text[language]}
            rightIcon={'fas fa-arrow-right'}
            hoverBackground={color}
            className={next.shouldBeHidden ? 'hidden' : ''}
            opaque
          />
        </Link>
      )}
    </div>
  );
};

export default NavigationButtons;
