import React,{useState} from 'react'
import { AnythingData } from '../AnythingData/AnythingData';
import './Content.css'

function Content() {
   const [name,setName] = useState("");
   const [description,setDescription] = useState("")
   const [message,setMessage] = useState("")
   let handleSubmit = async(e) => {
      e.preventDefault();
      try {
        let res = await fetch("http://localhost:3004/anything",{
           method:"POST",
           headers:{'Content-Type':'application/json'},
           body:JSON.stringify({
              name:name,
              description:description
           }),
        })
        console.log(res)
        if(res.status === 200) {
           setName("")
           setDescription("")
           setMessage("Datas Created Successfully")
        }
        else {
           setMessage("Some Error occured")
        }
      }
      catch(err)
      {
        console.log(err)
      }
   }

   function sayHello() {
      alert("the anydata you have entered is successfully submitted")
   }
  return (
     <div className='content'> 
         <form onSubmit={handleSubmit}>
      
         
               <input type="text" name="name" value={name} placeholder='name' onChange={(e) => setName(e.target.value) } />
        
         
           
               <input type="text" name="Description" value={description} placeholder='type anything....' onChange={(e) => setDescription(e.target.value)}/>
          
              <button className='ButtonStyle' onClick={sayHello}   type="submit">Create Anything</button>
              {/* <div className='message'>{message ? <p>{message}</p>:null}</div> */}
           
         </form>
         <AnythingData />
     </div>
  )
}

export default Content