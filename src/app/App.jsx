import { Helmet } from 'react-helmet';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import {
  ProfileView,
  HomeView,
  AboutView,
  ProjectsView,
  ContactView,
} from '../views';
import { withLanguage } from '../wrappers';

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

const App = () => {
  return (
    <div className="flex justify-center background">
      <div className="flex h-screen text-white bg-gray-900 max-w-screen-2xl">
        <Helmet>
          <script
            src="https://kit.fontawesome.com/90fab40786.js"
            crossorigin="anonymous"
          ></script>
        </Helmet>
        <Router>
          <ProfileView />
          <ContentView />
        </Router>
      </div>
    </div>
  );
};

export default withLanguage(App);
