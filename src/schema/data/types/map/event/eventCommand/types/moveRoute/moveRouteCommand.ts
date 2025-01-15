import type { AudioFileParams } from "../audioFileParams";
import type * as $ from "./code";
import type { CommandTableTamplate } from "../template/commandTableTemplate";

type MoveCodeTable = typeof $;
export type EventCode = MoveCodeTable[keyof MoveCodeTable];

type Table = CommandTableTamplate<
  MoveCodeTable,
  { p: unknown[]; code: MoveCodeTable },
  "code",
  "p",
  {
    ROUTE_END: [];
    ROUTE_JUMP: [x: number, y: number];
    ROUTE_PLAY_SE: [se: AudioFileParams];
    ROUTE_SCRIPT: [script: string];
  }
>;
export type MoveRouteCommand = Table["table"];
export type MoveRouteCode = Table["codeType"];
export type Command = Table["commandType"];
type CodeKeys = Table["codeKeys"];
const a: MoveRouteCode = 0;
const key: CodeKeys = "ROUTE_END";
