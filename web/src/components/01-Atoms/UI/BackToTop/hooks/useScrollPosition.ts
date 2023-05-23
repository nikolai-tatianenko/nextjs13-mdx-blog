import { useEffect, useState } from 'react';

/**
 * Custom hook that tracks the scroll position and determines whether to show a button based on a threshold value.
 * @param {number} threshold - The threshold value at which the button should be shown.
 * @returns {{ showButton: boolean, scrollPosition: number }} - An object containing the showButton boolean value and the current scrollPosition.
 */
const useScrollPosition = (threshold: number) => {
  const [showButton, setShowButton] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  /**
   * Event handler for the scroll event.
   */
  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setScrollPosition(scrollTop);
    setShowButton(scrollTop > threshold);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { showButton, scrollPosition };
};

export default useScrollPosition;
