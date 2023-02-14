import Calc, { CalcInput, InputType, OperationType } from './calc';

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