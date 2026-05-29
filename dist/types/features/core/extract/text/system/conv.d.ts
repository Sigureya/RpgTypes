import { ExtractedSystemKinds, ExtractedSystemTexts, SystemKinds } from './types';
export declare const convertSystemTypes: <UUID>(system: ExtractedSystemTexts, filename: string, kinds: SystemKinds, uuidGen: (text: string) => UUID) => ExtractedSystemKinds<UUID>[];
