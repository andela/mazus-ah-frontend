import React, { useEffect, Fragment } from 'react';
import Materialize from 'materialize-css';
import AuthentictedHeader from './AuthenticatedHeader';
import './header.scss';

export default () => {
  useEffect(() => {
    const dropDownElems = document.querySelectorAll('.dropdown-trigger');
    const sideNavElems = document.querySelectorAll('.sidenav');
    Materialize.Sidenav.init(sideNavElems);
    Materialize.Dropdown.init(dropDownElems);
  }, []);

  return (
    <Fragment>
      <AuthentictedHeader />
    </Fragment>
  );
};
