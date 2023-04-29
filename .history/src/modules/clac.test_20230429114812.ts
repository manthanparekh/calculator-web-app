import Calc, { CalcInput, InputType, Operation, OperatorType, } from './calc';

test('generates operations', () => {
    const inputs: Array<CalcInput> = [
        { type: InputType.Numerical, value: 1 },
        { type: InputType.Numerical, value: 2 },
        { type: InputType.Operator, operation: OperationType.Add },
        { type: InputType.Numerical, value: 3 },
        { type: InputType.Operator, operation: OperationType.Equals },
    ];

    const operations: Array<Operation> = [
        { operator: OperationType.Add, value: 12 },
        { operator: OperationType.Add, value: 3 },
        { operator: OperationType.Equals, value: 0 },
    ];
    
    expect(Calc.getOperations(inputs)).toEqual(operations);
});


test('derive state', () => {
    const inputs: Array<CalcInput> = [
        { type: InputType.Numerical, value: 1 },
        { type: InputType.Numerical, value: 2 },
        { type: InputType.Operator, operation: OperationType.Add },
        { type: InputType.Numerical, value: 3 },
        { type: InputType.Operator, operation: OperationType.Equals },
    ];
    const state = Calc.getState(inputs);
    expect(state.displayValue).toEqual(15);
});