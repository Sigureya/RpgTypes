import type { FunctionArg } from "./functions";

export interface NewCommand_If {
  code: "valueIf";
  //  name: string;
  vvv: string;
  arg: {
    condition: FunctionArg;
    thenValue: FunctionArg;
    elseValue: FunctionArg;
  };
}
