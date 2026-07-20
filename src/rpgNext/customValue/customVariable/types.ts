import type {
  PluginParamEx,
  NumberParam,
  BooleanParam,
} from "@sigureya/rmmz-plugin-schema";

export interface CustomVariables {
  booleans: Record<string, Record<string, boolean>>;
  numbers: Record<string, Record<string, number>>;
}

export interface CustomVariableSchema {
  pluginName: string;
  variables: {
    numbers: PluginParamEx<NumberParam>[];
    booleans: PluginParamEx<BooleanParam>[];
  };
}
