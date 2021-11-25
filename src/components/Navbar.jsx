import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import './css/Navbar.css'
import { useHistory } from 'react-router-dom'
import { getUser,logOut } from '../services/AuthService'

const Navbar = () => {
    const history = useHistory();
const [currentUser,setCurrentUser]=useState(undefined);
const [showAdmin,setShowAdmin]=useState(false);

useEffect(() => {
    const user=getUser();
if(user){
    setCurrentUser(user);
    setShowAdmin(user.roles.includes("ROLE_ADMIN"))
}
   
}, [])

const logout=()=>{
    logOut();
    setCurrentUser(undefined);
    setShowAdmin(false);
    history.push('/')
    window.location.reload();
    
}

    return (
        <nav className="navbar">
            <h3 className="name">ToDo</h3>
            
                     

                { currentUser && (
                    <div className="admin-icon"><img src="https://img.icons8.com/fluency-systems-filled/48/000000/user.png" /></div>)}
            {currentUser && (
                <div className="admin-nav">
                    {getUser().username}
                </div>)}
                  
        
            
                {currentUser ? (
            <><Link to='/logout' className='logout'>
                    <div onClick={logout}>LogOut</div>
                </Link></>
                ):(
                <><Link to='/login' className='login'>
                        <div >Login</div>
                    </Link><Link to='/' className='reg'>
                            <div>Registration</div>
                        </Link></>

                )}
                


           
        </nav>
    )
}

export default Navbar
