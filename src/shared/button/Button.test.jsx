import { shallow } from 'enzyme';

import Button from './Button';

test('renders without crashing', () => {
  const wrapper = shallow(
    <Button
      text="Button 1"
      icon="fas fa-question"
      isOpaque={false}
      hoverBackground="red-400"
    />
  );
});
