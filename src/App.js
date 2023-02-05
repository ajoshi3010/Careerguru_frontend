import React, {Component} from "react";
import './App.css';
import {Routes,Route} from 'react-router-dom';
// import Navigation from './components/Navigation';
import Homepage from "./componenets/Homepage";
// import 'bootstrap/dist/css/bootstrap.css';
import LoginPage from "./componenets/LoginPage";
import Signup from "./componenets/Signup";
import User from "./componenets/User";
import Skills from "./componenets/Skills";
import Dashboard from "./componenets/Dashboard";
// import { string } from "yargs";
// import { appendFile } from "fs";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.



class App extends Component{
  render(){
    return (
      
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="login" element={<LoginPage/>}></Route>
        <Route path="signup" element={<Signup/>}></Route>
        <Route path="user" element={<User/>}></Route>
        <Route path="skills" element={<Skills/>}></Route>
        <Route path="dashboard" element={<Dashboard/>}></Route>

      </Routes>

    )
  }
}


// function App() {
//   return (
//     <div className="App">
//     <Navigation></Navigation>

//     </div>
//   );
// }

export default App;