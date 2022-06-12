import { shallow } from 'enzyme';

import Entry from './Entry';

it('renders without crashing', () => {
  const wrapper = shallow(
    <Entry title={'Example title'}>Example children</Entry>
  );
});
