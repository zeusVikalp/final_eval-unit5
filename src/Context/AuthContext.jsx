import React from "react"
import { useNavigate } from "react-router-dom";

export const AuthContext = React.createContext();

export const AuthContextProvider = ({children}) => {
    
    const[isAuth,setisAuth] = React.useState(false);
    const[token,setToken] = React.useState('')
    const[username,setUsername] = React.useState("")
    const navigate = useNavigate()

    const login = (token,username) => {
        setisAuth(true)
        setToken(token)
        setUsername(username)
        navigate(`/`)

    }
    const logout = () => {
        setisAuth(false);
        navigate('/login')
    };



    return <AuthContext.Provider value = {{isAuth,login,username,token,logout}}>{children}</AuthContext.Provider>
}