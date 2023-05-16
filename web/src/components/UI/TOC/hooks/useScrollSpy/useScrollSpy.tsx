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
      const targets = targetIds.map((id) => document.getElementById(id));

      let activeTarget: HTMLElement | null = null;

      for (let i = targets.length - 1; i >= 0; i--) {
        const target = targets[i];
        if (!target) continue;

        const rect = target.getBoundingClientRect();

        const isVisible =
          rect.top >= 0 &&
          rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight);

        const isPartiallyVisible =
          rect.top < window.innerHeight && rect.bottom >= 0;

        if ((isVisible || isPartiallyVisible) && !activeTarget) {
          activeTarget = target;
          break;
        }
      }

      if (activeTarget) {
        setActiveId(activeTarget.id);
        if (callback) {
          callback(activeTarget.id);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [targetIds, callback]);

  return activeId;
};

export default useScrollspy;
