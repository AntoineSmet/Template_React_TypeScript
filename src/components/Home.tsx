
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Container } from '@mui/system';

function Home() {
  return (
    <div className="Home">
      <h1>Template Project</h1>
      <Container>
      <Box sx={{display:"flex",margin:'auto',justifyContent: 'space-around',flexWrap: 'wrap',alignContent: 'center'}}>
      <Card sx={{ maxWidth: 345 ,marginTop:'2rem'}}>
      <CardMedia
        component="img"
        height="240"
        image="src\assets\Landscape.png"
        alt="Landscape"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Landscape
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <table className='tableHome'>
          <thead>
            <th>Name</th>
            <th>Artist</th>
            <th>Time</th>
            <th>Value</th>
            <th>Like</th>
            <th>Feeling</th>
          </thead>
          <tbody>
            <td>EView</td> 
            <td>Dall E</td> 
            <td>2022</td>
            <td>10000</td>
            <td>5600</td>
            <td>🦋</td>
          </tbody>
        </table>
        </Typography>
      </CardContent> 
    </Card>

    {/* ------------------------------ */}
    <Card sx={{ maxWidth: 345 ,marginTop:'2rem'}}>
      <CardMedia
        component="img"
        height="240"
        image="src\assets\River.png"
        alt="River"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          River
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <table className='tableHome'>
          <thead>
            <th>Name</th>
            <th>Artist</th>
            <th>Time</th>
            <th>Value</th>
            <th>Like</th>
            <th>Feeling</th>
          </thead>
          <tbody>
            <td>Nhigh</td> 
            <td>Dall E</td> 
            <td>2022</td>
            <td>7000</td>
            <td>3200</td>
            <td>🌀</td>
          </tbody>
        </table>
        </Typography>
      </CardContent> 
    </Card>
    {/* ----------------------------------- */}


    {/* ------------------------------ */}
    <Card sx={{ maxWidth: 345 ,marginTop:'2rem'}}>
      <CardMedia
        component="img"
        height="240"
        image="src\assets\Breath.png"
        alt="Breath"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Breath
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <table className='tableHome'>
          <thead>
            <th>Name</th>
            <th>Artist</th>
            <th>Time</th>
            <th>Value</th>
            <th>Like</th>
            <th>Feeling</th>
          </thead>
          <tbody>
            <td>Smoow</td> 
            <td>Dall E</td> 
            <td>2022</td>
            <td>77500</td>
            <td>9800</td>
            <td>🫀</td>
          </tbody>
        </table>
        </Typography>
      </CardContent> 
    </Card>

    </Box> 
    </Container>
    </div>
  )
}
export default Home