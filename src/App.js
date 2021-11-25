import {BrowserRouter  , Route,Switch} from 'react-router-dom'
//import './App.css';
import Navbar from './components/Navbar.jsx'
import TodoForm from './components/TodoForm'
import Login from './components/Login'
import Registration from './components/Registration'
import React, { useEffect, useState } from 'react'
import { getUser } from './services/AuthService'
import Admin from './components/Admin.jsx'

function App() {
  const user = getUser();
  const [data,setData]= useState([])
  const [curUser, setCurUser] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);

  useEffect(() => {
    const user = getUser();
    if (user) {
      
      setCurUser(user.roles.includes("ROLE_USER"))
      setShowAdmin(user.roles.includes("ROLE_ADMIN"))
    }

  }, [])

  
  return (
    <BrowserRouter >
     <Navbar />
      

     <Switch>
        {curUser&& (<Route path='/todo' render={()=><TodoForm data={data}/>} exact>
        </Route>)}
        {!user && (<Route path='/login' component={Login} exact>
        </Route>)}

        {!user && (<Route path='/' render={() => <Registration setData={setData} />} exact>
        </Route>)}
        {showAdmin&&(<Route path='/admin' component={Admin} exact>
        </Route>)}


     </Switch>
    
    </BrowserRouter >
  );
}

export default App;
