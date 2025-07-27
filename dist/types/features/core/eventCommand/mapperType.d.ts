import { EventCommand } from '@sigureya/rpgtypes';
import { GroopMapper } from './commandGroup';
import { CallBackFunc, BasicMappingObject } from './types/basicCommandsMapper';
export interface MappingObject<T> extends BasicMappingObject<T>, GroopMapper<T> {
}
export interface PartialMappingObject<T> extends Partial<MappingObject<T>> {
    other: CallBackFunc<EventCommand, T>;
}
