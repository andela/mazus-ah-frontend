import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { requestPasswordResetLink } from '@Redux/actions/passwordResetActions';
import InputField from '@Common/form/InputField';
import './passwordReset.scss';


const SubmitEmail = ({
  loading, success, message, requestResetLink,
}) => {
  const [email, setEmail] = useState('');

  const handleChange = event => setEmail(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    requestResetLink(email);
  };

  const error = !success && message;
  return (
    <div className="passwd-container">
      <Link to="/">
        <span className="brand-logo logo">
          <img src="https://res.cloudinary.com/mazus/image/upload/v1567523357/logo_white_background_small.png" alt="logo" />
        </span>
      </Link>
      {
        !success ? (
          <form onSubmit={handleSubmit} id="form">
            <h4>Reset Password</h4>
            <div>
              <p>Email Address</p>
              <InputField
                id="email-input"
                type="email"
                name="email"
                onChange={handleChange}
                value={email}
                required
              />
            </div>
            <button
              type="submit"
              id="submit"
              value="Submit"
              disabled={loading}
            > Submit
            </button>
          </form>
        ) : (<h4>{message}</h4>)
      }
      { loading && <div className="loading"><h5>processing request...</h5></div> }
      { error && (<div className="error-response">{<h5>{message}</h5>}</div>) }
    </div>
  );
};

SubmitEmail.propTypes = {
  requestResetLink: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  success: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  loading: state.requestReset.loading,
  success: state.requestReset.success,
  message: state.requestReset.message,
});

const mapDispatchToProps = dispatch => ({
  requestResetLink: email => dispatch(requestPasswordResetLink(email)),
});

export const SubmitEmailComponent = SubmitEmail;
export default connect(mapStateToProps, mapDispatchToProps)(SubmitEmail);
