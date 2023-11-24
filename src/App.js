import { useState } from 'react';
import './App.css';
import Register from './components/register';
import Login from "./components/login"
import Listusers from './components/listusers';
import Logout from './components/logout';

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [userList,setUserList] = useState([]);


  return (
    <div className="App">
      <Register
        setEmail={setEmail}
        email={email}
        setPassword={setPassword}
        password={password}
        setLoggedIn={setLoggedIn}>  
      </Register>
      <Login
        setEmail={setEmail}
        email={email}
        setPassword={setPassword}
        password={password}
        setLoggedIn={setLoggedIn}> 
      </Login>
      <Listusers
      setUserList={setUserList}
      userList={userList}>
      </Listusers>
      {loggedIn ? <Logout
      setLoggedIn={setLoggedIn}
      setUserList={setUserList}
      setEmail={setEmail}
      ></Logout> : <h3>please login</h3>}
    </div>
  );
}

export default App;
