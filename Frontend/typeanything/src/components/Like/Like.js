
import './Like.css'
import React, { useState } from 'react'
import Swal from "sweetalert2"
import IconButton from '@mui/material/IconButton'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';

import  Snackbar  from '@mui/material/Snackbar';
import  Alert  from '@mui/material/Alert';
 const Like = ({props}) => {
  





  const id = props._id
  const like = props.like
  const unlike = props.unlike
  const name = props.name
    function onClick() {
      
     

        setId({id,like});
    
     Swal.fire({  
       title: `You have liked ${name}'s post`,  
       type: 'success',  
       text: '👍',  
       timer:5000
     })
         
      
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
           if(res.status === 200)
           {
           
            
          
           }
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
           if(res.status === 200)
           {
          
           }
           
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
        
      <button onClick={ onClick } className="btn1">  <ThumbUpOutlinedIcon />Like</button> 
      <button onClick={() =>  {setUnlike({id,unlike});Swal.fire({  
      title: `You have unliked ${name}'s post`,  
      type: 'success',  
      text: '👎',  
      timer:5000,
      onOpen: function () {
        Swal.showLoading()
      }
    });} } className="btn2"><ThumbDownOffAltOutlinedIcon />Unlike</button>
           {/* <IconButton className='likeButton'>
           <ThumbUpOutlinedIcon className='likeIcon' onClick = { onClick} />
           </IconButton> */}
            {/* <IconButton>
            < ThumbDownOffAltOutlinedIcon className='unlikeIcon' onClick={() => setUnlike({id,unlike})}/>
              </IconButton>   */}
   

       
        
           
      </form>
      </div>
     
  )
}

export default Like