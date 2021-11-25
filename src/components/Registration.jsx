import React,{useState} from 'react'
import './css/Form.css'
import {register} from '../services/AuthService';
const Registration = (props) => {
    
const [firstName,setFirstName]=useState('');
const [nickname,setNickName]=useState('');
const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [sucess, setSucess] = useState(false);

const onChangeNick=(e)=>{
    
    setNickName(e.target.value);
}
    const onChangePas = (e) => {
       
        setPassword(e.target.value);
    }
    const onChangeName = (e) => {
       
        setFirstName(e.target.value);
        
    }

const onSubmit=(e)=>{
    e.preventDefault();
   
    register(firstName, nickname, password)
    .then((res)=>{
        setNickName('');
        setPassword('');
        setFirstName('');
        setMessage(res.data.message)
        setSucess(true)
    })
    .catch((err)=>{
        setMessage(err.response.data.message)
        setSucess(false)
        
    })
    
   
}



    return (
        <div className="registration">
            <div className="container">
<div className="header">Registration</div>
               
                <form onSubmit={onSubmit}>
                <div className="form">
<div className='form-group'>
                            <label for="firstName">Name</label>
                            <input className="formInput" type="text" name="firstName" value={firstName} onChange={onChangeName} placeholder="name"></input>
</div>

                <div className='form-group'>
                            <label for="nickname">Username</label>
                            <input className="formInput"  type="text" name="nickname" value={nickname} onChange={onChangeNick} placeholder="username"></input>
                </div>
                <div className='form-group'>
                    <label for="password">Password</label>
                            <input className="formInput"  type="password" name="password" value={password} onChange={onChangePas} placeholder="password"></input>
                </div>
            </div>

                    {message && (<div className={sucess?'sucMessage':'errMessage'}>
                       {message}
                    </div>)}
            <div className='footer'>
                       <button type="submit" className='btn'>Registration</button> 
            </div>
</form>
               
        </div>
        </div>
    )
}

export default Registration
