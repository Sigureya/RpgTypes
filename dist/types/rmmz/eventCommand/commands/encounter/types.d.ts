import { ValueOf } from '../../../../libs/templates/valueOf';
import { Toggle } from '../../../rpg';
import { EventCommandLike2 } from '../../frame';
export interface Command_ChangeEncounter extends EventCommandLike2<136> {
    parameters: [value: ValueOf<Toggle>];
}
