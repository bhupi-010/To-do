import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Header from "./components/Header";
import Task from "./components/Task";
// import About from "./components/About";
// import User from "./components/User";
// import Post from "./components/Post";
// import Comment from "./components/Comment";
// import Test from "./components/Test";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact strict path="/" component={Task} />
          {/* <Route path="/about" component={About} />
          <Route path="/header" component={Header} />
          <Route path="/user" component={User} />
          <Route path="/post" component={Post} />
          <Route path="/comment" component={Comment} />
          <Route path="/test" component={Test} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
