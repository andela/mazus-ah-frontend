import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './profileCard.scss';

const ProfileCard = () => (
  <Fragment>
    <div className="container profile-view">
      <div className="row">
        <div className="col s8 push-s4">
          <span className="flow-text">
            <div className="edit--profile">
              <h2 className="profile-author-name">Author Name</h2>
              <Link to="/edit-profile"><i className="material-icons">edit</i></Link>
            </div>
            <p className="profile-author-bio">Author Bio goes here and it could be over one hundred and fourty characters long.
            This is a sample text to test the bio display
            </p>
            <div className="follower-stats">
              <Link to="/followers"><p>35 Followers</p></Link>
              <Link to="/following"><p>12 Following</p></Link>
            </div>
          </span>
        </div>
        <div className="col s4 pull-s8">
          <span className="flow-text">
            <img src="https://image.flaticon.com/icons/svg/147/147144.svg" alt="" id="profile-img-page" className="circle" />
          </span>
        </div>
      </div>
    </div>
  </Fragment>
);

export default ProfileCard;
