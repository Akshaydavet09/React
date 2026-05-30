 import TextField from '@mui/material/TextField';
 import Button from '@mui/material/Button';

function SearchBox({handleChange, handleSubmit}){
    return <div className="SearchBox">
        <h2>Weather App</h2>
        <form action="" onSubmit={handleSubmit}>
        <div className="search-bar">
        <TextField id="outlined-basic" label="Enter City Name" variant="outlined" name='cityName' onChange={handleChange}/>
        </div>
        <div className="btn">
        <Button type='submit' variant="contained">Search</Button>
        </div>
        </form>
    </div>
}
export default SearchBox;