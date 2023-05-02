import React, { useState } from 'react';
import styled from 'styled-components';
import Button, {ButtonType} from './Button';
import { Calc , CalcInput } from '../modules/calc';


const Container = styled.div``;

const Grid = styled.div`
    display: grid;
    grid-gap: 17px;
    grid-template-columns: repeat(5, 80px);
    grid-template-rows: 120px repeat(5, 80px);  
`;

const Display = styled.div`
    background: #fff;
    border-radius: 8px;
    fond-size: 48px;
    grid-column-end: span 4;
    padding: 30px 24px;
    text-align: right;
`;

const Calculator: React.FC<{}> = () => {
    const [inputs, setInputs] = useState<Array<CalcInput>>([]);
    const state = Calc.getState(inputs);
    return (
        <Container>
            <Grid>
                <Display>{state.displayValue}</Display>
                <Button label="AC" position={[0, 1]} />
                <Button label="Undo" position={[1, 1]} width={2} />
                <Button label="/" position={[3, 1]} />
                <Button label="x" position={[3, 2]} />
                <Button label="-" position={[3, 3]} />
                <Button label="+" position={[3, 4]} />
                <Button label="=" position={[3, 5]} />
                <Button buttonType={ButtonType.Number} label="9" position={[2, 2]} />
                <Button buttonType={ButtonType.Number} label="8" position={[1, 2]} />
                <Button buttonType={ButtonType.Number} label="7" position={[0, 2]} />
                <Button buttonType={ButtonType.Number} label="6" position={[2, 3]} />
                <Button buttonType={ButtonType.Number} label="5" position={[1, 3]} />
                <Button buttonType={ButtonType.Number} label="4" position={[0, 3]} />
                <Button buttonType={ButtonType.Number} label="3" position={[2, 4]} />
                <Button buttonType={ButtonType.Number} label="2" position={[1, 4]} />
                <Button buttonType={ButtonType.Number} label="1" position={[0, 4]} />
                <Button buttonType={ButtonType.Number} label="0" position={[0, 5]} width={3} />
            </Grid>
        </Container>
    );
/*
    function newFunction(): [any] {
        return useState <Array<CalcInput>([]);
    }
*/
};
export default Calculator;
