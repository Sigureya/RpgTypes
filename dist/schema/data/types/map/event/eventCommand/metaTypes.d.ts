import { EventCommand } from './eventCommand';
export type PickCommandByParam<P extends unknown[]> = Extract<EventCommand, {
    parameters: P;
}>;
