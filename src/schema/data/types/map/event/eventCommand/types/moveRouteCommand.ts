import type { AudioFileParams } from "./audioFileParams";
import type * as $ from "./moveRoute/code";
import type { CommandTableTamplate } from "./template/commandTableTemplate";

type MoveCodeTable = typeof $;
export type EventCode = MoveCodeTable[keyof MoveCodeTable];

interface CCCC {
  p: unknown[];
  code2: EventCode;
  indent: number;
}

type Table = CommandTableTamplate<
  MoveCodeTable,
  CCCC,
  "code2",
  "p",
  {
    ROUTE_END: [];
    ROUTE_JUMP: [x: number, y: number];
    ROUTE_PLAY_SE: [se: AudioFileParams];
    ROUTE_SCRIPT: [script: string];
  }
>;
export type MoveRouteCommand = Table["commandType"];
export type MoveRouteCode = Table["codeType"];
export type CommandTable = Table["commandTable"];
type CodeKeys = Table["codeKeys"];
const a: MoveRouteCode = 0;
const key: CodeKeys = "ROUTE_END";
function func(aaa: CommandTable["ROUTE_JUMP"]) {
  //  aaa.code2;
}
