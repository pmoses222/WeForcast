import React from 'react'
import {ErrorContainer} from "./errorStyles"

function Error({err}) {

    
  return (
    <ErrorContainer>
        <div className = "error"> Ops ! No such city is found !<br/>{err}</div>
    </ErrorContainer>
      
     
    
  )

  
}

export default Error