import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ContactForm from "../pages/ContactForm";
import Swal from "sweetalert2";
import "@testing-library/jest-dom";

// Mock SweetAlert2
jest.mock("sweetalert2", () => ({
  fire: jest.fn(),
}));

describe("ContactForm Component", () => {
  it("renders the form with initial values", () => {
    render(<ContactForm />);

    // Check if input fields and button exist
    expect(
      screen.getByPlaceholderText(/masukan nama anda/i)
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/masukan email anda/i)
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/masukan pesan anda/i)
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /kirim/i })).toBeInTheDocument();
  });

  it("validates form inputs", async () => {
    render(<ContactForm />);

    // Find and submit the form
    const submitButton = screen.getByRole("button", { name: /kirim/i });
    fireEvent.click(submitButton);

    // Validation errors should be displayed
    await waitFor(() => {
      expect(screen.getByText(/name is required/i)).toBeInTheDocument();
      expect(screen.getByText(/email is required/i)).toBeInTheDocument();
      expect(screen.getByText(/message is required/i)).toBeInTheDocument();
    });
  });

  it("submits the form with valid data", async () => {
    render(<ContactForm />);

    // Fill in valid form data
    const nameInput = screen.getByPlaceholderText(/masukan nama anda/i);
    const emailInput = screen.getByPlaceholderText(/masukan email anda/i);
    const messageInput = screen.getByPlaceholderText(/masukan pesan anda/i);
    const submitButton = screen.getByRole("button", { name: /kirim/i });

    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(emailInput, { target: { value: "john.doe@example.com" } });
    fireEvent.change(messageInput, {
      target: { value: "Hello, this is a test message." },
    });

    // Ensure inputs have the correct values
    expect(nameInput).toHaveValue("John Doe");
    expect(emailInput).toHaveValue("john.doe@example.com");
    expect(messageInput).toHaveValue("Hello, this is a test message.");

    // Submit the form
    fireEvent.click(submitButton);

    // SweetAlert2 should be called with the correct arguments
    await waitFor(() => {
      expect(Swal.fire).toHaveBeenCalledWith({
        title: "Pesan anda sudah terkirim",
        html: `
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Email:</strong> john.doe@example.com</p>
        <p><strong>Message:</strong> Hello, this is a test message.</p>
      `,
        icon: "success",
        confirmButtonText: "OK",
      });
    });
  });
});
