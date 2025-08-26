import type { Argment } from "../core/types/argment";

export interface NewCommand_LocalNumberLiteral {
  code: "localNumber";
  //  name: string;
  vvv: string;
  arg: {
    value: number;
  };
}

export interface NewCommand_LocalString {
  code: "localString";
  name: string;
  uuid: string;
  arg: {
    value: string;
  };
}

export interface NewCommand_CallNumberFunction {
  code: "callNumberFunction";
  name: string;
  uuid: string;
  arg: {
    functionName: string;
    functionArgs: Argment[];
  };
}
