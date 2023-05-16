import React from "react";

/**
 * Props for the BackToTopButton component.
 */
type BackToTopButtonProps = {
  showButton: boolean;
  handleBackToTop: () => void;
  className?: string;
};
/**
 * Button component to scroll back to the top.
 */
export const BackToTopButton: React.FC<BackToTopButtonProps> = ({
  showButton,
  handleBackToTop,
  className = '',
}) => (
  <button
    className={`back2top border-b-gray-200 bg-gray-300 fixed bottom-4 right-4 p-2 rounded-full ${className} ${
      showButton ? 'block' : 'hidden'
    }`}
    onClick={handleBackToTop}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="h-6 w-6 transform"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 14l-7 7m0 0l-7-7m7 7V3"
      />
    </svg>
  </button>
);
