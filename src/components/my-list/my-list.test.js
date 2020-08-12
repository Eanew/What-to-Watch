import React from "react";
import renderer from "react-test-renderer";
import MyList from "./my-list.jsx";

import {userInfo, films} from "../../test-mock.js";

it(`Should MyListComponent render correctly`, () => {
  const tree = renderer.create(
      <MyList
        userInfo={userInfo}
        films={films}
        onFilmCardClick={() => {}}
        onLogoLinkClick={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
