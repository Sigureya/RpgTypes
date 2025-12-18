import { PluginSchema } from '@sigureya/rmmz-plugin-schema';
import { CommandMapKey, CommandArgExtractors } from '@sigureya/rmmz-plugin-schema/features';
import { GameDataExtractor } from './extract/types';
export declare const createTextDataExtractorFromCommandItems: (commands: ReadonlyArray<[CommandMapKey, CommandArgExtractors]>) => GameDataExtractor;
export declare const createTextDataExtractor: () => GameDataExtractor;
/**
 * @deprecated use createTextDataExtractorFromCommandItems instead
 */
export declare const createTextDataExtractorFromSchemas: (schemas: ReadonlyArray<PluginSchema>) => GameDataExtractor;
