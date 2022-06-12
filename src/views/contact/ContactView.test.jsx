import { shallow } from 'enzyme';

import ContactView from './ContactView';

import Providers from '../../providers';

it('renders without crashing', () => {
  const wrapper = shallow(
    <Providers>
      <ContactView />
    </Providers>
  );
});
