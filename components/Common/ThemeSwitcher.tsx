import { useThemeMode } from "@/hooks/useThemeMode";

export const ThemeSwitcher = () => {
  useThemeMode((scheme) => {
    if (scheme === "dark") {
      document.querySelector &&
        document.querySelector("html")?.classList.add("dark");
      console.log("to dark");
    }
  },(scheme)=>{
    if (scheme==="dark") {
      document.querySelector &&
        document.querySelector("html")?.classList.add("dark");
    } else {
      document.querySelector &&
        document.querySelector("html")?.classList.remove("dark");
    }
  });
  return <div></div>;
};
