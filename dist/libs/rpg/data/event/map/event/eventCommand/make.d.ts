import { CommandParamaterType } from '../../../../../../eventCommand';
import { EventCommandLike } from './eventComandLike';
import { EventCode } from './eventCommand';
export declare const createEventCommand: <Code extends EventCode, Param extends CommandParamaterType<Code>>(code: Code, param: Param, indent?: number) => EventCommandLike<Code, Param>;
