import { shallow } from 'enzyme';

import App from './App';

test('renders without crashing', () => {
  const wrapper = shallow(<App />);
});
