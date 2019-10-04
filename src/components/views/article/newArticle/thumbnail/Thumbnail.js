import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Holder from '@Views/article/newArticle/Holder';
import './thumbnail.scss';

const instance = axios.create({
  header: {},
});
const uploadIcon = 'https://res.cloudinary.com/mazus/image/upload/v1568216205/Screen_Shot_2019-09-11_at_4.34.49_PM_bzmcf9.png';
const cloudyLoader = 'https://res.cloudinary.com/mazus/image/upload/v1568231368/Cloudy-4s-200px_2_dq0j5b.gif';
const Thumbnail = (props) => {
  const [thumbnail, setThumbmail] = useState('');
  const [loader, setLoader] = useState(false);
  const [newThumbnail, setNewThumbnail] = useState(false);

  const uploadThumbnail = async (e) => {
    const uploadLocation = 'https://api.cloudinary.com/v1_1/mazus/image/upload';
    const formData = new FormData();
    const file = e.target.files[0];
    formData.append('file', file);
    formData.append('upload_preset', 'ml_default');
    setLoader(true);
    const res = await instance.post(uploadLocation, formData, { headers: { 'X-Requested-With': 'XMLHttpRequest' } });

    setThumbmail(res.data.url);
    setLoader(false);
    setNewThumbnail(true);
    props.getThumbnail(...thumbnail, res.data.url);
    return { thumbnail, loader };
  };

  const sendThumbnail = () => props.getThumbnail(thumbnail);

  return (
    <div className="thumbmail-wrapper">
      <Holder sendThumbnail={sendThumbnail} />
      { !newThumbnail ? (
        <label htmlFor="upload-thumbnail">
          { !loader ? <img className="thumbnail" alt="upload" src={uploadIcon} /> : <img className="thumbnail" src={cloudyLoader} alt="cloudy" /> }
          <input type="file" id="upload-thumbnail" accept="image/*" onChange={e => uploadThumbnail(e)} />
        </label>
      ) : (
        <label htmlFor="upload-thumbnail">
          <img className="thumbnail" alt="newThumbnail" src={thumbnail} />
          <input type="file" id="upload-thumbnail" accept="image/*" onChange={e => uploadThumbnail(e)} />
        </label>
      )}
    </div>
  );
};

Thumbnail.propTypes = {
  getThumbnail: PropTypes.func.isRequired,
};

export default Thumbnail;
