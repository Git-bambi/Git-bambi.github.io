import { FormControl, MenuItem, Select } from "@mui/material";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useEffect, useState } from "react";
import { CheckboxWithLabel } from "../Contact/CheckboxWithLabel";
import { Slider } from "../ui/slider";

enum Drink {
  PIWO = "piwo",
  WODKA = "wódeczka",
  SAMOGON = "samogon"
}

const DEFAULT_SLIDER_VALUE = 0;

const Calculator = () => {

  const [selectValue, setSelectValue] = useState<Drink>(Drink.PIWO);
  const [companions, setCompanions] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [divorceRisk, setDivorceRisk] = useState<number>(DEFAULT_SLIDER_VALUE);
  const [isWifeWaiting, setIsWifeWaiting] = useState<boolean>(false);

  const handleChangeSelectValue = (event: any) => {
    setSelectValue(event.target.value)
  }

  const handleSliderChange = (value: number[]) => {
    setDivorceRisk(value[0]);
  }

  useEffect(() => {
    console.log(selectValue, companions, hours, divorceRisk, isWifeWaiting)
  }, [selectValue, companions, hours, divorceRisk, isWifeWaiting]);

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "80vh",
    }}>
      <FormControl>
        <Label className="mt-4" htmlFor="time">Ilość godzin na rybach</Label>
        <Input id="time" type="number" min={0} placeholder="Ilość godzin na rybach" />
        <Label className="mt-4" htmlFor="companions">Liczba towarzyszy</Label>
        <Input id="companions" type="number" min={0} placeholder="Liczba towarzyszy" />
        <Label className="mt-4" htmlFor="card-date">Rodzaj prowiantu</Label>
        <Select
          className="my-2"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectValue}
          label="Rodzaj prowiantu"
          onChange={handleChangeSelectValue}
        >
          <MenuItem value={Drink.PIWO}>Piwo</MenuItem>
          <MenuItem value={Drink.WODKA}>Wódeczka</MenuItem>
          <MenuItem value={Drink.SAMOGON}>Samogon</MenuItem>
        </Select>
        <CheckboxWithLabel text="Czy żona czeka w domu?" />
        <Label className="mt-4" htmlFor="slider">Jak bardzo jesteś gotów zaryzykować rozwód?</Label>
        <Slider id="slider" className="my-2" defaultValue={[DEFAULT_SLIDER_VALUE]} max={100} step={1} onValueChange={handleSliderChange} />
      </FormControl>
    </div>
  )
}

export default Calculator;