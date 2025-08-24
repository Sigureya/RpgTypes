import type { Failure, Success, PartitionedResult } from "./types";

export const partitionResults = <T, U>(
  list: ReadonlyArray<Success<T> | Failure<U>>
): PartitionedResult<T, U> => {
  return {
    success: list
      .filter((item): item is Success<T> => item.success)
      .map((item) => item.value),
    failure: list
      .filter((item): item is Failure<U> => !item.success)
      .map((item) => item.error),
  };
};
