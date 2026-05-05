import { normarizeText } from "@RpgTypes/libs";
import type { SystemKinds, ExtractedTextItemG } from "dist/types";
import type { ExtractedSystemTexts } from "./system";

export const convertSystemTypes = <UUID>(
  system: ExtractedSystemTexts,
  filename: string,
  kinds: SystemKinds,
  uuidGen: (text: string) => UUID,
): ExtractedTextItemG<UUID, keyof SystemKinds>[] => {
  return [
    {
      filename,
      id: 0,
      baseText: system.gameTitle,
      uuid: uuidGen(system.gameTitle),
      kind: kinds.gameTitle,
      dataKey: "gameTitle",
    },
    {
      filename,
      id: 0,
      baseText: system.currencyUnit,
      uuid: uuidGen(system.currencyUnit),
      kind: kinds.currencyUnit,
      dataKey: "currencyUnit",
    },
    ...dataTypes(
      filename,
      system.equipTypes,
      "equipTypes",
      kinds.equipTypes,
      uuidGen,
    ),
    ...dataTypes(
      filename,
      system.weaponTypes,
      "weaponTypes",
      kinds.weaponTypes,
      uuidGen,
    ),
    ...dataTypes(
      filename,
      system.armorTypes,
      "armorTypes",
      kinds.armorTypes,
      uuidGen,
    ),
  ];
};

const dataTypes = <UUID>(
  filename: string,
  list: ReadonlyArray<string>,
  key: keyof SystemKinds,
  kind: string,
  uuidGen: (text: string) => UUID,
): ExtractedTextItemG<UUID, keyof SystemKinds>[] => {
  return list
    .filter((item) => item.length > 0)
    .map((item, index): ExtractedTextItemG<UUID, keyof SystemKinds> => {
      const normarizedText = normarizeText(item);
      return {
        filename: filename,
        id: index,
        baseText: normarizedText,
        uuid: uuidGen(normarizedText),
        kind: kind,
        dataKey: key,
      };
    });
};
