import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import CounterFn from './components/CounterFn';
import NewModule from './components/NewModule';
import RegistrationForm from './components/RegistrationForm';
import Forms from './components/Forms';


// https://blog.logrocket.com/react-lifecycle-methods-tutorial-examples/ 
// https://www.javatpoint.com/react-state-vs-props
// https://www.youtube.com/watch?v=QFaFIcGhPoM&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3

// https://blog.logrocket.com/the-best-styling-in-react-tutorial-youve-ever-seen-676f1284b945/

function App() {
  return (
    <div className="App">
     <Counter/>

     <Forms/>
<RegistrationForm/>
     <NewModule/>

     {/* <CounterFn/> */}
    </div>
  );
}

export default App;
