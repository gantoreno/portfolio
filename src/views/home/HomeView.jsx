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
      <h1 className="mb-6 text-2xl sm:text-4xl font-bold">
        If you can <br />
        <u>imagine</u> it, I can <br />
        <u>create</u> it.
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
    </Wrapper>
  );
};

export default HomeView;
