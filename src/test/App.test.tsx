import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";
import "@testing-library/jest-dom";

describe("App Component", () => {
  test("renders the Header and routes", async () => {
    render(<App />);

    const header = screen.getByRole("banner");
    expect(header).toBeInTheDocument();

    const homeLink = await screen.findByText(/home/i);
    const aboutLink = await screen.findByText(/about/i);
    const contactLink = await screen.findByText(/contact/i);
    const todoListLink = await screen.findByText(/todolist/i);
    const experienceLink = await screen.findByText(/experience/i);

    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
    expect(todoListLink).toBeInTheDocument();
    expect(experienceLink).toBeInTheDocument();
  });

  test("navigates to correct pages when links are clicked", () => {
    render(<App />);

    fireEvent.click(screen.getByText(/home/i));
    expect(window.location.pathname).toBe("/");

    fireEvent.click(screen.getByText(/about/i));
    expect(window.location.pathname).toBe("/about");

    fireEvent.click(screen.getByText(/contact/i));
    expect(window.location.pathname).toBe("/contact");

    fireEvent.click(screen.getByText(/todolist/i));
    expect(window.location.pathname).toBe("/todolist");

    fireEvent.click(screen.getByText(/experience/i));
    expect(window.location.pathname).toBe("/experience");
  });
});
