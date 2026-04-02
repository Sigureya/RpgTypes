import type {
  AudioFilesSet,
  ImageFilesSet,
  OtherFilesSet,
  SummarizedNote,
  XX,
} from "./types";

export const isNoteBoolean = (note: string): boolean => {
  const text = note.trim().toLowerCase();
  return text === "true" || text === "false";
};

export const isNoteNumber = (note: string): boolean => {
  const trimed = note.trim();
  return /^\d+\.?\d*$/.test(trimed);
};

export const stringLikeNoteKeys = (
  list: ReadonlyArray<SummarizedNote>,
): Set<string> => {
  const ss: string[] = list
    .filter((item) => item.kinds.length === 0)
    .map((item): string => item.key);
  return new Set(ss);
};

export const summarizeNoteKinds = (
  items: readonly XX[],
  audioFiles: AudioFilesSet,
  imageFiles: ImageFilesSet,
  other: OtherFilesSet,
): SummarizedNote[] => {
  const map = categorizeNote(items);
  return Array.from(map.entries()).map(([key, mapedItems]): SummarizedNote => {
    const kindState = detectNoteKindState(
      mapedItems,
      audioFiles,
      imageFiles,
      other,
    );
    const kinds = extractNoteKinds(kindState);
    return {
      key,
      kinds,
      values: mapedItems.map((i) => i.text),
    };
  });
};

export const categorizeNote = (items: readonly XX[]): Map<string, XX[]> => {
  return items.reduce((acc, item) => {
    if (acc.has(item.key)) {
      return acc;
    }
    acc.set(
      item.key,
      items.filter((i) => i.key === item.key),
    );
    return acc;
  }, new Map<string, XX[]>());
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
});

const detectNoteKindState = (
  items: ReadonlyArray<XX>,
  audioFiles: AudioFilesSet,
  imageFiles: ImageFilesSet,
  otherFiles: OtherFilesSet,
): KindState => {
  return items.reduce((acc: KindState, item): KindState => {
    return {
      isBoolean: acc.isBoolean && isNoteBoolean(item.text),
      isNumber: acc.isNumber && isNoteNumber(item.text),

      isBgm: acc.isBgm && audioFiles.bgm.has(item.text),
      isBgs: acc.isBgs && audioFiles.bgs.has(item.text),
      isMe: acc.isMe && audioFiles.me.has(item.text),
      isSe: acc.isSe && audioFiles.se.has(item.text),

      isPicture: acc.isPicture && imageFiles.picutures.has(item.text),
      isCharacter: acc.isCharacter && imageFiles.characters.has(item.text),
      isFaceset: acc.isFaceset && imageFiles.faces.has(item.text),
      isBattler: acc.isBattler && imageFiles.svEnemy.has(item.text),
      isSvBattler: acc.isSvBattler && imageFiles.svActors.has(item.text),
      isEnemy: acc.isEnemy && imageFiles.enemies.has(item.text),
      isTileset: acc.isTileset && imageFiles.tilesets.has(item.text),

      isMovie: acc.isMovie && otherFiles.movies.has(item.text),
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
}
