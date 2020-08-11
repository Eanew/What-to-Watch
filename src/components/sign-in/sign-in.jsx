import React from "react";

import pt from "../../prop-types-cover.js";

import {MIN_PASSWORD_LENGTH} from "../../utils/const.js";
import {Regular} from "../../utils/common.js";
import {showCustomAlert} from "../../utils/custom-alert.js";

const ALERT_MESSAGE_TIMEOUT = 5000;

class SignIn extends React.PureComponent {
  constructor(props) {
    super(props);

    this._loginRef = React.createRef();
    this._passwordRef = React.createRef();

    this._handleSubmit = this._handleSubmit.bind(this);
    this._disableOutline = this._disableOutline.bind(this);
  }

  render() {
    return (
      <div className="user-page">
        <header className="page-header user-page__head">
          <div className="logo">
            <a
              onClick={this.props.onLogoLinkClick}
              href="main.html"
              className="logo__link"
            >
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <h1 className="page-title user-page__title">Sign in</h1>
        </header>

        <div className="sign-in user-page__content">
          <form
            onSubmit={this._handleSubmit}
            className="sign-in__form"
            action=""
          >
            <div className="sign-in__fields">
              <div className="sign-in__field">
                <input
                  ref={this._loginRef}
                  onClick={this._disableOutline}
                  className="sign-in__input"
                  type="email"
                  placeholder="Email address"
                  name="user-email"
                  id="user-email"
                />
                <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
              </div>
              <div className="sign-in__field">
                <input
                  ref={this._passwordRef}
                  onClick={this._disableOutline}
                  className="sign-in__input"
                  type="password"
                  placeholder="Password"
                  name="user-password"
                  id="user-password"
                />
                <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
              </div>
            </div>
            <div className="sign-in__submit">
              <button className="sign-in__btn" type="submit">
                Sign in
              </button>
            </div>
          </form>
        </div>

        <footer className="page-footer">
          <div className="logo">
            <a
              onClick={this.props.onLogoLinkClick}
              href="main.html"
              className="logo__link logo__link--light"
            >
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    );
  }

  _handleSubmit(evt) {
    const {onSubmit} = this.props;
    const login = this._loginRef.current;
    const password = this._passwordRef.current;
    const isLoginValid = Regular.VALID_EMAIL.test(login.value);
    const isPasswordValid = password.value.length >= MIN_PASSWORD_LENGTH;

    evt.preventDefault();

    if (isLoginValid && isPasswordValid) {
      onSubmit({
        email: login.value,
        password: password.value,
      });
      return;
    }

    let alertMessage = ``;

    if (!isLoginValid) {
      alertMessage += `Incorrect email entered. `;
      login.style.outline = `2px solid red`;
    }

    if (!isPasswordValid) {
      alertMessage += `Minimum password length: ${MIN_PASSWORD_LENGTH}`;
      password.style.outline = `2px solid red`;
    }

    if (alertMessage) {
      showCustomAlert(alertMessage, ALERT_MESSAGE_TIMEOUT);
    }
  }

  _disableOutline(evt) {
    evt.target.style.outline = ``;
  }
}

SignIn.propTypes = {
  onLogoLinkClick: pt.func,
  onSubmit: pt.func,
};

export default SignIn;
