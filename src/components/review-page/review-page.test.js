import React from "react";
import renderer from "react-test-renderer";
import ReviewPage from "./review-page.jsx";
import {Switch, Route, Router} from "react-router-dom";
import history from "../../history.js";

import {userInfo, film} from "../../test-mock.js";

it(`Should ReviewPageComponent render correctly`, () => {
  const tree = renderer.create(
      <Router history={history}>
        <Switch>
          <Route exact path="">
            <ReviewPage
              userInfo={userInfo}
              film={film}
              starsCount={5}
              isSubmitButtonEnabled={true}
              onMoviePageClick={() => {}}
              onLogoLinkClick={() => {}}
              onStarsChange={() => {}}
              onCommentInput={() => {}}
              onSubmit={() => {}}
              onAvatarClick={() => {}}
            />
          </Route>
        </Switch>
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
