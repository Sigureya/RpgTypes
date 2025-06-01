import type { ValueOf } from "src/rpg";
import type { STATUS } from "./dataSource";

export interface ParamObject_Operand_ActorStatus {
  index: number;
  param: ValueOf<typeof STATUS>;
}
