import React from 'react';

const Parent = () => {

    const clickMe = () => {
        const iframe = document.getElementById("iframeId");
        iframe.contentWindow.childCallback();
    }

    window.parentCallback = () => {
        document.getElementById('divParent').innerText = 'Child button Clicked'
    }

    return (
        <div>
            <h1>Parent</h1>
            <button onClick={clickMe}>Click me to update child app</button>
            <br/><br/>
            <iframe id={'iframeId'} src="http://localhost:3000/child"/>
            <br/><br/>
            <div id={'divParent'}></div>
        </div>
    )
}

export default Parent;
