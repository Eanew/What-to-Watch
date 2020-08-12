import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducer from "./reducer/reducer.js";
import {Operation as DataOperation} from "./reducer/data/data.js";
import {Operation as UserOperation, ActionCreator} from "./reducer/user/user.js";
import {createAPI} from "./api.js";
import {AppRoute} from "./utils/const.js";
import history from "./history.js";

import App from "./components/app/app.jsx";

const onUnauthorized = () => {
  store.dispatch(ActionCreator.requireAuthorization({isAuthorized: false}));
  history.push(AppRoute.SIGN_IN);
};

const api = createAPI(onUnauthorized);

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api)))
);

// store.dispatch(UserOperation.checkAuthorization());
store.dispatch(DataOperation.loadPromo());
store.dispatch(DataOperation.loadFilms());
store.dispatch(DataOperation.loadFavorites());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
