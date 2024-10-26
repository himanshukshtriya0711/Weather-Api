import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useState } from "react";
import "./SearchBox.css"
export default function SearchBox({ updateInfo }){
    let [city, setCity] = useState("");
    let [error,setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "0693b8cb173ffc72f7cd361c7e81149d";

    let getWeatherInfo = async() => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        let result ={
            city:city,
            temp:jsonResponse.main.temp,
            tempMin:jsonResponse.main.temp_min,
            tempMax:jsonResponse.main.temp_max,
            humidity : jsonResponse.main.humidity,
            feelsLike : jsonResponse.main.feels_like,
            weather : jsonResponse.weather[0].description,
        };
        console.log(result);
        return result;
        }catch(err){
            throw err;
        }
    }

    let handleChange = (event) => {
        setCity(event.target.value);
    }
    let handleSubmit = async (event) => {
        try{
            event.preventDefault();
        console.log(city);
        
        setCity("");
        let newinfo =await getWeatherInfo();
        updateInfo(newinfo);
        }catch(err){
            setError(true)
        }

    }

    return (
        <div className="SearchBox">
            <h3>Search For The City</h3>
            <form onSubmit={handleSubmit}>
                <TextField id="City" label="City Name" variant="outlined" value={city} onChange={handleChange} />
                <br /><br />
                <Button variant="contained" type="submit" endIcon={<SendIcon />}>Search</Button>
        {error && <p style={{color:"red"}}>No Such place Found!</p>}
            </form>
        </div>
    );
}
