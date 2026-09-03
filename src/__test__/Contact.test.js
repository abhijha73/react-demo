import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

test("should render header in Contact", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");

  //assertion
  expect(heading).toBeInTheDocument();
});
