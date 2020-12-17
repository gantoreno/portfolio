import { shallow } from 'enzyme';

import FadedHeader from './FadedHeader';

test('renders without crashing', () => {
  const wrapper = shallow(<FadedHeader pictureUrl="https://example.com/" />);
});
