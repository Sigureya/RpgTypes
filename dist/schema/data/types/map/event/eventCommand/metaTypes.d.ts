import { EventCommand } from './eventCommand';
export type ExtractCommandByParam<P extends unknown[]> = Extract<EventCommand, {
    parameters: P;
}>;
/**
 * @deprecated Use `ExtractCommandByParam` instead.
 */
export type PickCommandByParam<P extends unknown[]> = ExtractCommandByParam<P>;
