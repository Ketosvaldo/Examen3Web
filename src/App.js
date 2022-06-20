import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Curriculum from './components/Curriculum';
import Portafolio from './components/Portafolio';
import Numbers from './components/PureComponent/Numbers';
import Popup from './components/Popup/Popup';
import Timer from './components/Pomodoro/Timer';
import Person from './components/Person/Person';
import Cripto from './components/Cripto/Cripto';
import Calculator from './components/Calculator/Calculator';
import Animation from './components/Animating/Animation';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <img src='https://elcomercio.pe/resizer/t3hx1AWO_KiykW-CXnHsoPC6Oas=/1200x1200/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/W6DPHF3HLBHOHEUJIRHOT3J6IY.jpg' className = "App-logo" alt="logo" />
          <br/>
          <h2>Taichi</h2>
          <br/>
          <a href="/">Curriculum</a>
          <br/>
          <a href="/portafolio">Portafolio</a>
          <br/>
          <a href="/contact">Contacto</a>
      </header>
      <Routes>
        <Route path="/" element={<Curriculum />}/>
        <Route path="/portafolio" element={<Portafolio />}/>
        <Route path="/portafolio/numbers" element={<Numbers />}/>
        <Route path="/portafolio/popup" element={<Popup />}/>
        <Route path="/portafolio/timer" element={<Timer />}/>
        <Route path="/contact" element={<Person />}/>
        <Route path="/portafolio/cripto" element={<Cripto />}/>
        <Route path="/portafolio/calculator" element={<Calculator />}/>
        <Route path="/portafolio/animation" element={<Animation />}/>
      </Routes>
    </div>
  );
}

export default App;
