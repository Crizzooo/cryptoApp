import React from 'react';
import { connect } from 'react-redux';

import { loginUser } from '../reducers/user';

export const Login = ({ login }) => (
  <div class="inherit loginGroup">
    <form onSubmit={evt => {
      evt.preventDefault();
      login(evt.target.username.value, evt.target.password.value)
    } }>
      <div className="row">
        <input className="loginInput" name="username" />
      </div>
      <div className="row">
        <input className="loginInput" name="password" type="password" />
      </div>
      <div className="row">
        <input className="loginButton" type="submit" value="Login" />
      </div>
    </form>
  </div>
);

const mapDispatch = (dispatch) => ({
  login: (email, password) => dispatch(loginUser(email, password))
});

export default connect(null, mapDispatch)(Login);
