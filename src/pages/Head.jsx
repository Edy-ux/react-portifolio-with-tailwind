import Head from 'next/head';

const MyHead = () => {
    return (
        <>
            <Head>
                <title>Portfólio — Ednei Lopes Add&#123; &#125;</title>
                <meta
                    name="description"
                    content="Freelance fornecendo serviços de programação e desing. Estudo Análise e desenvolvimento de sistemas. Junte-se a mim e construa seu web/app site!"
                />

                {/* <!-- Open Graph / Facebook --> */}
                <meta property="og:title" content="Portfólio  —  Ednei Lopes" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:url"
                    content="https://portifolio-edy-ux.vercel.app"
                />
                <meta property="og:title" content="Portfólio  —  Ednei Lopes" />

                <meta
                    property="og:description"
                    content="Freelance fornecendo serviços de programação e desing. Estudo Análise e desenvolvimento de sistemas. Junte-se a mim e construa seu web/app site!"
                />
                <meta
                    property="og:image"
                    content="https://i.imgur.com/jwYCpjL.png"
                />

                {/* <!-- Twitter --> */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta
                    property="twitter:url"
                    content="https://portifolio-edy-ux.vercel.app/"
                />
                <meta
                    property="twitter:title"
                    content="Portfólio  —  Ednei Lopes"
                />
                <meta
                    property="twitter:description"
                    content="Freelance fornecendo serviços de programação e desing. Estudo Analise e desenvolvimento de sistemas. Junte-se a mim e construa seu web/app site!"
                />
                <meta
                    property="og:image"
                    content="https://i.imgur.com/jwYCpjL.png"
                />
            </Head>
        </>
    );
};

export default MyHead;
