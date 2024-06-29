import { FieldValues } from "react-hook-form";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { FormControl, FormItem } from "./ui/form";

interface iProps {
  label: string;
  name: string;
  field: FieldValues;
}

export function CheckboxField({ name, label, field }: iProps) {
  return (
    <FormItem className="flex flex-row items-center space-y-0 space-x-2.5 p-1 rounded-md">
      <FormControl>
        <Checkbox
          className="border border-input dark:border-secondary-foreground rounded-lg shadow-inner h-5 w-5"
          {...field}
          name={name}
          id={label}
          checked={field.value}
          onCheckedChange={field.onChange}
        />
      </FormControl>
      <Label
        className="text-sm text-secondary-foreground font-medium"
        htmlFor={label}
      >
        {label}
      </Label>
    </FormItem>
  );
}
