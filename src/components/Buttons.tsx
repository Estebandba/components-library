import styled, {css} from 'styled-components';
import { typeScale } from "../utils";
import { applyStyleModifiers } from 'styled-components-modifiers';

const BUTTON_MODIFIERS = {
    small: ()=> css`
        font-size: ${typeScale.helperText};
        padding: 8px;
    `,
    large: ()=>css`
        font-size: ${typeScale.header5};
        padding: 16px 24px;
    `,
    warning: ({theme}: any) =>css`
        background-color: ${theme.status.warningColor};
        color: ${theme.textColorInverted};

        &:hover, &:focus {
            background-color: ${theme.status.warningColorHover};
            color: ${theme.textColorInverted};
        }
        &:active {
            background-color: ${theme.status.warningColorActive}
        }
    `,
    SecondaryButtonWarning: ({theme}: any)=>css`
        background: none;
        border: 4px solid ${theme.status.warningColor};
        &:hover, &:focus {
            background-color: ${theme.status.warningColor};
            color: ${theme.textColorInverted};
            border: 4px solid ${theme.status.warningColor};
        }
        &:active {
            border: 4px solid ${theme.status.warningColorActive};            
            background-color: ${theme.status.warningColorActive};
        }
    `,
    error: ({theme}: any)=>css`
        background-color: ${theme.status.errorColor};
        color: ${theme.textColorInverted};

        &:hover, &:focus {
            background-color: ${theme.status.errorColorHover};
            color: ${theme.textColorInverted};
        }
        &:active {
            background-color: ${theme.status.errorColorActive};
        }
    `,
    SecondaryButtonError: ({theme}: any)=>css`
        background: none;
        border: 4px solid ${theme.status.errorColor};
        &:hover, &:focus {
            background-color: ${theme.status.errorColor};
            color: ${theme.textColorInverted};
            border: 4px solid ${theme.status.errorColor};
        }
        &:active {
            border: 4px solid ${theme.status.errorColorActive};            
            background-color: ${theme.status.errorColorActive};
        }
    `,
    success: ({theme}: any)=>css`
        background-color: ${theme.status.successColor};
        color: ${theme.textColorInverted};

        &:hover, &:focus {
            background-color: ${theme.status.successColorHover};
            color: ${theme.textColorInverted};
        }
        &:active {
            background-color: ${theme.status.successColorActive};
        }
    `,
    SecondaryButtonSuccess: ({theme}: any)=>css`
        background: none;
        border: 4px solid ${theme.status.successColor};
        &:hover, &:focus {
            background-color: ${theme.status.successColor};
            color: ${theme.textColorInverted};
            border: 4px solid ${theme.status.successColor};
        }
        &:active {
            border: 4px solid ${theme.status.successColorActive};            
            background-color: ${theme.status.successColorActive};
        }
    `
};

const modifiersStyle = `
    ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;

export const Button = styled.button<{modifiers?:string | Array<string>}>`
    padding: 8px 12px;
    font-size: ${typeScale.paragraph};
    min-width: 100px;
    border-radius: 100px;
    cursor: pointer;
    transition: background-color 0.2s linear, color 0.2s linear;

    &:hover {
        background-color: ${props => props.theme.primaryColorHover};
    }
    &:active {
        background-color: ${props => props.theme.primaryColorActive};
    }
    &:focus {
        background-color: ${props => props.theme.primaryColorFocus};
    }
    &:disabled {
        background-color: ${props => props.theme.primaryColorDisabled};
        cursor: not-allowed;
    }
`;

export const PrimaryButton = styled(Button)`
    background: ${props => props.theme.primaryColor};
    border: none;
    color: ${props => props.theme.textColorInverted};
    ${modifiersStyle}
`;

export const SecondaryButton = styled(Button)`
    background: none;
    border: 4px solid ${props => props.theme.secondaryColorBorder};
    padding: 6px 8px;
    color: ${props => props.theme.secondaryColor};
    &:hover {
        color:${props => props.theme.textColorInverted};
        background-color: ${props => props.theme.secondaryColorBorder};
    }
    &:active {
        border: 4px solid ${props => props.theme.secondaryColorActiveBorder};
        background-color: ${props => props.theme.secondaryColorActiveBorder};
    }
    &:focus {
        color:${props => props.theme.textColorInverted};
        border: 4px solid ${props => props.theme.secondaryColorFocusBorder};
        background-color: ${props => props.theme.secondaryColorFocusBorder};
    }
    &:disabled {
        color: ${props => props.theme.textColorInverted};
        border-color: ${props => props.theme.secondaryColorDisabledBorder};
        cursor: not-allowed;
        background-color: ${props => props.theme.secondaryColorDisabledBorder};
    }
    ${modifiersStyle}
`;
export const TertiaryButton = styled(Button)`
    background: ${props => props.theme.tertiaryColor};
    border: none;
    color: ${props => props.theme.textColorInverted};

    &:hover {
        background-color: ${props => props.theme.tertiaryColorHover};
    }
    &:active {
        background-color: ${props => props.theme.tertiaryColorActive};
        color: ${props => props.theme.textColor};
    }
    &:focus {
        background-color: ${props => props.theme.tertiaryColorActive};
        color: ${props => props.theme.textColor};
    }
    &:disabled {
        background-color: ${props => props.theme.tertiaryColorDisabled};
        cursor: not-allowed;
    }
    ${modifiersStyle}
`;
