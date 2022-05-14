import './App.css';
import React,{ useEffect, useState } from 'react';
import Reset from './components/reset';
import {Timer1,Timer2} from './components/timer';


function App() {
 const [player1,setPlayer1] =useState(false)
 const [player2,setPlayer2] =useState(false)
 const [player1Time,setPlayer1Time] =useState(false)
 const [player2Time,setPlayer2Time] =useState(false)
 const[player1Color,setPlayer1Color] = useState("gray")
 const[player2Color,setPlayer2Color] = useState("gray")
 const [onStart,setOnStart] =useState(false);

useEffect ((e)=>{
  handleColor(e)
},[player1,player2])


 const startGame =(e) =>{
   if (e && !onStart){
     if ((e.target.className === "timer1") && player1 ===false){
       console.log(e.target.className)
       setPlayer2(true)
       setPlayer1(false)
       setOnStart(true)
       console.log(player1,player2)
       return;
     }
     else if((e.target.className === "timer2") && player2===false){
      console.log(e.target.className)
      setPlayer1(true)
      setPlayer2(false)
      setOnStart(true)
      console.log(player1,player2)
      return;
    }
 }
}

 const handleToggle = (e) =>{
   if (onStart){
     if ((player1 &&  player2 === false) && e.target.className ==="timer1"){
       setPlayer1(!player1);
       setPlayer2(!player2);
       console.log(player1,player2)
     } else if ((player1 === false &&  player2 === true) && e.target.className ==="timer2"){
    setPlayer1(!player1);
    setPlayer2(!player2);
    console.log(player1,player2)
  } else{
  return;
  }
 } else{
   handleColor(e);
 }
 console.log(onStart)
}

const handleColor  =(e) =>{
  startGame(e);
  if (player1 && !player2){
    setPlayer1Color("green")
    setPlayer2Color("gray")
  }else if(!player1 && player2){
    setPlayer2Color("green")
    setPlayer1Color("gray")
  }else{
    return
  }
}


  return (
    <div className="App">
      <Timer1 className ="timer1" id="1"
        player1Color={player1Color}
        handleToggle ={handleToggle}
      />
      <Reset />
      <Timer2 className ="timer2" id="2"
        player2Color={player2Color}
        handleToggle ={handleToggle}
      />
    </div>
  );
}
export default App;
