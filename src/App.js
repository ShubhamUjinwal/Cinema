import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import Details from './components/content/details/Details';
import Main from './components/main/Main';
import store from './redux/store';
import ErrorPage from './components/error/ErrorPage';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/:id/:name/details" component={Details} />
            <Route exact path="*" component={ErrorPage} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
