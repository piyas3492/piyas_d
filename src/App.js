import React from "react";
import { Route, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./index.css";
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import ErrorC from "./views/ErrorC";
import Portfolio from "./views/Portfolio";
import Header from "./components/Header";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Route component={ErrorC} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
