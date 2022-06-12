import { shallow } from 'enzyme';

import SocialMediaButtons from './SocialMediaButtons';

it('renders without crashing', () => {
  const wrapper = shallow(<SocialMediaButtons />);
});
