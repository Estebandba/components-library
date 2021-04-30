import React from "react";
import ReactDOM from "react-dom";
import {PrimaryButton, SecondaryButton, TertiaryButton } from './components/Buttons';
import { GlobalStyle } from "./utils";

const App = ()=> (
    <>
        <PrimaryButton> Click </PrimaryButton>
        <SecondaryButton> Click </SecondaryButton>
        <TertiaryButton> Click </TertiaryButton>
        <GlobalStyle/>
    </>
);

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById("root")
);