import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import './InfoBox.css';
import Rainy from './assets/rainy.png';
import Sunny from './assets/sunny.png';
import Winter from './assets/winter.png';

export default function InfoBox({info}){
    const INIT_URL="https://images.unsplash.com/photo-1708552592233-5934a64eaec0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL="https://images.unsplash.com/photo-1507027682794-35e6c12ad5b4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const HOT_URL="https://images.unsplash.com/photo-1572966101025-e199cab72196?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL="https://plus.unsplash.com/premium_photo-1670493556860-13e006e6faa4?q=80&w=697&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return (
        <div className="InfoBox">
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity>80?Rainy:info.temp>15?Sunny:Winter}
                        title="overcast clouds"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {info.city} {info.humidity>80?<ThunderstormIcon/>:info.temp>15?<SunnyIcon/>:<AcUnitIcon/>}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                        <p>Temperature: {info.temp}&deg;</p>
                        <p>Min Temperature: {info.tempMin}&deg;</p>
                        <p>Max Temperature: {info.tempMax}&deg;</p>
                        <p>Humidity: {info.humidity}</p>
                        <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}