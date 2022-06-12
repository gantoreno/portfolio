import { shallow } from 'enzyme';

import AboutView from './AboutView';

import Providers from '../../providers';

it('renders without crashing', () => {
  const wrapper = shallow(
    <Providers>
      <AboutView />
    </Providers>
  );
});
