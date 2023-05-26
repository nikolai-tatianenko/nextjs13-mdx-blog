import { render, screen } from "@testing-library/react";
import Logo, { LogoProps } from "./Logo";

describe("Logo", () => {
  test("renders the logo component with the default sitename if not specified", () => {
    render(<Logo />);
    const linkElement = screen.getByRole("link");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/");
    const strongElement = screen.getByText("Site Name");
    expect(strongElement).toBeInTheDocument();
  });
});
