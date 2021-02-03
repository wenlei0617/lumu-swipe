import React, { useState } from 'react';
import LumuSwipe from '@lumu/swipe'

const Change = () => {
    const [current, setCurrent] = useState(0);
    return (
        <React.Fragment>
            <div className="title">监听change事件</div>
            <LumuSwipe onSlideChange={setCurrent}>
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
            <div className="desc">当前索引：{current}</div>
        </React.Fragment>
    )
}

export default Change;