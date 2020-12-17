import { shallow } from 'enzyme';

import ProjectsView from './ProjectsView';

test('renders without crashing', () => {
  const wrapper = shallow(<ProjectsView language="es" />);
});
