import React,{useState} from 'react'
import './Comment.css'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography  from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import ViewComments from '../ViewComments/ViewComments'


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius:10
};


const Comment = ({props}) => {
   const id = props._id
  // const name = props.name;
   const description = props.description;
  const [ open,setOpen ] = useState(false);
  const [ name,setName ] = useState("");
  const [ comment,setComment ] = useState("");
  const [anyId , setAnyId] = useState("")
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 function onClick()
 {
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
        <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
        <form style={{border:"none"}} onSubmit={handleSubmit}>
            <input type="text" name="name" value={name} placeholder='name' onChange={(e) => setName(e.target.value)} />
            <input type="text" name="comment" value={comment} placeholder='type comment...' onChange={(e) => setComment(e.target.value)} />
            <button  onClick={ onClick }  type="submit">post a comment</button>
           
            <ViewComments data = {props} />
        
        </form>
          
          
        </Box>
        
      
        </Modal>
      
    </div>
  )
}

export default Comment