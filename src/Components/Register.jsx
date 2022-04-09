import React from "react";
import { AuthContext } from "../Context/AuthContext";


const Register = () => {

    const [formDetails , setFormDetails] = React.useState({
      name: "",
      email: "",
      password: "",
      username: "",
      mobile: "",
      description: "" 
    })

    const {name , email , password , username , mobile , description} = formDetails;

    const {register} = React.useContext(AuthContext);

    const handleChange = (e) => {

        const { name , value } = e.target;

        setFormDetails({
            ...formDetails,
            [name] : value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(` https://masai-api-mocker.herokuapp.com/auth/register`,{
            method : "POST",
            body : JSON.stringify(formDetails),
            headers: {"Content-Type":"application/json"}
        })
        .then((res) => res.json())
        .then((res) => register(res.token))
    }

    return (
        <div>
           <h1>Register Page</h1>
           <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="name" value={name} onChange={handleChange} />
                <br />
                <input type="text" name="email" placeholder="email" value={email} onChange={handleChange} />
                <br />
                <input type="password" name="password" placeholder="password" value={password} onChange={handleChange} />
                <br />
                <input type="text" name="username" placeholder="Username" value={username} onChange={handleChange} />
                <br />
                <input type="text" name="mobile" placeholder="mobile" value={mobile} onChange={handleChange} />
                <br />
                <input type="text" name="description" placeholder="description" value={description} onChange={handleChange} />
                <br />
                <input type="submit" value="Register" />
           </form>
        </div>
    )
}

export { Register }