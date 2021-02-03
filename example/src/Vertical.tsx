import React from 'react';
import LumuSwipe from '@lumu/swipe'

const Vertical = () => {
    return (
        <React.Fragment>
            <div className="title">纵向滚动</div>
            <LumuSwipe vertical style={{height: 200}}>
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

export default Vertical;