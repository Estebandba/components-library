import React from "react";
import styled from "styled-components";
import {useSpring, animated, config} from 'react-spring';
import { Illustrations, CloseIcon } from "../assets";
import { typeScale } from "../utils";
import { PrimaryButton } from "./Buttons";

const ModalWrapper = styled.div`
    width: 800px;
    height: 500px;
    box-shadow: 0 5px 16px rgba(0,0,0, 0.2);
    background-color: ${props => props.theme.formElementBackground};
    color: ${props => props.theme.textOnFormElementBackground};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: 2px;
`;

const SignUpHeader = styled.h3`
    font-size: ${typeScale.header3};
`;

const SignUpText = styled.p`
    font-size: ${typeScale.paragraph};
    max-width: 70%;
    text-align: center;
`;

const CloseModalButton = styled.button`
    cursor: pointer;
    background: none;
    border: none;
    position: absolute;
    right: 40px;
    top: 40px;
    width: 24px;
    padding:0px;
`;

const Input = styled.input`
    background-color: ${props => props.theme.inputColor};
`;
const Label = styled.label`
    color: ${props => props.theme.labelInputColor};
`;


interface IModalStates {
    showModal: boolean,
    setShowModal: (value: React.SetStateAction<boolean>) => void
}

export const SignUpModal = ({showModal, setShowModal}: IModalStates)=> {
    const animation = useSpring({
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0)`: `translateY(-200%)`,
        config: config.slow
    })
    return (
        <animated.div style={animation}>
            <ModalWrapper>
                <img src={Illustrations.SignUp} alt="Sign up for an account" aria-hidden="true"/>
                <SignUpHeader> Sign Up</SignUpHeader>
                <SignUpText> Sign up today to get access! </SignUpText>
                <PrimaryButton> Sign Up!</PrimaryButton>
                <CloseModalButton onClick={()=> setShowModal(!showModal) } aria-label="Close-Modal">
                    <CloseIcon />
                </CloseModalButton>
            </ModalWrapper>
        </animated.div>
    )
}
export const SignInModal = ({showModal, setShowModal}: IModalStates)=> {
    const animation = useSpring({
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0)`: `translateY(-200%)`,
        config: config.slow
    })
    return (
        <animated.div style={animation}>
            <ModalWrapper>
                <img src={Illustrations.SignIn} alt="Sign in to your account" aria-hidden="true"/>
                <Label htmlFor="username"></Label>
                <Input type="text" name="username"> Username </Input>
                <Label htmlFor="password"></Label>
                <Input type="text"name="password">Password</Input>
                <PrimaryButton> Sign In!</PrimaryButton>
                <CloseModalButton onClick={()=> setShowModal(!showModal) } aria-label="Close-Modal">
                    <CloseIcon />
                </CloseModalButton>
            </ModalWrapper>
        </animated.div>
    )
}
