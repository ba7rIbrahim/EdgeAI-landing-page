import { useThemeStore } from "../../store/themeStore";
import { Moon, Sun } from "lucide-react";
import { Button } from "../ui";

export const NavActions = () => {
  const { theme, toggleTheme } = useThemeStore();
  return (
    <div className="flex item-center gap-3">
      <Button className="hidden md:block border border-black shadow-md ">
        Get Started
      </Button>
      <button
        onClick={toggleTheme}
        className={`border border-border rounded-full p-1 w-10 h-10 md:w-12 md:h-12 flex justify-center 
                    items-center shadow-md cursor-pointer`}
      >
        {theme === "light" ? <Sun /> : <Moon color="white" />}
      </button>
    </div>
  );
};
