

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
    | { operator: any; type: InputType.Operator; operation: OperationType };

export type CalcState = {
    displayValue: number;
}

export type Operation = {
    operator: OperatorType; 
    value: number;
}

type OperationsBuilder = {
    operations: Operation[]
    working: Operation;
}

const getOperations = (inputs: Array<CalcInput>): Array<Operation> => {
    const builder: OperationsBuilder = inputs.reduce<OperationsBuilder>(
        (builder, input) => {
            switch (input.type) {
                case InputType.Numerical:
                    const prevValue = builder.working?.value || 0;
                    const newValue = prevValue * 10 + input.value;
                    return { ...builder, working: { ...builder.working, value: newValue } };
            
                case InputType.Operator:
                    if (input.operator === OperationType.Equals) {
                        return {
                            operations: [...builder.operations, builder.working, {operator: OperatorType.Equals, value: 0}],
                            working: { operator: OperatorType.Add, value: 0 },
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
    return builder.operations;
};

const getState = (inputs: Array<CalcInput>): CalcState => {
    return { displayValue: 0 };
};

const Calc = {
    getOperations,
    getState,
}

export default Calc;
