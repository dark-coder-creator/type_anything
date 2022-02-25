
import './Like.css'
import React from 'react'

 const Like = (data,index) => {

   let name = data.props.name

   function handleClick(name) {
     console.log(name)
   }
  return (

    <div >
      <form>
         <button onClick={handleClick(name)} className="btn1">Like</button>
      </form>
      </div>
     
  )
}

export default Like