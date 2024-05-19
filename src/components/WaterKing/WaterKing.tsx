<head>

</head>

const WaterKing = () => {

  const renderTable = () => (
    <table style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <thead>
        <tr>
          <th style={{ border: "1px solid black" }}>Miejsce w rankingu</th>
          <th style={{ border: "1px solid black" }}>Nazwa ryby</th>
          <th style={{ border: "1px solid black" }}>Nazwa łacińska</th>
          <th style={{ border: "1px solid black" }}>Dieta</th>
          <th style={{ border: "1px solid black" }}>Rozmiary</th>
          <th style={{ border: "1px solid black" }}>Środowisko</th>
        </tr>
      </thead>
      <tbody>
        <tr style={{ border: "1px solid black" }}>
          <td style={{ border: "1px solid black" }}>1</td>
          <td style={{ border: "1px solid black" }}>Szczupak</td>
          <td style={{ border: "1px solid black" }}>Esox lucius</td>
          <td style={{ border: "1px solid black" }}>Rybożerny</td>
          <td style={{ border: "1px solid black" }}>Do 1,5 m długości</td>
          <td style={{ border: "1px solid black" }}>Rzeka, jezioro</td>
        </tr>
        <tr style={{ border: "1px solid black" }}>
          <td style={{ border: "1px solid black" }}>2</td>
          <td style={{ border: "1px solid black" }}>Sum</td>
          <td style={{ border: "1px solid black" }}>Silurus glanis</td>
          <td style={{ border: "1px solid black" }}>Rybożerny</td>
          <td style={{ border: "1px solid black" }}>Do 2,5 m długości</td>
          <td style={{ border: "1px solid black" }}>Rzeka, jezioro</td>
        </tr>
        <tr style={{ border: "1px solid black" }}>
          <td style={{ border: "1px solid black" }}>3</td>
          <td style={{ border: "1px solid black" }}>Okon</td>
          <td style={{ border: "1px solid black" }}>Perca fluviatilis</td>
          <td style={{ border: "1px solid black" }}>Rybożerny</td>
          <td style={{ border: "1px solid black" }}>Do 50 cm długości</td>
          <td style={{ border: "1px solid black" }}>Rzeka, jezioro</td>
        </tr>
        <tr style={{ border: "1px solid black" }}>
          <td style={{ border: "1px solid black" }}>4</td>
          <td style={{ border: "1px solid black" }}>Sandacz</td>
          <td style={{ border: "1px solid black" }}>Sander lucioperca</td>
          <td style={{ border: "1px solid black" }}>Rybożerny</td>
          <td style={{ border: "1px solid black" }}>Do 1 m długości</td>
          <td style={{ border: "1px solid black" }}>Rzeka, jezioro</td>
        </tr>
        <tr style={{ border: "1px solid black" }}>
          <td style={{ border: "1px solid black" }}>5</td>
          <td style={{ border: "1px solid black" }}>Amur</td>
          <td style={{ border: "1px solid black" }}>Ctenopharyngodon idella</td>
          <td style={{ border: "1px solid black" }}>Roślinożerny</td>
          <td style={{ border: "1px solid black" }}>Do 1 m długości</td>
          <td style={{ border: "1px solid black" }}>Rzeka, jezioro</td>
        </tr>
        <tr style={{ border: "1px solid black" }}>
          <td style={{ border: "1px solid black" }}>6</td>
          <td style={{ border: "1px solid black" }}>Pstrąg</td>
          <td style={{ border: "1px solid black" }}>Salmo trutta</td>
          <td style={{ border: "1px solid black" }}>Wszystkożerny</td>
          <td style={{ border: "1px solid black" }}>Do 1 m długości</td>
          <td style={{ border: "1px solid black" }}>Rzeka, jezioro</td>
        </tr>
        <tr style={{ border: "1px solid black" }}>
          <td style={{ border: "1px solid black" }}>7</td>
          <td style={{ border: "1px solid black" }}>Leszcz</td>
          <td style={{ border: "1px solid black" }}>Abramis brama</td>
          <td style={{ border: "1px solid black" }}>Roślinożerny</td>
          <td style={{ border: "1px solid black" }}>Do 60 cm długości</td>
          <td style={{ border: "1px solid black" }}>Rzeka, jezioro</td>
        </tr>
        <tr style={{ border: "1px solid black" }}>
          <td style={{ border: "1px solid black" }}>8</td>
          <td style={{ border: "1px solid black" }}>Karp</td>
          <td style={{ border: "1px solid black" }}>Cyprinus carpio</td>
          <td style={{ border: "1px solid black" }}>Roślinożerny</td>
          <td style={{ border: "1px solid black" }}>Do 1 m długości</td>
          <td style={{ border: "1px solid black" }}>Jezioro, stawy</td>
        </tr>
        <tr style={{ border: "1px solid black" }}>
          <td style={{ border: "1px solid black" }}>9</td>
          <td style={{ border: "1px solid black" }}>Płotka</td>
          <td style={{ border: "1px solid black" }}>Rutilus rutilus</td>
          <td style={{ border: "1px solid black" }}>Roślinożerny</td>
          <td style={{ border: "1px solid black" }}>Do 40 cm długości</td>
          <td style={{ border: "1px solid black" }}>Rzeka, jezioro</td>
        </tr>
        <tr style={{ border: "1px solid black" }}>
          <td style={{ border: "1px solid black" }}>10</td>
          <td style={{ border: "1px solid black" }}>Karaś</td>
          <td style={{ border: "1px solid black" }}>Carassius carassius</td>
          <td style={{ border: "1px solid black" }}>Roślinożerny</td>
          <td style={{ border: "1px solid black" }}>Do 50 cm długości</td>
          <td>Rzeka, jezioro</td>
        </tr>
      </tbody>
    </table>
  )

  return (
    <div>
      <h1 style={{
        fontSize: "32px",
        fontFamily: "Comic Sans MS",
        fontWeight: "800",
        color: "gold",
        background: "black",
        margin: "1rem",
        padding: "1rem",
      }}>
        Szczupak jest król wód, tak jak lew jest król dżungli
      </h1>
      {renderTable()}
      <div style={{
        display: "flex",
        justifyContent: "center",
      }}>
        <img src="src/assets/pikecrown.jpg" alt="Szczupak KRUL WUT" />
      </div>
    </div>
  )
}

export default WaterKing;