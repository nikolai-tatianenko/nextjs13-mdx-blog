import { useState, useEffect } from 'react';

/**
 * Custom hook to track the active element in the viewport based on scroll position.
 *
 * @param {string[]} targetIds - Array of target element IDs to track.
 * @param {(activeId: string) => void} callback - Callback function to be executed when active element changes.
 * @returns {string | null} - ID of the currently active element.
 */
export const useScrollspy = (
  targetIds: string[],
  callback: (activeId: string) => void
): string | null => {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [targetIds, callback]);

  return activeId;
};

export default useScrollspy;
