import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Profile from '../shared/profile/Profile';

import HomeView from '../views/home/HomeView';
import AboutView from '../views/about/AboutView';
import ProjectsView from '../views/projects/ProjectsView';
import ContactView from '../views/contact/ContactView';

import './App.scss';

const App = () => {
  return (
    <div className="flex h-screen bg-black text-white">
      <Helmet>
        <script
          src="https://kit.fontawesome.com/90fab40786.js"
          crossorigin="anonymous"
        ></script>
      </Helmet>
      <Router>
        <Profile />
        <Route
          render={({ location }) => (
            <TransitionGroup className="w-full xl:w-3/5">
              <CSSTransition key={location.key} timeout={300} classNames="page">
                <Switch>
                  <Route exact path="/" component={HomeView} />
                  <Route exact path="/about" component={AboutView} />
                  <Route exact path="/projects" component={ProjectsView} />
                  <Route exact path="/contact" component={ContactView} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </Router>
    </div>
  );
};

export default App;
