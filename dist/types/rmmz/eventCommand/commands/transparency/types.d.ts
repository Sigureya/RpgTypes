import { ValueOf } from '../../../../libs/templates/valueOf';
import { Toggle } from '../../../rpg';
import { EventCommandLike2 } from '../../frame';
export interface Command_ChangeTransparency extends EventCommandLike2<211> {
    parameters: [value: ValueOf<Toggle>];
}
