import { ValueOf } from '../../../../libs/templates/valueOf';
import { Toggle } from '../../../rpg';
import { EventCommandLike } from '../../frame';
export interface Command_ChangeEncounter extends EventCommandLike<136> {
    parameters: [value: ValueOf<Toggle>];
}
