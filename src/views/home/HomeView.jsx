import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import Button from '../../shared/button/Button';
import Wrapper from '../../shared/wrapper/Wrapper';

import './HomeView.scss';

const HomeView = () => {
  return (
    <Wrapper className="p-6 sm:p-24 justify-center items-start">
      <Helmet>
        <title>Gabriel Moreno - Home</title>
      </Helmet>
      <div className="flex flex-col-reverse xl:flex-row w-full h-full">
        <div className="flex flex-col items-center justify-center h-1/2 w-full xl:h-full xl:w-1/2 text-center xl:text-left xl:mr-3 xl:flex xl:flex-col xl:items-start xl:justify-center">
          <h1 className="mb-6 text-2xl sm:text-4xl font-bold">
            If you can <u>imagine</u> it, I can <u>create</u> it.
          </h1>
          <h2 className="mb-12 text-base sm:text-xl text-gray-600">
            Innovation starts here.
          </h2>
          <Link to="/about">
            <Button
              icon={'fas fa-arrow-right'}
              text={'Get started'}
              hoverBackground={'green-400'}
              isOpaque={true}
            />
          </Link>
        </div>
        <div className="flex items-center justify-center xl:h-full xl:w-1/2 text-center xl:text-right mb-6 xl:mb-0 xl:ml-3 xl:flex xl:flex-col md:items-start md:justify-center">
          <img
            className="w-64 xl:w-full xl:h-auto mx-auto rounded-full border-2 border-gray-800"
            src="https://avatars0.githubusercontent.com/u/43397475?v=4"
            alt="Avatar"
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default HomeView;
