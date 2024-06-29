"use client";
import { Minus, Plus } from "lucide-react";
import { Button } from "./ui/button";
import * as React from "react";
import { Slider } from "./ui/slider";
import { cn } from "@/lib/utils";

interface iProps {
  passwordLength: number;
  setPasswordLength: React.Dispatch<React.SetStateAction<number>>;
}

export function PasswordLength({ passwordLength, setPasswordLength }: iProps) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between md:space-x-8 w-full">
      <h4 className=" md:w-40 text-base md:text-lg font-medium text-accent-foreground  text-start text-nowrap">
        Password Length: <span className="font-semibold">{passwordLength}</span>
      </h4>
      <div className="flex items-center justify-between w-full md:space-x-8 space-x-4 ">
        <Button
          className={cn(
            "rounded-full border border-input dark:border-muted-foreground h-12"
          )}
          variant="outline"
          disabled={passwordLength === 1}
          onClick={() => setPasswordLength((prev) => prev - 1)}
        >
          <Minus className="w-4 h-4" />
        </Button>

        <div className="flex items-center w-full">
          <Slider
            value={[passwordLength]}
            defaultValue={[passwordLength]}
            max={50}
            step={1}
            className="w-full"
          />
        </div>

        <Button
          className={cn(
            "rounded-full border border-input dark:border-muted-foreground h-12"
          )}
          variant="outline"
          disabled={passwordLength === 50}
          onClick={() => setPasswordLength((prev) => prev + 1)}
        >
          <Plus className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
