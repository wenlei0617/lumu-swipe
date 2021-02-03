import React, { useEffect, useImperativeHandle, useMemo, useRef } from 'react';
import { SwipeItem } from './SwipeItem';
import styles from './styles.module.less';
import useRect from './hooks/useRect';
import useSwipe from './hooks/useSwipe';
import useVisibility from './hooks/useVisibility';
import useEventListener from './hooks/useEventListener';
import useTouch from './hooks/useTouch';
import useResize from './hooks/useResize';
import SwipeDots from './SwipeDots';

export interface SwipeRef {
    next: () => void;
    prev: () => void;
    slideTo: (to: number, swiping?: boolean) => void;
}

export interface SwipeProps {
    onSlideChange?: (current: number) => void;
    autoplay?: number;
    duration?: number;
    initialSwipe?: number;
    loop?: boolean;
    showIndicators?: boolean;
    vertical?: boolean;
    touchable?: boolean;
    style?: React.CSSProperties;
    children: React.ReactNode;
}

export const Swipe = React.forwardRef<SwipeRef, SwipeProps>((props, ref) => {
    const {
        initialSwipe = 0,
        vertical = false,
        duration = 500,
        autoplay = 3000,
        touchable = true,
        loop = true,
        onSlideChange,
        showIndicators = true
    } = props;
    const timer = useRef<NodeJS.Timeout | null>(null);
    const touch = useTouch();
    const count = useMemo(() => React.Children.count(props.children), [props.children]);
    const { size, root, changeSize } = useRect<HTMLDivElement>([count]);
    const itemSize = useMemo(() => vertical ? size.height : size.width, [size, vertical]);
    const itemKey = useMemo(() => vertical ? 'height' : 'width', [vertical]);
    const itemStyle = useMemo(() => ({ [itemKey]: itemSize }), [itemKey, itemSize]);
    const wrappStyle = useMemo(() => ({ [itemKey]: itemSize * count }), [count, itemSize, itemKey]);

    // 核心方法
    const { 
        setRefs, 
        slideTo, 
        next, 
        prev, 
        current, 
        swipeRef, 
        loopMove 
    } = useSwipe({ count, vertical, duration, size: itemSize, loop });

    const onPlay = () => {
        if (count <= 1) return;
        if (!autoplay) return;
        timer.current = setTimeout(() => {
            loopMove();
        }, autoplay);
    }

    const onPause = () => {
        timer.current && clearTimeout(timer.current);
        timer.current = null;
    }

    const onTouchStart = (event: React.TouchEvent | TouchEvent) => {
        if (!touchable) return; 
        onPause();
        touch.start(event);
    }

    const onTouchMove = (event: React.TouchEvent | TouchEvent) => {
        if (!touchable) return; 
        touch.move(event);
        const { deltaX, deltaY } = touch.getDelta()
        slideTo({ swiping: true, offset: vertical ? deltaY : deltaX });
    }

    const onTouchEnd = () => {
        if (!touchable) return; 
        const { deltaX, time, deltaY } = touch.end();
        const delta = vertical ? deltaY : deltaX;
        const step = (itemSize / 2 < Math.abs(delta) || Math.abs(delta / time) > 0.25) ? (delta > 0 ? -1 : 1) : 0;
        slideTo({ swiping: false, step });
        onPlay();
    }

    useEffect(() => {
        if (itemSize) {
            slideTo({step: initialSwipe - current, swiping: true });
        }
    }, [itemSize, initialSwipe])

    useEffect(() => {
        if (itemSize) {
            onPlay();
        } 
        return () => {
            onPause();
        }
    }, [count, autoplay, current, itemSize]);

    useEffect(() => {
        onSlideChange && onSlideChange(current)
    }, [current]);

    const hidden = useVisibility();
    useEffect(() => {
        hidden ? onPause() : onPlay();
    }, [hidden]);

    useEventListener('touchmove', (event) => {
        if (vertical) {
            event.preventDefault();
        }
    }, { passive: false, target: swipeRef.current });

    useResize(() => {
        onPause();
        changeSize();
        onPlay();
    });

    useImperativeHandle(ref, () => {
        return {
            next() {
                onPause();
                next();
                onPlay();
            },
            prev() {
                onPause();
                prev();
                onPlay();
            },
            slideTo(to:number, swiping?:boolean) {
                onPause();
                slideTo({ step: to - current, swiping });
                onPlay();
            }
        }
    });

    return (
        <div
            ref={root}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchCancel={onTouchEnd}
            onTouchEnd={onTouchEnd}
            style={props.style}
            className={`${styles['lumu-swipe']}`}>
            <div
                ref={swipeRef}
                style={wrappStyle}
                className={`${styles['lumu-swipe__container']} ${vertical ? styles['lumu-swipe__vertical'] : ''}`}>
                {
                    React.Children.map(props.children, (child, index) => {
                        if (!React.isValidElement(child)) return null;
                        if (child.type !== SwipeItem) return null;
                        return React.cloneElement(child, {
                            style: itemStyle,
                            vertical: vertical,
                            ref: setRefs(index)
                        })
                    })
                }
            </div>
            {
                showIndicators && <SwipeDots current={current} vertical={vertical} count={count}/>
            }
        </div>
    )
});

Swipe.displayName = 'LumuSwipe';