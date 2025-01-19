import type { MapByCode, MergeRecord } from "./reverseRecord";
export type MapRecordToCode<R1 extends Record<PropertyKey, unknown>, R2 extends Record<keyof R1, PropertyKey>> = MapByCode<MergeRecord<R1, R2>>;
