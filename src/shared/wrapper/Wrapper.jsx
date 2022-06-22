import ScrollFade from '@benestudioco/react-scrollfade';
import { joinClassNames } from '../../utils';

import './Wrapper.scss';

const Wrapper = ({ children, className }) => {
  return (
    <div
      className={joinClassNames(
        'wrapper h-screen flex flex-col overflow-y-scroll relative',
        className
      )}
    >
      {children}
      <ScrollFade />
    </div>
  );
};

export default Wrapper;
