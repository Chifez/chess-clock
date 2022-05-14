import React from 'react'
import {clock} from './clock.js'

export const Timer1 = (props) => {
  const{className,id,handleToggle,player1Color} =props
  const {time} =clock
  return (
      <div  className={className}
      onClick={(e)=>handleToggle(e)} style= {{backgroundColor:`${player1Color}`}}
      >        
        {time.map((timer) => 
          <div key={id}>
            <h3>{timer.min}</h3>
            <h3>:</h3>
            <h3>{timer.sec}</h3>
          </div>
        )}
      </div>
    )
  }


  export const Timer2 = (props) => {
    const{className,id,handleToggle,player2Color} =props
    const {time} =clock
    return (
        <div onClick={(e)=>handleToggle(e)} className={className}
        style={{backgroundColor:`${player2Color}`}}
        >        
          {time.map((timer) => 
            <div key={id}>
              <h3>{timer.min}</h3>
              <h3>:</h3>
              <h3>{timer.sec}</h3>
            </div>
          )}
  
        </div>
      )
    }
  