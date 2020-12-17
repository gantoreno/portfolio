import { shallow } from 'enzyme';

import Entry from './Entry';

test('renders without crashing', () => {
  const wrapper = shallow(
    <Entry title={'Example title'}>Example children</Entry>
  );
});
