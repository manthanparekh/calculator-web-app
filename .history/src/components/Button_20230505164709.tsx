import React from 'react';
import styled from 'styled-components'

export enum ButtonType {
    Number, 
    Operation 
}

type Props = React.HTMLProps<HTMLDivElement> & {
    buttonType?: ButtonType;
    label: string;
    position?: [x: number, y: number];
    width?: number;
}
const StyledButton = styled.button`
    background: #F0EAD2;
    color: #000;
    border: none;
    border-radius: 8px;
    font-size: 24px;
`;

const Button: React.FC<Props> = ({ buttonType = ButtonType.Operation, label, position, width, onClick }) => {
    const styles: React.CSSProperties = {};
    if (position) {
        styles.gridColumnStart = position[0] + 1;
        styles.gridRowStart = position[1] + 1;
    }

    if (width) {
        styles.gridColumnEnd = `span ${width}`;
    }

    if (buttonType === ButtonType.Number) {
        styles.color = '#000';
        styles.background = '#ADC178';
    }
    const newLocal = this;
    return (
        <StyledButton onClick={(onClick) => this.handelClick()} style={styles}>{label}</StyledButton>
    );
    
};

export default Button;
