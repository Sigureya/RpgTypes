import type { AsRecord, PickByType } from "./pickByType";

export type IndexOfParameter<T extends unknown[], V> = AsNumber<
  keyof PickByType<AsRecord<T>, V>
>;

export type AsNumber<T extends `${number}`> = IndexToNumericKeyMap[Extract<
  T,
  keyof IndexToNumericKeyMap
>];

interface IndexToNumericKeyMap {
  "0": 0;
  "1": 1;
  "2": 2;
  "3": 3;
  "4": 4;
  "5": 5;
  "6": 6;
  "7": 7;
  "8": 8;
  "9": 9;
}
