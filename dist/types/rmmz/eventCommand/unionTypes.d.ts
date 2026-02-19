import { EventCommandLike } from '../../libs/eventCommand';
import { ExtractCommandByParam } from './commands/extractType';
export type CommandUnion_TextBody = EventCommandLike<108 | 408 | 355 | 655 | 401 | 405, // show scroll
[
    comment: string
]>;
export type CommandUnion_EmptyParam = ExtractCommandByParam<[]>;
