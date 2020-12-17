import { shallow } from 'enzyme';

import SocialMediaButtons from './SocialMediaButtons';

test('renders without crashing', () => {
  const wrapper = shallow(<SocialMediaButtons />);
});
