import AddNewBook from "./components/AddNewBook";
import BookProvider from "./components/BookContext";
import "./styles.css";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";

export default function App() {

  //1. create a context with the help of createContext hook
  //2. create a provider and consumer component

  return (
    <div className="App">

      <BookProvider>
        <Navbar/>
        <AddNewBook/>
        <BookList/>
      </BookProvider>
    
    </div>
  );
}
