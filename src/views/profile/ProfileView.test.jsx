import { shallow } from 'enzyme';

import ProfileView from './ProfileView';

import Providers from '../../providers';

it('renders without crashing', () => {
  const wrapper = shallow(
    <Providers>
      <ProfileView />
    </Providers>
  );
});
