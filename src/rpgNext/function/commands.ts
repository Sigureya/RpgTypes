export interface CalculateCommand {
  commandName: string;
  valueKind: string;
  arg: {};
}

interface Command_LiteralValue {
  commandName: "literalValue";
  valueKind: "number";
  valiableName: string;
  arg: {
    value: number;
  };
}

export interface CalculateState {
  variables: Record<string, number>;
}

export type LocalVariables = Record<string, number>;

export const literalValue = (
  command: Command_LiteralValue,
  state: LocalVariables
): LocalVariables => {
  return {
    ...state,
    [command.valiableName]: command.arg.value,
  };
};
