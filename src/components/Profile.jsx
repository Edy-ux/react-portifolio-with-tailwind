import { AiFillLinkedin, AiFillYoutube, AiFillGithub } from 'react-icons/ai';
import Image from 'next/image';
import devedy from '../../public/avatar.png';
const Profile = () => {
    return (
        <div className="text-center p-10 py-10">
            <h2 className=" font-semibold text-5xl py-2 text-teal-600  dark:text-teal-400 md:text-6xl">
                Edy Lopes
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
                Desenvolvedor FullStack.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
                Freelance fornecendo serviços de programação e desing. Estudo
                Analise e desenvolvimento de sistemas. Junte-se a mim e construa
                seu web/app site!
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
                <a href="https://github.com/Edy-ux" target="_blank">
                    <AiFillGithub />
                </a>
                <a href="https://github.com/Edy-ux" target="_blank">
                    <AiFillLinkedin />
                </a>
                <a href="https://github.com/Edy-ux" target="_blank">
                    <AiFillYoutube />
                </a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full  relative overflow-hidden mt-20 md:h-96 md:w-96">
                <Image
                    src={devedy}
                    alt="profile"
                    style={{
                        layout: 'responsive',
                        objectFit: 'cover',
                    }}
                />
            </div>
        </div>
    );
};

export default Profile;
