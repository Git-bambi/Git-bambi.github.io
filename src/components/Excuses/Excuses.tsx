const Excuses = () => {
  return (
    <div>
      <h1>
        Wymówki
      </h1>
      <article
        style={{
          margin: "0 20%"
        }}
      >
        <header>
          <h2>Pamiętaj, że szczerość w relacjach jest kluczowa, więc staraj się nie nadużywać wymówek. Może warto spróbować zaprosić żonę na wspólne łowienie ryb?  </h2>
        </header>
        <ol style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}>
          <li>1. Zdrowie: "Potrzebuję trochę świeżego powietrza i relaksu na świeżym powietrzu dla zdrowia psychicznego."</li>
          <li>2. Ćwiczenia: "Łowienie ryb to dobra forma aktywności fizycznej i pomoże mi się poruszać."</li>
          <li>3. Stres: "Łowienie ryb to moja ulubiona forma relaksu i odstresowania się po ciężkim tygodniu pracy."</li>
          <li>4. Przyjaciele: "Umówiłem się z kolegami na wspólne łowienie ryb. Dawno się nie widzieliśmy i chcielibyśmy nadrobić zaległości."</li>
          <li>5. Hobby: "Łowienie ryb to moje hobby, a muszę czasem poświęcić czas na swoje zainteresowania."</li>
          <li>6. Rodzina: "Chciałbym złowić rybę, żebyśmy mogli zrobić razem pyszny, świeży obiad."</li>
          <li>7. Spokój: "Potrzebuję trochę ciszy i spokoju, aby przemyśleć kilka rzeczy."</li>
          <li>8. Przyroda: "Chciałbym spędzić trochę czasu na łonie natury, aby nacieszyć się pięknem przyrody."</li>
          <li>9. Nowy sprzęt: "Kupiłem nowy sprzęt wędkarski i chciałbym go wypróbować."</li>
          <li>10. Eksperyment: "Mam nową przynętę/technikę, którą chciałbym przetestować."</li>
        </ol>
        <img src="src/assets/rybydzwonia.jpg" alt="Wymowna koszulka - obrazek" />
      </article>
    </div>
  )
}

export default Excuses;