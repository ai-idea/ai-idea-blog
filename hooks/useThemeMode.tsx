import { useEffect } from "react";

export const useThemeMode = (
  onGetScheme?: (colorScheme: "light" | "dark") => any,
  onSchemeChange?: (colorScheme: "light" | "dark") => any
) => {
  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        if (event.matches) {
          onSchemeChange && onSchemeChange("dark");
        } else {
          onSchemeChange && onSchemeChange("light");
        }
      });
  }, [onSchemeChange]);

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      onGetScheme && onGetScheme('dark');
    }
    else{
      onGetScheme && onGetScheme('light');
    }
  }, [onGetScheme]);
};
