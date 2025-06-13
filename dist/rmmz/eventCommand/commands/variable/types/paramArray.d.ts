import { ValueOf } from '../../../../../libs/templates/valueOf';
import { STATUS } from './actor/dataSource';
import { CHARACTER } from './character/dataSource';
import { VARIABLE_SRC_LAST } from './last/dataSource';
import { GAMEDATA, OPERAND, OTHER } from './operand';
type Header = [startId: number, endId: number, operationType: number];
type Operand<Code extends number, Params extends unknown[]> = [
    ...Header,
    operand: Code,
    ...Params
];
export type Operand_Constatant = Operand<OPERAND["CONSTANT"], [value: number]>;
export type Operand_Variable = Operand<OPERAND["VARIABLE"], [
    variableId: number
]>;
export type Operand_Random = Operand<OPERAND["RANDOM"], [
    min: number,
    max: number
]>;
export type Operand_Script = Operand<OPERAND["SCRIPT"], [code: string]>;
type OperandGamedata<DataType extends number, Params extends unknown[]> = Operand<OPERAND["GAMEDATA"], [type: DataType, ...Params]>;
export type Operand_ItemData = OperandGamedata<GAMEDATA["ITEM"] | GAMEDATA["WEAPON"] | GAMEDATA["ARMOR"], [
    itemId: number
]>;
export type Operand_ActorStatus = OperandGamedata<GAMEDATA["ACTOR"], [
    index: number,
    param: ValueOf<typeof STATUS>
]>;
export type Operand_EnemyStatus = OperandGamedata<GAMEDATA["ENEMY"], [
    index: number,
    param: number
]>;
export type Operand_CharacterData = OperandGamedata<GAMEDATA["CHARACTER"], [
    id: number,
    param: ValueOf<typeof CHARACTER>
]>;
export type Operand_PartyData = OperandGamedata<GAMEDATA["PARTY"], [
    index: number
]>;
export type Operand_OtherData = OperandGamedata<GAMEDATA["OTHER"], [
    param: ValueOf<OTHER>
]>;
export type Operand_LastData = OperandGamedata<GAMEDATA["LAST"], [
    param: ValueOf<typeof VARIABLE_SRC_LAST>
]>;
export type ParamArray_ControlVariables = Operand_Constatant | Operand_Variable | Operand_Random | Operand_Script | Operand_ActorStatus | Operand_ItemData | Operand_CharacterData | Operand_PartyData | Operand_OtherData | Operand_LastData | Operand_EnemyStatus;
export {};
