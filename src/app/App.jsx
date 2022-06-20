import { Helmet } from 'react-helmet';
import { BrowserRouter, Route, Switch, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import {
  AboutView,
  ContactView,
  HomeView,
  ProfileView,
  ProjectsView,
} from '../views';

import './App.scss';

const ContentView = () => {
  const location = useLocation();

  return (
    <TransitionGroup className="w-full xl:w-3/5">
      <CSSTransition key={location.key} timeout={300} classNames="page">
        <Switch>
          <Route path="/" component={HomeView} exact />
          <Route path="/about" component={AboutView} exact />
          <Route path="/projects" component={ProjectsView} exact />
          <Route path="/contact" component={ContactView} exact />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

const App = () => (
  <div className="flex justify-center background">
    <div className="flex h-screen text-white bg-gray-900 max-w-screen-2xl">
      <Helmet>
        <script
          src="https://kit.fontawesome.com/90fab40786.js"
          crossorigin="anonymous"
        ></script>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
      </Helmet>
      <BrowserRouter>
        <ProfileView />
        <ContentView />
      </BrowserRouter>
    </div>
  </div>
);

export default App;
