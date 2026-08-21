import { EventCommandLike, SHOW_CHOICES_CANCEL } from '../../../../../../libs';
export interface Command_ShowChoicesCancel extends EventCommandLike<typeof SHOW_CHOICES_CANCEL> {
    parameters: [cancelType: number];
}
