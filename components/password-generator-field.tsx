"use client";
import { RotateCcw } from "lucide-react";
import { CheckboxField } from "./checkbox-field";
import { Button } from "./ui/button";
import password from "@/public/images/password.png";
import { Input } from "./ui/input";
import { PasswordLength } from "./password-length";
import Image from "next/image";
import * as React from "react";
import { PasswordCharacter } from "@/constants/password-character";
import { RandomPasswordGenerator } from "@/lib/random-password-generator";

export default function PasswordGenerator() {
  const [passwordLength, setPasswordLength] = React.useState<number>(12);

  const [charSymbol, setcharSymbol] = React.useState({
    upperCase: true,
    lowerCase: false,
    number: true,
    specialCharacter: false,
  });

  console.log(
    RandomPasswordGenerator({ length: passwordLength, charSymbol: charSymbol })
  );

  const handleChange = (e: any) => {
    const password = e.target.value();
  };

  const copyPassword = () => {
    navigator.clipboard.writeText("ABCDEF");
    alert("Password Copied to clipboard.");
  };
  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-between space-y-4 md:space-y-0">
      <Image
        src={password}
        alt="Password Generator"
        height={600}
        className="w-[70%] md:w-1/3 md:mx-auto"
      />
      <div className="w-full md:w-1/2 flex flex-col items-start space-y-4 md:space-y-6">
        <div className="flex flex-row w-full space-x-4">
          <div className="relative flex flex-row items-center w-full">
            <Input
              className="rounded-full shadow-inner h-12 focus-visible:ring-0 focus-visible:ring-offset-0 cursor-default"
              name="password_field"
              value="sahdkhfaksfakf"
              onChange={handleChange}
            />
            <button
              className="absolute right-3"
              onClick={() => console.log("Regenerate")}
            >
              <RotateCcw className="text-accent-foreground w-4 h-4" />
            </button>
          </div>

          <Button
            className="rounded-full drop-shadow-md h-12 px-6"
            onClick={() => copyPassword()}
          >
            Copy
          </Button>
        </div>

        <PasswordLength
          passwordLength={passwordLength}
          setPasswordLength={setPasswordLength}
        />
        <div className="w-full flex flex-col md:flex-row md:space-x-12 md:space-y-0 space-y-4">
          <h4 className="text-base md:text-lg text-center font-medium text-accent-foreground  text-nowrap">
            Character Used
          </h4>
          <div className="w-full flex flex-row items-center justify-between space-x-2.5">
            {PasswordCharacter.map((item) => (
              <CheckboxField
                title={item.symbol}
                key={item.id}
                // checked={character.lowerCase}
                // onChecked={setCharacter((prev)=>({...prev,}))}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
