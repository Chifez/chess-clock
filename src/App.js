import './App.css';
import React,{ useEffect, useState,useRef } from 'react';
import Reset from './components/reset';
import {Timer1,Timer2} from './components/timer';


function App() {
 const [player1,setPlayer1] =useState(false)
 const [player2,setPlayer2] =useState(false)
 const [player1Time,setPlayer1Time] =useState('10:00')
 const [player2Time,setPlayer2Time] =useState('10:00')
 const [timeControl,setTimecontrol] = useState(200)
 const [player1Color,setPlayer1Color] = useState("gray")
 const [player2Color,setPlayer2Color] = useState("gray")
 const [onStart,setOnStart] =useState(false);


useEffect ((e)=>{
  handleColor(e)
  // handleTime();
},[player1,player2])

 const player1Ref = useRef(null)
 const player2Ref = useRef(null)

 const startGame = (e) =>{
   if (e && !onStart){
     clearTimer(getDeadline())
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
const getTime=(endTime)=>{
  const total = Date.parse(endTime) - Date.parse(new Date())
  const seconds = Math.floor((total/1000) % 60)
  const minutes = Math.floor((total/1000 * 60) % 60)
  const hours = Math.floor((total/1000 * 60 * 60) % 24)
  const days = Math.floor((total/1000 * 60 * 60 * 24))
  console.log(total,minutes,seconds,hours,endTime)
  return{
    total,seconds,minutes,hours,days
  }
}
const startTime =(deadline)=>{
  const{total, seconds, minutes, hours, days} = getTime(deadline);
  if (total >= 0){
    const timeFormat = (minutes > 9 ? minutes : '0'+minutes) + ':' + (seconds > 9 ? seconds : '0'+seconds)
    setPlayer1Time(timeFormat)
    setPlayer2Time(timeFormat)
  } else{
    const stop = clearInterval()
    setPlayer1Time(stop(player1Ref.current))
    setPlayer2Time(stop(player2Ref.current))
  }
  console.log(deadline)
}




// const handleTime=()=>{
//  setInterval(()=>{
//    const time = ((timer) => timer - 1)
//    setPlayer1Time(time)
//    setPlayer2Time(time)
//  },1000)
// }

const clearTimer=(endTime)=>{
  const id = setInterval(() =>{
    startTime(endTime)
  },1000)
  player1Ref.current = id;
  player2Ref.current = id;
}

const getDeadline=()=>{
  const deadline= new Date();
  deadline.setSeconds(deadline.getSeconds()+`${timeControl}`)
  return deadline;
}


  return (
    <div className="App">
      <Timer1 className ="timer1" id="1"
        player1Color={player1Color}
        handleToggle ={handleToggle}
        player1Time={player1Time}
        player1Ref={player1Ref}
      />
      <Reset />
      <Timer2 className ="timer2" id="2"
        player2Color={player2Color}
        handleToggle ={handleToggle}
        player2Time={player2Time}
        player2Ref={player2Ref}
      />
    </div>
  );
}

export default App;
