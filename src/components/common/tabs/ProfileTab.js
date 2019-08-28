import React, { Fragment } from 'react';
import './profileTab.scss';

const ProfileTab = () => (
  <Fragment>
    <div className="row profile-tab-container">
      <div className="col s12">
        <ul className="tabs">
          <li className="tab col s3"><a className="active" href="#stories">Stories</a></li>
          <li className="tab col s3"><a href="#bookmarks">Bookmarks</a></li>
          <li className="tab col s3"><a href="#drafts">Drafts</a></li>
        </ul>
      </div>
      <li className="divider" tabIndex="-1" />
      <div className="profile-articles">
        <div id="stories" className="col s12"><p>This Area Takes the Stories Component</p></div>
        <div id="bookmarks" className="col s12"><p>This Area Takes the Bookmarks Component</p></div>
        <div id="drafts" className="col s12"><p>This Area Takes the Drafts Component</p></div>
      </div>
    </div>
  </Fragment>
);

export default ProfileTab;
