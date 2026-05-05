import { normarizeText } from "@RpgTypes/libs";
import type { Data_System } from "@RpgTypes/rmmz";
import type {
  ExtractedSystemTextItem,
  ExtractedTextItemG,
  KindHandlers,
  SystemKinds,
} from "../../sss/types";
import type { ExtractedSystemTexts } from "./system";
import { extractTextFromSystem } from "./system";
import {
  basicTerms,
  gameCommands,
  systemMessages,
  systemParams,
} from "./systemTerms";

const HANDLERS = {
  basic: (key) => `basic.${key}`,
  commands: (key) => `commands.${key}`,
  messages: (key) => `messages.${key}`,
  params: (key) => `params.${key}`,
} as const satisfies KindHandlers;

export const convertSystemTexts = <UUID>(
  system: Data_System,
  filename: string,
  uuidGen: (text: string) => UUID,
  kinds: SystemKinds,
  handlers: KindHandlers = HANDLERS,
): ExtractedSystemTextItem<UUID>[] => {
  const extracted = extractTextFromSystem(system);
  return [
    ...convertSystemTypes(extracted, filename, kinds, uuidGen),
    ...basicTerms(extracted.terms.basic, filename, uuidGen, handlers.basic),
    ...systemParams(extracted.terms.params, filename, uuidGen, handlers.params),
    ...gameCommands(
      extracted.terms.commands,
      filename,
      uuidGen,
      handlers.commands,
    ),
    ...systemMessages(
      extracted.terms.messages,
      filename,
      uuidGen,
      handlers.messages,
    ),
  ];
};

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
