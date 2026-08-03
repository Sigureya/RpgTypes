export interface Keys {
    actor: string;
    battler: string;
    usableItem: string;
    trait: string;
    party: string;
}
export interface CustomData<StaticData, RuntimeData> {
    isValidStaticData(unknown: unknown): unknown is StaticData;
    isValidRuntimeData(unknown: unknown): unknown is RuntimeData;
    createInitValue(): RuntimeData;
    defaultStaticData(): StaticData;
}
export interface RuntimeDataCCC<T> {
    key: string;
    createInitValue(): T;
    isValidRuntimeData?(data: unknown): data is T;
}
export interface StaticDataCCC<T> {
    key: string;
    defaultValue: T;
    isValidStaticData?(data: unknown): data is T;
}
