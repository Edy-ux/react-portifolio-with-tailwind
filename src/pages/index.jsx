import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import { AiFillLinkedin, AiFillYoutube, AiFillGithub } from 'react-icons/ai';
import devedy from '../../public/avatar.png';
import favicon from '../../public/favicon.ico';

import deved from '../../public/dev-ed-wave.png';
import code from '../../public/code.png';
import design from '../../public/design.png';
import consulting from '../../public/consulting.png';
import web1 from '../../public/web1.png';
import web2 from '../../public/web2.png';
import web3 from '../../public/web3.png';
import web4 from '../../public/web4.png';
import web5 from '../../public/web5.png';
import web6 from '../../public/web6.png';
import Header from '@/components/Header';

export default function Home() {
    const [darkMode, setDarkMode] = useState(false);
    return (
        <div className={darkMode ? 'dark' : ''}>
            <Head>
                <title>Add&#123; &#125; developer Portifólio</title>
                <meta
                    name="description"
                    content="gerado por Add'{}' developer"
                />
            </Head>

            <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
                <section className="min-h-screen">
                    <Header />
                    <div className="text-center p-10 ">
                        <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
                            Edy Lopes
                        </h2>
                        <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
                            Desenvolvedor FullStack.
                        </h3>
                        <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
                            Freelance fornecendo serviços de programação e
                            desing. Estudo Analise e desenvolvimento de
                            sistemas. Junte-se a mim e construa seu web/app
                            site!
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

                        <div className="mx-auto  bg-gradient-to-b from-teal-500 rounded-full w-80 h-80  overflow-hidden mt-20 md:h-96 md:w-96">
                            <Image src={devedy} alt="profile" />
                        </div>
                    </div>
                </section>
                <section id="services">
                    <div>
                        <h3 className="text-3xl py-1  dark:text-white ">
                            Serviços Que ofereço{' '}
                        </h3>

                        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                            Desde o início da minha jornada como desenvolvedor
                            freelancer, já fiz trabalho remoto para{' '}
                            <span className="text-teal-500">Agências </span>
                            consultado para{' '}
                            <span className="text-teal-500">startups </span>e
                            colaborei com pessoas talentosas para criar produtos
                            digitais tanto para uso comercial quanto para o
                            consumidor final.
                        </p>
                        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                            Eu ofereço junto com meu time uma ampla gama de
                            serviços, incluindo design de marca, programação e
                            ensino.
                        </p>
                    </div>
                    <div className="lg:flex gap-10">
                        <div
                            className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1 hover:-translate-y-4 
    duration-200 hover:animate-pulse cursor-pointer "
                        >
                            <Image
                                src={design}
                                width={100}
                                height={100}
                                alt="pic"
                            />
                            <h3 className="text-lg font-medium pt-8 pb-2  ">
                                Belos designs{' '}
                            </h3>
                            <p className="py-2">
                                Criando designs elegantes adequados às suas
                                necessidades, seguindo a teoria básica do
                                design.
                            </p>
                            <h4 className="py-4 text-teal-600">Design Tools</h4>
                            <p className="text-gray-800 py-1">Photoshop</p>
                            <p className="text-gray-800 py-1">Illustrator</p>
                            <p className="text-gray-800 py-1">Figma</p>
                            <p className="text-gray-800 py-1">Indesign</p>
                        </div>
                        <div
                            className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1  hover:-translate-y-4 
    duration-200 hover:animate-pulse cursor-pointer"
                        >
                            <Image src={code} width={100} height={100} alt="" />
                            <h3 className="text-lg font-medium pt-8 pb-2 ">
                                Projeto dos seus sonhos
                            </h3>
                            <p className="py-2">
                                Você tem uma ideia para o seu próximo grande
                                site? Vamos torná-lo uma realidade.
                            </p>
                            <h4 className="py-4 text-teal-600">Design Tools</h4>
                            <p className="text-gray-800 py-1">Photoshop</p>
                            <p className="text-gray-800 py-1">Illustrator</p>
                            <p className="text-gray-800 py-1">Figma</p>
                            <p className="text-gray-800 py-1">Indesign</p>
                        </div>
                        <div
                            className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1  hover:-translate-y-4 
    duration-200 hover:animate-pulse cursor-pointer"
                        >
                            <Image
                                src={consulting}
                                width={100}
                                height={100}
                                alt=""
                            />
                            <h3 className="text-lg font-medium pt-8 pb-2 ">
                                Consultando
                            </h3>
                            <p className="py-2">
                                Interessado em feedback para o seu projeto
                                atual? Eu posso te dar dicas e truques para
                                subir de nível.
                            </p>
                            <h4 className="py-4 text-teal-600">Design Tools</h4>
                            <p className="text-gray-800 py-1">Photoshop</p>
                            <p className="text-gray-800 py-1">Illustrator</p>
                            <p className="text-gray-800 py-1">Figma</p>
                            <p className="text-gray-800 py-1">Indesign</p>
                        </div>
                    </div>
                </section>
                <section className="py-10">
                    <div>
                        <h3 className="text-3xl py-1 dark:text-white ">
                            Portifólio
                        </h3>
                    </div>
                    <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
                        <div
                            className="basis-1/3 flex-1 hover:-translate-y-4 
    duration-200 hover:animate-pulse cursor-pointer "
                        >
                            <Image
                                className="rounded-lg object-cover"
                                width={'100%'}
                                height={'100%'}
                                style={{
                                    layout: 'responsive',
                                }}
                                src={web1}
                                alt=""
                            />
                        </div>
                        <div className="basis-1/3 flex-1 hover:-translate-y-4 duration-200 hover:animate-pulse cursor-pointer">
                            <a
                                href="https://edy-ux.github.io/youtube_clone/"
                                target="_blank"
                            >
                                <Image
                                    className="rounded-lg object-cover"
                                    width={'100%'}
                                    height={'100%'}
                                    style={{
                                        layout: 'responsive',
                                    }}
                                    src={web2}
                                    alt=""
                                />
                            </a>
                        </div>
                        <div
                            className="basis-1/3 flex-1 hover:-translate-y-4 
    duration-200 hover:animate-pulse cursor-pointer"
                        >
                            <Image
                                className="rounded-lg object-cover"
                                width={'100%'}
                                height={'100%'}
                                style={{
                                    layout: 'responsive',
                                }}
                                src={web3}
                                alt=""
                            />
                        </div>
                        <div className="basis-1/3 flex-1 ">
                            <Image
                                className="rounded-lg object-cover hover:-translate-y-4 
                                duration-200 hover:animate-pulse cursor-pointer
                                "
                                width={'100%'}
                                height={'100%'}
                                style={{
                                    layout: 'responsive',
                                }}
                                src={web4}
                                alt=""
                            />
                        </div>
                        <div
                            className="basis-1/3 flex-1 hover:-translate-y-4 
                                duration-200 hover:animate-pulse cursor-pointer"
                        >
                            <Image
                                className="rounded-lg object-cover"
                                width={'100%'}
                                height={'100%'}
                                style={{
                                    layout: 'responsive',
                                }}
                                src={web5}
                                alt=""
                            />
                        </div>
                        <div className="basis-1/3 flex-1">
                            <Image
                                className="rounded-lg object-cover"
                                width={'100%'}
                                height={'100%'}
                                style={{
                                    layout: 'responsive',
                                }}
                                src={web6}
                                alt=""
                            />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}