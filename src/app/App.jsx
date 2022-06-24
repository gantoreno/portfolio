import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter, Route, Switch, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import {
  AboutView,
  ContactView,
  HomeView,
  NavigationView,
  ProjectsView,
} from '../views';

import './App.scss';

const ScrollToTop = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    const canControlScrollRestoration = 'scrollRestoration' in window.history;

    if (canControlScrollRestoration) {
      window.history.scrollRestoration = 'manual';
    }

    window.scrollTo(0, 0);
  }, [pathname]);

  return <>{children}</>;
};

const ContentView = () => {
  const location = useLocation();

  return (
    <TransitionGroup className="w-full">
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
  <div className="flex justify-center background relative mx-auto ">
    <div className="flex text-white bg-gray-900 relative w-screen max-w-screen-2xl">
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
        <NavigationView />
        <ContentView />
        <ScrollToTop />
      </BrowserRouter>
    </div>
  </div>
);

export default App;
