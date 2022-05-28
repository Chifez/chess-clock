import React from 'react'

export const Timer1 = (props) => {
  const {className,id,handleToggle,player1Color,player1Ref,player1Time} =props
  return (
      <div ref={player1Ref} className={className}
      onClick={(e)=>handleToggle(e)} style= {{backgroundColor:`${player1Color}`}}
      >        
      
          <div key={id}>
            <h3>{player1Time}</h3>
          </div>
      </div>
    )
  }


  export const Timer2 = (props) => {
    const {className,id,handleToggle,player2Color,player2Ref,player2Time} =props
    return (
        <div ref={player2Ref} onClick={(e)=>handleToggle(e)} className={className}
        style={{backgroundColor:`${player2Color}`}}
        >        

            <div key={id}>
              <h3>{player2Time}</h3>
            </div>

  
        </div>
      )
    }
  