import { useState } from 'react';
import './App.css';
import Register from './components/register';
import Login from "./components/login"
import Listusers from './components/listusers';

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");




  return (
    <div className="App">
      <Register
        setEmail={setEmail}
        email={email}
        setPassword={setPassword}
        password={password}>  
      </Register>
      <Login
        setEmail={setEmail}
        email={email}
        setPassword={setPassword}
        password={password}> 
      </Login>
      <Listusers></Listusers>
    </div>
  );
}

export default App;
