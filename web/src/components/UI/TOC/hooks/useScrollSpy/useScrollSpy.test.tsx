import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-dom/test-utils';
import useScrollspy from './useScrollspy';

describe('useScrollspy', () => {
  test('should set activeId correctly', () => {
    const targetIds = ['target1', 'target2', 'target3'];
    const callback = jest.fn();

    const { result } = renderHook(() => useScrollspy(targetIds, callback));

    // Simulate scrolling to target2
    act(() => {
      const targetElement = document.getElementById('target2');
      if (targetElement) {
        targetElement.getBoundingClientRect = jest.fn(() => ({
          top: 0,
          bottom: 100,
        }));
      }
      window.dispatchEvent(new Event('scroll'));
    });

    expect(result.current).toBe('target2');
    expect(callback).toHaveBeenCalledWith('target2');

    // Simulate scrolling to target3
    act(() => {
      const targetElement = document.getElementById('target3');
      if (targetElement) {
        targetElement.getBoundingClientRect = jest.fn(() => ({
          top: 0,
          bottom: 100,
        }));
      }
      window.dispatchEvent(new Event('scroll'));
    });

    expect(result.current).toBe('target3');
    expect(callback).toHaveBeenCalledWith('target3');
  });
});
