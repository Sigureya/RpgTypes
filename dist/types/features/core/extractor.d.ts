import { PluginMinimumSchema } from '@sigureya/rmmz-plugin-schema';
import { CommandMapKey, CommandArgExtractors } from '@sigureya/rmmz-plugin-schema/features';
import { GameDataExtractor, EventCommandExtractor } from './extract/text/eventCommand';
export declare const createTextDataExtractorFromCommandItems: (commands: ReadonlyArray<[CommandMapKey, CommandArgExtractors]>) => GameDataExtractor;
export declare const createTextDataExtractor: () => GameDataExtractor;
export declare const createTextDataExtractorFromSchemas: (schemas: ReadonlyArray<PluginMinimumSchema>) => GameDataExtractor & EventCommandExtractor;
