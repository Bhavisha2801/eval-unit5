import React from "react";
import {Link} from "react-router-dom";
import "./navstyle.css"



const Navbar = () => {
    return (
        <div style={{backgroundColor:"black",margin:"10px",width:"100%",height:"40px"}} >
            <Link style={{textDecoration:"none",margin:"10px",color:"white"}} to="/">Home</Link>
            <Link style={{textDecoration:"none",margin:"10px",color:"white"}}  to="/employee">Employee</Link>
            <Link style={{textDecoration:"none",margin:"10px",color:"white"}}  to="/login">Login</Link>
            <Link style={{textDecoration:"none",margin:"10px",color:"white"}}  to="/register">Register</Link>
        </div>
    )
}

export { Navbar }