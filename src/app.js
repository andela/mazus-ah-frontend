import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import './app.scss';

const App = () => (
  <Provider store={store}>
    <div>
      <h1>Hello Mazus</h1>
    </div>
  </Provider>
);
export default App;
