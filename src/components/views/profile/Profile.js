import React, { useEffect, Fragment } from 'react';
import Materialize from 'materialize-css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchUserProfile, fetchProfileArticles, fetchUserOwnProfileArticles } from '@Actions/profileActions';
import ProfileCard from '@Common/cards/ProfileCard';
import ProfileTab from '@Common/tabs/ProfileTab';

const Profile = ({
  fetchUserProfile: fetchProfile,
  fetchProfileArticles: fetchArticles,
  fetchUserOwnProfileArticles: fetchUserOwnArticles,
  profile,
  match,
  user,
}) => {
  useEffect(() => {
    const tabElem = document.querySelector('.tabs');
    Materialize.Tabs.init(tabElem);

    const getProfile = async () => {
      const { params } = match;
      await fetchProfile(params.userId);
      if (params.userId === user.id) {
        const userArticles = await fetchUserOwnArticles();
        return userArticles;
      }
      const userArticles = await fetchArticles(params.userId);
      return userArticles;
    };
    getProfile();
  }, [match, fetchProfile, fetchArticles, fetchUserOwnArticles, user]);

  return (
    <Fragment>
      <ProfileCard {...profile} />
      <ProfileTab {...profile} {...user} />
    </Fragment>
  );
};

Profile.propTypes = {
  fetchUserProfile: PropTypes.func.isRequired,
  fetchProfileArticles: PropTypes.func.isRequired,
  fetchUserOwnProfileArticles: PropTypes.func.isRequired,
  profile: PropTypes.shape({}).isRequired,
  match: PropTypes.shape({}).isRequired,
  user: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
  profile: state.profile,
  user: state.auth.user,
});

export const ProfileComponent = Profile;

export default connect(mapStateToProps, {
  fetchUserProfile,
  fetchProfileArticles,
  fetchUserOwnProfileArticles,
})(Profile);
