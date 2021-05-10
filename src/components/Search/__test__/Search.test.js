import React from "react";
import ReactDOM from "react-dom";
import Search from "../../Search";

import { render, cleanup, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CartContext } from "../../CartProvider";

afterEach(cleanup);

// describe("Search", () => {
//   test("renders Search component", () => {
//     render(<Search />);
//     screen.debug();
//   });
// });

test("renders heading title", () => {
  render(<Search />);
  const header = screen.getByRole("heading");
  expect(header).toHaveTextContent("Find your favourite movies to nominate");
});

test("renders search bar", () => {
  render(<Search />);
  const searchbar = screen.getByRole("textbox");
  expect(searchbar).toBeInTheDocument();
});

test("renders search button", () => {
  render(<Search />);
  const searchbutton = screen.getByRole("button");
  expect(searchbutton).toBeInTheDocument();
});
