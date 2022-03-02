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
  const name = props.name;
  const description = props.description;
  const [ open,setOpen ] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
        

        <button className="btn3" onClick={handleOpen}>Type Any Comment...</button>
        <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
        <form style={{border:"none"}}>
            <button>post a comment</button>
            <ViewComments />
        </form>
          
          
        </Box>
        
      
        </Modal>
      
    </div>
  )
}

export default Comment