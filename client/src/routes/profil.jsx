import { useEffect, useState } from "react";
import Header from "./components/header";

export default function Profil() {

    const [isLogged, setIdLogged] = useState('')

    const token = localStorage.getItem('token')
    

    useEffect(() => {
        if(token){
            setIdLogged(token)
        } else {
            setIdLogged('')
        }
        fetch('http://localhost:4000/profil')
        .then(async response => {
            const data = await response.json()
            if(response.status === 200){
                console.log(data)

            }
        })
    }, [token])

    return (
        <>
            <Header />
            <main className="flex items-center justify-center min-w-screen min-h-screen">
                <h2>Votre profil</h2>

            </main>
        </>
        
        )
}