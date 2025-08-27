import { Failure, Success, PartitionedResult } from './types';
export declare const partitionResults: <T, U>(list: ReadonlyArray<Success<T> | Failure<U>>) => PartitionedResult<T, U>;
