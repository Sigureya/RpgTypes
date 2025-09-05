import { Data_CommonEvent } from '../../../../rmmz';
/**
 * 指定したrootイベントID群から到達可能な全てのコモンイベントIDを再帰的に列挙します。
 * 再帰とmap/filter/reduceのみで実装（for/while禁止）
 */
export declare const treeShake: (events: ReadonlyArray<Data_CommonEvent>, roots: ReadonlySet<number>) => ReadonlySet<number>;
