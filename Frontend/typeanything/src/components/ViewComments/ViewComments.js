import React,{ useState,useEffect } from 'react'
import './ViewComments.css'

const ViewComments = ({data}) => {
   const [personalComments , setPersonalComments ] = useState([])
   const [anythingName , setAnythingName ] = useState("")
   const name = data.name 
   function onClick()
   {
     console.log(name)
     setAnythingName(name)
   }
   useEffect(() => {
     (
       async() => {
          let temporaryComments;
          try     
          {
              const res = await fetch("http://localhost:3004/comment/personalComments/"+"Sallust",{
                method:"GET",
                headers:{'Content-Type':'application/json'}
              })
              const datass = await res.json();
              console.log("personal data")
              console.log(datass.name)
              console.log(anythingName)
              
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

          
          

          <button onClick={ onClick }>View Comments</button>

          
           
     
         
    </div>

  )
}

export default ViewComments