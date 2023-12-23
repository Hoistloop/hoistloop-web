import { render, screen } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  test("should render basic skeleton", () => {
    render(<App />);

    expect(screen.getByText(/app is over here./i)).toBeDefined();
  });
});
