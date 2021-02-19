import { useMemo, useState } from "react"

type SwiperParams = () => {
    current: number;
    size: number;
}

const useSwiper = (initial:number = 0) => {
    const [current, setCurrent] = useState(initial);
    const offset = useMemo(() => { }, []);

    const slideTo = (step: number = 0, offset: number = 0) => { 
        // const fetureCurrent = Math.min(current + step, -1);
        
    };

    const next = () => { 
        slideTo(1);
    };

    const prev = () => { 
        slideTo(-1);
    };

    return {
        slideTo,
        next,
        prev,
        current,
        offset
    }
}

export default useSwiper;