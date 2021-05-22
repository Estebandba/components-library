import React from "react";
import {useSpring, animated, config} from 'react-spring';
import { Illustrations, CloseIcon } from "../../assets";
import { PrimaryButton } from "../Buttons";
import {ModalWrapper, SignUpHeader, SignUpText, CloseModalButton, Label, Input} from './styles';

interface IModalStates {
    showModal: boolean,
    setShowModal: (value: React.SetStateAction<boolean>) => void
}

export const SignUpModal = ({showModal, setShowModal}: IModalStates): JSX.Element => {
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
export const SignInModal = ({showModal, setShowModal}: IModalStates): JSX.Element=> {
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
                <Input type="text" name="username" value="Username" />
                <Label htmlFor="password"></Label>
                <Input type="text"name="password" value="Password"/>
                <PrimaryButton> Sign In!</PrimaryButton>
                <CloseModalButton onClick={()=> setShowModal(!showModal) } aria-label="Close-Modal">
                    <CloseIcon />
                </CloseModalButton>
            </ModalWrapper>
        </animated.div>
    )
}
