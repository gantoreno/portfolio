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
import { useLocalStorage } from '../hooks/useLocalStorage';

import languages from '../extras/languages.json';

import './App.scss';

const App = () => {
  const [language, setLanguage] = useLocalStorage('language', 'es');

  const switchLanguage = () => {
    if (language === languages.EN) {
      setLanguage(languages.ES);
    } else {
      setLanguage(languages.EN);
    }
  };

  return (
    <div className="flex h-screen text-white bg-black">
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
