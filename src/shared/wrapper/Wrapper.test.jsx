import { shallow } from 'enzyme';

import Wrapper from './Wrapper';

test('renders without crashing', () => {
  const wrapper = shallow(<Wrapper />);
});
