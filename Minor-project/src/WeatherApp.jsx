import { useState } from 'react';
import WeatherCard from './WeatherCard';
import SearchBox from './SearchBox';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

function WeatherApp() {
    let [value, setValue] = useState("");
    let [result, setResult] = useState({
        feel: 36.17,
        humidity: 36,
        max_temp: 35.05,
        min_temp: 35.05,
        name: "Delhi",
        temp: 35.05,
        weather: "clear sky"
    });
    let [err, setErr] = useState(false);


    function handleChange(event) {
        event.preventDefault();
        setErr(false);
        setValue(event.target.value);
    }

    async function handleSubmit(event) {
        event.preventDefault();
        const apiKey = "042a228cbcdc061a6191f161ee2dd319";
        console.log(value);
        let URL = `http://api.openweathermap.org/data/2.5/weather?q=${value}&APPID=042a228cbcdc061a6191f161ee2dd319&units=metric`;
        try {
            let response = await fetch(URL);
            let res = await response.json();
            let data = {
                name: res.name,
                temp: res.main.temp,
                max_temp: res.main.temp_max,
                min_temp: res.main.temp_min,
                weather: res.weather[0].description,
                humidity: res.main.humidity,
                feel: res.main.feels_like
            };
            setResult((prevVal) => {
                return data;
            });
        } catch (error) {
            setErr(true);
        }
    }


    return <div className="WeatherApp">
        {err && <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            No such place exists!
        </Alert>}
        <SearchBox handleChange={handleChange} handleSubmit={handleSubmit} />
        <WeatherCard data={result} />
    </div>
}

export default WeatherApp;