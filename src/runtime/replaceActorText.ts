import type { RuntimeDictionaryData } from "@RpgTypes/features";
import type { KeyValuePairEx } from "@RpgTypes/libs";
import type { Rmmz_ActorTexts } from "@RpgTypes/rmmzRuntime";

const replaceRuntimeActorText = <T>(
  actors: ReadonlyArray<Rmmz_ActorTexts>,
  dicitionay: RuntimeDictionaryData<T>,
  actorTextDictionary: readonly KeyValuePairEx<string, T>[],
) => {
  const map: Map<T, string> = new Map(
    dicitionay.dictionary.map(({ key, value }) => [key, value]),
  );
};

const xxx = () => {};
