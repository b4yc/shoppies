import React from "react";
import ReactDOM from "react-dom";

import { render, cleanup, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Cart from "../index";
import { CartContext } from "../../CartProvider";

afterEach(cleanup);

function renderCart(cart) {
  return render(
    <CartContext.Provider
      value={{
        cart: [{ Title: "Test", Year: "2020", imdbID: "testid" }],
        dispatch: jest.fn(),
      }}
    >
      <Cart />
    </CartContext.Provider>
  );
}

test("renders cart", () => {
  renderCart();
  const cart = screen.getByTestId("cart");
  expect(cart).toBeInTheDocument();
});

test("renders close button", () => {
  renderCart();
  const closebutton = screen.getByTestId("close-button");
  expect(closebutton).toBeInTheDocument();
});

test("renders clear button", () => {
  renderCart();
  const clearbutton = screen.getByTestId("clear-button");
  expect(clearbutton).toBeInTheDocument();
});
