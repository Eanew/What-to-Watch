import React from "react";
import renderer from "react-test-renderer";
import SignIn from "./sign-in.jsx";

it(`Should SignInComponent render correctly`, () => {
  const tree = renderer.create(
      <SignIn
        onLogoLinkClick={() => {}}
        onSubmit={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
