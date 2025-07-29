import type { EventCommand } from "@RpgTypes/rmmz";
import type { GroopMapper } from "./commandGroup";
import type {
  CallBackFunc,
  BasicMappingObject,
} from "./types/basicCommandsMapper";

export interface MappingObject<T>
  extends BasicMappingObject<T>,
    GroopMapper<T> {}

export interface PartialMappingObject<T> extends Partial<MappingObject<T>> {
  other: CallBackFunc<EventCommand, T>;
}
