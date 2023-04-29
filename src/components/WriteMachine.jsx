import { useState, useEffect } from 'react';

const WriteMachine = ({ description, hiddenCursor, delay }) => {
    const [text, setText] = useState('');
    const [showCursor, setShowCursor] = useState(false);

    const writerOnScreen = (text, i = 0) => {
        if (i < text.length) {
            setShowCursor(true);
            setText(text.slice(0, i + 1));
            setTimeout(() => writerOnScreen(text, i + 1), 200);
        } else if (i >= text.length && hiddenCursor) {
            setShowCursor(false);
        }
    };
    useEffect(() => {
        setTimeout(() => writerOnScreen(description), delay ?? 200);
    }, []);

    return (
        <>
            {text}
            {showCursor && (
                <span className="animate-animate-cursor text-xl md:text-4xl ml-1 font-medium">
                    |
                </span>
            )}
        </>
    );
};

export default WriteMachine;
