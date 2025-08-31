import { ExtractCommandByParam } from './commands/extractType';
import { EventCommandLike2 } from './frame';
export type CommandUnion_TextBody = EventCommandLike2<108 | 408 | 355 | 655 | 401 | 405, // show scroll
[
    comment: string
]>;
export type CommandUnion_EmptyParam = ExtractCommandByParam<[]>;
