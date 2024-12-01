import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header";
import "@testing-library/jest-dom";

describe("Header Component", () => {
  test("renders Header and contains navigation links", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const logo = screen.getByAltText(/logo/i);
    expect(logo).toBeInTheDocument();

    const homeLink = screen.getByText(/home/i);
    const aboutLink = screen.getByText(/about/i);
    const experienceLink = screen.getByText(/experience/i);
    const todoListLink = screen.getByText(/todolist/i);
    const contactLink = screen.getByText(/contact/i);

    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(experienceLink).toBeInTheDocument();
    expect(todoListLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
  });

  test("navigates to correct pages when links are clicked", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByText(/home/i));
    expect(window.location.pathname).toBe("/");

    fireEvent.click(screen.getByText(/about/i));
    expect(window.location.pathname).toBe("/about");

    fireEvent.click(screen.getByText(/experience/i));
    expect(window.location.pathname).toBe("/experience");

    fireEvent.click(screen.getByText(/todolist/i));
    expect(window.location.pathname).toBe("/todolist");

    fireEvent.click(screen.getByText(/contact/i));
    expect(window.location.pathname).toBe("/contact");
  });
});
