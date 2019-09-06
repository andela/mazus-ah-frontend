/* eslint-disable react/prop-types */
import React from 'react';
import { Route } from 'react-router-dom';
import Header from '@Common/header';

const ContainerWrapper = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <>
        <Header {...props} />
        <div className="container">
          <Component {...props} />
        </div>
      </>
    )}
  />
);


export default ContainerWrapper;
