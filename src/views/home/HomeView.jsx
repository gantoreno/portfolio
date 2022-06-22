import { Helmet } from 'react-helmet';

import { LinkButton, Underline, Wrapper } from '../../shared/';

import './HomeView.scss';

const HomeView = () => {
  return (
    <Wrapper className="h-screen w-full">
      <Helmet>
        <title>Gabriel Moreno - Home</title>
      </Helmet>
      <div className="flex flex-col-reverse ml-auto xl:flex-row justify-center align-middle h-screen p-6 xl:p-24">
        <div className="flex flex-col items-center justify-center text-center h-1/2 xl:h-full xl:w-1/2 xl:text-left xl:mr-12 xl:flex xl:flex-col xl:items-start xl:justify-center">
          <h1 className="mb-6 text-3xl font-bold sm:text-4xl">
            If you can <Underline>imagine</Underline> it, I can{' '}
            <Underline>create</Underline> it.
          </h1>
          <h2 className="mb-6 text-lg text-gray-600 sm:text-xl">
            Innovation starts here.
          </h2>
          <LinkButton
            to="/about"
            text="Get started"
            rightIcon={'fas fa-arrow-right'}
            hoverBackground={'green-400'}
            opaque
          />
        </div>
        <div className="flex items-center justify-center mb-6 text-center xl:h-full xl:w-1/2 xl:text-right xl:mb-0 xl:ml-12 xl:flex xl:flex-col md:items-start md:justify-center">
          <img
            className="w-64 h-64 mx-auto border border-gray-700 rounded-full xl:w-64 xl:h-64"
            src="/assets/img/profile.png"
            alt="Avatar"
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default HomeView;
