import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import List from "./routes/List";
import Navigation from "./components/Navigation";
import "./App.css";
import LoginForm from "./routes/LoginForm";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/list" component={List} />
      <Route path="/login" component={LoginForm} />
    </HashRouter>
  );
}

export default App;