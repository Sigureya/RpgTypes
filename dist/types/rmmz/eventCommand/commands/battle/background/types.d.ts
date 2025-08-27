import { EventCommandLike2 } from '../../../frame';
export interface Command_ChangeBattleBackground extends EventCommandLike2<283> {
    parameters: [background1: string, background2: string];
}
