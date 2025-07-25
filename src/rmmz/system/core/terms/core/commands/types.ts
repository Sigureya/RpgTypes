export interface Terms_GameCommands {
  fight: string;
  escape: string;
  attack: string;
  guard: string;
  item: string;
  skill: string;
  equip: string;
  status: string;
  formation: string;
  save: string;
  gameEnd: string;
  options: string;
  weapon: string;
  armor: string;
  keyItem: string;
  equip2: string;
  optimize: string;
  clear: string;
  newGame: string;
  continue_: string;
  // notUsed20: string;
  toTitle: string;
  cancel: string;
  // notUsed23: string;
  buy: string;
  sell: string;
}

export type SystemLabels_GameCommands = Record<
  keyof Terms_GameCommands,
  string
>;

export type Terms_CommandArray<Empty extends string | null = ""> = [
  fight: string,
  escape: string,
  attack: string,
  guard: string,
  item: string,
  skill: string,
  equip: string,
  status: string,
  formation: string,
  save: string,
  gameEnd: string,
  options: string,
  weapon: string,
  armor: string,
  keyItem: string,
  equip2: string,
  optimize: string,
  clear: string,
  newGame: string,
  continue_: string,
  notUsed20: Empty,
  toTitle: string,
  cancel: string,
  notUsed23: Empty,
  buy: string,
  sell: string
];
