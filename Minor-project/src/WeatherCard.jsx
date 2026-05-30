import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function WeatherCard({ data }) {
    let hot_url = "https://media.gettyimages.com/id/1023612474/video/aerial-misty-river-shining-in-the-rising-sun.jpg?s=640x640&k=20&c=0iD-N0LUMdE7x8fqneLYTxm0A6tVCzCnrU7ctrDBrFo=";
    let rain_url = "https://images.unsplash.com/photo-1475917446375-09326db30f7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fHJhaW55JTIwc2Vhc29ufGVufDB8fDB8fHww";
    let cold_url = "https://p2.piqsels.com/preview/422/39/625/cold-foggy-forest-mountain.jpg"
    return (
        <div className="Weather-card">
            <div className="Card-weather">
                <Card gutter sx={{ Width: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="240"
                            alt="green iguana"
                            image={data.humidity > 80 ? rain_url : data.temp > 15 ? hot_url : cold_url}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {data.name}
                            </Typography>

                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                <p> Temperature = {data.temp}°C</p>
                                <p>Humidity = {data.humidity}</p>
                                <p>Min Temp = {data.min_temp}°C</p>
                                <p>Max Temp = {data.max_temp}°C</p>
                                <Typography variant='2' sx={{ color: 'text.secondary' }}>
                                    <p> The Weather can be described as {data.weather} and feels like {data.feel}</p>
                                </Typography>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </div>
    );
}