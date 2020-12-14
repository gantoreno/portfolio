import { shallow } from 'enzyme';

import Card from './Card';

test('renders without crashing', () => {
  const wrapper = shallow(
    <Card
      emoji={'🤖'}
      title="Project 1"
      description="Description for project 1"
      link="https://example.com/project1"
    />
  );
});
