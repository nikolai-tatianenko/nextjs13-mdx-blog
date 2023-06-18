"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { DarkMode, LightMode } from "./components";


/**
 * ThemeSwitcher component.
 */
const LightModeType = "light";
const DarkModeType = "dark";
const SystemModeType = "system";

/**
 * ThemeSwitcher component.
 *
 * @constructor
 */
export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return (<div className="flex items-center"></div>);

  // @ts-ignore
  return (
    <div className="flex items-center">
      {(theme === DarkModeType) && (<button
        aria-label="Toggle Light Mode"
        type="button"
        className={`ml-1 mr-1 h-8 w-8 rounded p-1 sm:ml-4 ${
          (theme === LightModeType || resolvedTheme === LightModeType) &&
          "bg-gray-200"
        }`}
        onClick={() => setTheme(LightModeType)}
      >
        <LightMode />
      </button>)}
      {(theme === LightModeType) && (
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className={`ml-1 mr-1 h-8 w-8 rounded p-1 sm:ml-4 ${
            (theme === DarkModeType || resolvedTheme === DarkModeType) &&
            "bg-gray-800"
          }`}
          onClick={() => setTheme(DarkModeType)}
        >
          <DarkMode />
        </button>)}
      {/*<button*/}
      {/*  aria-label="Toggle System Mode"*/}
      {/*  type="button"*/}
      {/*  className={`ml-1 mr-1 h-8 w-8 rounded p-1 sm:ml-4 ${*/}
      {/*    (theme === "system" || resolvedTheme === "system") && "bg-gray-500"*/}
      {/*  }`}*/}
      {/*  onClick={() => setTheme("system")}*/}
      {/*>*/}
      {/*  <SystemMode />*/}
      {/*</button>*/}
    </div>
  );
};

export default ThemeSwitcher;
