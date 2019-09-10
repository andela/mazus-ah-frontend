import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {
  faGoogle,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import { socialLink } from '@Redux/actions/authActions';

const Button = () => (

  <div>
    <div className="input-field">
      <button className="btn--block btn-google" type="submit" value="Sign in" onClick={() => socialLink('google')}>
        <span className="social-icon-left"><FontAwesomeIcon icon={faGoogle} /></span>
        Continue with Google
        <span className="social-icon-right"><FontAwesomeIcon icon={faArrowRight} /></span>
      </button>
    </div>
    <div className="input-field">
      <button className="btn--block btn-facebook" type="submit" value="Sign in" onClick={() => socialLink('facebook')}>
        <span className="social-icon-left"><FontAwesomeIcon icon={faFacebook} /></span>
        Continue with Facebook <span className="social-icon-right"><FontAwesomeIcon icon={faArrowRight} /></span>
      </button>
    </div>
  </div>


);

export default Button;
