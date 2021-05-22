import styled from "styled-components";
import { typeScale } from "../../utils";
import { modifiersStyle } from "./modifiers";

export const Button = styled.button<{ modifiers?: string | Array<string> }>`
    padding: 8px 12px;
    font-size: ${typeScale.paragraph};
    min-width: 100px;
    border-radius: 100px;
    cursor: pointer;
    transition: background-color 0.2s linear, color 0.2s linear;

    &:hover {
        background-color: ${(props) => props.theme.primaryColorHover};
    }
    &:active {
        background-color: ${(props) => props.theme.primaryColorActive};
    }
    &:focus {
        background-color: ${(props) => props.theme.primaryColorFocus};
    }
    &:disabled {
        background-color: ${(props) => props.theme.primaryColorDisabled};
        cursor: not-allowed;
    }
`;

export const PrimaryButton = styled(Button)`
    background: ${(props) => props.theme.primaryColor};
    border: none;
    color: ${(props) => props.theme.textColorInverted};
    ${modifiersStyle}
`;

export const SecondaryButton = styled(Button)`
    background: none;
    border: 4px solid ${(props) => props.theme.secondaryColorBorder};
    padding: 6px 8px;
    color: ${(props) => props.theme.secondaryColor};
    &:hover {
        color: ${(props) => props.theme.textColorInverted};
        background-color: ${(props) => props.theme.secondaryColorBorder};
    }
    &:active {
        border: 4px solid ${(props) => props.theme.secondaryColorActiveBorder};
        background-color: ${(props) => props.theme.secondaryColorActiveBorder};
    }
    &:focus {
        color: ${(props) => props.theme.textColorInverted};
        border: 4px solid ${(props) => props.theme.secondaryColorFocusBorder};
        background-color: ${(props) => props.theme.secondaryColorFocusBorder};
    }
    &:disabled {
        color: ${(props) => props.theme.textColorInverted};
        border-color: ${(props) => props.theme.secondaryColorDisabledBorder};
        cursor: not-allowed;
        background-color: ${(props) => props.theme.secondaryColorDisabledBorder};
    }
    ${modifiersStyle}
`;
export const TertiaryButton = styled(Button)`
    background: ${(props) => props.theme.tertiaryColor};
    border: none;
    color: ${(props) => props.theme.textColorInverted};

    &:hover {
        background-color: ${(props) => props.theme.tertiaryColorHover};
    }
    &:active {
        background-color: ${(props) => props.theme.tertiaryColorActive};
        color: ${(props) => props.theme.textColor};
    }
    &:focus {
        background-color: ${(props) => props.theme.tertiaryColorActive};
        color: ${(props) => props.theme.textColor};
    }
    &:disabled {
        background-color: ${(props) => props.theme.tertiaryColorDisabled};
        cursor: not-allowed;
    }
    ${modifiersStyle}
`;
