import { normarizeText } from "@RpgTypes/libs";
import type {
  ExtractedText,
  Data_State,
  ExtractedTextItem as NoteEntry,
} from "@sigureya/rpgtypes";
import type {
  ExtractedNoteItem,
  ExtractedTextBundle,
  ExtractedTextItemG,
  RmmzTextPropertys,
} from "./types";

export type KeyRecord<T> = Record<
  ExtractedText<T>["main"][number]["key"],
  string
> & {
  note: string;
};

export const convertStateData = <UUID>(
  extracted: readonly ExtractedText<Data_State>[],
  filename: string,
  terms: RmmzTextPropertys,
  uuidGen: (text: string) => UUID,
): ExtractedTextBundle<Data_State, UUID>[] => {
  return convertDataList(
    extracted,
    filename,
    {
      message1: terms.state.message1,
      message2: terms.state.message2,
      message3: terms.state.message3,
      message4: terms.state.message4,
      name: terms.name,
      note: terms.note,
    },
    uuidGen,
  );
};

export const convertDataList = <T, UUID>(
  extracted: readonly ExtractedText<T>[],
  filename: string,
  terms: KeyRecord<T>,
  uuidGen: (text: string) => UUID,
): ExtractedTextBundle<T, UUID>[] => {
  return extracted.map((e) => convertData(e, filename, terms, uuidGen));
};

export const convertData = <T, UUID>(
  extracted: ExtractedText<T>,
  filename: string,
  terms: KeyRecord<T>,
  uuidGen: (text: string) => UUID,
): ExtractedTextBundle<T, UUID> => {
  return {
    main: extracted.main
      .filter((e) => e.value !== "")
      .map((data): ExtractedTextItemG<UUID, Extract<keyof T, string>> => {
        const normarizedText = normarizeText(data.value);
        return {
          kind: terms[data.key],
          baseText: normarizedText,
          id: data.id,
          dataKey: data.key,
          filename: filename,
          uuid: uuidGen(normarizedText),
        };
      }),
    note: convertNoteData<UUID>(extracted.note, filename, terms, uuidGen),
  };
};

const convertNoteData = <UUID>(
  list: ReadonlyArray<NoteEntry>,
  filename: string,
  terms: {
    note: string;
  },
  uuidGen: (text: string) => UUID,
): ExtractedNoteItem<UUID>[] => {
  return list.map((note) => ({
    kind: `${terms.note}:${note.key}`,
    baseText: note.value,
    filename,
    id: note.id,
    uuid: uuidGen(note.value),
    dataKey: "note",
    otherData: [note.key],
  }));
};
