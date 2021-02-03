import React, { useRef } from 'react';
import LumuSwipe from '@lumu/swipe'
import { SwipeRef } from '../../dist/Swipe';

const Api = () => {
    const swipeRef = useRef<SwipeRef>(null);

    const next = () => {
        swipeRef.current?.next();
    }

    const prev = () => {
        swipeRef.current?.prev();
    }

    const slideTo = () => {
        swipeRef.current?.slideTo(1);
    }

    return (
        <React.Fragment>
            <div className="title">接口操作</div>
            <LumuSwipe ref={swipeRef} autoplay={0}>
                <LumuSwipe.Item key={1}>
                    <div className="block red">1</div>
                </LumuSwipe.Item>
                <LumuSwipe.Item key={2}>
                    <div className="block blue">2</div>
                </LumuSwipe.Item>
                <LumuSwipe.Item key={3}>
                    <div className="block green">3</div>
                </LumuSwipe.Item>
            </LumuSwipe>
            <div className="desc">
                <button onClick={prev}>上一个</button>
                <button onClick={next}>下一个</button>
                <button onClick={slideTo}>指定跳到索引1</button>
            </div>
        </React.Fragment>
    )
}

export default Api;