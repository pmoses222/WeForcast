import React from 'react'
import moment from "moment"

import {MainContainer,SectionContainer,AsideContainer} from "./mainStyle"
import { FaSistrix,FaStreetView,FaTemperatureHigh } from "react-icons/fa"
import { WiHumidity, WiWindy,WiSunset,WiSunrise} from "react-icons/wi"

function Main({handleChange,query,fetchdata,result,err}) {
  const today = moment().format('LL');
  const currentTime = moment().format('LT');
 /*  const now = DateTime.local()
  const dateFormatted = now.toFormat("EEEE',' MMMM d'");
  */
  return (
    <> 
    { result ? 
   <MainContainer>
      <SectionContainer>
        <div className="navigation">
          <div className="nav-header">
           <p>{today}</p>
          </div> 
          <div className="form" >
            <input className="input" 
              onChange = {handleChange}
             value={query} placeholder="Search your Location"/>
             <button onClick ={fetchdata} className="button">
               <FaSistrix />
             </button>
          </div>
        </div>

        <div className="metrics">
              <h1 className="metrics-title">Today Overview</h1>
              <div className="cards"> 
                <div className="card">
                   <span  className ="card-icon"><WiHumidity /></span>
                    <div className="card-details">
                         <div className='card-header'>Humidity</div>
                         <div className='card-figure'>{ result.list && result.list[0].main.humidity}</div>
                   </div>
                </div>

                <div className="card">
                <span  className ="card-icon"><FaTemperatureHigh /></span>
                   <div className="card-details">
                         <div className='card-header'>Temperature</div>
                         <div className='card-figure'>{ result.list && result.list[0].main.temp}</div>
                   </div>
                </div>

                <div className="card">
                <span  className ="card-icon"><WiWindy /></span>
                   <div className="card-details">
                         <div className='card-header'>Wind Speed</div>
                         <div className='card-figure'>{ result.list && result.list[0].wind.speed}</div>
                   </div>
                </div>

                <div className="card">
                <span  className ="card-icon"><FaStreetView /></span>
                   <div className="card-details">
                         <div className='card-header'>Visibility</div>
                         <div className='card-figure'>{ result.list && result.list[0].visibility}</div>
                   </div>
                </div>
              </div>   
          </div>

        <div className="forecast">
          <h1 className="forecast-title">3 Hourly Forecast</h1>
          <div className="forecast-cards">
             <div className="forecast-details">
               <p className="forecast-date"> 0.00</p>
               <span className="forecast-icons"></span>
               <div className="forecast-temp">32 &#8451;</div>
               <div className="forecast-desc">Few clouds</div>
            </div>

             <div className="forecast-details">
              <p className="forecast-date"> 3.00</p>
              <span className="forecast-icons"></span>
              <div className="forecast-temp">32 &#8451;</div>
              <div className="forecast-desc">Few clouds</div>
            </div>

            <div className="forecast-details">
              <p className="forecast-date"> 6.00</p>
              <span className="forecast-icons"></span>
              <div className="forecast-temp">32 &#8451;</div>
              <div className="forecast-desc">Few clouds</div>
           </div>

            <div className="forecast-details">
              <p className="forecast-date"> 9.00</p>
              <span className="forecast-icons"></span>
              <div className="forecast-temp">32 &#8451;</div>
              <div className="forecast-desc">Few clouds</div>
           </div>

           <div className="forecast-details">
             <p className="forecast-date"> 12.00</p>
             <span className="forecast-icons"></span>
             <div className="forecast-temp">32 &#8451;</div>
             <div className="forecast-desc">Few clouds</div>
           </div>

           <div className="forecast-details">
             <p className="forecast-date"> 12.00</p>
             <span className="forecast-icons"></span>
             <div className="forecast-temp">32 &#8451;</div>
             <div className="forecast-desc">Few clouds</div>
           </div>
         </div>
      </div>

      </SectionContainer>

      <AsideContainer>
           <div className="display">
                <div className="display-date">{currentTime}</div>
                <div className="aside-nav">
                     <div className='display-title'>
                       {result.city && result.city.name}
                     </div>
                </div>

                <div className="display-details">
                    <div className='display-description'>
                      {result.list && result.list[0].weather[0].main}
                    </div>
                    <img src="" alt="logo" className='display-image'/>
                    <div className='display-figure'>
                      {result.list && result.list[0].main.temp} degrees
                    </div>
                    <p className='display-description'>
                      Feels like { result.list && result.list[0].main.feels_like}  degrees 
                    </p>
                </div>

                <div className="time-weather">
                  <div className="card">
                   <span  className ="card-icon"><WiSunrise /></span>
                    <div className="card-details">
                         <div className='card-header'>Sunrise</div>
                         <div className='card-figure'>{result.city && result.city.sunrise}</div>
                   </div>
                 </div>

                 <div className="card">
                   <span  className ="card-icon"><WiSunset /></span>
                    <div className="card-details">
                         <div className='card-header'>Sunset</div>
                         <div className='card-figure'>{result.city && result.city.sunset}</div>
                   </div>
                </div>
                </div>
           </div>
      </AsideContainer>  
    </MainContainer> : <div>{err}</div>}
   </> 
   )
}

export default Main