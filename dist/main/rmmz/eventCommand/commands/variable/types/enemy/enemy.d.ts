import { ENEMY_PARAM_INDEX } from './dataSource';
export interface DataOperand_Enemy {
    get hp(): number;
    get mp(): number;
    get tp(): number;
    param(index: number): number;
}
export interface ParamObject_Operand_Enemy {
    index: number;
    param: keyof typeof ENEMY_PARAM_INDEX;
}
