import { shallow } from 'enzyme';

import Project from './Project';

test('renders without crashing', () => {
  const wrapper = shallow(
    <Project
      src="https://example.com/example1"
      alt="Example 1"
      title="Example 1"
      link="https://example.com/example1"
    />
  );
});
