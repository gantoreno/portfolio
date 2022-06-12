import { shallow } from 'enzyme';

import App from './App';

import Providers from '../providers';

it('renders without crashing', () => {
  const wrapper = shallow(
    <Providers>
      <App />
    </Providers>
  );
});
