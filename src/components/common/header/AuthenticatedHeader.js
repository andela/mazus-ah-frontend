import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { logoutAccount } from '@Redux/actions/authActions';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import Materialize from 'materialize-css';

const AuthenticatedHeader = ({ logout, history }) => {
  useEffect(() => {
    const dropDownElems = document.querySelectorAll('.dropdown-trigger');
    const sideNavElems = document.querySelectorAll('.sidenav');
    Materialize.Sidenav.init(sideNavElems);
    Materialize.Dropdown.init(dropDownElems);
  });

  const logoutUser = () => {
    logout(logoutAccount(history));
  };

  return (
    <div>
      <ul id="dropdown1" className="dropdown-content">
        <li><Link to="*"><i className="material-icons">post_add</i>New article</Link></li>
        <li><Link to="*"><i className="material-icons">account_circle</i>Profile</Link></li>
        <li><Link to="#*" onClick={logoutUser}><i className="material-icons">exit_to_app</i>Sign out</Link></li>
      </ul>
      <nav className="nav-extended">
        <div className="nav-wrapper">
          <Link to="/">
            <span className="brand-logo">
              <img src="https://res.cloudinary.com/mazus/image/upload/c_scale,w_250/v1566927642/athors_haven_j5kpkr.png" alt="logo" />
            </span>
          </Link>
          <a href="#!" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/">HOME</Link></li>
            <li><Link to="*">BUSINESS</Link></li>
            <li><Link to="*">SCI-FI</Link></li>
            <li><Link to="*">CULTURE</Link></li>
            <li><Link to="*">MORE...</Link></li>
            <li><Link to="*"><i className="material-icons">search</i></Link></li>
            <li><a href="#!"><i className="material-icons">notifications_none</i></a></li>
            <li><a href="#!" className="profile_avatar dropdown-trigger" data-target="dropdown1"> <img src="https://image.flaticon.com/icons/svg/147/147144.svg" alt="" className="circle" /></a></li>
          </ul>
        </div>
      </nav>
      <ul className="sidenav" id="mobile-demo">
        <li><Link to="*"><i className="material-icons">post_add</i>New article</Link></li>
        <li><Link to="*"><i className="material-icons">account_circle</i>Profile</Link></li>
        <li><Link to="#*" onClick={logoutUser}><i className="material-icons">exit_to_app</i>Sign out</Link></li>
        <li className="divider" tabIndex="-1" />
        <li><Link to="/">HOME</Link></li>
        <li><Link to="*">BUSINESS</Link></li>
        <li><Link to="*">SCI-FI</Link></li>
        <li><Link to="*">CULTURE</Link></li>
        <li><Link to="*">MORE...</Link></li>
      </ul>
    </div>
  );
};

AuthenticatedHeader.propTypes = {
  auth: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({}).isRequired,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  logout: action => dispatch(action),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuthenticatedHeader));
