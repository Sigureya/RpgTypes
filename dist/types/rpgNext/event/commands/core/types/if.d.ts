import { FunctionArg } from './functions';
export interface NewCommand_If {
    code: "valueIf";
    vvv: string;
    arg: {
        condition: FunctionArg;
        thenValue: FunctionArg;
        elseValue: FunctionArg;
    };
}
