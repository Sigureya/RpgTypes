export interface AnnotationBase<T = unknown> {
    type: string;
    desc?: string;
    text?: string;
    parent?: string;
    default: T;
}
