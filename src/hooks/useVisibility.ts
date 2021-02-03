import { useEffect, useState } from 'react';

const useVisibility = () => {
    const [hidden, setHidden] = useState(false);

    const changeVisibility = () => {
        setHidden(document.hidden);
    }

    useEffect(() => {
        document.addEventListener('visibilitychange', changeVisibility);

        return () => {
            document.removeEventListener('visibilitychange', changeVisibility);
        }
    }, []);

    return hidden;
}

export default useVisibility;