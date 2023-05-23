import { renderHook } from "@testing-library/react-hooks";
import { Heading, useHeadings } from "./useHeadings";

describe("useHeadings", () => {
  test("returns array of headings", () => {
    const mockHeadings: Heading[] = [
      { id: "heading1", title: "Heading 1", level: 2 },
      { id: "heading2", title: "Heading 2", level: 3 }
    ];

    jest.spyOn(document, "querySelectorAll").mockReturnValueOnce([
      {
        id: "heading1",
        textContent: "Heading 1",
        tagName: "H2"
      },
      {
        id: "heading2",
        textContent: "Heading 2",
        tagName: "H3"
      }
    ] as any);

    const { result } = renderHook(() => useHeadings());

    expect(result.current).toEqual(mockHeadings);
  });
});
