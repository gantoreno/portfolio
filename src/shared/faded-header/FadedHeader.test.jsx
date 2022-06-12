import { shallow } from 'enzyme';

import FadedHeader from './FadedHeader';

it('renders without crashing', () => {
  const wrapper = shallow(<FadedHeader pictureUrl="https://example.com/" />);
});
