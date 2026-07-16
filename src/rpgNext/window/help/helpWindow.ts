export interface HelpWindowQuery {
  source: string;
  usignHelp: boolean;
  filter: {
    funcKey: string;
    arg: {};
  };
  enabledFn: {
    funcKey: string;
    arg: {};
  };
}
