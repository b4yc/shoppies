import React from "react";
import ReactDOM from "react-dom";

import { render, cleanup, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Nominations from "../index";
import { CartContext } from "../../CartProvider";

afterEach(cleanup);

function renderNominations(cart) {
  return render(
    <CartContext.Provider
      value={{
        cart: [{ Title: "Test", Year: "2020", imdbID: "testid" }],
        dispatch: jest.fn(),
      }}
    >
      <Nominations />
    </CartContext.Provider>
  );
}

test("renders title", () => {
  renderNominations();
  const title = screen.getByTestId("title");
  expect(title).toHaveTextContent("Test");
});

test("renders year", () => {
  renderNominations();
  const searchbar = screen.getByTestId("year");
  expect(searchbar).toHaveTextContent("2020");
});

test("renders remove button", () => {
  renderNominations();
  const removebutton = screen.getByTestId("remove-button");
  expect(removebutton).toBeInTheDocument();
});
