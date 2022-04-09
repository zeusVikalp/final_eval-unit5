import React from "react"

import './App.css';
import { Navbar } from './Components/Navbar';
import {Routes,Route} from "react-router-dom"
import {Home} from "./Components/Home"
import {Employee} from "./Components/Employee"
import {Login} from "./Components/Login"
import {Register} from "./Components/Register"

function App() {
  return (
    <div className="App">
         <Navbar />
         <Routes>
         <Route path = "/login" element ={<Login />} />

             <Route path = "/" element = {<Home />}/>
             <Route path = "/employee" element ={<Employee />} />
             <Route path = "/register" element ={<Register />} />
         </Routes>

    </div>
  );
}

export default App;
