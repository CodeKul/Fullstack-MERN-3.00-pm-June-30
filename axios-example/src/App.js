import logo from './logo.svg';
import './App.css';

import http from "./service/Http-common";
import { useEffect , useState} from 'react';

import axios from 'axios';
import Home from './components/Home';


// https://jasonwatmore.com/post/2017/09/16/react-redux-user-registration-and-login-tutorial-example

// https://medium.com/age-of-awareness/setup-react-with-webpack-and-babel-5114a14a47e9

// console.log(HttpCommon)

function App() {

  const[formData, setFormData] = useState({
    name: "sanket",
    profession: "SWE"
  })
  // console.log(http)

  http.post("/todos"+ formData )

  useEffect(

    
    
    http.get("/todos")
    .then((response)=>{
      
        console.log(response.data)
    }, [])
    // .catch(()=>{
    //   console.error();
    // })
  )


  // const sendData = () => {
  //   http.post("/todos"+ formData )
  // }

  return (
    <div className="App">

      <form>
        <input type=""/>
      </form>


      <Home/>

    </div>
  );
}

export default App;
