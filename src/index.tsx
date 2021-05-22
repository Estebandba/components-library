import React, { useState } from "react";
import ReactDOM from "react-dom";
import {ThemeProvider} from "styled-components";
import { SignUpModal} from './components';
import { GlobalStyle, darkTheme, defaultTheme } from "./utils";
import {ChangeTheme, ModalButton, Container} from './styles';

const App = ()=> {
    const[useDarkTheme, setDarkTheme] = useState(false);
    const[showModal, setShowModal] = useState(false);

    return (
        <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
            <ChangeTheme onClick={()=> setDarkTheme(!useDarkTheme)}> {useDarkTheme ? "Set Light Theme" : "Set Dark Theme"}</ChangeTheme>
            <ModalButton onClick={()=> setShowModal(!showModal)}> Toggle modal</ModalButton>
            <Container>
                <SignUpModal showModal={showModal} setShowModal={setShowModal}/>
            </Container>
            <GlobalStyle/>
        </ThemeProvider>
    )
};

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById("root")
);