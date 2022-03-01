
import './Like.css'
import React,{useState,useEffect} from 'react'



 const Like = ({props}) => {
 
  const id = props._id
  const like = props.like
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

    

  //{/* <button onClick={handleClick(id)} className="btn1">Like</button> */}
  return (

    <div >
      <form >
          <button onClick={ onClick } className="btn1">Like {like}</button>
           <button className="btn2">Unlike </button>
      </form>
      </div>
     
  )
}

export default Like