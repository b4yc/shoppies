import { render, screen, cleanup } from "@testing-library/react";
import Header from "../index";

afterEach(cleanup);

test("renders logo", () => {
  render(<Header />);
  const logo = screen.getByTestId("logo");
  expect(logo).toBeInTheDocument();
});

test("renders nomination button with text", () => {
  render(<Header />);
  const button = screen.getByTestId("nom-button");
  expect(button).toHaveTextContent("Nominations");
});
