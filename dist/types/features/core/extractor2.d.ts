import { PluginCommandExtractErrorHandlers, PluginCommandExtractorSource } from '@sigureya/rmmz-plugin-schema';
import { EventContainerExtractor } from './extract/text/eventCommand';
export declare const createTextDataExtractorV2: (source: PluginCommandExtractorSource, errorHandlers: PluginCommandExtractErrorHandlers) => EventContainerExtractor;
