import { useEffect, useState } from 'react';

import Header from '@/components/Header';
import MyHead from '@/pages/Head';
import Body from './Body';
import { useLocalStorage } from '@/hooks/useLocalStorage';

const Home = () => {
    const [isDark, setDark] = useState(false);
    const [darkMode, setDarkToggle] = useLocalStorage('dark-prefer', isDark);

    useEffect(() => {
        setDark(darkMode);
    }, [darkMode, setDark]);

    return (
        <div className={`${isDark ? 'dark' : ''} dark:bg-gray-900 `}>
            <MyHead />
            <Header {...{ setDark, isDark, setDarkToggle }} />
            <Body />
        </div>
    );
};

export default Home;
