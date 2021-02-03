import React from 'react';
import LumuSwipe from '@lumu/swipe'

const InitialSwipe = () => {
    return (
        <React.Fragment>
            <div className="title">指定索引</div>
            <LumuSwipe autoplay={0} initialSwipe={1}>
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
        </React.Fragment>
    )
}

export default InitialSwipe;