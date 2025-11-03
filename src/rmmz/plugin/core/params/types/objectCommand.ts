import type { PrimitiveStructParams } from "./objectStruct";
import type { StructParam } from "./paramUnion";

export interface PluginCommandType<T extends object> {
  command: string;
  desc?: string;
  text?: string;
  args: PrimitiveStructParams<T>;
}

export interface PluginCommand<T extends object> {
  command: string;
  desc?: string;
  text?: string;
  args: {
    [K in keyof T]: StructParam;
  };
}
