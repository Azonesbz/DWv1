const Menu = ({ menu, isLogged }) => {

    return (
        <>
            <div className={`absolute z-40 min-h-screen w-screen bg-neutral-300 dark:bg-neutral-900 inset-0 flex items-center justify-center lg:left-full duration-200 ${menu ? 'left-full' : 'left-0'}`}>
                
                    {isLogged ? <ul className="flex flex-col space-y-20 items-center my-auto">
                    <li className="flex inline-flex content-center">
                        <a href="/profil" className="mr-4 px-4 font-semibold bg-white dark:bg-neutral-900 dark:text-white dark:hover:text-black py-2 rounded-md uppercase dark:hover:bg-neutral-300 hover:text-white hover:bg-neutral-900 font-sans shadow-md shadow-gray-500/50 duration-200 ease-in-out">Mon profil</a>
                    </li>
                    <li><a href="/voyages/mes-voyages" className="mr-4 px-4 font-semibold bg-white dark:bg-neutral-900 dark:text-white dark:hover:text-black py-2 rounded-md uppercase dark:hover:bg-neutral-300 hover:text-white hover:bg-neutral-900 font-sans shadow-md shadow-gray-500/50 duration-200 ease-in-out">Mes voyages</a></li>
                    <li><a href="/voyages" className="mr-4 px-4 font-semibold bg-white dark:bg-neutral-900 dark:text-white dark:hover:text-black py-2 rounded-md uppercase dark:hover:bg-neutral-300 hover:text-white hover:bg-neutral-900 font-sans shadow-md shadow-gray-500/50 duration-200 ease-in-out">Voyages</a></li>
                    <li><a href="/logout" className="mr-4 px-4 font-semibold bg-white dark:bg-neutral-900 dark:text-white dark:hover:text-black py-2 rounded-md uppercase dark:hover:bg-neutral-300 hover:text-white hover:bg-neutral-900 font-sans shadow-md shadow-gray-500/50 duration-200 ease-in-out">Se déconnecter</a></li>
                </ul> : <ul className="flex flex-col space-y-20 items-center my-auto">
                    <li><a href="/login" className="mr-4 px-4 font-semibold bg-white dark:bg-neutral-900 dark:text-white dark:hover:text-black py-2 rounded-md uppercase dark:hover:bg-neutral-300 hover:text-white hover:bg-neutral-900 font-sans shadow-md shadow-gray-500/50 duration-200 ease-in-out">Se connecter</a></li>
                    <li><a href="/create-account" className="mr-4 px-4 font-semibold bg-white dark:bg-neutral-900 dark:text-white dark:hover:text-black py-2 rounded-md uppercase dark:hover:bg-neutral-300 hover:text-white hover:bg-neutral-900 font-sans shadow-md shadow-gray-500/50 duration-200 ease-in-out">Créer un compte</a></li>
                </ul>}
                
            </div>
        </>
    )
}

export default Menu