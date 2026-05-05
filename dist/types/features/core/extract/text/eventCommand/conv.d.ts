import { ExtractedCommandItem, ExtractedPluginCommandItem } from '../../sss/types';
import { TextCommandParameter } from './types';
export declare const convertCommandInfo: <UUID, Other extends string[]>(command: TextCommandParameter, dataId: number, filename: string, commandNameFn: (command: TextCommandParameter) => string, uuidGenFunc: (text: string) => UUID, otherData: Other) => ExtractedCommandItem<UUID, Other> | ExtractedPluginCommandItem<UUID>;
