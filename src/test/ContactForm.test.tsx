import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactForm from "../pages/ContactForm";
import Swal from "sweetalert2";
import "@testing-library/jest-dom";

jest.mock("sweetalert2", () => ({
  fire: jest.fn(),
}));

describe("ContactForm Component", () => {
  it("calls Swal.fire with correct values on valid submit", async () => {
    render(<ContactForm />);

    const nameInput = screen.getByPlaceholderText(/masukan nama anda/i);
    const emailInput = screen.getByPlaceholderText(/masukan email anda/i);
    const messageInput = screen.getByPlaceholderText(/masukan pesan anda/i);
    const button = screen.getByRole("button", { name: /kirim/i });

    await userEvent.type(nameInput, "John Doe");
    await userEvent.type(emailInput, "john.doe@example.com");
    await userEvent.type(messageInput, "Hello, this is a test message.");

    await waitFor(() => {
      expect(nameInput).toHaveValue("John Doe");
      expect(emailInput).toHaveValue("john.doe@example.com");
      expect(messageInput).toHaveValue("Hello, this is a test message.");
    });

    await userEvent.click(button);

    await waitFor(() => {
      const expectedHtml = `
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Email:</strong> john.doe@example.com</p>
        <p><strong>Message:</strong> Hello, this is a test message.</p>
      `
        .replace(/\s+/g, " ")
        .trim();

      expect(Swal.fire).toHaveBeenCalledWith({
        title: "Pesan anda sudah terkirim",
        html: expectedHtml,
        icon: "success",
        confirmButtonText: "OK",
      });
    });
  });
});
