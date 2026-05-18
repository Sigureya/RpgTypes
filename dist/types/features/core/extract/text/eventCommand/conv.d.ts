import { ExtractedCommandItem, TextCommandParameter } from './types';
import { ExtractedPluginCommandItem } from './types/extracted';
export declare const convertCommandInfo: <UUID, Other extends string[]>(command: TextCommandParameter, dataId: number, filename: string, commandNameFn: (command: TextCommandParameter) => string, uuidGenFunc: (text: string) => UUID, otherData: Other) => ExtractedCommandItem<UUID, Other> | ExtractedPluginCommandItem<UUID>;
