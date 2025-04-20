import type { DomainLabel, EnemyLabels } from "@RpgTypes/schema";

export const DEFAULT_ENEMY_LABELS = {
  domainName: "敵キャラ",
  options: {
    dropItems: "ドロップアイテム",
    battlerHue: "バトラーヒュー",
    battlerName: "バトラー名",
    gold: "ゴールド",
  },
} as const satisfies DomainLabel<EnemyLabels>;
