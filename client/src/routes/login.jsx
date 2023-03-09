import Header from "./components/header";
import React, { useState, useReducer } from "react";
import { useNavigate } from "react-router-dom";


const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value
  }
}

const Login = () => {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [data, setData] = useState('')

  const navigate = useNavigate()


// Function to set value input to formData

  const handleChange = e => {
    setFormData({
      name: e.target.name,
      value: e.target.value,
    });
  }

  // Function to take the response and update the view

  const handleSubmit = e => {
    e.preventDefault()
    fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(async response => {
      if(response.status < 300){
        const data = await response.json()
        localStorage.setItem('token', `${data.token}`)
        setData(data.msg)
        navigate('/')
      } else if (response.status >= 300) {}
        const data = await response.json()
        setData(data.msg)
    })
  }

  return (
    <>
      <Header />

      <div className="w-full sm:w-2/3 lg:w-2/4 mx-auto my-auto items-center">
        <div className="flex flex-col">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h2 className="font-bold leading-6 text-green-600 text-center text-xl dark:text-white uppercase">Créer un compte
              </h2>
              <p className="mt-1 text-lg text-black text-center mb-4 dark:text-white">Veuillez renseigner tout les champs avant
                de soumettre le Formulaire</p>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0 shadow-lg shadow-black rounded-lg">
            <form action="" method="POST" onSubmit={handleSubmit}>
              <div className="overflow-hidden rounded-lg">
                <div className="flex bg-neutral-200 dark:bg-neutral-900 px-4 py-5 sm:p-6 justify-center">
                  <div className="flex inline-flex flex-col w-2/3 ">

                    <div className="col-span-12 sm:col-span-3 ">
                      <label htmlFor="username" className="block text-lg font-bold text-black dark:text-white duration-1000">Nom
                        d'utilisateur:</label>
                      <input type="text" name="identify" id="first-name" placeholder="Pseudonyme" onChange={handleChange}
                        className="mt-1 block w-full rounded-xl bg-neutral-100 py-2 px-3 placeholder:text-slate-600 text-black border-2 border-neutral-700 focus:border-black focus:outline-none sm:text-sm" />
                    </div>
                    <div className="col-span-6 sm:col-span-3 mt-2">
                      <label htmlFor="password" className="block text-lg font-bold text-black dark:text-white duration-1000">Password:</label>
                      <input type="password" name="password" id="password" placeholder="Mot de passe" onChange={handleChange}
                        className="mt-1 block w-full rounded-xl bg-neutral-100 py-2 px-3 placeholder:text-slate-600 text-black border-2 border-neutral-700 focus:border-black focus:outline-none sm:text-sm" />
                    </div>
                  </div>
                </div>
                <div className="bg-neutral-400 dark:bg-neutral-700 px-6 py-3 text-center sm:px-8">
                  <button type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-6 text-sm font-bold text-white shadow-sm hover:bg-indigo-900 uppercase shadow-lg shadow-indigo-500/60">
                    Créer mon compte
                  </button>
                </div>
              </div>
            </form>
          </div>
          <h1 className="text-center my-auto dark:text-red-500 font-bold">{data}</h1>
        </div>
      </div>
    </>
  )
};

export default Login;