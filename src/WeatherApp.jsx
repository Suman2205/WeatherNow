import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";


export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({city:"Delhi",feelsLike: 34.14,humidity: 57,temp: 31.01,tempMax: 31.01,tempMin: 31.01,weather: "overcast clouds"});
    let updateInfo=(result)=>{
        setWeatherInfo(result);
    }
    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App by Delta</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}