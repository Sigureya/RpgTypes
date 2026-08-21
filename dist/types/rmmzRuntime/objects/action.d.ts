import { Rmmz_Action } from './core';
export interface Rmmz_Action_Constructor {
    new <T>(subject: T): Rmmz_Action<T>;
    prototype: Rmmz_Action<unknown>;
}
declare global {
    var Game_Action: Rmmz_Action_Constructor;
}
