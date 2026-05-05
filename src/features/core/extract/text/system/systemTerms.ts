import { normarizeText } from "@RpgTypes/libs";
import type {
  Terms_GameCommands,
  Terms_Messages,
  Terms_Basic,
  SystemLabels_TermsParamNames,
} from "@sigureya/rpgtypes";
import type {
  SystemTermsKeyType,
  ExtractedGameCommandsTextItem,
  ExtractedSystemMessageItem,
  ExtractedBasicTermsTextItem,
  ExtractedParamsTextItem,
} from "../../sss/types";

const createItem = <P extends string, T, UUID, Key extends string & keyof T>(
  prefix: P,
  data: T,
  filename: string,
  key: Key,
  uuidGen: (text: string) => UUID,
  kindFn: (key: keyof T) => string,
) => {
  const text = normarizeText(data[key] as string);
  return {
    filename: filename,
    id: 0,
    uuid: uuidGen(text),
    baseText: text,
    kind: kindFn(key),
    dataKey: `${prefix}.${key}` as const,
  } satisfies Record<
    keyof SystemTermsKeyType<string, unknown>,
    string | number | UUID | T[keyof T]
  >;
};

export const gameCommands = <UUID>(
  terms: Terms_GameCommands,
  filename: string,
  uuidGen: (text: string) => UUID,
  kindFn: (key: keyof Terms_GameCommands) => string,
): ExtractedGameCommandsTextItem<UUID>[] => {
  const keys = [
    "fight",
    "escape",
    "attack",
    "guard",
    "item",
    "skill",
    "equip",
    "status",
    "formation",
    "save",
    "gameEnd",
    "options",
    "weapon",
    "armor",
    "keyItem",
    "equip2",
    "optimize",
    "clear",
    "newGame",
    "continueGame",
    "toTitle",
    "cancel",
    "buy",
    "sell",
  ] as const satisfies (keyof Terms_GameCommands)[];

  return keys
    .filter((key) => terms[key] !== "")
    .map(
      (key): ExtractedGameCommandsTextItem<UUID> =>
        createItem("commands", terms, filename, key, uuidGen, kindFn),
    );
};

export const systemMessages = <UUID>(
  terms: Terms_Messages,
  filename: string,
  uuidGen: (text: string) => UUID,
  kindFn: (key: keyof Terms_Messages) => string,
): ExtractedSystemMessageItem<UUID>[] => {
  const keys = [
    "alwaysDash",
    "commandRemember",
    "touchUI",
    "bgmVolume",
    "bgsVolume",
    "meVolume",
    "seVolume",
    "possession",
    "expTotal",
    "expNext",
    "saveMessage",
    "loadMessage",
    "file",
    "autosave",
    "partyName",
    "emerge",
    "preemptive",
    "surprise",
    "escapeStart",
    "escapeFailure",
    "victory",
    "defeat",
    "obtainExp",
    "obtainGold",
    "obtainItem",
    "levelUp",
    "obtainSkill",
    "useItem",
    "criticalToEnemy",
    "criticalToActor",
    "actorDamage",
    "actorRecovery",
    "actorGain",
    "actorLoss",
    "actorDrain",
    "actorNoDamage",
    "actorNoHit",
    "enemyDamage",
    "enemyRecovery",
    "enemyGain",
    "enemyLoss",
    "enemyDrain",
    "enemyNoDamage",
    "enemyNoHit",
    "evasion",
    "magicEvasion",
    "magicReflection",
    "counterAttack",
    "substitute",
    "buffAdd",
    "debuffAdd",
    "buffRemove",
    "actionFailure",
  ] as const satisfies (keyof Terms_Messages)[];

  return keys
    .filter((key) => terms[key] !== "")
    .map(
      (key): ExtractedSystemMessageItem<UUID> =>
        createItem("messages", terms, filename, key, uuidGen, kindFn),
    );
};

export const basicTerms = <UUID>(
  terms: Terms_Basic,
  filename: string,
  uuidGen: (text: string) => UUID,
  kindFn: (key: keyof Terms_Basic) => string,
): ExtractedBasicTermsTextItem<UUID>[] => {
  const keys = [
    "level",
    "levelA",
    "hp",
    "hpA",
    "mp",
    "mpA",
    "tp",
    "tpA",
    "experience",
    "exp",
  ] as const satisfies (keyof Terms_Basic)[];

  return keys
    .filter((key) => terms[key] !== "")
    .map(
      (key): ExtractedBasicTermsTextItem<UUID> =>
        createItem("basic", terms, filename, key, uuidGen, kindFn),
    );
};

export const systemParams = <UUID>(
  terms: SystemLabels_TermsParamNames,
  filename: string,
  uuidGen: (text: string) => UUID,
  kindFn: (key: keyof SystemLabels_TermsParamNames) => string,
): ExtractedParamsTextItem<UUID>[] => {
  const keys = [
    "mhp",
    "mmp",
    "atk",
    "def",
    "mat",
    "mdf",
    "agi",
    "luk",
    "hit",
    "eva",
  ] as const satisfies (keyof SystemLabels_TermsParamNames)[];

  return keys
    .filter((key) => terms[key] !== "")
    .map(
      (key): ExtractedParamsTextItem<UUID> =>
        createItem("params", terms, filename, key, uuidGen, kindFn),
    );
};
