"use client";
import { Minus, Plus } from "lucide-react";
import { Button } from "./ui/button";
import * as React from "react";
import { Slider } from "./ui/slider";

interface iProps {
  passwordLength: number;
  setPasswordLength: React.Dispatch<React.SetStateAction<number>>;
}

export function PasswordLength({ passwordLength, setPasswordLength }: iProps) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between md:space-x-8">
      <h4 className="text-base md:text-lg font-medium text-accent-foreground  text-start text-nowrap">
        Password Length: <span className="font-semibold">{passwordLength}</span>
      </h4>
      <div className="flex md:space-x-8 space-x-4">
        <Button
          className="rounded-full border-secondary-forground h-12"
          variant="outline"
          disabled={passwordLength === 1}
          onClick={() => setPasswordLength((prev) => prev - 1)}
        >
          <Minus className="w-4 h-4" />
        </Button>
        <div className="w-48 md:w-64 flex items-center">
          <Slider
            value={[passwordLength]}
            defaultValue={[passwordLength]}
            max={50}
            step={1}
          />
        </div>
        <Button
          className="rounded-full border-secondary-forground h-12"
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
