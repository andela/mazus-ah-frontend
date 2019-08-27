import React from 'react';
import { shallow } from 'enzyme';
import App from './app';

describe('Main App Component', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });
});
