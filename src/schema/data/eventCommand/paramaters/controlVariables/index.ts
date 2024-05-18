import type { ValueOf } from "src/types/types";
import type {
  CHARACTER,
  GAMEDATA,
  LAST,
  OPERAND,
  OTHER,
  STATUS,
} from "./constants";

type Header = [startId: number, endId: number, operationType: number];

type OperandConstant = [operand: typeof OPERAND.CONSTANT, value: number];
type OperandVariable = [operand: typeof OPERAND.VARIABLE, variableId: number];
type OperandRandom = [operand: typeof OPERAND.RANDOM, min: number, max: number];
type OperandScript = [operand: typeof OPERAND.SCRIPT, code: string];

type OperandGamedataHeader = [operand: typeof OPERAND.GAMEDATA];

type ItemData = [
  type: typeof GAMEDATA.ITEM | typeof GAMEDATA.WEAPON | typeof GAMEDATA.ARMOR,
  itemId: number
];
type StatusData = [
  type: typeof GAMEDATA.ACTOR | typeof GAMEDATA.ENEMY,
  index: number,
  param: ValueOf<typeof STATUS>
];
type CharacterData = [
  type: typeof GAMEDATA.CHARACTER,
  id: number,
  param: ValueOf<typeof CHARACTER>
];
type PartyData = [type: typeof GAMEDATA.PARTY, index: number];
type OtherData = [type: typeof GAMEDATA.OTHER, param: ValueOf<typeof OTHER>];
type LastData = [type: typeof GAMEDATA.LAST, param: ValueOf<typeof LAST>];

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
