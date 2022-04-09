import React from "react"
import './App.css';
import { Navbar } from "./Components/Navbar";
import { Routes , Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { Employee } from "./Components/Employee";
import { Register } from "./Components/Register";
import { Login } from "./Components/Login";
// import { UserDetails } from "./Components/UserDetails";
// import { NotFound } from "./Components/NotFound";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/register" element={<Register />}  />
        <Route path="/login" element={<Login />}  />
        {/* <Route path="/users/:userid" element={<UserDetails />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
