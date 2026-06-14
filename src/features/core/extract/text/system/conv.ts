import { normarizeText } from "@RpgTypes/libs";
import type { SystemTexts } from "@RpgTypes/rmmz";
import type { ExtractedSystemKinds, SystemKinds } from "./types";

export const convertSystemTypes = <UUID>(
  system: SystemTexts,
  filename: string,
  kinds: SystemKinds,
  uuidGen: (text: string) => UUID,
): ExtractedSystemKinds<UUID>[] => {
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
): ExtractedSystemKinds<UUID>[] => {
  return list
    .filter((item) => item.length > 0)
    .map((item, index): ExtractedSystemKinds<UUID> => {
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
