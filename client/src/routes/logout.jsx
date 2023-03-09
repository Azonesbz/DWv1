
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function Logout(){
    const navigate = useNavigate()
    localStorage.removeItem('token')
    useEffect(()=> {
        navigate('/')
    })
}

export default Logout