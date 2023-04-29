export enum InputType {
    Numerical,
    Operator,
}

export enum OperationType {
    Add = 'add',
    Subtract = 'subtract',
    Multiply = 'multiply',
    Divide = 'divide',
    Equals = 'equals',
}

export type CalcInput =
    | { type: InputType.Numerical; value: number }
    | { type: InputType.Operator; operator: OperationType };

export type CalcState = {
    displayValue: number;
}

export type Operation = {
    operator: OperationType; 
    value: number;
}

type OperationsBuilder = {
    operations: Operation[]
    working: Operation;
}

const getOperationsBuilder = (inputs: Array<CalcInput>): OperationsBuilder => {
    return inputs.reduce<OperationsBuilder>(
        (builder, input) => {
            switch (input.type) {
                case InputType.Numerical:
                    const prevValue = builder.working?.value || 0;
                    const newValue = prevValue * 10 + input.value;
                    return { ...builder, working: { ...builder.working, value: newValue } };
            
                case InputType.Operator:
                    if (input.operator === OperationType.Equals) {
                        return {
                            operations: [...builder.operations, builder.working, {operator: OperationType.Equals, value: 0}],
                            working: { operator: OperationType.Add, value: 0 },
                        };
                    } else {
                        return {
                            operations: [...builder.operations, builder.working],
                            working: { operator: input.operator, value: 0 },
                        }; 
                    }
            }
        },
        {
            operations: [],
            working: { operator: OperationType.Add, value: 0 },
        } 
    );
};

const getTotal = (operations: Array<Operation>): number =>
    operations.reduce<number>((sum, operation) => {
        switch (operation.operator) {
            case OperationType.Add:
                return sum + operation.value;
            case OperationType.Subtract:
                return subtract - operation.value;
            case OperationType.Multiply:
                return multiply * operation.value;
            case OperationType.Divide:
                return divide / operation.value;
            case OperationType.Equals:
                return 
    });

const getState = (inputs: Array<CalcInput>): CalcState => {
    const builder = getOperationsBuilder(inputs); 
    const { operations } = builder; 
    const lastOperation = operations.length ? operations[operations.length - 1] : null;
    if (!lastOperation) return { displayValue: 0 }

    switch (lastOperation.operator) {
        case OperationType.Equals: 
            const total = operations.reduce<number>((sum, operation) => sum + operation.value, 0);
            return { displayValue: getTotal(operations) };
        default:
            return { displayValue: builder.working.value} 
    }
};

const Calc = {
    getOperationsBuilder,
    getState,
}

export default Calc;