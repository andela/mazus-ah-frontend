import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './app.scss';
import Welcome from './components/views/welcome/Welcome';
import SignIn from './components/views/auth/signIn/Signin';
import SignUp from './components/views/auth/signUp/SignUp';
import NotFound from './components/views/notFound/NotFound';

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  </Provider>
);
export default App;
