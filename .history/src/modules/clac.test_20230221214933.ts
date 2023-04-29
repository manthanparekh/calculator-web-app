import Calc, { CalcInput, InputType, OperationType } from './calc';
import { Operation } from './calc';

test('generates operations', () => {
    const inputs: Array<CalcInput> = [
        { type: InputType.Numerical, value: 1 },
        { type: InputType.Numerical, value: 0 },
        { type: InputType.Operator, operation: OperationType.Add },
        { type: InputType.Numerical, value: 5 },
        { type: InputType.Operator, operation: OperationType.Equals },
    ];

    const operations: Array<Operation> = [
        { operator: OperationType.Add, value: 15 },
        { operator: OperationType.Add, value: 5 },
        { operator: OperationType.Equals, value: 0 },
    ]

    ;
    expect(Calc.getOperations(inputs)).toEqual(operations);
});


test('derive state', () => {
    const inputs: Array<CalcInput> = [
        { type: InputType.Numerical, value: 1 },
        { type: InputType.Numerical, value: 0 },
        { type: InputType.Operator, operation: OperationType.Add },
        { type: InputType.Numerical, value: 5 },
        { type: InputType.Operator, operation: OperationType.Equals },
    ];
    const state = Calc.getState(inputs);
    expect(state.displayValue).toEqual(15);
});