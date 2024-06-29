"use client";
import { RotateCcw } from "lucide-react";
import { CheckboxField } from "./checkbox-field";
import { Button } from "./ui/button";
import logo from "@/public/images/password.png";
import { Input } from "./ui/input";
import { PasswordLength } from "./password-length";
import Image from "next/image";
import * as React from "react";
import { PasswordCharacter } from "@/constants/password-character";
import { RandomPasswordGenerator } from "@/lib/random-password-generator";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { Form, FormField } from "./ui/form";
import { toast } from "sonner";

export default function PasswordGenerator() {
  const [loading, setLoading] = React.useState<boolean>(false);

  const [passwordLength, setPasswordLength] = React.useState<number>(12);

  const [password, setPassword] = React.useState<string>("");

  const form = useForm({
    defaultValues: {
      upperCase: true,
      lowerCase: true,
      number: true,
      specialCharacter: true,
    },
  });

  React.useEffect(() => {
    const generatePassword = () => {
      const generatedPassword = RandomPasswordGenerator({
        length: passwordLength,
        charSymbol: form.getValues(),
      });
      setPassword(generatedPassword);
    };
    generatePassword();

    const subscription = form.watch((value) => {
      const generatedPassword = RandomPasswordGenerator({
        length: passwordLength,
        charSymbol: {
          lowerCase: value.lowerCase as boolean,
          upperCase: value.upperCase as boolean,
          number: value.number as boolean,
          specialCharacter: value.specialCharacter as boolean,
        },
      });
      setPassword(generatedPassword);
    });
    return () => subscription.unsubscribe();
  }, [form, passwordLength]);

  const copyPassword = () => {
    navigator.clipboard.writeText(password);
    toast.success("Password Copied Successfully.");
  };

  const regeneratePassword = () => {
    setLoading(true);
    setTimeout(() => {
      const result = RandomPasswordGenerator({
        length: passwordLength,
        charSymbol: form.getValues(),
      });
      setPassword(result);
      setLoading(false);
    }, 600);
  };

  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-between space-y-4 md:space-y-0">
      <Image
        src={logo}
        alt="Password Generator"
        height={600}
        className="w-[70%] md:w-1/3 md:mx-auto "
        priority
      />
      <div className="w-full md:w-1/2 flex flex-col items-start space-y-4 md:space-y-6">
        <div className="flex flex-row w-full space-x-4">
          <div className="relative flex flex-row items-center w-full">
            <Input
              className="rounded-full shadow-inner h-12 focus-visible:ring-0 focus-visible:ring-offset-0 cursor-default border border-input dark:border-secondary-foreground tracking-wider"
              name="password_field"
              value={password}
              readOnly
            />
            <button
              className="absolute right-3"
              onClick={() => regeneratePassword()}
            >
              <RotateCcw
                className={cn("text-accent-foreground w-4 h-4", {
                  "animate-spin rotate-90": loading,
                })}
              />
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
        <div className="w-full flex flex-col md:flex-row items-center justify-between md:space-x-8 md:space-y-0 space-y-4">
          <h4 className=" md:text-start md:w-60 text-base md:text-lg text-center font-medium text-accent-foreground  text-nowrap">
            Character Used
          </h4>
          <Form {...form}>
            <form className="w-full flex flex-row items-center justify-between">
              {PasswordCharacter.map((item) => (
                <FormField
                  key={item.title}
                  name={item.title}
                  control={form.control}
                  render={({ field }) => (
                    <CheckboxField
                      label={item.symbol}
                      name={item.title}
                      field={field}
                    />
                  )}
                />
              ))}
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
