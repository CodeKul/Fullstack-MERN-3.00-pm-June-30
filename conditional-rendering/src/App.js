import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Logout from './components/Logout';
import { useState } from 'react';

// https://www.digitalocean.com/community/tutorials/7-ways-to-implement-conditional-rendering-in-react-applications

function App() {


const [isLoggedIn, setIsLoggedIn] = useState(true)

  // {if(isLoggedIn){
  //   return(
  //   <Login/>
  //   )
  // } else {
  //   return(
  //   <Logout/>)
  // }}

  let handleToggle = () => {
  setIsLoggedIn(!isLoggedIn)
  console.log(isLoggedIn)
  }

  return (
    <div className="App">
     {isLoggedIn ? <Login/>: <Logout/>}



    
     <button onClick={handleToggle}>{isLoggedIn ? "Sign Out" : "Sign in"}</button>
    </div>
  );
}

export default App;
