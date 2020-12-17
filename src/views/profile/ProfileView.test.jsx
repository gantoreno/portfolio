import { shallow } from 'enzyme';

import Profile from './Profile';

test('renders without crashing', () => {
  const wrapper = shallow(<Profile />);
});
