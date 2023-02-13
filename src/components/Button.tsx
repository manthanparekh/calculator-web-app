import React from 'react';
import styled from 'styled-components'

export enum ButtonType {
    Number, 
    Operation 
}

type Props = {
    type?: ButtonType;
    label: string;
    position?: [x: number, y: number];
    width?: number;
}
const StyledButton = styled.button`
    background: #F273E6;
    color: #000;
    border: none;
    border-radius: 8px;
    font-size: 24px;
`;

const Button: React.FC<Props> = ({ type = ButtonType.Operation , label, position, width }) => {
    const styles: React.CSSProperties = {};
    if (position) {
        styles.gridColumnStart = position[0] + 1; 
        styles.gridRowStart = position[1] + 1;
    }

    if (width) {
        styles.gridColumnEnd = `span ${width}`;
    }

    if (type === ButtonType.Number) {
        styles.color = '#000';
        styles.background = '#00F5FF';
    }
    return (
        <StyledButton style={styles}>{label}</StyledButton>
    )
}

export default Button;
