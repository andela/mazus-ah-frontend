import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Materialize from 'materialize-css';

export default () => {
  useEffect(() => {
    const dropDownElems = document.querySelectorAll('.dropdown-trigger');
    const sideNavElems = document.querySelectorAll('.sidenav');
    Materialize.Sidenav.init(sideNavElems);
    Materialize.Dropdown.init(dropDownElems);
  });

  return (
    <Fragment>
      <ul id="dropdown1" className="dropdown-content">
        <li><Link to="*"><i className="material-icons">post_add</i>New article</Link></li>
        <li><Link to="*"><i className="material-icons">account_circle</i>Profile</Link></li>
        <li><a href="#!"><i className="material-icons">exit_to_app</i>Sign out</a></li>
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
        <li><a href="#!"><i className="material-icons">exit_to_app</i>Sign out</a></li>
        <li className="divider" tabIndex="-1" />
        <li><Link to="/">HOME</Link></li>
        <li><Link to="*">BUSINESS</Link></li>
        <li><Link to="*">SCI-FI</Link></li>
        <li><Link to="*">CULTURE</Link></li>
        <li><Link to="*">MORE...</Link></li>
      </ul>
    </Fragment>
  );
};
