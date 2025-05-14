import type { ValueOf } from "@RpgTypes/schema";
import type { STATUS } from "./dataSource";

export interface ParamObject_Operand_ActorStatus {
  index: number;
  param: ValueOf<typeof STATUS>;
}
