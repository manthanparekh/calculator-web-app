import Calc, { CalcInput, InputType, Operation, OperationType, } from './calc';

test('generates operations', () => {
    const inputs: Array<CalcInput> = [
        { type: InputType.Numerical, value: 1 },
        { type: InputType.Numerical, value: 2 },
        { type: InputType.Operator, operator: OperationType.Add },
        { type: InputType.Numerical, value: 3 },
        { type: InputType.Operator, operator: OperationType.Equals },
    ];

    const operations: Array<Operation> = [
        { operator: OperationType.Add, value: 12 },
        { operator: OperationType.Add, value: 3 },
        { operator: OperationType.Equals, value: 0 },
    ];
    
    expect(Calc.getOperationsBuilder(inputs).operations).toEqual(operations);
});

test('has displayValue  of 0 with n o inputs', () => {
    const inputs: Array<CalcInput> = [ ];
    const state = Calc.getState(inputs);
    expect(state.displayValue).toEqual(0);
});

test('derive displayValue upon new numerical input', () => {
    const inputs: Array<CalcInput> = [
        { type: InputType.Numerical, value: 1 },
        { type: InputType.Numerical, value: 2 },
        { type: InputType.Operator, operator: OperationType.Add },
        { type: InputType.Numerical, value: 3 },
    ];
    const state = Calc.getState(inputs);
    expect(state.displayValue).toEqual(3);
});

test('derive final state', () => {
    const inputs: Array<CalcInput> = [
        { type: InputType.Numerical, value: 1 },
        { type: InputType.Numerical, value: 2 },
        { type: InputType.Operator, operator: OperationType.Add },
        { type: InputType.Numerical, value: 3 },
        { type: InputType.Operator, operator: OperationType.Equals },
    ];
    const state = Calc.getState(inputs);
    expect(state.displayValue).toEqual(15);
});