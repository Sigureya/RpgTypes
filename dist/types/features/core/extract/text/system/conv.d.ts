import { Data_System } from '../../../../../rmmz';
import { ExtractedSystemTextItem, ExtractedTextItemG, KindHandlers, SystemKinds } from '../../sss/types';
import { ExtractedSystemTexts } from './system';
export declare const convertSystemTexts: <UUID>(system: Data_System, filename: string, uuidGen: (text: string) => UUID, kinds: SystemKinds, handlers?: KindHandlers) => ExtractedSystemTextItem<UUID>[];
export declare const convertSystemTypes: <UUID>(system: ExtractedSystemTexts, filename: string, kinds: SystemKinds, uuidGen: (text: string) => UUID) => ExtractedTextItemG<UUID, keyof SystemKinds>[];
