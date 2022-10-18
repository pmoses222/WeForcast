
import React,{useState} from 'react'
import axios from "axios";
import Main from "./components/Main";
import Error from "./components/Error";






function App() {
  const [query, setQuery] = useState("lagos");
  const [result , setResult] = useState({})
  const [ errMessage, setErrorMessage ] = useState("")
  const [isloading , setIsloading] = useState(false)
  const units ="metric"
  const Url = `https://api.openweathermap.org/data/2.5/forecast?q=${query}
   &appid=${process.env.REACT_APP_API_KEY}&units=${units}&cnt=6`


const handleChange =(e)=>{
    setQuery(e.target.value)
    
  }

const fetchdata = async ()=> {
  try {

    setIsloading(true)
    const call = await axios.get(Url);
    const data = await call.data;
    setResult(data)
    console.log(result)
    setIsloading(false)
    
  } catch (err) {
    setErrorMessage(err.message)
    console.log(err.message)
  }
    
     
 
}

return (
    <div className="App">
         {  errMessage ? <Error err = {errMessage} /> : 
         (<Main 
            handleChange={handleChange}
            fetchdata={fetchdata}
            query = {query}
            result = {result}
            isloading ={isloading}
            />) 
         
         }        
   </div>
  );
}

export default App;
