import React from 'react'
import "./css/Admin.css"


const AdminItems = ({ username, handleClick}) => {


    return (
        <div className="item-user" >
            <div className="user" >
                <h4>Id: {username.id}</h4>
                <h4>Nickname: {username.nickname}</h4>
                <h4>Registration date: {username.date.substr(0, 10)}</h4>
            
               
            </div>
            <div className="user-delete" onClick={()=>handleClick(username.id)}>
                <img src="https://img.icons8.com/flat-round/64/000000/delete-sign.png" />
            </div>
        
        </div >
    )
}
export default  AdminItems;