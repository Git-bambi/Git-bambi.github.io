import './App.css'
import About from './components/About/About';
import Calculator from './components/Calculator/Calculator';
import Contact from './components/Contact/Contact';
import Excuses from './components/Excuses/Excuses';
import MainPage from './components/MainPage';
import NavBar from './components/NavBar'
import { Switch, Link, Route, BrowserRouter as Router, useHistory } from 'react-router-dom';
import WaterKing from './components/WaterKing/WaterKing';
import Gallery from './components/Gallery/Gallery';
import Funny from './components/Funny/Funny';
import Map from './components/Map/Map';
import Canvas from './components/Canvas/Canvas';
import Statistics from './components/Statistics/Statistics';

function App() {

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
              <Statistics />
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
