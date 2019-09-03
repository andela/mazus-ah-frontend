import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Toastr from 'toastr';
import { getToken, authorizeSocialUser } from '@Redux/actions/socialActions';
import { registerAccount } from '@Redux/actions/authActions';
import InputField from '@Common/form/InputField';
import LeftDiv from '@Common/auth/leftDiv';
import SocialButtons from '@Common/auth/buttons';
import { signupText } from '@Common/auth/leftDivText';
import '@Common/auth/auth.scss';

const SignUp = (props) => {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  useEffect(() => {
    const { location, socialSignOn, history } = props;
    const tokenString = location && location.search;
    if (tokenString) {
      const token = getToken(tokenString);
      socialSignOn(token);
      history.push('/');
      Toastr.success('Authentication was successful!');
    }
  }, [props]);

  const { loading, history, onSubmit } = props;
  const onChange = (event) => {
    event.persist();
    setValues(prevState => ({ ...prevState, [event.target.name]: event.target.value }));
  };
  const registerUser = (event) => {
    event.preventDefault();
    if (values.password !== values.confirmPassword) {
      Toastr.error('Passwords do not match');
      return;
    }
    onSubmit(values, history);
  };
  return (
    <Fragment>
      <div className="container-body">
        <LeftDiv text={signupText} />
        <div className="right-block">
          <form
            onSubmit={registerUser}
            className="main-form-signup"
          >
            <div className="flex-input">
              <div className="flex-field">
                <div className="input-field">
                  <InputField
                    type="text"
                    value={values.firstName}
                    onChange={onChange}
                    name="firstName"
                    placeholder="First Name"
                    className="form-input"
                    required
                  />
                </div>
              </div>
              <div className="flex-field">
                <div className="input-field">
                  <InputField
                    type="text"
                    value={values.lastName}
                    onChange={onChange}
                    name="lastName"
                    placeholder="Last Name"
                    className="form-input"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="input-field">
              <InputField
                type="email"
                value={values.email}
                onChange={onChange}
                name="email"
                placeholder="Email"
                className="form-input"
                required
              />
            </div>
            <div className="input-field">
              <InputField
                type="password"
                value={values.password}
                onChange={onChange}
                name="password"
                placeholder="Password"
                className="form-input"
                required
              />
            </div>
            <div className="input-field">
              <InputField
                type="password"
                value={values.confirmPassword}
                onChange={onChange}
                name="confirmPassword"
                placeholder="Confirm Password"
                className="form-input"
                required
              />
            </div>
            <div className="input-field">
              <button className="btn--block bttn-primary btn-submit" type="submit" value="Sign up" disabled={loading}> {
                loading ? 'Loading...' : 'Create your free account'
              }
                <i className="arrow-forward material-icons">arrow_forward</i>
              </button>
            </div>
          </form>
          <div className="input-field">
            <h2 id="htwo-space">
              <div className="input-row">
                <div className="column1"><hr /></div>
                <div className="column2">OR</div>
                <div className="column1"><hr /></div>
              </div>
            </h2>
          </div>
          <SocialButtons />
        </div>
      </div>
    </Fragment>
  );
};
SignUp.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  errors: PropTypes.shape({}),
  auth: PropTypes.shape({}),
  social: PropTypes.shape({}),
  history: PropTypes.shape({}).isRequired,
  loading: PropTypes.bool.isRequired,
};
SignUp.defaultProps = {
  errors: {},
  auth: {},
  social: {},
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.auth.errors,
  loading: state.auth.loading,
  social: state.social,
});
const mapDispatchToProps = dispatch => ({
  onSubmit: (newUser, history) => dispatch(registerAccount(newUser, history)),
  socialSignOn: token => dispatch(authorizeSocialUser(token)),
});

// export const onRegisterUser = (newUser, history) => registerAccount(newUser, history);
export const SignUpComponent = SignUp;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUp);
