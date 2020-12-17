import { shallow } from 'enzyme';

import NavigationButtons from './NavigationButtons';

test('renders without crashing', () => {
  const wrapper = shallow(<NavigationButtons />);
});
