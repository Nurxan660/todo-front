import React, { useEffect, useState} from 'react'
import { getUsers,deleteUser } from '../services/UserService'
import AdminItems from './AdminItems'
import "./css/Admin.css"
const Admin = () => {
    const [users,setUsers]= useState([])

  useEffect(() => {
      getUsers().then((res)=>{
          console.log(res.data)
      setUsers([...res.data])

      })
  }, [])
    const handleClick = (id) => {
   users.forEach((item,i)=>{
   if(id===item.id){
    deleteUser(id);
       users.splice(i, 1);

   }
   setUsers([...users])




   })
      

    }

    return (
        <div className="admin">
            <div className="container2">
            <h2>Количество пользователей: {users.length}</h2>
       {users.map((item)=>{
           return <AdminItems username={item} handleClick={handleClick}/>
       })}


            </div>
        </div>
    )
   
}





export default Admin
