import React, { Fragment, useState } from 'react';
import ToggleDisplay from 'react-toggle-display';
import PropTypes from 'prop-types';
import './shareArticle.scss';

import {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  EmailIcon,
} from 'react-share';

const ShareArticle = ({ title, author }) => {
  const [displayIcons, setDisplayIcons] = useState(false);

  const handleClick = () => setDisplayIcons(!displayIcons);
  const hideIcons = () => setDisplayIcons(false);

  const shareUrl = window.location.href;
  const heading = `${author?.firstName} ${author?.lastName}: ${title}`;
  return (
    <Fragment>
      <ToggleDisplay show={displayIcons}>
        <div className="share-icons-wrapper" onClick={hideIcons} role="button" tabIndex="0" onKeyPress={hideIcons}>
          <FacebookShareButton
            url={shareUrl}
            quote={heading}
          >
            <FacebookIcon
              size={32}
              round
              className="icon"
            />
          </FacebookShareButton>

          <TwitterShareButton
            url={shareUrl}
            title={heading}
          >
            <TwitterIcon
              size={32}
              round
              className="icon"
            />
          </TwitterShareButton>

          <EmailShareButton
            url={shareUrl}
            subject={heading}
          >
            <EmailIcon
              size={32}
              round
              className="icon"
            />
          </EmailShareButton>
        </div>
      </ToggleDisplay>
      <i className="material-icons" onClick={handleClick} role="button" tabIndex="0" onKeyPress={handleClick}>share</i>
    </Fragment>
  );
};

ShareArticle.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.shape({}).isRequired,
};

export default ShareArticle;
