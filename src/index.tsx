import React from "react";
import ReactDOM from "react-dom";

const App = ()=> (
    <h1> My App is here. </h1>
);

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById("root")
);