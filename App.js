import { useState } from "react"
import axios from "axios"

function App()
{

const [deg,setdeg] = useState("0")
const [city,setcity] = useState("France")
const [desc,setdesc] = useState("Rainy")
const [evalue,setevalue] = useState("")

function handlechange(event)
{
 setevalue(event.target.value)
}

function getweather()
{
  var weatherdata = axios(`https://api.openweathermap.org/data/2.5/weather?q=${evalue}&appid=ee949cc184264765ad2f53c854eb1a81&units=metric`)

 weatherdata.then(function(dalta){
 setdeg(dalta.data.main.temp)

 setdesc(dalta.data.weather[0].main)
 setcity(dalta.data.name)
 
 })
 
 }


  return(
  <div className="flex flex-row justify-center h-[100vh] items-center">
    <div style={{ "background-image": "linear-gradient(120deg, #a6c0fe 0%, #f68084 100%" }} className="p-2 rounded-md shadow">
      <h2 className="font-medium">Hey ! ⛅</h2>
      <p className="text-xs">Do you want to Know the weather Report</p>
      <input onChange={handlechange} className="rounded-md h-6 text-sm mt-2 outline-none" placeholder="City Name" ></input>
      <br/>
      <button onClick={getweather}  className="mt-2 p-1 text-xs text-white bg-black rounded-md">Get Report ⚡</button>
      <p className="mt-2">Degree:{deg}°C|City:{city}|Weather:{desc}</p>
    </div>
  </div>)
}

export default App
