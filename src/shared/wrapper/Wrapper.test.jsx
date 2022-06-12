import { shallow } from 'enzyme';

import Wrapper from './Wrapper';

it('renders without crashing', () => {
  const wrapper = shallow(<Wrapper />);
});
