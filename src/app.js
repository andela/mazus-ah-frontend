import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './app.scss';
import NotFound from './components/views/NotFound/NotFound';
import Header from './components/common/header';
import Card from './components/common/landingPage/cards';

const App = () => (
  <Provider store={store}>
    <Router>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Card} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  </Provider>

);
export default App;
