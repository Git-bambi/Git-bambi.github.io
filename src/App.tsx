import './App.css'
import About from './components/About/About';
import Calculator from './components/Calculator/Calculator';
import Contact from './components/Contact/Contact';
import Excuses from './components/Excuses/Excuses';
import MainPage from './components/MainPage';
import NavBar from './components/NavBar'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import WaterKing from './components/WaterKing/WaterKing';
import Gallery from './components/Gallery/Gallery';
import Funny from './components/Funny/Funny';
import Map from './components/Map/Map';
import Canvas from './components/Canvas/Canvas';
import Statistics from './components/Statistics/Statistics';
import { useEffect, useState } from 'react';
import useLocalStorage from './useLocalStorage';

function App() {

  const [seconds, setSeconds] = useState(0);
  const [visits, setVisits] = useLocalStorage('visit-counter', 0);

  useEffect(() => {
    //@ts-ignore
    setVisits(visits + 1);
    const intervalId = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Router>
        <div>
          <NavBar></NavBar>
          <Switch>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/excuses">
              <Excuses />
            </Route>
            <Route path="/calculator">
              <Calculator />
            </Route>
            <Route path="/waterking">
              <WaterKing />
            </Route>
            <Route path="/gallery">
              <Gallery />
            </Route>
            <Route path="/funny">
              <Funny />
            </Route>
            <Route path="/map">
              <Map />
            </Route>
            <Route path="/canvas">
              <Canvas />
            </Route>
            <Route path="/statistics">
              <Statistics
                seconds={seconds}
                //@ts-ignore
                visits={visits}
              />
            </Route>
            <Route path="/info">
              <About />
            </Route>
            <Route path="/">
              <MainPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  )
}

export default App
