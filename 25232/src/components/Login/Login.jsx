import { useState } from "react"
import { useAuthContext } from "../../context/AuthContext/useAuthContext"
import { Navigate, useNavigate } from "react-router-dom"


export const Login = ()  => {
    const [userForm, setUserForm] = useState({name:"", password:""})
    const {user, login}= useAuthContext()
    const navigate = useNavigate()//Invoco Hook para navegar

    if(user){
        return <Navigate to="/admin/alta-productos" replace/>
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const success = login (userForm.name, userForm.password)
        if(success){
            navigate("/admin/alta-productos")
        } else {
            alert ("Credenciales incorrectas")
            setUserForm({name:"", password:""})
        }
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setUserForm({
            ...userForm,
            [name]: value
        })
    }


    return(
        <>
            <form>
                <input type="text" name="name" placeholder="Nombre" value={userForm.name} onChange={handleChange}/>
                <input type="password" name="password" placeholder="Password" value={userForm.password} onChange={handleChange}/>
                <button type="submit" onClick={handleSubmit}>Login</button>
            </form>
        </>
    )
}