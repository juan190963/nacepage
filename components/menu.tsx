import { useState } from 'react';
import Image from "next/image";
const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="relative">
            <button
                className="hamburger focus:outline-none "
                onClick={toggleMenu}
            >
                <svg width="100px" height="100px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-10 stroke-blue-800 hover:stroke-orange-500'>
                    <path d="M4 6H20M4 12H20M4 18H20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className=' fill-white' />
                </svg>
            </button>

            <div className={`${isOpen ? 'fixed inset-0 bg-black opacity-50 z-40' : 'hidden'}`}></div>

            <nav className={`menu fixed top-0 left-0 h-full bg-black shadow-lg z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out w-72`}>
                <div className="flex justify-end items-center pr-6">
                    <button
                        className="close-menu focus:outline-none"
                        onClick={toggleMenu}
                    >
                        <svg width="100px" height="100px" viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-7 stroke-white '>
                            <path d="M3 21.32L21 3.32001" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M3 3.32001L21 21.32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
                <ul className="">
                    <li className="text-center"><a href="/" className='text-white hover:text-gray-400 font-normal text-xl	'>home</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Menu;