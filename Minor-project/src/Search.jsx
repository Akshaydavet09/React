 import TextField from '@mui/material/TextField';
 import Button from '@mui/material/Button';
import { useState } from 'react';
import WeatherCard from './Card';

 function Search(){
    let[value, setValue] = useState("")


    function handleChange(event){
        event.preventDefault();
        setValue(event.target.value);
    }

   async function handleSubmit(event){
        event.preventDefault();
        const apiKey = "042a228cbcdc061a6191f161ee2dd319";
        console.log(value);
        let URL = `http://api.openweathermap.org/data/2.5/weather?q=${value}&APPID=042a228cbcdc061a6191f161ee2dd319&units=metric`;
        let response = await fetch(URL);
        let res = await response.json();
        // console.log(res);
        const result = {
            temp: res.main.temp,
            max_temp: res.main.temp_max,
            min_temp: res.main.temp_min,
            weather: res.weather[0].description,
            humidity: res.main.humidity,
            feel: res.main.feels_like

        }
        console.log(result);

    }


    return <div className="Search">
        <form action="" onSubmit={handleSubmit}>
        <div className="search-bar">
        <TextField id="outlined-basic" label="Enter City Name" variant="outlined" name='cityName' onChange={handleChange}/>
        </div>
        <div className="btn">
        <Button type='submit' variant="contained">Search</Button>
        </div>
        </form>
        <WeatherCard/>
    </div>
 }

 export default Search;