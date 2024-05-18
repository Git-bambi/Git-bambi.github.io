import FormControl from "@mui/material/FormControl";
import StyledInput from "./StyledInput";
import { Input } from "@/components/ui/input"

const Contact = () => {
  return (
    <div>
      <FormControl>
        <StyledInput />
        <Input />        
        <button>Wyślij</button>
      </FormControl>
    </div>
  )
}

export default Contact;