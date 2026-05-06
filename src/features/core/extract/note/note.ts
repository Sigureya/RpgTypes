import type { AssetFilesBundle } from "@RpgTypes/fileio";
import type { KeyValuePair } from "@RpgTypes/libs";
import type {
  NoteReadResultEx,
  NoteReadResultsWithSource,
} from "@RpgTypes/rmmz";
import type {
  SummarizedNote,
  SummarizedNote2,
  SummarizedNoteValue,
} from "./types";

export const isNoteBoolean = (note: string): boolean => {
  const text = note.trim().toLowerCase();
  return text === "true" || text === "false";
};

export const isNoteNumber = (note: string): boolean => {
  const trimed = note.trim();
  return /^-?\d{1,16}\.?\d{0,16}$/.test(trimed);
};

export const stringLikeNoteKeys = (
  list: ReadonlyArray<SummarizedNote<unknown>>,
): Set<string> => {
  const ss: string[] = list
    .filter((item) => item.kinds.length === 0)
    .map((item): string => item.key);
  return new Set(ss);
};

interface SSS2 extends NoteReadResultEx {
  soruce: string;
}

export const summarizeNoteKinds = (
  items: readonly NoteReadResultsWithSource[],
  assets: AssetFilesBundle,
): SummarizedNote2[] => {
  const groupedByKey: ReadonlyMap<string, readonly SSS2[]> = groupBy(items);

  return Array.from(groupedByKey.entries()).map(([key, mappedItems]) => {
    const kindState = detectNoteKindState(mappedItems, assets);
    const kinds = extractNoteKinds(kindState);
    return {
      key,
      kinds,
      values: mappedItems.map(gggg),
    };
  });
};

const groupBy = (
  items: ReadonlyArray<NoteReadResultsWithSource>,
): Map<string, SSS2[]> => {
  const list: SSS2[] = items.flatMap((sourceNotes) =>
    sourceNotes.notes.map(
      (note): SSS2 => ({
        key: note.key,
        value: note.value,
        dataId: note.dataId,
        name: note.name,
        soruce: sourceNotes.source,
      }),
    ),
  );
  return Map.groupBy(list, (note) => note.key);
};

const gggg = (ss: SSS2): SummarizedNoteValue => {
  return {
    value: ss.value,
    dataId: ss.dataId,
    soruce: ss.soruce,
    name: ss.name,
  };
};

const extractNoteKinds = (state: KindState) => {
  return (
    [
      state.isBoolean ? "boolean" : null,
      state.isNumber ? "number" : null,
      state.isBgm ? "bgm" : null,
      state.isBgs ? "bgs" : null,
      state.isMe ? "me" : null,
      state.isSe ? "se" : null,
      state.isPicture ? "pictures" : null,
      state.isCharacter ? "characters" : null,
      state.isFaceset ? "faces" : null,
      state.isBattler ? "battlers" : null,
      state.isSvBattler ? "svBattlers" : null,
      state.isEnemy ? "enemies" : null,
      state.isTileset ? "tilesets" : null,
      state.isMovie ? "movies" : null,
      state.isScript ? "script" : null,
    ] as const
  ).filter((k) => k !== null);
};

const createEmptyKindState = (): KindState => ({
  isBoolean: true,
  isNumber: true,
  isBgm: true,
  isBgs: true,
  isMe: true,
  isSe: true,
  isBattler: true,
  isCharacter: true,
  isFaceset: true,
  isSvBattler: true,
  isEnemy: true,
  isPicture: true,
  isTileset: true,
  isMovie: true,
  isScript: false,
});

const detectNoteKindState = (
  items: ReadonlyArray<KeyValuePair>,
  { audioFiles, imageFiles, otherFiles }: AssetFilesBundle,
): KindState => {
  return items.reduce((acc: KindState, item): KindState => {
    return {
      isBoolean: acc.isBoolean && isNoteBoolean(item.value),
      isNumber: acc.isNumber && isNoteNumber(item.value),

      isBgm: acc.isBgm && audioFiles.bgm.has(item.value),
      isBgs: acc.isBgs && audioFiles.bgs.has(item.value),
      isMe: acc.isMe && audioFiles.me.has(item.value),
      isSe: acc.isSe && audioFiles.se.has(item.value),

      isPicture: acc.isPicture && imageFiles.picutures.has(item.value),
      isCharacter: acc.isCharacter && imageFiles.characters.has(item.value),
      isFaceset: acc.isFaceset && imageFiles.faces.has(item.value),
      isBattler: acc.isBattler && imageFiles.svEnemy.has(item.value),
      isSvBattler: acc.isSvBattler && imageFiles.svActors.has(item.value),
      isEnemy: acc.isEnemy && imageFiles.enemies.has(item.value),
      isTileset: acc.isTileset && imageFiles.tilesets.has(item.value),

      isMovie: acc.isMovie && otherFiles.movies.has(item.value),
      isScript: acc.isScript,
    };
  }, createEmptyKindState());
};

interface KindState {
  isBoolean: boolean;
  isNumber: boolean;
  isBgm: boolean;
  isBgs: boolean;
  isMe: boolean;
  isSe: boolean;
  isPicture: boolean;
  isCharacter: boolean;
  isFaceset: boolean;
  isBattler: boolean;
  isSvBattler: boolean;
  isEnemy: boolean;
  isTileset: boolean;
  isMovie: boolean;
  isScript: boolean;
}
