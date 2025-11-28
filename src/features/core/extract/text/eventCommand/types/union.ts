import type { PluginCommandMzParameter } from "./pluginCommand";
import type {
  GenericCommandParameter,
  MessageCommandParameter,
} from "./rmmzCommands";

export type TextCommandParameter =
  | GenericCommandParameter
  | MessageCommandParameter
  | PluginCommandMzParameter;
