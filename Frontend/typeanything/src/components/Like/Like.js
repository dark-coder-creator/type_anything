
import './Like.css'
import React from 'react'
import IconButton from '@mui/material/IconButton'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';

import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';

 const Like = ({props}) => {
 
  const id = props._id
  const like = props.like
  const unlike = props.unlike
    function onClick() {
      setId({id,like});
      
    } 

       const setId = async({id,like}) => {
          console.log(id)
         
          
          try {
           
           


           const res = await fetch('http://localhost:3004/anything/like/'+id,{
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
              like:like+1
            })
           })
           console.log(res)
          }
          catch(e) {
            console.log(e)
          }
       }
    

      const setUnlike = async({id,unlike}) => {
         try {
            const res = await fetch('http://localhost:3004/anything/unlike/'+id,{
              method:"POST",
              headers:{'Content-Type':'application/json'},
              body:JSON.stringify({
                unlike:unlike+1
              })
            })
            console.log(res)
         }
         catch(e)
         {
           console.log(e)
         }

      }
    

  //{/* <button onClick={handleClick(id)} className="btn1">Like</button> */}
  return (

    <div >
      <form style={{border:"none"}}>
          
           <IconButton className='likeButton'>
           <ThumbUpOutlinedIcon className='likeIcon' onClick = { onClick} />
           </IconButton>
            <IconButton>
            < ThumbDownOffAltOutlinedIcon className='unlikeIcon' onClick={() => setUnlike({id,unlike})}/>
              </IconButton>  
             
        
           
      </form>
      </div>
     
  )
}

export default Like