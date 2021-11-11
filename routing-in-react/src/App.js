import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Game from "./components/Game";
import GameResult from "./components/GameResult";
import Contact from "./components/Contact";
import About from "./components/About";
import Blog from "./components/Blog";

// https://medium.com/@thanhbinh.tran93/private-route-public-route-and-restricted-route-with-react-router-d50b27c15f5e
// https://www.ryanjyost.com/react-routing/
// https://www.bezkoder.com/react-hooks-redux-login-registration-example/

// https://jvns.ca/blog/2016/11/19/a-critique-of-the-cap-theorem/
function App() {

  let topics = [
    {
      topicName: "CSS Grid",
      id: 1,
      description: "lorem ipsum",
      content: [
        {
          title: "Row and Columns in Grid",
          id: "css1",
          description: "lorem ipsum en",
        },
        {
          title: "Borders",
          id: "css2",
          description: "lorem ipsum en",
        },
      ],
    },
    {
      topicName: "Javascript Event Propagation",
      id: 2,
      description: "lorem ipsum",
      content: [
        {
          title: "Capturing and Bubbling",
          id: "js1",
          description: "lorem ipsum en",
        },
      ],
    },

    {
      topicName: "React Routing",
      id: 3,
      description: "lorem ipsum",
      content: [
        {
          title: "URL PArams",
          id: "route",
          description: "lorem ipsum en",
        },
      ],
    },
  ];

  
  return (
    <div className="App">
     <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          {/* <Route path="/about">
            <About />
          </Route> */}

          <Route path="/contact" component={Contact} />

          <Route path="/articles">
            <Blog topics={topics} />
          </Route>
          <Route path="/game" component={Game} />
          <Route path="/result" component={GameResult} />
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
