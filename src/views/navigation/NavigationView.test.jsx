import { shallow } from 'enzyme';

import NavigationView from './NavigationView';

import Providers from '../../providers';

it('renders without crashing', () => {
  const wrapper = shallow(
    <Providers>
      <NavigationView />
    </Providers>
  );
});
