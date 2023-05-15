'use client';
import React, { useEffect, useState } from 'react';
import useScrollPosition from './hooks/useScrollPosition';
export const BackToTop: React.FC = () => {
  const { showButton, scrollPosition } = useScrollPosition(300);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToBottom = () => {
    const fullHeight = document.documentElement.scrollHeight;
    window.scrollTo({ top: fullHeight, behavior: 'smooth' });
  };

  const BackToTopButton: React.FC<{
    showButton: boolean;
    handleBackToTop: () => void;
    className?: string;
  }> = ({ showButton, handleBackToTop, className = '' }) => (
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
        className={`h-6 w-6 transform ${
          scrollPosition > 0 ? 'rotate-180' : 'rotate-0'
        }`}
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

  return (
    <>
      <BackToTopButton
        className="rotate-180"
        showButton={scrollPosition > 10 && !showButton}
        handleBackToTop={handleScrollToBottom}
      />
      <BackToTopButton
        showButton={showButton}
        handleBackToTop={handleBackToTop}
      />
    </>
  );
};

export default BackToTop;
