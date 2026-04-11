import { Command_PluginCommandMZ, Data_CommonEvent, Data_Map, Data_Troop, EventCommand, NoteReadResult } from '../../../../../../rmmz';
import { PluginCommandMzParameter } from './pluginCommand';
import { TextCommandParameter } from './union';
export interface GameDataExtractor {
    extractMapTexts(rpgMap: Data_Map): ExtractedMapTexts;
    extractBattleText(troop: Data_Troop): ExtractedBattleEventText[];
    extractCommonEventText(commons: Data_CommonEvent): ExtractedCommonEventText;
}
export interface EventCommandExtractor {
    extractArgs(command: Command_PluginCommandMZ): PluginCommandMzParameter[];
    extractCommandTexts(commands: ReadonlyArray<EventCommand>): TextCommandParameter[];
    pluginCommandKeys(): string[];
}
export interface ExtractedBattleEventText<T extends PluginCommandMzParameter = PluginCommandMzParameter> {
    eventId: number;
    commands: (TextCommandParameter | T)[];
    pageIndex: number;
}
export interface ExtractedCommonEventText<T extends PluginCommandMzParameter = PluginCommandMzParameter> {
    eventId: number;
    commands: (TextCommandParameter | T)[];
}
export interface ExtractedMapTexts<T extends PluginCommandMzParameter = PluginCommandMzParameter> {
    events: ExtractedMapEventTexts<T>[];
    note: string;
    noteItems: NoteReadResult[];
    displayedName: string;
}
export interface ExtractedMapEventTexts<T extends PluginCommandMzParameter = PluginCommandMzParameter> {
    eventId: number;
    name: string;
    pageIndex: number;
    commands: (TextCommandParameter | T)[];
    note: string;
    noteItems: NoteReadResult[];
}
