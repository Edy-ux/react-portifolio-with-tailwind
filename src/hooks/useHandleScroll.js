import { useEffect, useRef } from 'react';

const useHandleScroll = (setNavBarStyle) => {
    const navRef = useRef();
    useEffect(() => {
        var prevScrollpos = window.pageYOffset;
        const handleScroll = () => {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                setNavBarStyle({
                    top: 0,
                    right: 0,
                    left: 0,
                });
            } else {
                setNavBarStyle({
                    top: -75,
                    right: 0,
                    left: 0,
                });
            }
            prevScrollpos = currentScrollPos;
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return { navRef };
};

export default useHandleScroll;
