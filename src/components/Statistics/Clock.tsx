import { useEffect, useState } from "react";

const Clock = () => {
  const [date, setDate] = useState(new Date());

  const tick = () => {
    setDate(new Date());
  }

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1);
    return (() => {
      clearInterval(timerID);
    })
  })

  return (
    <div>
      <h2>Aktualny czas: {date.toLocaleTimeString()}</h2>
      <h2>Data: {date.toLocaleDateString()}</h2>
    </div>
  );
}

export default Clock;
