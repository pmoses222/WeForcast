import styled from "styled-components"



export const MainContainer = styled.div`
display:flex;
justify-content:space-between;
height:auto;
background:#e8eaf5;
`

export const SectionContainer = styled.div`
margin:40px 30px;
width:100%;

.navigation{
    display:flex;
    justify-content:space-between;
    .nav-header{
    color: var(--secondary-color);
    }
    .form{
      display:flex;
      align-items:center;
      .input{
        border:none;
        padding:10px 20px;
        border-radius:10px 0 0 10px;
        background:#f5f5f5;
        outline:none;
        cursor:pointer;
        &::placeholder{
          color:var(--secondary-color);
          opacity:0.5
        }
      }
      .button{
        background: var(--secondary-color);
        border:none;
        padding:10px 20px;
        border-radius:0 10px 10px 0;
        cursor:pointer;
        svg{
          color:var(--primary-color);
        }
      }
    }
}

.metrics{
  padding:60px 0;
  .metrics-title{
    font-weight:var(--bold-font);
    color: var(--secondary-color);
    padding:20px 0;
    
  }
  .cards{
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:60px;
    .card{
      padding:40px;
      display:flex;
      gap:20px;
      background:#f5f5f5;
      color:var(--secondary-color);
      opacity:0.9;
      border-radius:10px;
      .card-icon{
        display:flex;
        flex-direction:column;
        align-self:center;
        svg{
          font-size:4rem;
          color:blue;
        }
      }
      .card-details{
        padding:10px;
        gap:10px;
        .card-header{
          opacity:0.5;
        }
        .card-figure{
          font-size:3rem;
        }
      }
    }
  }


}

.forecast{
  .forecast-title{
    font-weight:var(--bold-font);
    color: var(--secondary-color);
    padding:20px 0;
    
  }

  .forecast-cards{
   display:grid;
   grid-template-columns:repeat(6,0.3fr);
   gap:5px;
    .forecast-details{
      background:#f5f5f5;
      padding:20px;
      text-align:center;
      color:var(--secondary-color);
      opacity:0.9;
      border-radius:10px;

      .forecast-date{
        font-size:1rem;
        font-weight:var(--bold-font);
      }

      .forecast-icons{
        png{
          width:50px;
          height:50px;
        }
        
      } 
      
      .forecast-temp{
        font-size:1rem;
        font-weight:var(--bold-font);
      }


      
    }
  }
}
 
`

export const AsideContainer = styled.div`
margin-left:50px 70px;
width:50%;
height:auto;
background: var(--bg);
opacity:0.9;
color : var(--primary-color);
  .display{
   padding:60px 70px;
    .display-date{
      text-align:center;
      font-size:4rem;
    }
    .aside-nav{
      margin-top:100px;
      .display-title{
      font-size:2rem;
      text-align:center;
      }
    }
    .display-details{
      margin-top:100px;
      display:flex;
      flex-direction:column;
      align-content:center;
      align-items:center;
      gap:20px;
      color:white;
      h2{
        font-size:1.5rem;
      }
      
    }
    .time-weather{
      margin-top:100px;
      .card{
        border:1px #ffff solid;
        border-radius:10px;
        text-align:center;
        padding:20px;
        margin-top:10px;
        .card-icon{
          svg{
            font-size:3rem;
          }
        }
      }
    }
    
    
    
  }



`