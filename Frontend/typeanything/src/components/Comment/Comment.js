import React,{useState} from 'react'
import './Comment.css'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography  from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import ViewComments from '../ViewComments/ViewComments'
import  Snackbar  from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'lightpink',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius:10
};


const Comment = ({props}) => {
   const id = props._id
   const anythingName = props.name;
   const description = props.description;
  const [ modalOpen,setModalOpen ] = useState(false);
  const [ name,setName ] = useState("");
  const [ comment,setComment ] = useState("");
  
  const [ message , setMessage ] = useState("")
  const [ severity,setSeverity ] = useState("")

  const [anyId , setAnyId] = useState("")
  
   const handleOpen = () => setModalOpen(true);
   const handleClose = () => setModalOpen(false);
  const [state,setState] = useState({
    open:false,
    vertical:'top',
    horizontal:'left'
  })
 
  const { vertical , horizontal , open } = state;

  const handleClick = (newState) => {
    setState({ open:true, ...newState})
  }

  const handleAlertClose = () => {
    setState({ ...state,open:false});
  }

 function onClick()
 {
   handleClick({
     vertical:'top',
     horizontal:'left'
   })
   setAnyId(id)
 }
  const handleSubmit = async(e) => {
    e.preventDefault();
    
    try {
      let res = await fetch("http://localhost:3004/comment",{
        method:"POST",
        headers:{'Content-Type':'application/json'},
        
        body:JSON.stringify({
          name:name,
          comment:comment,
          anythingId:anyId
        })
      })
      console.log(res)
      console.log(anyId)
      if(res.status === 200)
      {
        setName("")
        setComment("")
        setMessage(`You have posted the comment for ${anythingName}'s post`)
        setSeverity("success")
      }
      else if(res.status === 400)
      {
        setMessage(`Please fill the name and comment together for ${anythingName}'s post`)
        setSeverity("error")
      }
    }
    catch(e)
    {
      console.log(e)
    }
  }
  return (
    <div>
        

        <button className="btn3" onClick={handleOpen}>Type Any Comment...</button>
        <Modal open={modalOpen} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style} className="Box">
         <div className="quoteBox">
         <h4 className='descriptionCharacters'> "{description}"</h4>
          <h5 className="anythingCharacters"> -{anythingName}</h5>
           </div> 
        
        <form style={{border:"none"}} onSubmit={handleSubmit}>
            <input type="text" name="name" value={name} placeholder='name...' onChange={(e) => setName(e.target.value)} />
            <input type="text" name="comment" value={comment} placeholder='type comment...' onChange={(e) => setComment(e.target.value)} />
            <button className="btn4" onClick={ onClick }  type="submit">post a comment</button>
            <Snackbar anchorOrigin={{ vertical,horizontal}} open={open} autoHideDuration={6000} onClose={handleAlertClose} key={vertical+horizontal}>
               <Alert onClose={handleAlertClose} severity={severity} sx={{ width:'100%'}}>
                 {message}
               </Alert>
            </Snackbar>
            <ViewComments data = {props} />
        
        </form>
          
          
        </Box>
        
      
        </Modal>
      
    </div>
  )
}

export default Comment