export interface RpnCommand_Add {
  rpn: "add";
}

export interface RpnCommand_Subtract {
  rpn: "subtract";
}

export interface RpnCommand_Multiply {
  rpn: "multiply";
}

export interface RpnCommand_Divide {
  rpn: "divide";
}

export interface RpnCommand_Value {
  rpn: "value";
  name: string;
}

export type RpnCommand =
  | RpnCommand_Add
  | RpnCommand_Subtract
  | RpnCommand_Multiply
  | RpnCommand_Divide
  | RpnCommand_Value;
