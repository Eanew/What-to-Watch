import React from "react";
import pt from "../../prop-types-cover.js";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppRoute} from "../../utils/const.js";
import {getUserInfo} from "../../reducer/user/selectors.js";


const PrivateRoute = (props) => {
  const {render, path, exact, userInfo} = props;

  const isLoginPath = (path === AppRoute.SIGN_IN);

  const requirement = isLoginPath ? !userInfo.isAuthorized : userInfo.isAuthorized;
  const redirect = isLoginPath ? AppRoute.MAIN : AppRoute.SIGN_IN;

  const renderRoute = () => requirement
    ? render()
    : <Redirect to={redirect} />;

  return (
    <Route
      path={path}
      exact={exact}
      render={renderRoute}
    />
  );
};

PrivateRoute.propTypes = {
  userInfo: pt.userInfo,
  exact: pt.bool,
  path: pt.string,
  render: pt.func,
};

const mapStateToProps = (state) => ({
  userInfo: getUserInfo(state),
});

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
