import { SystemTexts } from '../../../../../rmmz';
import { ExtractedSystemTextItem, SystemKinds } from './types';
export declare const convertSystemTypes: <UUID>(system: SystemTexts, filename: string, kinds: SystemKinds, uuidGen: (text: string) => UUID) => ExtractedSystemTextItem<UUID>[];
