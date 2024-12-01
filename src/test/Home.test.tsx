import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Home from "../pages/Home";

describe("Home Component", () => {
  it("renders the home section with correct elements", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    expect(screen.getByText(/Halo 👋 I am,/i)).toBeInTheDocument();
    expect(screen.getByText(/Fery Yulia Rahman/i)).toBeInTheDocument();
    expect(screen.getByText(/Back-End Developer/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact Me/i)).toBeInTheDocument();
    expect(screen.getByAltText(/My Photo/i)).toBeInTheDocument();
  });

  it("contains a link to the contact page", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    const contactLink = screen.getByRole("link", { name: /Contact Me/i });
    expect(contactLink).toBeInTheDocument();
    expect(contactLink).toHaveAttribute("href", "/contact");
  });

  it("displays the correct image with alt text", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    const imgElement = screen.getByAltText(/My Photo/i);
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute("src", "/assets/aku.jpg");
  });
});
