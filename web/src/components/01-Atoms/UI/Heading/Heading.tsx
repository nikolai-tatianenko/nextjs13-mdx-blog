import React, { FC } from "react";

/**
 * Props for the Header component.
 */
export type HeaderProps = {
  /**
   * The level of the header (1 to 6).
   */
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  /**
   * The text content of the header.
   */
  children?: React.ReactNode;
  /**
   * Optional CSS class name for the header.
   */
  className?: string;
  /**
   * Optional ID for the header.
   */
  id?: string;
};

/**
 * Generates an ID from the given text by converting it to lowercase and replacing non-alphanumeric characters with hyphens.
 * @param text | null The text to generate the ID from.
 * @returns The generated ID.
 */
const prepareId = (text: React.ReactNode = ""): string => {
  if (typeof text !== "string") {
    text = "";
  }
  return String(text).
    toLowerCase().
    replace(/[^a-z0-9]+/g, "-").
    replace(/(^-|-$)/g, "");
};

/**
 * Header component that renders headers H1 to H6.
 * @param level The level of the header (1 to 6).
 * @param text The text content of the header.
 * @param className Optional CSS class name for the header.
 * @param id Optional ID for the header.
 * @returns The rendered header element.
 */
export const Heading: FC<HeaderProps> = ({
  level = 1,
  children = "",
  className,
  id
}) => {
  const TagName = `h${level}` as keyof JSX.IntrinsicElements;
  const headerId = id || prepareId(children);
  console.log({ level, children, className, id });
  return (
    <TagName id={headerId} className={className}>
      {children}
    </TagName>
  );
};

export default Heading;
