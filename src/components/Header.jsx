import { BsFillMoonStarsFill } from 'react-icons/bs';

const Header = () => {
    return (
        <header>
            <nav className="py-10 mb-12 flex justify-between items-center  dark:text-white">
                <h1 className="font-burtons text-xl">developerbyedy</h1>
                <ul className="flex items-center">
                    <li className="cursor-pointer text-2xl">
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
        </header>
    );
};

export default Header;
