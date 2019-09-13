import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { message as alert } from 'antd';
import '@Common/antAlert.scss';
import { registerAccount, getToken, authorizeSocialUser } from '@Redux/actions/authActions';
import InputField from '@Common/form/InputField';
import LeftDiv from '@Common/auth/leftDiv';
import SocialButtons from '@Common/auth/buttons';
import { signupText } from '@Common/auth/leftDivText';
import { passwordMatch, validatePassword } from '@Utils/validatePassword';
import '@Common/auth/auth.scss';


const SignUp = (props) => {
  const { loading, history, onSubmit } = props;

  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    error: '',
  });

  const onChange = (event) => {
    event.persist();
    setValues(prevState => ({ ...prevState, [event.target.name]: event.target.value }));
  };

  const registerUser = (event) => {
    event.preventDefault();
    onSubmit(values, history);
  };

  const passwordValidation = (event) => {
    event.persist();
    const status = validatePassword(event.target.value);
    setValues(prevState => ({ ...prevState, error: !status ? 'Password must contain at least one uppercase letter, one lowercase letter and one numeric digit' : '' }));
    setValues(prevState => ({ ...prevState, [event.target.name]: event.target.value }));
    return status;
  };

  const confirmPassworValidation = (event) => {
    event.persist();
    setValues(prevState => ({ ...prevState, [event.target.name]: event.target.value }));
  };

  useEffect(() => {
    const { location, socialSignOn } = props;
    const tokenString = location && location.search;
    if (tokenString) {
      const token = getToken(tokenString);
      socialSignOn(token);
      history.push('/');
      alert.success('Authentication was successful!');
    }
  }, [props]);

  useEffect(() => {
    const isMatch = passwordMatch(values);
    setValues(prevState => ({ ...prevState, error: !isMatch ? 'Password does not match' : '' }));
  }, [values.confirmPassword]);

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
            <div className="passwordError">
              {values.error}
            </div>
            <div className="input-field">
              <InputField
                type="password"
                value={values.password}
                onChange={passwordValidation}
                name="password"
                placeholder="Password"
                className={`form-input ${values.error && 'error'}`}
                required
              />
            </div>
            <div className="input-field">
              <InputField
                type="password"
                value={values.confirmPassword}
                onChange={confirmPassworValidation}
                name="confirmPassword"
                placeholder="Confirm Password"
                className={`form-input ${values.error && 'error'}`}
                required
              />
            </div>
            <div className="input-field">
              <button className="btn--block bttn-primary btn-submit" type="submit" value="Sign up" disabled={!!values.error}> {
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
          <div className="btn-top-margin navigate-link">
            <h3>Already have an account?
              <Link to="/signin">&nbsp;Sign In</Link>
            </h3>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
SignUp.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  errors: PropTypes.shape({}),
  auth: PropTypes.shape({}),
  history: PropTypes.shape({}).isRequired,
  loading: PropTypes.bool.isRequired,
};
SignUp.defaultProps = {
  errors: {},
  auth: {},
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.auth.errors,
  loading: state.auth.loading,
});
const mapDispatchToProps = dispatch => ({
  onSubmit: (newUser, history) => dispatch(registerAccount(newUser, history)),
  socialSignOn: token => dispatch(authorizeSocialUser(token)),
});
export const SignUpComponent = SignUp;

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUp));
