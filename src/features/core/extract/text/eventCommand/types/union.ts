import type { TextPluginCommandParameter } from "./pluginCommand";
import type {
  GenericCommandParameter,
  MessageCommandParameter,
} from "./rmmzCommands";

export type TextCommandParameter =
  | GenericCommandParameter
  | MessageCommandParameter
  | TextPluginCommandParameter;
