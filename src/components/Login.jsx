import React, { useState } from 'react'
import './css/Form.css'
import { useHistory } from 'react-router-dom'
import {login} from '../services/AuthService.js';
import { getUser } from '../services/AuthService.js';
import { getUsers } from '../services/UserService';
const Login = () => {
    const history = useHistory();
    const [nickname, setNickName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [message, setMessage] = useState('');
    const onChangeNick = (e) => {
        setNickName(e.target.value);
    }
    const onChangePas = (e) => {
        setPassword(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
    login(nickname, password)
    .then((res) => {
        localStorage.setItem('todos', JSON.stringify([...getUser().todos]))
        if(getUser().roles.includes('ROLE_ADMIN')){
            history.push('/admin');
            window.location.reload();
        }
        else{
                history.push('/todo');
            window.location.reload();
        }
        setMessage(res.data.message)
            })
            
    }

    return (
       <div className="log">
            <div className="container">
                <div className="header">Login</div>

                <form onSubmit={onSubmit}>
                    <div className="form">
                        
                        <div className='form-group'>
                            <label for="nickname">Username</label>
                            <input className="formInput"  type="text" name="nickname" value={nickname} onChange={onChangeNick} placeholder="username"></input>
                        </div>
                        <div className='form-group'>
                            <label for="password">Password</label>
                            <input className="formInput"  type="password" name="password" value={password} onChange={onChangePas} placeholder="password"></input>
                        </div>
                    </div>

                    <div className='footer'>
                        <button type="submit" className='btn'>Login</button>
                    </div>
                </form>

            </div>
      
       </div>
    )
}

export default Login
