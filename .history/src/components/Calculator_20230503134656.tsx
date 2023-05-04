import React, { useState } from 'react';
import styled from 'styled-components';
import Button, {ButtonType} from './Button';
import Calc, { CalcInput, InputType, OperatorType } from '../modules/calc';


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
    console.log(inputs);

    const appendInput = (input: CalcInput): void => {
        setInputs((prev) => [...prev, input]);
    }

    const handelNumerical = (value: number) => () =>
        appendInput({ type: InputType.Numerical, value });
    
    const handelOperator = (operator: OperatorType) => () =>
        appendInput({ type: InputType.Operator, operator }); 

    return (
        <Container>
            <Grid>
                <Display>{state.displayValue}</Display>
                <Button label="AC" position={[0, 1]} />
                <Button label="Undo" position={[1, 1]} width={2} />
                <Button label="/" position={[3, 1]} onClick={handelOperator(OperatorType.Divide)} />
                <Button label="x" position={[3, 2]} onClick={handelOperator(OperatorType.Multiply)}/>
                <Button label="-" position={[3, 3]} onClick={handelOperator(OperatorType.Subtract)}/>
                <Button label="+" position={[3, 4]} onClick={handelOperator(OperatorType.Add)}/>
                <Button label="=" position={[3, 5]} onClick={handelOperator(OperatorType.Equals)} />
                <Button buttonType={ButtonType.Number} label="9" position={[2, 2]} onClick={handelNumerical(9)} />
                <Button buttonType={ButtonType.Number} label="8" position={[1, 2]} onClick={handelNumerical(8)}/>
                <Button buttonType={ButtonType.Number} label="7" position={[0, 2]} onClick={handelNumerical(7)}/>
                <Button buttonType={ButtonType.Number} label="6" position={[2, 3]} onClick={handelNumerical(6)}/>
                <Button buttonType={ButtonType.Number} label="5" position={[1, 3]} onClick={handelNumerical(5)}/>
                <Button buttonType={ButtonType.Number} label="4" position={[0, 3]} onClick={handelNumerical(4)}/>
                <Button buttonType={ButtonType.Number} label="3" position={[2, 4]} onClick={handelNumerical(3)}/>
                <Button buttonType={ButtonType.Number} label="2" position={[1, 4]} onClick={handelNumerical(2)}/>
                <Button buttonType={ButtonType.Number} label="1" position={[0, 4]} onClick={handelNumerical(1)}/>
                <Button buttonType={ButtonType.Number} label="0" position={[0, 5]} width={3} onClick={handelNumerical(0)}/>
            </Grid>
        </Container>
    );
};
export default Calculator;
