import { shallow } from 'enzyme';

import NavigationButtons from './NavigationButtons';

it('renders without crashing', () => {
  const wrapper = shallow(<NavigationButtons />);
});
