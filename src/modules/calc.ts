<<<<<<< HEAD
import
=======
export enum InputType {
    Numerical, 
    Operation,
}

export enum OperationType {
    Add,
    Subtract,
    Multiply,
    Divide,
    Equals,
}

export type CalcInput =
    | { type: InputType.Numerical; value: number }
    | { type: InputType.Operation; operation: OperationType };

export type CalcState = {
    displayValue: number;
}

const getState = (inputs: Array<CalcInput>): CalcState => {
    return { displayValue: 0 };
};

const Calc = {
    getState,
}

export default Calc;
>>>>>>> code-update-3
