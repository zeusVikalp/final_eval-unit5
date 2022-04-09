import React from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function Login() {
    const {login}  = React.useContext(AuthContext)

    const [formDetails, setFormDetails] = React.useState({
        username: "",
        password: ""
    })
    const navigate = useNavigate();

    const { username, password } = formDetails

    const handleChange = (e) => {
        const { name, value } = e.target

        setFormDetails({
            ...formDetails,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch(`https://masai-api-mocker.herokuapp.com/auth/login`, {
            method: "POST",
            body: JSON.stringify(formDetails),
            headers: {
                "content-type": "application/json"
            }
        })
        .then((res) => res.json())
        .then((res) => login(res.token))
        .catch((err) => console.log(`err ${err}`))
        
        navigate(`/`)

        
    }


    return(
        <form onSubmit={handleSubmit}>
            <input type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={handleChange} />
            <br />
            <input type="text"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleChange} />
            <br />
            <input type="submit" value={"SUBMIT"} />
        </form>
    )
}

export { Login }