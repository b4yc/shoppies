import React from "react";
import ReactDOM from "react-dom";

import { render, cleanup, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Movie from "../index";
import { CartContext } from "../..//CartProvider";

afterEach(cleanup);

function renderMovie(cart) {
  return render(
    <CartContext.Provider
      value={{
        cart: [{ Title: "Test", Year: "2020", imdbID: "testid" }],
        dispatch: jest.fn(),
      }}
    >
      <Movie movies={[{ Title: "Test", Year: "2020", imdbID: "testid" }]} />
    </CartContext.Provider>
  );
}

test("renders title", () => {
  renderMovie();
  const title = screen.getByTestId("title");
  expect(title).toHaveTextContent("Test");
});

test("renders year", () => {
  renderMovie();
  const year = screen.getByTestId("year");
  expect(year).toHaveTextContent("2020");
});
