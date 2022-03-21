import React,{ useState,useEffect } from 'react'
import './ViewComments.css'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'

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



const ViewComments = ({data}) => {
   const [personalComments , setPersonalComments ] = useState([])
   const [anythingName , setAnythingName ] = useState("")

 
   const [open , setOpen ] = useState(false)
   const name = data.name 
   function onClick()
   {
    
     console.log(personalComments)
     console.log(name)
     setAnythingName(name)
     setOpen(true);
   }
  const handleClose = () => {
    setOpen(false)
  }

   useEffect(() => {
     (
       async() => {
          let temporaryComments;
          try     
          {
              const res = await fetch(`http://localhost:3004/comment/personalComments/${name}`,{
                method:"GET",
                headers:{'Content-Type':'application/json'}
              })
              const datass = await res.json();
           
              let temporaryComments = datass
              setPersonalComments(temporaryComments)
              
          }
          catch(e)
          {
            console.log(e)
            temporaryComments = []
          }
       }) ()
   },[])



  return (
    <div>

          


          <button className="viewButton" onClick={ onClick }>View Comments</button>
          <Modal 
           aria-labelledby="transition-modal-title"
           aria-describedby="transition-modal-description"
          
           open={open}
           onClose={handleClose}
           className="modalClass"
         >
            <Box sx={style}>
            <h2>Comments</h2>
            {personalComments.map((comment,index) => (
              <div key={index}>
                
                    <h6>{comment.name} </h6>
                     <h4>{comment.comment}</h4>
              </div>
             
            ))}

            </Box>
        

      

           </Modal>
     
         
    </div>

  )
}

export default ViewComments