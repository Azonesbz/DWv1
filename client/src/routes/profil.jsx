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
        if(isLogged){
            fetch('http://localhost:4000/profil', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(token)
            })
            .then(async response => {
                await response.json()
            })
        }
    }, [isLogged, token])

    return (
        <>
            <Header />
            <main className="flex items-center justify-center min-w-screen min-h-screen absolute inset-0">
                <h2>Votre profil</h2>

            </main>
        </>
        
        )
}