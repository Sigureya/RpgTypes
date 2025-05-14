import { EventCommandLike } from './eventComandLike';
import { EventCode } from './eventCommand';
import { CommandParamaterType } from './metaTypes';
export declare const createEventCommand: <Code extends EventCode, Param extends CommandParamaterType<Code>>(code: Code, param: Param, indent?: number) => EventCommandLike<Code, Param>;
