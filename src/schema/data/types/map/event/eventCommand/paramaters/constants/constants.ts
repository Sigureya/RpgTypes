export interface Toggle {
  ON: 0;
  OFF: 1;
}
export interface Operation_PlusMinus {
  PLUS: 0;
  MINUS: 1;
}

// 補足 イベントコマンドによって設定が逆なので注意
export interface Designation {
  DIRECT: 0;
  VARIABLE: 1;
}
export interface Operation_AddSub {
  ADD: 0;
  SUB: 1;
}
