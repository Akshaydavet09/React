import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function WeatherCard() {
    return (
        <Card sx={{ maxWidth: 645 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="https://plus.unsplash.com/premium_photo-1700131051396-307a36e3ef85?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmFpbiUyMGFlc3RoZXRpY3xlbnwwfHwwfHx8MA%3D%3D"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Weather
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Weather is Sexy!
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}