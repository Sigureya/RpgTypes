export interface DaihonActor {
  faces: DiahonFace[];
  nameKey: string;
}

export interface DiahonFace {
  filename: string;
  faceIndex: number;
  kind: string;
}

export interface DataSet {
  actors: DaihonActor[];
}
