import { MoveRouteMakeExArray } from './moveRoute/types/makeEx';
import { MoveRouteCommand_PlaySE } from './moveRoute/types/paramedCommands';
import { MoveRouteCommandBasic } from './moveRoute/types/union';
import { AudioFileParams } from './types';
export type MoveRouteCommand = MoveRouteCommandBasic | MoveRouteCommand_PlaySE<AudioFileParams>;
export declare const makeMoveCommands: (list: readonly MoveRouteMakeExArray<AudioFileParams>[]) => MoveRouteCommand[];
