import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import CardActionArea from '@mui/material/CardActionArea';

export default function InfoBox({ info }){
    
    const HOT_URL = "https://images.unsplash.com/photo-1546274527-9327167dc1f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdCUyMCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const COLD_URL = "https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1508697014387-db70aad34f4d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJhaW4lMjB3ZWF0aGVyfGVufDB8fDB8fHww";
   
    return(
        <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            
        }}>
        
    <Card sx={{ maxWidth: 345 }} className='InfoBox'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={
            info.humidity>80
             ? RAIN_URL
             : info.temp > 15
               ? HOT_URL
               :COLD_URL}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
            <div>City:{info.city}</div>
            <div>Temperature: {info.temp}&deg;</div>
            <div>Minimum Temperature: {info.tempmin}&deg;</div>
            <div>Maximum Temperature: {info.tempmax}&deg;</div>
            <div>Humidity: {info.humidity}</div>
            <p>
                The weather can be describes as <i>{info.weather}</i> and feels like <i>{info.feelslike}&deg;</i>
            </p>
            
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>

        </div>
    );
}