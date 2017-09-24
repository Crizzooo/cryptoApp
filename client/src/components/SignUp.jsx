// change this for sign up - right now its copied from Login.jsx

import React from 'react';
import { connect } from 'react-redux';

import { signupUser } from '../reducers/user';

export const SignUp = ({ signup }) => (
<div className="loginGroup">
  <form onSubmit={evt => {
    evt.preventDefault();
    signup(evt.target.username.value, evt.target.password.value);
  } }>
    <div className="row"><input className="loginInput" name="username" /></div>
    <div className="row"><input className="loginInput" name="password" type="password" /></div>
    {
      /*Other fields should go here for storage in database if necessary*/
    }
    <div className="row"><input className="loginButton" type="submit" value="Signup" /></div>
  </form>
  </div>
);

const mapDispatch = (dispatch) => ({
  signup: (email, password) => dispatch(signupUser(email, password))
});

export default connect(null, mapDispatch)(SignUp);
