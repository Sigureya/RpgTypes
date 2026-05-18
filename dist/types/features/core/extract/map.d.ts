import { ExtractedTextItem } from '../../../libs';
import { MapFileInfo } from '../../../rmmz';
import { TextCommandParameter, GameDataExtractor, ExtractedMapTexts, ExtractedMapEventTexts, ExtractedMapEventNode, MapTerms, ExtractedCommandItem } from './text';
export declare const extractMapTexts: <UUID>(map: MapFileInfo, terms: MapTerms, uuidGen: (text: string) => UUID, commandNameFn: (command: TextCommandParameter) => string, extractor: GameDataExtractor) => ExtractedTextItem<UUID>[];
export declare const convertExtractedMapTextsFomMapFiles: <UUID>(map: MapFileInfo<ExtractedMapTexts>, terms: MapTerms, uuidGen: (text: string) => UUID, commandNameFn: (command: TextCommandParameter) => string) => MapFileInfo<ExtractedTextItem<UUID>[]>;
export declare const convertExtractedMapTexts: <UUID>(map: ExtractedMapTexts, mapInfo: MapFileInfo<unknown>, terms: MapTerms, uuidGen: (text: string) => UUID, commandNameFn: (command: TextCommandParameter) => string) => ExtractedTextItem<UUID>[];
export declare const extractMapEventTexts: <UUID>(event: ExtractedMapEventTexts, mapFileInfo: MapFileInfo<unknown>, uuidGen: (text: string) => UUID, commandNameFn: (command: TextCommandParameter) => string) => [note: ExtractedMapEventNode<UUID>[], commands: ExtractedCommandItem<UUID>[]];
