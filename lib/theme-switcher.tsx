"use client";

import * as React from "react";
import { LaptopMinimal, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const options = [
  {
    icon: Sun,
    theme: "light",
  },
  {
    icon: Moon,
    theme: "dark",
  },
  {
    icon: LaptopMinimal,
    theme: "system",
  },
];

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="xs">
          <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />

          {theme === "dark" ? (
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          ) : (
            <LaptopMinimal className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {options.map((item) => (
          <DropdownMenuItem
            className={cn("text-xs capitalize cursor-pointer", {
              "bg-secondary": item.theme === theme,
            })}
            key={item.theme}
            onClick={() => setTheme(item.theme)}
          >
            <item.icon className="w-4 h-4 mr-2" />
            {item.theme}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
