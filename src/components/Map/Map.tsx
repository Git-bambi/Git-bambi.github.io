
import { useState } from "react";
import Card from "./Card";

const descriptions: string[] = [
  `Wybierz jeden z akwenów wodnych`,
  `Jezioro Wielkie : W tym jeziorze żyje najgroźniejszy z wszystkich potworów morskich SUM TAK ZWANY OLIMPICZYK odpowiedzialny za zaginięcie niezlicznonej liczby rosyjskich ganksterów podobno złowić go zdołał tylko wujek Wiesio z pomocą psa buraka`,
  `Jezioro Małe: Tu żyją wszystkie potwory morskie w strachu przed "wielkim" SUMEM OLIMPICZYKIEM idealne miejsce połowów dla średnio zaawansowanych. `,
  `Staw rekreacyjny: idelne miejsce na niedzielny wypoczynek z rodziną żyją tu tylko karasie i płocie oraz wujek Wiesio`,
]

const Map = () => {
  const [selectedLake, setSelectedLake] = useState<number>(0)
  return (
    <div style={{
      display: "flex",
      justifyContent: "flex-start",
    }}>
      <img src="src/assets/lakes.jpg" useMap="#image-map" />
      <map name="image-map">
      {/* <area style={{ cursor: "pointer" }} target="" alt="SumTakZwanyOlimpiczyk" title="SumTakZwanyOlimpiczyk" href="https://www.imdb.com/title/tt2064940/mediaviewer/rm1556352769/?ref_=tt_md_2" coords="246,460,42" shape="circle"> */}
        <area style={{ cursor: "pointer" }} target="" alt="Lake 1" title="Lake 1" onClick={() => setSelectedLake(1)} coords="362,698,393,677,421,614,451,596,463,621,472,644,487,669,505,678,512,646,516,621,523,584,539,574,562,555,570,519,569,486,557,459,515,475,485,493,446,477,433,425,401,368,412,285,448,156,427,113,394,64,359,77,340,118,313,139,275,167,270,219,271,290,280,363,262,384,230,397,186,403,130,424,88,463,117,501,193,509,261,527,294,540,297,598,302,639,321,674" shape="poly" />
        <area style={{ cursor: "pointer" }} target="" alt="Lake 2" title="Lake 2" onClick={() => setSelectedLake(2)} coords="500,351,496,306,513,233,544,202,555,180,571,203,607,233,644,256,674,279,746,308,780,318,768,343,790,372,815,399,848,406,883,397,902,393,924,392,909,412,900,435,900,458,895,481,893,499,876,500,864,478,832,479,797,474,776,448,728,437,708,433,679,445,665,458,653,462,664,432,682,409,687,385,671,357,644,339,609,338,575,348,528,358,507,361" shape="poly" />
        <area style={{ cursor: "pointer" }} target="" alt="Pool 1" title="Pool 1" onClick={() => setSelectedLake(3)} coords="184,95,173,110,151,115,139,127,131,137,113,126,106,106,83,100,67,89,79,67,107,57,139,58,167,68" shape="poly" />
      </map>
      <div style={{padding: "2rem"}}>
        <Card text1={descriptions[selectedLake]}></Card>
      </div>
    </div>
  );
}

export default Map;