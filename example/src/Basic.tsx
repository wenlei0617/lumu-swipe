import React from 'react';
import LumuSwipe from '@lumu/swipe'

const Basic = () => {
    return (
        <React.Fragment>
            <div className="title">基础用法</div>
            <LumuSwipe>
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

export default Basic;