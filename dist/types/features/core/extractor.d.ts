import { PluginCommandMinimumSchema } from '@sigureya/rmmz-plugin-schema';
import { CommandMapKey, CommandArgExtractors } from '@sigureya/rmmz-plugin-schema/features';
import { GameDataExtractor } from './extract/text/eventCommand';
export declare const createTextDataExtractorFromCommandItems: (commands: ReadonlyArray<[CommandMapKey, CommandArgExtractors]>) => GameDataExtractor;
export declare const createTextDataExtractor: () => GameDataExtractor;
/**
 * @deprecated
 */
export declare const createTextDataExtractorFromSchemas: (schemas: ReadonlyArray<PluginCommandMinimumSchema>) => GameDataExtractor;
