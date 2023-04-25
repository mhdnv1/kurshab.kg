import React from 'react';
import './advertisement.scss'


const Advertisement = () => {
    return (
        <div className="advertisement">
            <div className="container">
                <div className="advertisement__nav">
                    <div className="advertisement__left">
                        <h3>Title text</h3>
                        <p>advertisement text</p>
                    </div>
                    <div className="advertisement__right">
                        <h3>Title text</h3>
                        <p>advertisement text</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Advertisement;
