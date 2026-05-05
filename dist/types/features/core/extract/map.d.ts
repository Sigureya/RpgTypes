import { MapFileInfo } from '../../../rmmz';
import { MapTerms, ExtractedMapEventNode, ExtractedCommandItem, ExtractedTextItemG } from './sss/types';
import { TextCommandParameter, GameDataExtractor, ExtractedMapTexts, ExtractedMapEventTexts } from './text';
export declare const extractMapTexts: <UUID>(map: MapFileInfo, terms: MapTerms, uuidGen: (text: string) => UUID, commandNameFn: (command: TextCommandParameter) => string, extractor: GameDataExtractor) => ExtractedTextItemG<UUID>[];
export declare const convertExtractedMapTextsFomMapFiles: <UUID>(map: MapFileInfo<ExtractedMapTexts>, terms: MapTerms, uuidGen: (text: string) => UUID, commandNameFn: (command: TextCommandParameter) => string) => MapFileInfo<ExtractedTextItemG<UUID>[]>;
export declare const convertExtractedMapTexts: <UUID>(map: ExtractedMapTexts, mapInfo: MapFileInfo<unknown>, terms: MapTerms, uuidGen: (text: string) => UUID, commandNameFn: (command: TextCommandParameter) => string) => ExtractedTextItemG<UUID>[];
export declare const extractMapEventTexts: <UUID>(event: ExtractedMapEventTexts, mapFileInfo: MapFileInfo<unknown>, uuidGen: (text: string) => UUID, commandNameFn: (command: TextCommandParameter) => string) => [note: ExtractedMapEventNode<UUID>[], commands: ExtractedCommandItem<UUID>[]];
