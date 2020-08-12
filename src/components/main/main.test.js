import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

import {film, userInfo} from "../../test-mock.js";

it(`Should MainComponent render correctly`, () => {
  const tree = renderer.create(
      <Main
        userInfo={userInfo}
        promo={film}
        onPlayButtonClick={() => {}}
        onMyListButtonClick={() => {}}
        onSignInLinkClick={() => {}}
        onAvatarClick={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
