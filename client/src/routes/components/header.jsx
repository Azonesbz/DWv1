import React, { useState } from 'react'
import Menu from './menu'

const Header = () => {
    const [theme, setTheme] = useState(true)
    const [menu, setMenu] = useState(true)


    const toggleTheme = () => {
        const currentTheme = window.localStorage.theme === 'light' ? 'dark' : 'light'
        window.localStorage.theme = currentTheme
        document.documentElement.classList.add(currentTheme)
        document.documentElement.classList.remove(
            window.localStorage.theme === 'light' ? 'dark' : 'light'
        )

        setTheme(window.localStorage.theme !== 'light')
    }
    const toggleMenu = () => {
        if (menu) {
            return setMenu(false)
        }
        return setMenu(true)
    }

    return (
        <>
            <header className="flex h-20 relative z-50">
                <nav className="flex w-full h-5/6 m-auto items-center">
                    <a href="." className="my-auto ml-4"><img src="./img/index.jpg" alt="logo" className="w-14 rounded-full" /></a>
                    <div className="flex justify-end w-full h-full items-center">
                        <button id="theme-btn" onClick={toggleTheme}
                            className="flex fixed border-2 border-black lg-block hover:bg-black dark:border-white dark:hover:bg-white rounded-full w-10 h-10 mr-16 lg:mr-3 duration-200 justify-center items-center">
                            <svg className='w-6 h-6 inline-flex items-center hover:fill-white dark:fill-white dark:hover:fill-black'>
                                {theme
                                    ? (
                                        <path
                                            fillRule='evenodd'
                                            clipRule='evenodd'
                                            d='M12 9c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3Zm0-2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5ZM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1Zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1ZM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1Zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1ZM5.99 4.58a.996.996 0 0 0-1.41 0 .996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .38-.39.39-1.03 0-1.41L5.99 4.58Zm12.37 12.37a.996.996 0 0 0-1.41 0 .996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 0 0 0-1.41l-1.06-1.06Zm1.06-10.96a.996.996 0 0 0 0-1.41.996.996 0 0 0-1.41 0l-1.06 1.06a.996.996 0 0 0 0 1.41c.39.38 1.03.39 1.41 0l1.06-1.06ZM7.05 18.36a.996.996 0 0 0 0-1.41.996.996 0 0 0-1.41 0l-1.06 1.06a.996.996 0 0 0 0 1.41c.39.38 1.03.39 1.41 0l1.06-1.06Z'
                                        />
                                    )
                                    : (
                                        <path
                                            fillRule='evenodd'
                                            clipRule='evenodd'
                                            d='M9.37 5.51A7.35 7.35 0 0 0 9.1 7.5c0 4.08 3.32 7.4 7.4 7.4.68 0 1.35-.09 1.99-.27A7.014 7.014 0 0 1 12 19c-3.86 0-7-3.14-7-7 0-2.93 1.81-5.45 4.37-6.49ZM12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1Z'
                                        />
                                    )}
                            </svg>
                        </button>
                        <ul className="flex items-center hidden lg:inline-flex mr-5 lg:mr-12">
                            <li>
                                <a href="/login" className="mr-4 px-4 font-semibold bg-white dark:bg-neutral-900 dark:text-white dark:hover:text-black py-2 rounded-md uppercase dark:hover:bg-neutral-300 hover:text-white hover:bg-neutral-900 font-sans shadow-md shadow-gray-500/50 duration-200 ease-in-out">
                                    Se connecter
                                </a>
                            </li>
                            <li>
                                <a href="/create-account" className="mr-4 px-4 font-semibold bg-white dark:bg-neutral-900 dark:text-white dark:hover:text-black py-2 rounded-md uppercase dark:hover:bg-neutral-300 hover:text-white hover:bg-neutral-900 font-sans shadow-md shadow-gray-500/50 duration-200 ease-in-out">
                                    Créer un compte
                                </a>
                            </li>
                            <li className="flex"><a href="/create-voyage"
                                className="flex items-center mr-4 px-4 font-semibold bg-white dark:bg-neutral-900 dark:text-white dark:hover:text-black py-2 rounded-md uppercase dark:hover:bg-neutral-300 hover:text-white hover:bg-neutral-900 font-sans shadow-md shadow-gray-500/50 duration-200 ease-in-out">
                                <svg width="30" height="30" fill="none" stroke="currentColor"
                                    strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                                    <path d="M16 10h4a2 2 0 0 1 0 4h-4l-4 7H9l2-7H7l-2 2H2l2-4-2-4h3l2 2h4L9 3h3l4 7Z"></path>
                                </svg>
                                <span>Mes Voyages</span>
                            </a>
                            </li>
                            <li><a href="/profil" className="flex items-center mr-4 px-4 font-semibold bg-white dark:bg-neutral-900 dark:text-white dark:hover:text-black py-2 rounded-md uppercase dark:hover:bg-neutral-300 hover:text-white hover:bg-neutral-900 font-sans shadow-md shadow-gray-500/50 duration-200 ease-in-out">
                                <svg width="30" height="30" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                                    <path d="M15.592 3.027C14.68 2.042 13.406 1.5 12 1.5c-1.414 0-2.692.54-3.6 1.518-.918.99-1.365 2.334-1.26 3.786C7.348 9.67 9.528 12 12 12c2.472 0 4.648-2.33 4.86-5.195.106-1.439-.344-2.78-1.268-3.778Z"></path>
                                    <path d="M20.25 22.5H3.75a1.454 1.454 0 0 1-1.134-.522 1.655 1.655 0 0 1-.337-1.364c.396-2.195 1.63-4.038 3.571-5.333C7.574 14.132 9.758 13.5 12 13.5c2.242 0 4.426.633 6.15 1.781 1.94 1.294 3.176 3.138 3.571 5.332.091.503-.032 1-.336 1.365a1.453 1.453 0 0 1-1.135.522Z"></path>
                                </svg>
                                <span>Profil</span>
                            </a>
                            </li>
                            <li>
                                <a href="/logout" className="flex items-center mr-4 px-4 font-semibold bg-white dark:bg-neutral-900 dark:text-white dark:hover:text-black py-2 rounded-md uppercase dark:hover:bg-neutral-300 hover:text-white hover:bg-neutral-900 font-sans shadow-md shadow-gray-500/50 duration-200 ease-in-out">
                                    <svg width="30" height="30" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                                        <path d="M14 8V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-2"></path>
                                        <path d="M21 12H7"></path>
                                        <path d="m18 15 3-3-3-3"></path>
                                    </svg>
                                    <span>Se déconnecter</span>
                                </a>
                            </li>
                        </ul>
                        <button className="mr-4 lg:hidden fixed z-50" id="menu-toggle" onClick={toggleMenu}>
                            <svg width="38" height="38" fill="none" stroke="currentColor" strokeLinecap="round"
                                strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                                className="stroke-black dark:stroke-white">
                                <path d="M3 12h18" className="fill-white"></path>
                                <path d="M3 6h18"></path>
                                <path d="M3 18h18"></path>
                            </svg>
                        </button>
                    </div>
                </nav>
            </header>
            <Menu menu={menu} />
        </>
    )
}

export default Header