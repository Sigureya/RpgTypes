import { stringLikeNoteKeys, summarizeNoteKinds } from "./note/note";
import type { AudioFilesSet, ImageFilesSet, OtherFilesSet } from "./note/types";
import type {
  ExtractedDataBundle,
  ExtractedNoteList,
  ExtractedText,
  ExtractedTextItem,
} from "./types";

export const ddd = (
  bundle: ExtractedDataBundle,
  audioFiles: AudioFilesSet,
  imageFiles: ImageFilesSet,
  other: OtherFilesSet,
): Partial<ExtractedDataBundle> => {
  const g = ggg(bundle);
  const s = summarizeNoteKinds(g, audioFiles, imageFiles, other);
  const m: Set<string> = stringLikeNoteKeys(s);
  return {
    actors: rrr(bundle.actors, m),
    enemies: rrr(bundle.enemies, m),
    weapons: rrr(bundle.weapons, m),
    armors: rrr(bundle.armors, m),
    skills: rrr(bundle.skills, m),
    states: rrr(bundle.states, m),
    items: rrr(bundle.items, m),
    classes: rrr(bundle.classes, m),
  };
};

export const rrr = <T>(
  list: readonly ExtractedText<T>[],
  set: ReadonlySet<string>,
): ExtractedText<T>[] => {
  return list
    .map((item): ExtractedText<T> => {
      const filteredNote = item.note.filter((note) => set.has(note.key));
      return {
        main: item.main,
        note: filteredNote,
      };
    })
    .filter(hasData);
};

const hasData = <T>(item: ExtractedText<T>): boolean => {
  return item.note.length > 0 || item.main.length > 0;
};

const ggg = (bundle: ExtractedDataBundle): ExtractedTextItem[] => {
  const x: ExtractedTextItem[][][] = [
    nnn(bundle.actors),
    nnn(bundle.enemies),
    nnn(bundle.weapons),
    nnn(bundle.armors),
    nnn(bundle.skills),
    nnn(bundle.states),
  ];
  return x.flat(3);
};

const nnn = (note: readonly ExtractedNoteList[]): ExtractedTextItem[][] => {
  return note.map((item) => item.note);
};
