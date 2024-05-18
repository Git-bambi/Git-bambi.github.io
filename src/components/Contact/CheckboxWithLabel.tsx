import { Checkbox } from "@/components/ui/checkbox"

interface CheckboxWithLabelProps {
  text: string;
  onChange?: (value: boolean) => void;
}

export function CheckboxWithLabel(props: CheckboxWithLabelProps) {
  return (
    <div className="m-1 flex items-center space-x-2">
      <Checkbox onCheckedChange={props.onChange} id="terms"  />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {props.text}
      </label>
    </div>
  )
}
