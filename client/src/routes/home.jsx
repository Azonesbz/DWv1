import Header from "./components/header";
import earth from "../assets/img/terre.png"
import { useEffect, useState } from "react";

const Home = () => {
    const [isLogged, setIsLogged] = useState(false)

    const token = localStorage.getItem('token')

    useEffect(() => {
        if (!token) {
            setIsLogged(false)
        } else {
            setIsLogged(true)
        }
    }, [token])


    return (
        <>
            <Header isLogged={isLogged} />
            <main className="relative z-30 w-full min-h-screen">

                <img src={earth} alt="img-world" className="z-0 absolute top-48 inset-24 h-1/3 sm:h-2/3 lg:h-5/6 lg:inset-x-65 lg:inset-y-12 duration-500 object-contain animate-spin-slow" />
                <header className="relative h-full w-full z-50">
                    <h1 className="text-black dark:text-white font-bold text-4xl text-center font-sans w-2/4 mx-auto mt-8 sm:text-5xl lg:text-6xl">Bienvenue sur Road My Zone, the first social network to </h1>
                    <p className="text-black dark:text-white text-center text-xl sm:text-2xl lg:text-3xl m-2">Organiser votre voyage en quelques cliques !</p>
                </header>
                <section className="z-10 relative grid grid-cols-1 sm:grid-cols-4 gap-2 lg:gap-8 justify-between mx-auto max-w-screen-xl p-5 py-10 lg:p-8">
                    {isLogged ?
                        <aside className="col-span-1 lg:sticky top-4 mb-auto space-y-8 bg-white dark:bg-zinc-800 border dark:border-zinc-700 shadow rounded-lg">
                            <header>
                                <h1 className="text-black dark:text-white font-bold text-2xl m-3 font-mono underline">Ma Road List</h1>
                            </header>

                        </aside>
                        : null}
                    <div className="min-h-screen relative col-span-1 sm:col-span-3 w-full bg-white border-2 border-neutral-700 dark:bg-zinc-800 border dark:border-zinc-700 shadow rounded-lg p-5">
                        <header className="flex items-center w-full">
                            <div className="w-full mx-auto bg-neutral-200 min-w-0 dark:bg-neutral-900 rounded-lg">
                                <div className="overflow-x-scroll flex">
                                    <div className="flex-none py-6 px-3">
                                        <div className="flex items-center justify-center gap-3">
                                            <button className="text-slate-900 text-lg font-medium dark:text-slate-200 bg-indigo-900 px-5 py-2 rounded-full text-white hover:scale-110 duration-200">Mes voyages</button>
                                        </div>
                                    </div>
                                    <div className="flex-none py-6 px-3">
                                        <div className="flex items-center justify-center gap-3 ">
                                            <button className="text-slate-900 text-lg font-medium dark:text-slate-200 bg-indigo-900 px-5 py-2 rounded-full text-white hover:scale-110 duration-200">Trouver un Road friend</button>
                                        </div>
                                    </div>
                                    <div className="flex-none py-6 px-3">
                                        <div className="flex items-center justify-center gap-3">
                                            <button className="text-slate-900 text-lg font-medium dark:text-slate-200 bg-indigo-900 px-5 py-2 rounded-full text-white hover:scale-110 duration-200">Organiser un voyage</button>
                                        </div>
                                    </div>
                                    <div className="flex-none py-6 px-3">
                                        <div className="flex items-center justify-center gap-3">
                                            <button className="text-slate-900 text-lg font-medium dark:text-slate-200 bg-indigo-900 px-5 py-2 rounded-full text-white hover:scale-110 duration-200">Recommendation du moment</button>
                                        </div>
                                    </div>
                                    <div className="flex-none py-6 px-3">
                                        <div className="flex items-center justify-center gap-3">
                                            <button className="text-slate-900 text-lg font-medium dark:text-slate-200 bg-indigo-900 px-5 py-2 rounded-full text-white hover:scale-110 duration-200">Voyage les mieux not??s</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </header>
                        <div className="flex items-center mt-5 pt-5">
                            <div className="flex flex-col w-full">
                                <div className="flex items-center">
                                    <label htmlFor="search"
                                        className="flex items-center w-full lg:w-3/4 bg-white rounded-full border-2 border-black dark:border-indigo-900">
                                        <input type="search" name="search" placeholder="Rechercher un voyage..."
                                            className="py-2 rounded-l-full w-full pl-4 pr-4 outline-none focus:bg-zinc-300" id="input-search" />
                                        <button className="mr-2" id="btn-search">
                                            <svg width="30" height="30" fill="none" stroke="currentColor" strokeLinecap="round"
                                                strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg" className="mr-1 pl-1">
                                                <path d="M11 3a8 8 0 1 0 0 16 8 8 0 1 0 0-16z"></path>
                                                <path d="m21 21-4.35-4.35"></path>
                                            </svg>
                                        </button>
                                    </label>
                                    <button className="rounded-full hover:bg-black hover:stroke-white dark:bg-white hover:fill-white dark:hover:bg-black w-5 ml-3">
                                        <svg width="100" height="40" fill="none" stroke="currentColor" strokeLinecap="round"
                                            strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg" className="stroke-black hover:stroke-white hover:fill-white dark:stroke-black dark:hover:stroke-white ark:hover:fill-white w-5">
                                            <path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
                                            <path d="M12 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
                                            <path d="M12 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <h1 className="relative lg:top-5 text-5xl font-bold text-black dark:text-white">Voyages :</h1>

                        <div className="relative mt-10 flex font-sans">
                            <div className="flex-none w-48 relative">
                                <img src="http://via.placeholder.com/1280x720" alt="img" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                            </div>
                            <form className="flex-auto p-6">
                                <div className="flex flex-wrap">
                                    <h1 className="flex-auto text-3xl font-semibold text-zinc-200">
                                        Paris
                                    </h1>
                                    <div className="text-lg font-semibold text-slate-500">
                                        $110.00
                                    </div>
                                    <div className="w-full flex-none text-sm font-bold text-green-700 mt-2">
                                        Disponible
                                    </div>
                                </div>
                                <div className="flex space-x-4 mb-6 text-sm font-medium">
                                    <div className="flex-auto flex space-x-4">
                                        <button className="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
                                            Buy now
                                        </button>
                                        <button className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900" type="button">
                                            Add to bag
                                        </button>
                                    </div>
                                    <button className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200" type="button" aria-label="Like">
                                        <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                                        </svg>
                                    </button>
                                </div>
                                <p className="text-sm text-slate-700">
                                    by Azones.dev
                                </p>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
};

export default Home;