import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

// https://medium.com/@thanhbinh.tran93/private-route-public-route-and-restricted-route-with-react-router-d50b27c15f5e
// https://www.ryanjyost.com/react-routing/
// https://www.bezkoder.com/react-hooks-redux-login-registration-example/

// https://jvns.ca/blog/2016/11/19/a-critique-of-the-cap-theorem/
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/login">
            <LoginForm />
          </Route>

          <Route path="/home" component={Home} />
          <Route path="/" component={Home} />
          <Route path="/home" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
