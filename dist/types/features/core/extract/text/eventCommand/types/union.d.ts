import { TextPluginCommandParameter } from './pluginCommand';
import { GenericCommandParameter, MessageCommandParameter } from './rmmzCommands';
export type TextCommandParameter = GenericCommandParameter | MessageCommandParameter | TextPluginCommandParameter;
