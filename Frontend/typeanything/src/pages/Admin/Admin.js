import React from 'react'
import './Admin.css'
import Navbar from '../../Navbar/Navbar'
import AdminTable from '../../adminComponents/Table/Table'

 const Admin = () => {
  return (
   
      <div className='Admin'>
       <Navbar />
       <AdminTable />
    </div>

  )
}


export default Admin