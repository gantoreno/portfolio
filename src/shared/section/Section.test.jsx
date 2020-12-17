import { shallow } from 'enzyme';

import Section from './Section';

test('renders without crashing', () => {
  const wrapper = shallow(
    <Section title="Example title" subtitle="Example subtitle">
      Example children
    </Section>
  );
});
