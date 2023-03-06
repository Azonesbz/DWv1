import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function Logout(){
    const navigate = useNavigate()
    useEffect(() => {
        fetch('http://localhost:4000/logout')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            navigate('/')
        })
    })
    return (
        <div>
            <h2>hello</h2>
        </div>
    )
}

export default Logout