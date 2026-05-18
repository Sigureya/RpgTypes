import { ExtractedTextItem } from '../../../../../../libs';
import { CommandCodeFormat, ExtractedPluginCommandItem } from './extracted';
import { TextPluginCommandParameter } from './pluginCommand';
import { GenericCommandParameter, MessageCommandParameter } from './rmmzCommands';
export type TextCommandParameter = GenericCommandParameter | MessageCommandParameter | TextPluginCommandParameter;
export type ExtractedCommandItem<UUID, Other extends string[] = string[]> = ExtractedTextItem<UUID, CommandCodeFormat, Other> | ExtractedPluginCommandItem<UUID>;
export type ExtractedTroopTextItem<UUID> = ExtractedCommandItem<UUID, [`page:${number}`]> | ExtractedPluginCommandItem<UUID>;
