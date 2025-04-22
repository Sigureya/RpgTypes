import type { DomainLabel } from "@RpgTypes/templates";
import type { EnemyLabels } from "./enemyLabels";

export const LABELS_DATA_ENEMY = {
  domainName: "敵キャラ",
  options: {
    dropItems: "ドロップアイテム",
    battlerHue: "バトラーヒュー",
    battlerName: "バトラー名",
    gold: "ゴールド",
  },
} as const satisfies DomainLabel<EnemyLabels>;
