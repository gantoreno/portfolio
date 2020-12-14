import { shallow } from 'enzyme';

import ContactView from './ContactView';

test('renders without crashing', () => {
  const wrapper = shallow(<ContactView />);
});
