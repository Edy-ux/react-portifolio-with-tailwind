import {
    AiFillLinkedin,
    AiFillYoutube,
    AiFillGithub,
    AiFillCode,
} from 'react-icons/ai';
import Image from 'next/image';
import devedy from '../../public/avatar.png';
import WriteMachine from './WriteMachine';
const Profile = () => {
    return (
        <div className="text-center p-10 py-10">
            <div>
                <h2 className=" font-semibold text-3xl py-2 text-teal-600  dark:text-teal-400 md:text-5xl">
                    <WriteMachine
                        description="Olá, meu nome é Edy"
                        hiddenCursor
                    />
                </h2>
                <h3 className="text-2xl py-2 dark:text-white md:text-4xl">
                    <WriteMachine
                        description="Desenvolvedor FullStack."
                        delay={3450}
                    />
                </h3>
            </div>

            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
                Freelance fornecendo serviços de programação e desing. Estudo
                Análise e desenvolvimento de sistemas. Junte-se a mim e construa
                seu web/app site!
            </p>
            <div className="text-4xl flex justify-center gap-16 py-3 text-gray-700">
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

            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full overflow-hidden mt-20 md:h-96 md:w-96">
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
