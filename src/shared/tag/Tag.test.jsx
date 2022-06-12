import { shallow } from 'enzyme';

import Tag from './Tag';

it('renders without crashing', () => {
  const wrapper = shallow(<Tag title="react" />);
});
