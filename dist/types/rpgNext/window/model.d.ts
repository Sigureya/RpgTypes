export interface WindowModelXX<T, Arg> {
    name(data: T): string;
    helpText(data: T): string;
    iconIndex(data: T): number;
    isEnabled(data: T): boolean;
    makeItemList(arg: Arg): T[];
}
