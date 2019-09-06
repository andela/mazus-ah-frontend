import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <Fragment>
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
          <li><Link className="waves-effect waves-light btn" to="/signin">sign in</Link></li>
          <li><Link className="waves-effect waves-light btn" to="/signup">sign up</Link></li>
        </ul>
      </div>
    </nav>

    <ul className="sidenav" id="mobile-demo">
      <li><Link to="/signin"><i className="material-icons">exit_to_app</i>Sign in</Link></li>
      <li><Link to="/signin"><i className="material-icons">person_add</i>Sign up</Link></li>
      <li className="divider" tabIndex="-1" />
      <li><Link to="/">HOME</Link></li>
      <li><Link to="*">BUSINESS</Link></li>
      <li><Link to="*">SCI-FI</Link></li>
      <li><Link to="*">CULTURE</Link></li>
      <li><Link to="*">MORE...</Link></li>
    </ul>
  </Fragment>
);
