'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export const ThemeSwitcher: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTheme = e.target.value;
    setTheme(selectedTheme);
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="inline-flex items-center">
      <label htmlFor="themeSwitch" className="mr-2">
        Theme:
      </label>
      <select
        id="themeSwitch"
        name="themeSwitch"
        value={theme}
        onChange={handleThemeChange}
        className="p-2 rounded bg-gray-200 dark:bg-gray-800"
      >
        <option value="system">System</option>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </select>
    </div>
  );
};

export default ThemeSwitcher;
