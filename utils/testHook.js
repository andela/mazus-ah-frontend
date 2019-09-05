import React from 'react';
import { render } from 'react-testing-library';

function TestHook({ callback }) {
  callback();
  return null;
}

const testHook = (callback) => {
  render(<TestHook callback={callback} />);
};

export default testHook;
