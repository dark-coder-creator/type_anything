import React,{useState,useEffect} from 'react'
import './AnythingData.css'
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


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
    <div className='anythingDataTop'>
          {/* {
    anythingData.map((data,index) =>(
      <div className='anythingDataDisplay'>
               <h2>"{data.description}"</h2>
               <p>submitted by {data.name}</p>
        </div>

    )) 
  }  */}
  
  <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {anythingData.map((data, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Item >
              <h2>{data.description}</h2>
              </Item>
              <h3>{data.name}</h3>
          </Grid>
        ))}
      </Grid>
    </Box>
   
    </div>
   
  )
}
