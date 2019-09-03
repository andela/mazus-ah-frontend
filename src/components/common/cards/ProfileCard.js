import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './profileCard.scss';


const ProfileCard = ({ profile, user, match }) => (
  <Fragment>
    <div className="container profile-view">
      <div className="row">
        <div className="col s8 push-s4">
          <span className="flow-text">
            <div className="edit--profile">
              <h2 className="profile-author-name">{profile.firstName} {profile.lastName}</h2>
              { user.id === match.params.userId && <Link to="/edit-profile"><i className="material-icons">edit</i></Link>}
            </div>
            <p className="profile-author-bio">{profile?.profilebio}</p>
            <div className="follower-stats">
              <Link to="/followers"><p>{profile?.userFollowers} Followers</p></Link>
              <Link to="/following"><p>{profile?.userFollowing} Following</p></Link>
            </div>
          </span>
        </div>
        <div className="col s4 pull-s8">
          <span className="flow-text">
            <img
              src={profile?.profileavatar}
              alt=""
              id="profile-img-page"
              className="profile__image"
            />
          </span>
        </div>
      </div>
    </div>
  </Fragment>
);

ProfileCard.propTypes = {
  profile: PropTypes.shape({}).isRequired,
  user: PropTypes.shape({}).isRequired,
  match: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
  profile: state.profile.profile,
  user: state.auth.user,
});

export const ProfileCardComponent = ProfileCard;

export default withRouter(connect(mapStateToProps, null)(ProfileCard));
