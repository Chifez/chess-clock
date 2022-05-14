import React from 'react'
import {clock} from './clock.js'

const Timer = (props) => {
    const{ className, player, id, bgColor, setBgColor, enable, setEnable, active, setActive, previousclick,setPreviousClick } = props;
    const{time} = clock;


    const handleToggle = (e) =>{
      const id = e.target.id
      if (id === "1" && previousclick === "2"){
        setActive("2")
        setPreviousClick("1")
        // console.log(id)
      }else if (id ==="2" && previousclick ==="1"){
        setActive("1")
        setPreviousClick("2")
        // console.log(id)
      }else if((id === "1" && previousclick === "1")||(id ==="2" && previousclick ==="2")){
        setActive(previousclick)
        setPreviousClick(previousclick)
      }
      console.log(active)
    }
    
    
    const handleClick = (e) => {
      handleToggle(e)
      const color = (enable === true) ? "green" : "gray";
      // if (id === active){
        setBgColor(color)
        setEnable(!enable)
        //   console.log(enable)
        //   console.log(id)
        // } else {
        //   setBgColor("green")
        // }
         }
      
    
  return (
      <div>        
        {time.map((timer) => 
          <div key={id}  id={id} className={className} onClick={(e,id) => {handleClick(e,id)}} 
          style ={{backgroundColor:`${bgColor}`}} >
            <h2>{player}</h2>
            <h3>{timer.min}</h3>
            <h3>:</h3>
            <h3>{timer.sec}</h3>
          </div>
        )}

      </div>



    )
  }

  //   <div onClick={(e,className) => {handleClick(e,className)}} style ={{backgroundColor:`${bgColor}`}} >
   
  //  </div> 

export default Timer