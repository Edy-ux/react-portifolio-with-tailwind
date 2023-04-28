import { BsFillMoonStarsFill } from 'react-icons/bs';

const Header = ({ setDarkMode }) => {
    return (
        <section cllassName="relative">
            <nav className=" shadow-sm fixed top-0 right-0 z-10 h-[72px]  py-10 mb-20 flex justify-around items-center bg-white dark:bg-gray-900  dark:text-white w-full">
                <h1 className="font-burtons text-xl">developerbyedy</h1>
                <ul className="flex items-center">
                    <li
                        className="cursor-pointer text-2xl"
                        onClick={() => setDarkMode((dark) => !dark)}
                    >
                        <BsFillMoonStarsFill />
                    </li>
                    <a href="#services">
                        <li
                            className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md
                            ml-7 border-none"
                            href="#"
                        >
                            Resumo
                        </li>
                    </a>
                </ul>
            </nav>
        </section>
    );
};

export default Header;
