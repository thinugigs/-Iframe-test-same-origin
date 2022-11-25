import React from 'react';

const Child = () => {

    const clickMe = () => {
        window.parent.parentCallback();
    }

    window.childCallback = function() {
        document.getElementById('divChild').innerText = 'Parent button Clicked'
    }

    return (
        <div>
            <h1>Child</h1>
            <button onClick={clickMe}>Click me to update parent app</button>
            <br/><br/>
            <div id={'divChild'}></div>
        </div>
    )
}

export default Child;
