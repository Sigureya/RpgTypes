import type { ExtractCommandByParam } from "./commands/extractType";
import type { EventCommandLike2 } from "./frame";

export type CommandUnion_TextBody = EventCommandLike2<
  | 108 // comment
  | 408 // comment
  | 355 // script
  | 655 // script
  | 401 // show message
  | 405, // show scroll
  [comment: string]
>;

export type CommandUnion_EmptyParam = ExtractCommandByParam<[]>;
