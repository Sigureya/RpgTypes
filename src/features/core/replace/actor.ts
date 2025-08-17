import type { ExtractedTextItem } from "@RpgTypes/features/extractText";
import { extractNoteText } from "@RpgTypes/features/extractText";
import type { PickByTypeKeys } from "@RpgTypes/libs";
import { mapKeysToObject } from "@RpgTypes/libs/templates/pick/replace";
import type {
  Data_Actor,
  Data_Enemy,
  Data_Skill,
  Data_Class,
  Data_Item,
  Data_Weapon,
  Data_Armor,
  Data_State,
} from "@RpgTypes/rmmz";

const xxx = (text: string, map: ReadonlyMap<string, string>): string => {
  const s2 = text.trimEnd();
  const vv = map.get(s2);
  return vv !== undefined ? vv : s2;
};

export const repaceActorText = (
  actor: Data_Actor,
  map: ReadonlyMap<string, string>
) => {
  const note: ExtractedTextItem[] = extractNoteText(actor);
  const newValues = mapKeysToObject(
    actor,
    ["name", "nickname", "profile"],
    (s, key) => [key, xxx(s, map)]
  );
  return {
    ...actor,
    ...newValues,
  };
};

export const repaceEnemyText = (
  enemy: Data_Enemy,
  map: ReadonlyMap<string, string>
) => {
  const newValues = mapKeysToObject(enemy, ["name", "note"], (s, key) => [
    key,
    xxx(s, map),
  ]);
  return {
    ...enemy,
    ...newValues,
  };
};
