import React,{useState } from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom" ;
import{ Navbar , Welcome ,Footer ,Services , Transaction } from "./components" ;
import Home from './pages/Home';
import Pool from './pages/Pool';
import Account from './pages/Account';
import Borrow from './pages/Borrow';
import Lend from './pages/Lend';
import Error from './pages/ErrorPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Pool' element={<Pool />}/>
        <Route path='/Account' element={<Account />}/>
        <Route path='/Lend' element={<Lend />}/>
        <Route path='/Borrow' element={<Borrow />}/>
        <Route path='*' element={<Error />}/>
      </Routes>
    </Router>
  );
}

export default App
