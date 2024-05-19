import FormControl from "@mui/material/FormControl";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CheckboxWithLabel } from "./CheckboxWithLabel";
import { Button } from "../ui/button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";

enum Fish {
  SZCZUPAK = "Szczupak",
  SUM = "Sum",
  SANDACZ = "Sandacz",
  OKON = "Okoń",
  KARAS = "Karaś",
}

enum Bait {
  GINGERBREAD = "piernik",
  WHITE_WORM = "biały robak",
  MELASA = "melasa",
  RED_WORM = "czerwony robak",
  WAGLEREK = "waglerek",
}

const Contact = () => {
  const [favouriteFish, setFavouriteFish] = useState<Fish>();
  const [favouriteBait, setFavouriteBait] = useState<Bait>();
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [[phoneNumber], setPhoneNumber] = useState<string>("");
  const [isFishingCard, setIsFishingCard] = useState<boolean>(false);
  const [fishinCardDate, setFishingCardDate] = useState<string>("");

  const handleChangeFavoriteFish = (event: any) => {
    setFavouriteFish(event.target.value)
  }

  const handleChangeFavoriteBait = (value: Bait) => {
    setFavouriteBait(value);
  }

  const handleChangeFishingCardDate = (event: any) => {
    setFishingCardDate(event.target.value);
  }

  const handleChangeName = (event: any) => {
    setName(event.target.value);
  }

  const handleChangeSurname = (event: any) => {
    setSurname(event.target.value);
  }

  const handleChangeEmail = (event: any) => {
    setEmail(event.target.value);
  }

  const handleChangePhone = (event: any) => {
    setPhoneNumber(event.target.value);
  }

  const handleChangeCheckbox = (value: boolean) => {
    setIsFishingCard(value);
  }

  const handleSend = () => {
    const subject = 'Witaj na stronie Ryby.pl';
    const body = `
      Witaj ${name} ${surname} na stronie Ryby.pl!
      Dziękujemy za kontakt z nami.

      Według podanych przez Ciebie informacji twoją ulubioną rybą jest ${favouriteFish},
      a ulubiona przynęta to ${favouriteBait}.
    `;
    const body2 = isFishingCard ? `
      Jesteś szczęśliwym posiadaczem karty wędkarskiej od ${fishinCardDate}. 
      Życzymy udanych łowów.

      Pozdrawiamy serdecznie
      Zespół Ryby.pl
    ` : `
      Z racji braku posiadania karty wędkarskiej przesłaliśmy Pańskie dane 
      do Polskiego Związku Wędkarskiego, który to skontakuje się w sprawie wystawienia mandatu za nielegalny połów ryby ${favouriteFish}.
      W celu szybszego wyjaśnienia sprawy prosimy o bezpośredni kontakt: https://pzw.pl/zarzad-glowny/kontakt

      Nie pozdrawiamy
      Zespół Ryby.pl
    `
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body + body2)}`;

    window.open(mailtoUrl, '_blank', 'noopener,noreferrer');
  }


  const renderRadioGroup = () => {
    return (
      <RadioGroup defaultValue="option-one" className="m-1" onValueChange={handleChangeFavoriteBait}>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value={Bait.GINGERBREAD} id="option-1" />
          <Label htmlFor="option-1">Piernik</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value={Bait.WHITE_WORM} id="option-2" />
          <Label htmlFor="option-2">Biały robak</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value={Bait.MELASA} id="option-3" />
          <Label htmlFor="option-3">Melasa</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value={Bait.RED_WORM} id="option-4" />
          <Label htmlFor="option-4">Czerwony robak</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value={Bait.WAGLEREK} id="option-5" />
          <Label htmlFor="option-5">Waglerek</Label>
        </div>
      </RadioGroup>
    )
  }

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isSendButtonEnabled = name && surname && email && favouriteFish 
  && favouriteBait && validateEmail() && (!isFishingCard || fishinCardDate);

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "80vh",
    }}>
      <FormControl>
        <Input placeholder="Imię" onInput={handleChangeName} />
        <Input placeholder="Nazwisko" onInput={handleChangeSurname} />
        <Input type="email" placeholder="E-mail" onInput={handleChangeEmail} />
        <Input type="tel" placeholder="Telefon" onInput={handleChangePhone} />
        <CheckboxWithLabel text="Czy posiadasz kartę wędkarską?" onChange={handleChangeCheckbox} />
        <Label className="mt-4" htmlFor="card-date">Data uzyskania karty wędkarskiej</Label>
        <Input
          id="card-date"
          type="date"
          placeholder="Data uzyskania karty wędkarskiej"
          disabled={!isFishingCard}
          onInput={handleChangeFishingCardDate}
        />
        <Label className="mt-4" htmlFor="card-date">Ulubiona ryba</Label>
        <Select
          className="my-2"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={favouriteFish}
          label="Ulubiona ryba"
          onChange={handleChangeFavoriteFish}
        >
          <MenuItem value={Fish.SZCZUPAK}>Szczupak</MenuItem>
          <MenuItem value={Fish.SUM}>Sum</MenuItem>
          <MenuItem value={Fish.SANDACZ}>Sandacz</MenuItem>
          <MenuItem value={Fish.OKON}>Okoń</MenuItem>
          <MenuItem value={Fish.KARAS}>Karaś</MenuItem>
        </Select>
        {renderRadioGroup()}
        <Button disabled={!isSendButtonEnabled} onClick={handleSend}>Wyślij</Button>
      </FormControl>
    </div>
  )
}

export default Contact;