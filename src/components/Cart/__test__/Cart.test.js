import React from "react";
import ReactDOM from "react-dom";
import Cart from "../../Cart";
import { isTSAnyKeyword } from "@babel/types";

import { render, cleanup } from "@testing-library/react";
import "jest-dom/extend-expect";

import renderer from "react-test-renderer";

afterEach(cleanup);
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Cart></Cart>, div);
});

it("renders button correctly", () => {
  const { getByTestId } = render(<Cart></Cart>);
  expect(getByTestId("cart")).toHaveTextContent("");
});

it("matches snapshot", () => {
  renderer.create(<Cart></Cart>).toJSON();
  expect(tree).toMatchSnapshot();
});
