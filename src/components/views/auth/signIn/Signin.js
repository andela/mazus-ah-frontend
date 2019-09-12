import React, { useState, Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { signInAccount } from '@Redux/actions/authActions';
import InputField from '@Common/form/InputField';
import LeftDiv from '@Common/auth/leftDiv';
import SocialButtons from '@Common/auth/buttons';
import { getToken } from '@Redux/actions/socialActions';
import { signinText } from '@Common/auth/leftDivText';
import '@Common/auth/auth.scss';

const Signin = (props) => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const { loading, history, onSubmit } = props;

  useEffect(() => {
    const { location } = props;
    const tokenString = location && location.search;
    if (tokenString) {
      const token = getToken(tokenString);
      const userData = null;
      onSubmit(userData, history, token);
      history.push('/');
    }
  }, [props]);

  const onChange = (event) => {
    event.persist();
    setValues(prevState => ({ ...prevState, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const accountVerificationToken = null;
    onSubmit(values, history, accountVerificationToken);
  };
  return (
    <Fragment>
      <div className="container-body">
        <LeftDiv text={signinText} />
        <div className="right-block">
          <div className="img-mobile-field">
            <img src="https://res-console.cloudinary.com/mazus/thumbnails/transform/v1/image/upload/Y19zY2FsZSx3XzI3MQ==/v1567070037/YXRob3JzX2hhdmVuXzFfbDFueG9o/template_primary" alt="Author's Haven Logo" />
          </div>
          <form onSubmit={handleSubmit} className="main-form">
            <div>
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
              <div className="form-links">
                <h5>
                  <Link to="/forgot-password">forgot password?</Link>
                </h5>
              </div>
            </div>
            <div className="input-field">
              <button className="bttn bttn-primary btn-block bttn-large" type="submit" value="Sign In" disabled={loading}>{
                loading ? 'Loading...' : 'Sign In'
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
          <div className="input-field btn-top-margin navigate-link">
            <h3>New to Authors Haven?
              <Link to="/signup">&nbsp;Sign Up</Link>
            </h3>
          </div>
        </div>
        <div id="clear" />
      </div>
    </Fragment>
  );
};

Signin.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  history: PropTypes.shape({}).isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.auth.errors,
  loading: state.auth.loading,
});
const mapDispatchToProps = dispatch => ({
  onSubmit: (userData, history, token) => dispatch(signInAccount(userData, history, token)),
});
export const SigninComponent = Signin;
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Signin));
