import './App.css';
import React,{ useState } from 'react';
import Reset from './components/reset';
import Timer from './components/timer';


function App() {
  const [enable, setEnable] = useState(false);
  const [bgColor, setBgColor] = useState("gray");
  const [active,setActive] = useState("1")
  const [previousclick,setPreviousClick] = useState("2")

  return (
    <div className="App">
      <Timer className ="timer1" id="1" player ="player1"
      bgColor ={!bgColor}
      setBgColor={setBgColor}
      enable ={enable}
      setEnable ={setEnable}
      active ={active}
      setActive ={setActive}
      previousclick={previousclick}
      setPreviousClick={setPreviousClick}
      />
      <Reset />
      <Timer className ="timer2" id="2"  player ="player2"
      bgColor ={bgColor}
      setBgColor={setBgColor}
      enable={enable}
      setEnable ={setEnable}
      active ={active}
      setActive ={setActive}
      previousclick={previousclick}
      setPreviousClick={setPreviousClick}
      />
    </div>
  );
}

export default App;
