import { Link } from 'react-router-dom';

import { Button } from '../';

import './NavigationButtons.scss';

const NavigationButtons = ({ prev, next, color, language }) => {
  return (
    <div className="flex justify-center sm:justify-between items-center">
      {prev && (
        <Link to={prev.route}>
          <Button
            icon="fas fa-arrow-left"
            text={prev.text[language]}
            className={prev.shouldBeHidden ? 'hidden' : ''}
          />
        </Link>
      )}
      {next && (
        <Link to={next.route}>
          <Button
            icon={'fas fa-arrow-right'}
            text={next.text[language]}
            hoverBackground={`${color}-400`}
            isOpaque={true}
            className={next.shouldBeHidden ? 'hidden' : ''}
          />
        </Link>
      )}
    </div>
  );
};

export default NavigationButtons;
