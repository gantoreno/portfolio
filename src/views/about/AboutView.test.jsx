import { shallow } from 'enzyme';

import AboutView from './AboutView';

test('renders without crashing', () => {
  const wrapper = shallow(<AboutView />);
});
