import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

test("renders learn vite link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Click/i);
  expect(linkElement).toBeDefined();
});
