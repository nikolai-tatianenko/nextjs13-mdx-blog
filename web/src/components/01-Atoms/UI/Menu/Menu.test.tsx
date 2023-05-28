import { render, screen } from "@testing-library/react";
import { usePathname } from "next/navigation";
import { Menu } from "./Menu";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

describe("Menu", () => {
  beforeEach(() => {
    (usePathname as jest.Mock).mockReturnValue("/home");
  });

  /**
   * Renders the menu component with default link style.
   */
  test("renders the menu component with active link", () => {
    const menuItems = [
      { label: "Home", path: "/home" },
      { label: "About", path: "/about" },
      { label: "Contact", path: "/contact" },
    ];

    render(<Menu menuItems={menuItems} classNames={{}} />);

    const homeLink = screen.getByText("Home");
    const aboutLink = screen.getByText("About");
    const contactLink = screen.getByText("Contact");

    expect(homeLink).toHaveClass("underline");
    expect(aboutLink).not.toHaveClass("underline");
    expect(contactLink).not.toHaveClass("underline");
  });
  
  test("renders the menu component with default link style", () => {
    const menuItems = [
      { label: "Home", path: "/home" },
      { label: "About", path: "/about" },
      { label: "Contact", path: "/contact" },
    ];

    (usePathname as jest.Mock).mockReturnValue("/about");

    render(<Menu menuItems={menuItems} classNames={{}} />);

    const homeLink = screen.getByText("Home");
    const aboutLink = screen.getByText("About");
    const contactLink = screen.getByText("Contact");

    expect(homeLink).not.toHaveClass("underline");
    expect(aboutLink).toHaveClass("underline");
    expect(contactLink).not.toHaveClass("underline");
  });
});
