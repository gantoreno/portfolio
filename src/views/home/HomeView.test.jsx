import { shallow } from 'enzyme';

import HomeView from './HomeView';

import Providers from '../../providers';

it('renders without crashing', () => {
  const wrapper = shallow(
    <Providers>
      <HomeView />
    </Providers>
  );
});
