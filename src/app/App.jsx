import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import {
  ProfileView,
  HomeView,
  AboutView,
  ProjectsView,
  ContactView,
} from '../views';

import languages from '../extras/languages';

import './App.scss';

const App = () => {
  const [language, setLanguage] = useState(localStorage.getItem('language'));

  const switchLanguage = () => {
    if (language === languages.EN) {
      localStorage.setItem('language', languages.ES);
    } else {
      localStorage.setItem('language', languages.EN);
    }

    setLanguage(localStorage.getItem('language'));
  };

  if (!language) {
    localStorage.setItem('language', languages.ES);
  }

  return (
    <div className="flex h-screen bg-black text-white">
      <Helmet>
        <script
          src="https://kit.fontawesome.com/90fab40786.js"
          crossorigin="anonymous"
        ></script>
      </Helmet>
      <Router>
        <ProfileView language={language} />
        <Route
          render={({ location }) => (
            <TransitionGroup className="w-full xl:w-3/5">
              <CSSTransition key={location.key} timeout={300} classNames="page">
                <Switch>
                  <Route
                    exact
                    path="/"
                    component={() => (
                      <HomeView
                        language={language}
                        setLanguage={setLanguage}
                        switchLanguage={switchLanguage}
                      />
                    )}
                  />
                  <Route
                    exact
                    path="/about"
                    component={() => <AboutView language={language} />}
                  />
                  <Route
                    exact
                    path="/projects"
                    component={() => <ProjectsView language={language} />}
                  />
                  <Route
                    exact
                    path="/contact"
                    component={() => <ContactView language={language} />}
                  />
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
