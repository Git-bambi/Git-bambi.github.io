import { FormControl, MenuItem, Select } from "@mui/material";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useEffect, useState } from "react";
import { CheckboxWithLabel } from "../Contact/CheckboxWithLabel";
import { Slider } from "../ui/slider";
import { Button } from "../ui/button";

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
  const [resultDrinksAmount, setResultDrinksAmount] = useState<number>(0);
  const [resultDivorceRate, setResultDivorceRate] = useState<number>(0);
  
  const handleChangeSelectValue = (event: any) => {
    setSelectValue(event.target.value)
  }

  const handleSliderChange = (value: number[]) => {
    setDivorceRisk(value[0]);
  }
  const handleChangeCheckbox = (value: boolean) => {
    setIsWifeWaiting(value);
  }

  const handleChangeTime = (event: any) => {
    setHours(parseInt(event.target.value));
  }

  const handleChangeCompanions = (event: any) => {
    setCompanions(parseInt(event.target.value));
  }

  const calculateDrinks = () => {
    const calculateValue = () => {
      switch (selectValue) {
        case Drink.PIWO:
          const piwoMain = hours * 2 * (companions + 1) * (divorceRisk / 100);
          return isWifeWaiting ? piwoMain : piwoMain + 4 + (2 * (divorceRisk / 100));
        case Drink.WODKA:
          const wodkaMain = hours * 0.5 * (companions + 1) * (divorceRisk / 100);
          return isWifeWaiting ? wodkaMain : wodkaMain + 1 + (1 * (divorceRisk / 100));
        case Drink.SAMOGON:
          const samogonMain = hours * 0.25 * (companions + 1) * (divorceRisk / 100);
          return isWifeWaiting ? samogonMain : samogonMain + 0.3 + (3 * (divorceRisk / 100));
      }
    }
    setResultDrinksAmount(Math.ceil(calculateValue()))
  }

  const calculateDivorceRate = () => {
    const wifeModifier = isWifeWaiting ? 0 : 20;
    const modifiedRisk = divorceRisk - wifeModifier;
    const poweredRisk = Math.pow(modifiedRisk < 0 ? 0 : modifiedRisk, 2);
    const value = poweredRisk / 100;
    setResultDivorceRate(Math.ceil(value))
  }

  useEffect(() => {
    calculateDivorceRate();
    calculateDrinks();
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
        <Input id="time" type="number" min={0} defaultValue={0} placeholder="Ilość godzin na rybach" onInput={handleChangeTime} />
        <Label className="mt-4" htmlFor="companions">Liczba towarzyszy</Label>
        <Input id="companions" type="number" min={0} defaultValue={0} placeholder="Liczba towarzyszy" onInput={handleChangeCompanions} />
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
        <CheckboxWithLabel text="Czy żona czeka w domu?" onChange={handleChangeCheckbox} />
        <Label className="mt-4" htmlFor="slider">Jak bardzo jesteś gotów zaryzykować rozwód?</Label>
        <Slider id="slider" className="my-2" defaultValue={[DEFAULT_SLIDER_VALUE]} max={100} step={1} onValueChange={handleSliderChange} />
      
        <Button>Ilość potrzebnych półlitrowych opakowań: {resultDrinksAmount}</Button>
        <Button>Ryzyko rozwodu: {resultDivorceRate}%</Button>
      </FormControl>
    </div>
  )
}

export default Calculator;