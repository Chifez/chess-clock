import React,{ useState } from 'react'

const Timer = (props) => {
  const [enable, setEnable] = useState(false);
  const [bgColor, setBgColor] = useState("gray");
  const [onStartClick, setOnStartClick] = useState(false);

      const{className} = props;
    
      
      const handleStart = (e) =>{
        console.log(e)
        console.log(e.target.className)
        console.log(e.type)
        if ((e.target.className==="timer1" || e.target.className==="timer2") && e.type === "click"){
          setOnStartClick(true)
        }
        
      // setEnable(!enable)
      // setOnStart(!onStart)
    }

    const handleToggle =(e) =>{
      if(onStartClick){
        if ((enable) && e.type === "click"){
          setEnable(!enable)
      }
      }
    }

    const handleClick = (e) => {
        handleStart(e);
        handleToggle(e)
        const color = (enable) ? "green" : "gray";
        setBgColor(color);
        setEnable(!enable);
        // return
    }
  
  return (
     
      <div onClick={(e) => {handleClick(e)}} style ={{backgroundColor:`${bgColor}`}}
      className={className}>
   <h3>10</h3>
   <h3>:</h3>
   <h3>00</h3>
   </div> 
  )
}

export default Timer