export interface AnnotationBaseTexts {
  type: string;
  desc?: string;
  text?: string;
  parent?: string;
}

export interface AnnotationBase<T = unknown> extends AnnotationBaseTexts {
  type: string;
  desc?: string;
  text?: string;
  parent?: string;
  default: T;
}

export type OmitBaseParams<T> = Omit<T, keyof AnnotationBase>;
