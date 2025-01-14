export interface ISelectable<T> {
    itemAt(index: number): T;
    item(): T;
}
