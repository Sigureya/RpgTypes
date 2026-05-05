import { SystemKinds, ExtractedTextItemG } from 'dist/types';
import { ExtractedSystemTexts } from './system';
export declare const convertSystemTypes: <UUID>(system: ExtractedSystemTexts, filename: string, kinds: SystemKinds, uuidGen: (text: string) => UUID) => ExtractedTextItemG<UUID, keyof SystemKinds>[];
