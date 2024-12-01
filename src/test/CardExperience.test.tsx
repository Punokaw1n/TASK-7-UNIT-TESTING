import { render, screen } from "@testing-library/react";
import ExperienceSection from "../components/Card";
import "@testing-library/jest-dom";

test("renders section header correctly", () => {
  render(<ExperienceSection />);
  expect(
    screen.getByRole("heading", { name: /This Is My Experience/i })
  ).toBeInTheDocument();
});

test("renders experience cards correctly", () => {
  render(<ExperienceSection />);
  const cards = screen.getAllByRole("heading", { level: 3 });
  expect(cards.length).toBeGreaterThan(0);
});
