export interface NewCommand_LocalNumber {
  code: "localNumber";
  arg: {
    name: string;
    value: number;
  };
}

export interface NewCommand_LocalString {
  code: "localString";
  arg: {
    name: string;
    value: string;
  };
}
