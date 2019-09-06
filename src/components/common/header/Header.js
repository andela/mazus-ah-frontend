import React, { useEffect, Fragment } from 'react';
import Materialize from 'materialize-css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AuthentictedHeader from './AuthenticatedHeader';
import UnauthenticatedHeader from './UnauthenticatedHeader';
import './header.scss';

const Header = (props) => {
  const { isAuthenticated } = props;
  useEffect(() => {
    const dropDownElems = document.querySelectorAll('.dropdown-trigger');
    const sideNavElems = document.querySelectorAll('.sidenav');
    Materialize.Sidenav.init(sideNavElems);
    Materialize.Dropdown.init(dropDownElems);
  }, []);

  return (
    <Fragment>
      {isAuthenticated ? (<AuthentictedHeader />) : (<UnauthenticatedHeader />)}
    </Fragment>
  );
};

Header.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export const HeaderComponent = Header;

export default connect(
  mapStateToProps,
  {},
)(Header);
