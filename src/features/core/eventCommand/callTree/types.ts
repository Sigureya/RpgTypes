export interface CommonEventNode {
  eventId: number;
  name: string;
  depth?: number;
}

export interface CommonEventNode2 {
  eventId: number;
  name: string;
}

export interface CallTree {
  caller: CommonEventNode[];
  children: CommonEventNode[];
}

export interface CommonEventDependencies {
  eventId: number;
  name: string;
  childeCommons: Set<number>;
}

export interface Query {
  rootsEventIds: number[];
}
