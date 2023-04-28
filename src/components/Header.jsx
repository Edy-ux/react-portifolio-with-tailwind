import { BsFillMoonStarsFill } from 'react-icons/bs';

const Header = ({ setDarkMode }) => {
    return (
        <nav className="fixed py-10 mb-20 flex justify-between items-center dark:text-white">
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
    );
};

export default Header;
