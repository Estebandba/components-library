import {css} from 'styled-components';
import { typeScale } from "../../utils";
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

export const modifiersStyle = `
    ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;