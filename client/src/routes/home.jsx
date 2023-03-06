import Header from "./components/header";

const Home = () => {
    fetch('http://localhost:4000/')
    return (
        <>
            <Header />
            <main class="relative z-30 w-full min-h-screen">

                <img src="./img/terre.png" alt="img-world" class="z-0 absolute top-48 left-10 h-2/4 sm:h-3/4 sm:top-48 sm:left-24 lg:h-full lg:top-48 duration-500" />
                    <header class="relative w-full z-50">
                        <h1 class="text-black dark:text-white font-bold text-4xl text-center font-sans w-2/4 mx-auto mt-8 sm:text-5xl lg:text-6xl">Bienvenue sur Road My Zone, the first social network to </h1>
                        <p class="text-black dark:text-white text-center text-xl sm:text-2xl lg:text-3xl m-2">Organiser votre voyage en quelques cliques !</p>
                    </header>
                    <section class="z-10 relative grid grid-cols-1 gap-2 lg:gap-8 justify-between mx-auto max-w-screen-xl p-5 py-10 lg:p-8">
                        <aside class="col-span-1 lg:sticky top-4 mb-auto space-y-8 bg-white dark:bg-zinc-800 border dark:border-zinc-700 shadow rounded-lg">
                            <header>
                                <h1 class="text-black dark:text-white font-bold text-2xl m-3 font-mono underline">Ma Road List</h1>
                            </header>
                        </aside>
                        <div class="min-h-screen relative col-span-1 w-full bg-white border-2 border-neutral-700 dark:bg-zinc-800 border dark:border-zinc-700 shadow rounded-lg p-5">
                            <header class="flex items-center w-full">
                                <div class="w-full mx-auto bg-neutral-200 min-w-0 dark:bg-neutral-900 rounded-lg">
                                    <div class="overflow-x-scroll flex">
                                        <div class="flex-none py-6 px-3">
                                            <div class="flex items-center justify-center gap-3">
                                                <button class="text-slate-900 text-lg font-medium dark:text-slate-200 bg-indigo-900 px-5 py-2 rounded-full text-white hover:scale-110 duration-200">Mes voyages</button>
                                            </div>
                                        </div>
                                        <div class="flex-none py-6 px-3">
                                            <div class="flex items-center justify-center gap-3 ">
                                                <button class="text-slate-900 text-lg font-medium dark:text-slate-200 bg-indigo-900 px-5 py-2 rounded-full text-white hover:scale-110 duration-200">Trouver un Road friend</button>
                                            </div>
                                        </div>
                                        <div class="flex-none py-6 px-3">
                                            <div class="flex items-center justify-center gap-3">
                                                <button class="text-slate-900 text-lg font-medium dark:text-slate-200 bg-indigo-900 px-5 py-2 rounded-full text-white hover:scale-110 duration-200">Organiser un voyage</button>
                                            </div>
                                        </div>
                                        <div class="flex-none py-6 px-3">
                                            <div class="flex items-center justify-center gap-3">
                                                <button class="text-slate-900 text-lg font-medium dark:text-slate-200 bg-indigo-900 px-5 py-2 rounded-full text-white hover:scale-110 duration-200">Recommendation du moment</button>
                                            </div>
                                        </div>
                                        <div class="flex-none py-6 px-3">
                                            <div class="flex items-center justify-center gap-3">
                                                <button class="text-slate-900 text-lg font-medium dark:text-slate-200 bg-indigo-900 px-5 py-2 rounded-full text-white hover:scale-110 duration-200">Voyage les mieux notés</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </header>
                            <div class="flex items-center mt-5 pt-5">
                                <div class="flex flex-col w-full">
                                    <div class="flex items-center">
                                        <label for="search"
                                            class="flex items-center w-full lg:w-3/4 bg-white rounded-full border-2 border-black dark:border-indigo-900">
                                            <input type="search" name="search" placeholder="Rechercher un voyage..."
                                                class="py-2 rounded-l-full w-full pl-4 pr-4 outline-none focus:bg-zinc-300" id="input-search" />
                                                <button class="mr-2" id="btn-search">
                                                    <svg width="30" height="30" fill="none" stroke="currentColor" stroke-linecap="round"
                                                        stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg" class="mr-1 pl-1">
                                                        <path d="M11 3a8 8 0 1 0 0 16 8 8 0 1 0 0-16z"></path>
                                                        <path d="m21 21-4.35-4.35"></path>
                                                    </svg>
                                                </button>
                                        </label>
                                        <button class="rounded-full hover:bg-black hover:stroke-white dark:bg-white hover:fill-white dark:hover:bg-black w-5 ml-3">
                                            <svg width="100" height="40" fill="none" stroke="currentColor" stroke-linecap="round"
                                                stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg" class="stroke-black hover:stroke-white hover:fill-white dark:stroke-black dark:hover:stroke-white ark:hover:fill-white w-5">
                                                <path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
                                                <path d="M12 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
                                                <path d="M12 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <h1 class="relative lg:top-5 text-5xl font-bold text-black dark:text-white">Voyages :</h1>
                            <div class="relative top-4 grid grid-cols-3">
                                <div class="col-span-1">
                                    <div class="w-full">
                                        <h5>Voyage à</h5>
                                        <h1 class="text-2xl text-black dark:text-green-700"><strong>Paris</strong></h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
            </main>
        </>
    )
};

export default Home;