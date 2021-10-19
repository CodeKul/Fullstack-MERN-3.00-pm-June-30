import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import CounterFn from "./components/CounterFn";
import NewModule from "./components/NewModule";
import RegistrationForm from "./components/RegistrationForm";
import Forms from "./components/Forms";
import Data from "./components/Data";
import ContextEx from "./components/ContextEx";
import ContextEx3 from "./components/ContextEx3";
import ContextEx32 from "./components/ContextEx32";
import BookList from "./components/contextapi/BookList";
import BookProvider from "./components/contextapi/BookContext";
import AddNewBook from "./components/contextapi/AddNewBook";
import Navbar from "./components/contextapi/Navbar";

// https://blog.logrocket.com/react-lifecycle-methods-tutorial-examples/
// https://www.javatpoint.com/react-state-vs-props
// https://www.youtube.com/watch?v=QFaFIcGhPoM&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3

// https://blog.logrocket.com/the-best-styling-in-react-tutorial-youve-ever-seen-676f1284b945/


//context api - 
// 1. create a context object - createContext hook
// 2. Whichever component is sending data to other components in that component create a context 
//3. create a provider component by context object inside it props.children
//

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <Data/> */}

      <BookProvider>
        <Navbar/>
        <AddNewBook/>
        <BookList/>
      </BookProvider>
    

     

      {/* <Forms />
      <RegistrationForm />
      <NewModule /> */}

      {/* <CounterFn/> */}
    </div>
  );
}

export default App;
