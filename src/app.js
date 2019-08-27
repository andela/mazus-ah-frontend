import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './app.scss';
import Welcome from './components/views/Welcome';
import NotFound from './components/views/NotFound';

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  </Provider>

);
export default App;
