export interface RawTraitLabel {
    title: string;
    format: string;
}
export interface TraitLabelWithOption<T> extends RawTraitLabel {
    title: string;
    format: string;
    options: T;
}
