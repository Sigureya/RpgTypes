import { Command_SetEventLocationDirect, Command_SetEventLocationExchange, Command_SetEventLocationVariable, ParamObject_SetEventLocationDirect, ParamObject_SetEventLocationExchange, ParamObject_SetEventLocationVariable } from './types';
export declare const makeCommandSetEventLocationDirect: (param: ParamObject_SetEventLocationDirect, indent?: number) => Command_SetEventLocationDirect;
export declare const makeCommandSetEventLocationVariable: (param: ParamObject_SetEventLocationVariable, indent?: number) => Command_SetEventLocationVariable;
export declare const makeCommandSetEventLocationExchange: (param: ParamObject_SetEventLocationExchange, indent?: number) => Command_SetEventLocationExchange;
