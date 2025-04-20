import type { DomainLabel } from "@RpgTypes/templates";
import type { ActorLabels } from "./actorLabels";

export const DEFAULT_ACTOR_LABELS = {
  domainName: "アクター",
  options: {
    initialEquipments: "初期装備",
    faceImage: "顔画像",
    characterImage: "キャラクター画像",
    svBattlerImage: "SVバトラー画像",
    nickname: "ニックネーム",
    profile: "プロフィール",
    classId: "職業ID",
    initialLevel: "初期レベル",
    maxLevel: "最大レベル",
  },
} as const satisfies DomainLabel<ActorLabels>;
