export type IsSame<T, U> = T extends U ? (U extends T ? true : false) : false;
export type IdentifiedItems<T> = [null, ...T[]];
