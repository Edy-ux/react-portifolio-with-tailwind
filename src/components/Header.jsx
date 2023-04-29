import { useState, useEffect, useRef } from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { AiFillGithub } from 'react-icons/ai';
import useHandleScroll from '@/hooks/useHandleScroll';
import Link from 'next/link';

const Header = ({ setDarkToggle }) => {
    const [navBarStyle, setNavBarStyle] = useState({
        top: 0,
        right: 0,
        left: 0,
    });

    const { navRef } = useHandleScroll(setNavBarStyle);

    return (
        <nav
            ref={navRef}
            className={`md:px-40 px-4 transition-all duration-300 ease-in-out  shadow-sm dark:border-b dark:border-b-slate-800 fixed ${
                !navBarStyle.top ? 'top-0' : '-top-20'
            } z-10 h-16  py-10 flex justify-between items-center bg-white dark:bg-gray-900  dark:text-white w-full`}
        >
            <div className="flex items-center  justify-between gap-3 w-full">
                <h1 className="font-burtons font-normal text-xl">
                    developerbyedy
                </h1>
                <ul className="flex items-center  gap-3">
                    <li
                        className="cursor-pointer text-2xl"
                        onClick={() => setDarkToggle((isDark) => !isDark)}
                    >
                        <BsFillMoonStarsFill />
                    </li>
                    <a href="#services">
                        <li
                            className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md
                                    md:ml-7 border-none"
                            href="#"
                        >
                            Resumo
                        </li>
                    </a>
                </ul>
            </div>
            <Link
                href="https://github.com/Edy-ux"
                target="_blank"
                className="cursor-pointer text-3xl ml-7"
            >
                <AiFillGithub />
            </Link>
        </nav>
    );
};

export default Header;
