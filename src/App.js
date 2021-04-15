
import React from 'react';
import Home from "./components/home/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Search from './components/search/Search';
const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={Search} />
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
};

export default App;
