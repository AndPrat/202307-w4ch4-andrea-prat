import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Given a App component", () => {
  describe("When it's instantiated", () => {
    test("It should show '¡Crea tu Perezoso!' inside a heading", () => {
      const titleText = "¡Crea tu Perezoso!";
      render(<App />);

      const headingTitle = screen.getByRole("heading", { name: titleText });

      expect(headingTitle).toBeInTheDocument;
    });
  });
});
