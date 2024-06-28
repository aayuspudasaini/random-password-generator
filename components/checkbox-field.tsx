import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";

interface iProps {
  title: string;
  checked?: boolean;
  onChecked?: (checked: boolean) => void;
}

export function CheckboxField({ title, checked, onChecked }: iProps) {
  return (
    <div className="flex items-center space-x-2.5">
      <Checkbox
        className="border border-input rounded-lg shadow-inner h-5 w-5"
        id={title}
        checked={checked}
        onCheckedChange={onChecked}
      />
      <Label
        className="text-sm text-secondary-foreground font-medium"
        htmlFor={title}
      >
        {title}
      </Label>
    </div>
  );
}
