export interface EventState {
  currentIndex: number;
  params: {};
  picutres: {};
  localNumbers: Record<string, number>;
  localStrings: Record<string, string>;
  wait?: {
    mode: string;
    handlerName: string;
    arg: {};
  };
  child: EventState | null;
}
