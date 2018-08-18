
import React from "react";
import ReactDOM from "react-dom";

const Parent = (props) => {
    const style = { 'background-color': 'red' };
    return (
        <div style={style}>
            <h1>Hello  {props.children}</h1>
        </div>
    );
};

const Index = () => {
    return (
        <Parent>
            World!
        </Parent>
    );
};

ReactDOM.render(<Index />, document.getElementById("app"));

