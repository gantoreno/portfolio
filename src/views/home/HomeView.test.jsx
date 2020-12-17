import { shallow } from 'enzyme';

import HomeView from './HomeView';

test('renders without crashing', () => {
  const wrapper = shallow(<HomeView language="es" />);
});
