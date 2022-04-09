import React from "react";
import { AuthContext } from "../Context/AuthContext";


const Login = () => {

    const [formDetails , setFormDetails] = React.useState({
        password: "",
        username : ""
    })

    const {password , username} = formDetails;

    const {login} = React.useContext(AuthContext);

    const handleChange = (e) => {

        const { name , value } = e.target;

        setFormDetails({
            ...formDetails,
            [name] : value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`https://masai-api-mocker.herokuapp.com/auth/login`,{
            method : "POST",
            body : JSON.stringify(formDetails),
            headers: {"Content-Type":"application/json"}
        })
        .then((res) => res.json())
        .then((res) => login(res.token))
    }

    return (
        <div>
           <h1>Login Page</h1>
           <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="Username" value={username} onChange={handleChange} />
                <br />
                <input type="password" name="password" placeholder="password" value={password} onChange={handleChange} />
                <input type="submit" value="LOGIN" />
           </form>
        </div>
    )
}

export { Login }