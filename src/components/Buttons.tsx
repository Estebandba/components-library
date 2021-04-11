import styled from 'styled-components';

const primaryBlue ='#024EDB';
const primaryGrey ='#4A4B53;';

export const Button = styled.button`
    padding: 8px 12px;
    min-width: 100px;
    border-radius: 100px;
    cursor: pointer;
`;

export const PrimaryButton = styled(Button)`
    background: ${primaryBlue};
    border: none;
    color: white;
    font-size: 1rem;
`;
export const SecondaryButton = styled(Button)`
    background: white;
    border: 4px solid ${primaryBlue};
    padding: 6px 8px;
    font-size: 1rem;
    color: ${primaryBlue};
    box-sizing: border-box;

`;
export const TertiaryButton = styled(Button)`
    background: ${primaryGrey};
    border: none;
    color: white;
    font-size: 1rem;
`;
