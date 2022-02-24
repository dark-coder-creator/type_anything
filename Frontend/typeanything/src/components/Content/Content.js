import React,{useState} from 'react'
import { AnythingData } from '../AnythingData/AnythingData';
import Alert from '@mui/material/Alert'
import  AlertTitle from '@mui/material/AlertTitle'
import Button from '@mui/material/Button' 
import  Snackbar  from '@mui/material/Snackbar';
import './Content.css'

function Content() {
   const [name,setName] = useState("");
   const [description,setDescription] = useState("")
   const [message,setMessage] = useState("")
   // const [open,setOpen] = useState(false)

   // const handleClick = () => {
   //    setOpen(true)
   // };

   // const handleClose = (event,reason) => {
   //    if(reason === 'clickaway') {
   //       return;
   //    }
   //    setOpen(false);                           
   // }
   const [state, setState] = React.useState({
      open: false,
      vertical:'top',
      horizontal:'center',
    });
  
    const { vertical, horizontal, open } = state;
  
    const handleClick = (newState) => () => {
      setState({ open: true, ...newState });
    };
  
    const handleClose = () => {
      setState({ ...state, open: false });
    };
   let handleSubmit = async(e) => {
      e.preventDefault();
      try {
        let res = await fetch("http://localhost:3004/anything",{
           method:"POST",
           headers:{'Content-Type':'application/json'},
           body:JSON.stringify({
              name:name,
              description:description
           }),
        })
        console.log(res)
        if(res.status === 200) {
           setName("")
           setDescription("")
           setMessage("Datas Created Successfully")
        }
        else {
           setMessage("Some Error occured")
        }
      }
      catch(err)
      {
        console.log(err)
      }
   }

   function sayHello() {
       alert('the datas are created')
   }
  return (
     <div className='content'> 
         <form onSubmit={handleSubmit}>
      
         
               <input type="text" name="name" value={name} placeholder='name' onChange={(e) => setName(e.target.value) } />
        
         
           
               <input type="text" name="Description" value={description} placeholder='type anything....' onChange={(e) => setDescription(e.target.value)}/>
          
             <button className='ButtonStyle' onClick={handleClick({
          vertical: 'top',
          horizontal: 'right',
        })}   type="submit">Create Anything</button> 
              {/* <div className='message'>{message ? <p>{message}</p>:null}</div> */}
           
             <Snackbar   anchorOrigin={{ vertical, horizontal }} open={open} autoHideDuration={6000} onClose={handleClose}  key={vertical + horizontal}>
                 <Alert onClose={handleClose} severity="success" sx={{ width:'100%'}}>
                    Quotes are entered Successfully
                 </Alert>
             </Snackbar>
         </form>
         
         <AnythingData />
     </div>
  )
}

export default Content