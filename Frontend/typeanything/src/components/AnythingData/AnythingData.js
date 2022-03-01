import React,{useState,useEffect} from 'react'
import './AnythingData.css'
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Like from '../Like/Like'
import Comment from '../Comment/Comment'
//card import start
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
//card import finish

const handleClick = () => {
  console.log('hello')
}
export const AnythingData = () => {
  const [anythingData,setAnythingData] = useState([])

    useEffect(() => {
      (
        async() => {
           let temporaryAnythingData;
          try {
           const response = await fetch("http://localhost:3004/anything/data",{
             method:'GET',
             headers:{'Content-Type':'application/json'}
           })
           const data = await response.json();
           console.log(data)
           temporaryAnythingData = data
          
           setAnythingData(temporaryAnythingData)
          }
          catch(e)
          {
            console.log(e)
            temporaryAnythingData=[]
          }
        }) ()
    },[])
  return (
    <div style={{padding:30}}>
          {/* {
    anythingData.map((data,index) =>(
      <div className='anythingDataDisplay'>
               <h2>"{data.description}"</h2>
               <p>submitted by {data.name}</p>
        </div>

    )) 
  }  */}
  
  
   
        {/* {anythingData.map((data,index) => (
          <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        ))}
        */}
     <Grid container spacing={{xs:2,md:3}} columns={{xs:4,sm:8,md:12}} >
     {anythingData.map((data, index) => (
    <Grid item xs={2} sm={4} md={4}  key={index}>
      <h2 style={{color:"green"}}>"{data.description}"</h2>
      <h3>-{data.name}</h3>
       {/* <button onClick={handleClick()} className="btn1">Like</button> 
       <button className='btn2'>Unlike</button> */}
       <Like props={data} key={index}/>
       <Comment />
    </Grid>
  ))}
           
     </Grid>

     
  
   
    </div>
   
  )
}
