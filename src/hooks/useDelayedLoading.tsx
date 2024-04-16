import { useState, useEffect } from 'react';

const useDelayedLoading = (delay = 2000) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsLoading(false); 
        }, delay);

        return () => clearTimeout(timeoutId);
    }, [delay]);

    return isLoading;
}

export default useDelayedLoading;
