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
   const [severity,setSeverity]=useState("")
  // const [count , setCount] = useState(0);
   const [ like , setLike ] = useState(0)
   const [ unlike , setUnlike ] = useState(0)
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
   const [state, setState] = useState({
      open: false,
      vertical:'top',
      horizontal:'right',
    });
  
    const { vertical, horizontal, open } = state;
  
    const handleClick = (newState)  => {
     
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
              description:description,
              like:like,
              unlike:unlike
           }),
        })
        console.log(res)
        if(res.status === 200) {
           setName("")
           setDescription("")
           //setCount(0)
           setMessage("Quotes Created Successfully")
           setSeverity("success")
           setTimeout(function() {
            window.location.assign("http://localhost:3000/");
           },2000)
        }
        else if(res.status === 400){
           
           setMessage("Please fill both the name and description")
           setSeverity("error")
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

   function onClick()
   {
      handleClick({
         vertical: 'top',
         horizontal: 'right',
       });
      setLike(0);
      setUnlike(0);
    
   }

  return (
     <div className='content'> 
         <form style={{border:"none"}} onSubmit={handleSubmit}>
      
         
               <input type="text" name="name" value={name} placeholder='name' onChange={(e) => setName(e.target.value) } />
        
         
           
               <input type="text" name="Description" value={description} placeholder='type anything....' onChange={(e) => setDescription(e.target.value)}/>
          
             <button className='ButtonStyle' onClick={ onClick }   type="submit">Create Anything  </button> 

       

              {/* <div className='message'>{message ? <p>{message}</p>:null}</div> */}
           
             <Snackbar className='snackBar'  anchorOrigin={{ vertical, horizontal }} open={open} autoHideDuration={6000} onClose={handleClose}  key={vertical + horizontal}>
                 <Alert className='alert' onClose={handleClose} severity={severity} sx={{ width:'100%'}}>
                    {message}
                 </Alert>
             </Snackbar>
         </form>
         
         <AnythingData />
     </div>
  )
}

export default Content