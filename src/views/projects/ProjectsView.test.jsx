import { shallow } from 'enzyme';

import ProjectsView from './ProjectsView';

import Providers from '../../providers';

it('renders without crashing', () => {
  const wrapper = shallow(
    <Providers>
      <ProjectsView />
    </Providers>
  );
});
