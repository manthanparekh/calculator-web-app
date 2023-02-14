import App from '../App';
export enum InputType {
    Numerical, 
    Operator,
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
    | {
        operator: any; type: InputType.Operator; operation: OperationType 
};

export type CalcState = {
    displayValue: number;
}

export type Operation = {
    operation: OperationType; 
    value: number;
}

type OperationsBuilder = {
    operations: Operation[]
    working: Operation;
}

const getOperation = (inputs: Array<CalcInput>): Array<Operation> => {
    const builder = inputs.reduce<OperationBuilder>(
        (builder, input) => {
        switch (input.type) {
            case InputType.Numerical:
                const prevValue = builder.working?.value || 0;
                const newValue = prevValue * 10 + input.value;
                return { ...builder, working: { value: newValue } };
            
            case InputType.Operator:
                return {
                    operations: [...builder.operations, builder.working],
                    working: {operator: input.operator, value: 0},
                };
        }
        
        
        },
        {
            operations: [],
            working: { operator: OperationType.Add, value: 0 },
        } as OperationsBuilder
    );
    return builder.operations;
}

const getState = (inputs: Array<CalcInput>): CalcState => {
    return { displayValue: 0 };
};

const Calc = {
    getState,
}

export default Calc;
