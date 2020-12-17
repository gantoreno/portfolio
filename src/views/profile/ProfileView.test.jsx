import { shallow } from 'enzyme';

import ProfileView from './ProfileView';

test('renders without crashing', () => {
  const wrapper = shallow(<ProfileView />);
});
