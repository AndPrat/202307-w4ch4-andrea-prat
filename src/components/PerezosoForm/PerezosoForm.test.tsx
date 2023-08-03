import { render, screen } from "@testing-library/react";
import PerezosoForm from "./PerezosoForm";

describe("Given a PerezosoForm component", () => {
  describe("When it is rendered", () => {
    test("The it should show button with name 'Create a Perezoso!'", () => {
      const nameButton = "Create a Perezoso!";

      render(<PerezosoForm />);
      const buttonPerezosoForm = screen.getByRole("button", {
        name: nameButton,
      });

      expect(buttonPerezosoForm).toBeInTheDocument();
    });

    test("The it should show a label with name 'Perezoso name:'", () => {
      const nameLabel = "Perezoso name:";

      render(<PerezosoForm />);
      const nameLabelPerezosoForm = screen.getByLabelText(nameLabel);

      expect(nameLabelPerezosoForm).toBeInTheDocument();
    });
  });
});
