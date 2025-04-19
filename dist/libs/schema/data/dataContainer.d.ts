export interface MainDataContainer<T> {
    actor: T;
    enemy: T;
    class: T;
    state: T;
    skill: T;
    item: T;
    armor: T;
    weapon: T;
}
export interface EventDataContainer<T> {
    troop: T;
    commonEvent: T;
}
export interface DataContainer<T> extends MainDataContainer<T>, EventDataContainer<T> {
}
