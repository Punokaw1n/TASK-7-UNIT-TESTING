import { render, screen } from "@testing-library/react";
import AboutMe from "../pages/AboutMe";
import "@testing-library/jest-dom";
describe("AboutMe Component", () => {
  it("renders About Me section with correct elements", () => {
    render(<AboutMe />);

    // Check if the "About Me" heading is in the document
    expect(screen.getByText(/About Me/i)).toBeInTheDocument();

    // Check if the "Hello 👋👋👋, My name is Fery!" text is present
    expect(
      screen.getByText(/Hello 👋👋👋, My name is Fery!/i)
    ).toBeInTheDocument();

    // Check if the social media section header is in the document
    expect(screen.getByText(/Social Media/i)).toBeInTheDocument();

    // Check if social media icons (e.g., GitHub, Instagram) are in the document
    expect(screen.getByAltText(/GitHub/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Instagram/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Twitter/i)).toBeInTheDocument();
    expect(screen.getByAltText(/LinkedIn/i)).toBeInTheDocument();
  });

  it("checks if the GitHub link has the correct href", () => {
    render(<AboutMe />);

    const githubLink = screen.getByAltText(/github/i).closest("a");
    expect(githubLink).toHaveAttribute("href", "https://github.com/Punokaw1n");
  });

  it("checks if the Instagram link has the correct href", () => {
    render(<AboutMe />);

    const instagramLink = screen.getByAltText(/instagram/i).closest("a");
    expect(instagramLink).toHaveAttribute(
      "href",
      "https://www.instagram.com/fery_rahman12/"
    );
  });

  it("checks if the LinkedIn link has the correct href", () => {
    render(<AboutMe />);

    const linkedinLink = screen.getByAltText(/linkedin/i).closest("a");
    expect(linkedinLink).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/feryyuliarahman/"
    );
  });
});
