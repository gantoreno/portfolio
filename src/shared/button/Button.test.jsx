import { shallow } from 'enzyme';

import Button from './Button';

it('renders without crashing', () => {
  const wrapper = shallow(
    <Button text="Button 1" icon="fas fa-question" isOpaque={false} />
  );
});
