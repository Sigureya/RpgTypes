import { EventCommandLike, BATTLE_PROCESSING_IF_WIN, BATTLE_PROCESSING_IF_ESCAPE, BATTLE_PROCESSING_IF_LOSE, BATTLE_PROCESSING_BLOCK_END } from '../../../../../../libs';
export type Command_BattleProcessing_If = Command_BattleProcessing_IfWin | Command_BattleProcessing_IfEscape | Command_BattleProcessing_IfLose;
export interface Command_BattleProcessing_IfWin extends EventCommandLike<typeof BATTLE_PROCESSING_IF_WIN, [
]> {
}
export interface Command_BattleProcessing_IfEscape extends EventCommandLike<typeof BATTLE_PROCESSING_IF_ESCAPE, [
]> {
}
export interface Command_BattleProcessing_IfLose extends EventCommandLike<typeof BATTLE_PROCESSING_IF_LOSE, [
]> {
}
export interface Command_BattleProcessing_BlockEnd extends EventCommandLike<typeof BATTLE_PROCESSING_BLOCK_END, [
]> {
}
