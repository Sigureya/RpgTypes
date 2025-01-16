import type { ValueOf } from "./valueOf";
import type {
  CHARACTER,
  GAMEDATA,
  LAST,
  OPERAND,
  OTHER,
  STATUS,
} from "./operand";
type Header = [startId: number, endId: number, operationType: number];

type OperandConstant = [operand: OPERAND["CONSTANT"], value: number];
type OperandVariable = [operand: OPERAND["VARIABLE"], variableId: number];
type OperandRandom = [operand: OPERAND["RANDOM"], min: number, max: number];
type OperandScript = [operand: OPERAND["SCRIPT"], code: string];

type OperandGamedataHeader = [operand: OPERAND["GAMEDATA"]];

type ItemData = [
  type: GAMEDATA["ITEM"] | GAMEDATA["WEAPON"] | GAMEDATA["ARMOR"],
  itemId: number
];
type StatusData = [
  type: GAMEDATA["ACTOR"] | GAMEDATA["ENEMY"],
  index: number,
  param: ValueOf<STATUS>
];
type CharacterData = [
  type: GAMEDATA["CHARACTER"],
  id: number,
  param: ValueOf<CHARACTER>
];
type PartyData = [type: GAMEDATA["PARTY"], index: number];
type OtherData = [type: GAMEDATA["OTHER"], param: ValueOf<OTHER>];
type LastData = [type: GAMEDATA["LAST"], param: ValueOf<LAST>];

type OperandGamedata = [
  ...OperandGamedataHeader,
  ...(ItemData | StatusData | CharacterData | PartyData | OtherData | LastData)
];

export type ControlVariables = [
  ...Header,
  ...(
    | OperandConstant
    | OperandVariable
    | OperandRandom
    | OperandGamedata
    | OperandScript
  )
];
