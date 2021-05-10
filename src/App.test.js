import React from "react";
import ReactDOM from "react-dom";

import { render, cleanup, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import { CartContext } from "./components/CartProvider";

afterEach(cleanup);

function renderApp(cart) {
  return render(
    <CartContext.Provider
      value={{
        cart: [{ Title: "Test", Year: "2020", imdbID: "testid" }],
        dispatch: jest.fn(),
      }}
    >
      <App />
    </CartContext.Provider>
  );
}

test("renders header component", () => {
  renderApp();
  const header = screen.getByTestId("header");
  expect(header).toBeInTheDocument();
});

test("renders search component", () => {
  renderApp();
  const search = screen.getByTestId("search");
  expect(search).toBeInTheDocument();
});
