import { SystemTexts } from '../../../../../rmmz';
import { ExtractedSystemKinds, SystemKinds } from './types';
export declare const convertSystemTypes: <UUID>(system: SystemTexts, filename: string, kinds: SystemKinds, uuidGen: (text: string) => UUID) => ExtractedSystemKinds<UUID>[];
