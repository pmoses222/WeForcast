import React from 'react'
import styled from "styled-components"

function Error({error}) {

    const ErrorContainer = styled`
    margin:300px 600px;
    `
  return (
    <ErrorContainer>
        <div className = "error">{error}</div>
    </ErrorContainer>
      
     
    
  )
}

export default Error