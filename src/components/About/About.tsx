import { useState } from "react"

const About = () => {

  const [count, setCount] = useState(0)
  return (
    <div>
      <h2>Autor projektu:</h2>
      <h1>Miłosz Wojdak</h1>
      <p>
        Projekt strony internetowej wykonany w ramach
        zaliczenia przedmiotu MO: TIiSKwE na kierunku Energetyka.
      </p>
      <div className="card">
        <button onClick={() => setCount((prev) => prev + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  )
}

export default About