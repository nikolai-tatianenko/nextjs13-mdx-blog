import { render } from "@testing-library/react";
import Heading from "./Heading";

describe("Header", () => {
  it("renders header with the correct text content", () => {
    const { getByText } = render(<Heading level={1} text="Hello, world!" />);
    const headerElement = getByText("Hello, world!");
    expect(headerElement).toBeInTheDocument();
  });

  it("renders header with the correct level", () => {
    const { container } = render(<Heading level={2} text="Hello, world!" />);
    const headerElement = container.querySelector("h2");
    expect(headerElement).toBeInTheDocument();
  });

  it("renders header with the correct CSS class", () => {
    const { container } = render(
      <Heading level={3} text="Hello, world!" className="custom-header" />
    );
    const headerElement = container.querySelector("h3");
    expect(headerElement).toHaveClass("custom-header");
  });

  it("renders header with the custom ID", () => {
    const { container } = render(
      <Heading level={4} text="Hello, world!" id="custom-id" />
    );
    const headerElement = container.querySelector("h4");
    expect(headerElement).toHaveAttribute("id", "custom-id");
  });

  it("generates header ID from the text", () => {
    const { container } = render(<Heading level={5} text="Hello, world!" />);
    const headerElement = container.querySelector("h5");
    expect(headerElement).toHaveAttribute("id", "hello-world");
  });
});
