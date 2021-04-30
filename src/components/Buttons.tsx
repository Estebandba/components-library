import styled from 'styled-components';
import { defaultTheme, typeScale } from "../utils";

export const Button = styled.button`
    padding: 8px 12px;
    font-size: ${typeScale.paragraph};
    min-width: 100px;
    border-radius: 100px;
    cursor: pointer;
    font-family: "Yantramanav";
`;

export const PrimaryButton = styled(Button)`
    background: ${defaultTheme.primaryColor};
    border: none;
    color: white;
`;
export const SecondaryButton = styled(Button)`
    background: white;
    border: 4px solid ${defaultTheme.secondaryColorBorder};
    padding: 6px 8px;
    color: ${defaultTheme.secondaryColor};
`;
export const TertiaryButton = styled(Button)`
    background: ${defaultTheme.tertiaryColor};
    border: none;
    color: white;
`;
