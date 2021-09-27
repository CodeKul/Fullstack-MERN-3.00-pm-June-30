import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import CounterFn from './components/CounterFn';


// https://blog.logrocket.com/react-lifecycle-methods-tutorial-examples/ 
// https://www.javatpoint.com/react-state-vs-props
// https://www.youtube.com/watch?v=QFaFIcGhPoM&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3

function App() {
  return (
    <div className="App">
     <Counter/>

     {/* <CounterFn/> */}
    </div>
  );
}

export default App;
