import React, { useEffect } from 'react';
import Materialize from 'materialize-css';
import ProfileCard from '../../common/cards/ProfileCard';
import ProfileTab from '../../common/tabs/ProfileTab';

const Profile = () => {
  useEffect(() => {
    const tabElem = document.querySelector('.tabs');
    Materialize.Tabs.init(tabElem);
  }, []);

  return (
    <>
      <ProfileCard />
      <ProfileTab />
    </>
  );
};

export default Profile;
