import { CHANGE_ENCOUNTER, EventCommandLike } from '../../../../libs/eventCommand';
import { ValueOf } from '../../../../libs/templates/valueOf';
import { Toggle } from '../../../utils';
export interface Command_ChangeEncounter extends EventCommandLike<typeof CHANGE_ENCOUNTER> {
    parameters: [value: ValueOf<Toggle>];
}
