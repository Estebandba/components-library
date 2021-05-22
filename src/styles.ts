import styled from "styled-components";
import { defaultTheme, darkTheme } from "./utils";


export const ChangeTheme = styled.button`
    cursor: pointer;
    padding: 8px;
    background: none;
    color: grey;
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width:100vw;
    height:100vh;
    background-color: ${props => props.theme.themeName === 'darkTheme' ? defaultTheme.primaryColor : darkTheme.primaryColor  };
`;
export const ModalButton = styled(ChangeTheme)`
    cursor: pointer;
    padding: 8px;
    background: none;
    color: grey;
`;