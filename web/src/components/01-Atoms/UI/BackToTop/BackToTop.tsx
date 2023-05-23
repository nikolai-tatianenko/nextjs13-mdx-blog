'use client';
import React from 'react';
import { BackToTopButton } from './components/BackToTopButton';
import useScrollPosition from './hooks/useScrollPosition';

/**
 * Props for the BackToTop component.
 */
type BackToTopProps = {
  threshold?: number;
};

/**
 * Component to scroll to the top or bottom of the page.
 */
export const BackToTop: React.FC<BackToTopProps> = ({ threshold = 300 }) => {
  const { showButton: showBackToTopButton, scrollPosition } =
    useScrollPosition(threshold);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToBottom = () => {
    const fullHeight = document.documentElement.scrollHeight;
    window.scrollTo({ top: fullHeight, behavior: 'smooth' });
  };

  return (
    <>
      {/* Scroll to top */}
      <BackToTopButton
        className="rotate-180"
        showButton={showBackToTopButton}
        handleBackToTop={handleBackToTop}
      />
      {/* Scroll to bottom */}
      <BackToTopButton
        showButton={!showBackToTopButton}
        handleBackToTop={handleScrollToBottom}
      />
    </>
  );
};

export default BackToTop;
