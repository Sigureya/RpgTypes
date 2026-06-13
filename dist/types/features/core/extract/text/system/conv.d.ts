import { ExtractedSystemTexts } from '../../../../../rmmz';
import { ExtractedSystemKinds, SystemKinds } from './types';
export declare const convertSystemTypes: <UUID>(system: ExtractedSystemTexts, filename: string, kinds: SystemKinds, uuidGen: (text: string) => UUID) => ExtractedSystemKinds<UUID>[];
