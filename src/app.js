import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Welcome from '@Views/welcome/Welcome';
import SignIn from '@Views/auth/signIn/Signin';
import SignUp from '@Views/auth/signUp/SignUp';
import NotFound from '@Views/notFound/NotFound';
import SubmitEmail from '@Views/passwordReset/SubmitEmail';
import PasswordResetForm from '@Views/passwordReset/NewPassword';
import store from './redux/store';
import './app.scss';


const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />
        <Route path="/forgot-password" component={SubmitEmail} />
        <Route path="/reset-password/:token" component={PasswordResetForm} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  </Provider>
);
export default App;
