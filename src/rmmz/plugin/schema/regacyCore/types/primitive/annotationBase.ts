export interface AnnotationBaseTexts {
  kind: string;
  desc?: string;
  text?: string;
  parent?: string;
}

export type TypeKey = "kind";

export interface AnnotationBase<T = unknown> extends AnnotationBaseTexts {
  kind: string;
  desc?: string;
  text?: string;
  parent?: string;
  default: T;
}

export type OmitBaseParams<T> = Omit<T, keyof AnnotationBase>;
