import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { applyReset } from '@Redux/actions/passwordResetActions';
import InputField from '@Common/form/InputField';


const ResetPassword = ({
  loading, success, message, resetPassword, match: { params },
}) => {
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
  });

  const { password, confirmPassword } = formData;
  const onChange = event => setFormData({ ...formData, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    resetPassword(password, confirmPassword, params.token);
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
          <form onSubmit={handleSubmit}>
            <h4>Create New Password</h4>
            <div>
              <p>Enter New Password</p>
              <InputField
                id="password-input"
                type="password"
                value={password}
                onChange={onChange}
                name="password"
                placeholder="Password"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="8 Characters with uppercase, lowercase and numbers"
                minLength="8"
                required
              />
            </div>

            <div>
              <p>Confirm Password</p>
              <InputField
                id="confirm-password"
                name="confirmPassword"
                type="password"
                onChange={onChange}
                value={confirmPassword}
                placeholder="Password"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="8 Characters with uppercase, lowercase and numbers"
                minLength="8"
                required
              />
            </div>
            <button
              type="submit"
              id="submit"
              className="btn-block"
              value="Submit"
              disabled={loading}
            > Submit
            </button>
          </form>
        ) : (
          <div className="success-container">
            <h4>{message}</h4>
            <Link to="/signin" className="login-link">continue to login page</Link>
          </div>
        )
      }
      { loading && <div className="loading"><h5>processing request...</h5></div> }
      { error && (<div className="error-response">{<h5>{message}</h5>}</div>) }
    </div>
  );
};

ResetPassword.propTypes = {
  loading: PropTypes.bool.isRequired,
  success: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  resetPassword: PropTypes.func.isRequired,
  match: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
  loading: state.requestReset.loading,
  success: state.requestReset.success,
  message: state.requestReset.message,
});

const mapDispatchToProps = dispatch => ({
  resetPassword: (
    password,
    confirmPassword,
    token,
  ) => dispatch(applyReset(password, confirmPassword, token)),
});

export const ResetPasswordComponent = ResetPassword;
export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
