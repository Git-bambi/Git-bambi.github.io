import FormControl from "@mui/material/FormControl";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CheckboxWithLabel } from "./CheckboxWithLabel";
import { Button } from "../ui/button";
import { ComboboxDemo } from "./Select";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";

const Contact = () => {

  const [selectValue, setSelectValue] = useState();

  const handleChangeSelectValue = (event) => {
    setSelectValue(event.target.value)
  }

  const renderRadioGroup = () => {
    return (
      <RadioGroup defaultValue="option-one" className="m-1">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="gingerbread" id="option-1" />
          <Label htmlFor="option-1">Piernik</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="white-worm" id="option-2" />
          <Label htmlFor="option-2">Biały robak</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="melasa" id="option-3" />
          <Label htmlFor="option-3">Melasa</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="red-worm" id="option-4" />
          <Label htmlFor="option-4">Czerwony robak</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="waglerek" id="option-5" />
          <Label htmlFor="option-5">Waglerek</Label>
        </div>
      </RadioGroup>
    )
  }

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "80vh",
    }}>
      <FormControl>
        <Input placeholder="Imię" />
        <Input placeholder="Nazwisko" />
        <Input type="email" placeholder="E-mail" />
        <Input type="tel" placeholder="Telefon" />
        <CheckboxWithLabel text="Czy posiadasz kartę wędkarską?" />
        <Label className="mt-4" htmlFor="card-date">Data uzyskania karty wędkarskiej</Label>
        <Input id="card-date" type="date" placeholder="Data uzyskania karty wędkarskiej" />
        <Label className="mt-4" htmlFor="card-date">Ulubiona ryba</Label>
        <Select
          className="my-2"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectValue}
          label="Ulubiona ryba"
          onChange={handleChangeSelectValue}
        >
          <MenuItem value={10}>Szczupak</MenuItem>
          <MenuItem value={20}>Sum</MenuItem>
          <MenuItem value={30}>Sandacz</MenuItem>
          <MenuItem value={40}>Okoń</MenuItem>
          <MenuItem value={50}>Karaś</MenuItem>
        </Select>
        {renderRadioGroup()}
        <Button>Wyślij</Button>
      </FormControl>
    </div>
  )
}

export default Contact;