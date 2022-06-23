import ScrollFade from '@benestudioco/react-scrollfade';
import { joinClassNames } from '../../utils';

import './Wrapper.scss';

const Wrapper = ({ children, className }) => {
  return (
    <div
      className={joinClassNames(
        'wrapper flex flex-col relative min-h-screen',
        className
      )}
    >
      <main className="w-4/5 xl:w-3/5 ml-auto">
        {children}
        <ScrollFade />
      </main>
    </div>
  );
};

export default Wrapper;
