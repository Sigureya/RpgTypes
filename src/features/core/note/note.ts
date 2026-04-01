import type { NoteReadResult } from "@RpgTypes/rmmz";
import type { AudioFilesSet, ImageFilesSet, TypeXX } from "./types";

export const isBooleanNote = (note: string): boolean => {
  const text = note.trim().toLowerCase();
  return text === "true" || text === "false";
};

export const isNumberNote = (note: string): boolean => {
  return note.match(/^\s*\d+\.?\d*\s*$/) !== null;
};

export const fff = (
  items: readonly NoteReadResult[],
  audioFiles: AudioFilesSet,
  imageFiles: ImageFilesSet,
) => {
  const map = categorizeNote(items);
  return Array.from(map.entries()).map(([key, mapedItems]): TypeXX => {
    const kindState = kindXX(mapedItems, audioFiles, imageFiles);
    const kinds = kindGG(kindState);
    return {
      key,
      kinds,
      values: mapedItems.map((i) => i.value),
    };
  });
};

export const categorizeNote = (
  items: readonly NoteReadResult[],
): Map<string, NoteReadResult[]> => {
  return items.reduce((acc, item) => {
    if (acc.has(item.key)) {
      return acc;
    }
    acc.set(
      item.key,
      items.filter((i) => i.key === item.key),
    );
    return acc;
  }, new Map<string, NoteReadResult[]>());
};

const kindGG = (state: KindState) => {
  return (
    [
      state.isBoolean ? "boolean" : null,
      state.isNumber ? "number" : null,
      state.isBgm ? "bgm" : null,
      state.isBgs ? "bgs" : null,
      state.isMe ? "me" : null,
      state.isSe ? "se" : null,
      state.isPicture ? "picture" : null,
      state.isCharacter ? "character" : null,
      state.isFaceset ? "faceset" : null,
      state.isBattler ? "battler" : null,
      state.isSvBattler ? "svBattler" : null,
      state.isEnemy ? "enemy" : null,
      state.isTileset ? "tileset" : null,
    ] as const
  ).filter((k) => k !== null);
};

const kindXX = (
  items: readonly NoteReadResult[],
  audioFiles: AudioFilesSet,
  imageFiles: ImageFilesSet,
): KindState => {
  return items.reduce(
    (acc: KindState, item): KindState => {
      return {
        isBoolean: acc.isBoolean && isBooleanNote(item.value),
        isNumber: acc.isNumber && isNumberNote(item.value),

        isBgm: acc.isBgm && audioFiles.bgm.has(item.value),
        isBgs: acc.isBgs && audioFiles.bgs.has(item.value),
        isMe: acc.isMe && audioFiles.me.has(item.value),
        isSe: acc.isSe && audioFiles.se.has(item.value),

        isPicture: acc.isPicture && imageFiles.picuture.has(item.value),
        isCharacter: acc.isCharacter && imageFiles.character.has(item.value),
        isFaceset: acc.isFaceset && imageFiles.faceset.has(item.value),
        isBattler: acc.isBattler && imageFiles.battler.has(item.value),
        isSvBattler: acc.isSvBattler && imageFiles.svBattler.has(item.value),
        isEnemy: acc.isEnemy && imageFiles.enemy.has(item.value),
        isTileset: acc.isTileset && imageFiles.tileset.has(item.value),
      };
    },
    {
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
    } satisfies KindState,
  );
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
}
