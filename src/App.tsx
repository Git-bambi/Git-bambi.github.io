import './App.css'
import About from './components/About/About';
import Calculator from './components/Calculator/Calculator';
import MainPage from './components/MainPage';
import NavBar from './components/NavBar'
import { Switch, Link, Route, BrowserRouter as Router, useHistory } from 'react-router-dom';

function App() {

  return (
    <>
      <Router>
        <div>
          <NavBar></NavBar>
          <Switch>
            <Route path="/info">
              <About />
            </Route>
            <Route path="/calculator">
              <Calculator />
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
