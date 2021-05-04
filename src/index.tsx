import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled, {ThemeProvider} from "styled-components";
import { SignUpModal} from './components';
import { GlobalStyle, darkTheme, defaultTheme } from "./utils";

const ChangeTheme = styled.button`
    cursor: pointer;
    padding: 8px;
    background: none;
    color: grey;
`;

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width:100vw;
    height:100vh;
    background-color: ${props => props.theme.themeName === 'darkTheme' ? defaultTheme.primaryColor : darkTheme.primaryColor  };
`;
const ModalButton = styled(ChangeTheme)`
    cursor: pointer;
    padding: 8px;
    background: none;
    color: grey;
`;

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