import React from 'react';
import style from './styles.module.less';

interface SwipeDotsProps {
    current: number;
    count: number;
    vertical: boolean;
}

const SwipeDots:React.FC<SwipeDotsProps> = (props) => {
    const { current, vertical, count } = props;

    if (count <= 1) {
        return null;
    }

    return (
        <div className={vertical ? style['lumu-swipe__dots--vertical'] : style['lumu-swipe__dots']}>
            {
                new Array(count).fill(1).map((_, index) => (
                    <div 
                        className={current === index ? style['lumu-swipe__dot'] + ' ' + style['lumu-swipe__dot--active'] : style['lumu-swipe__dot']}
                        key={index}></div>
                ))
            }
        </div>
    )
}

export default SwipeDots;