import type { ExtractCommandByParam } from "./commands/extractType";
import type { EventCommandLike } from "./frame";

export type CommandUnion_TextBody = EventCommandLike<
  | 108 // comment
  | 408 // comment
  | 355 // script
  | 655 // script
  | 401 // show message
  | 405, // show scroll
  [comment: string]
>;

export type CommandUnion_EmptyParam = ExtractCommandByParam<[]>;
