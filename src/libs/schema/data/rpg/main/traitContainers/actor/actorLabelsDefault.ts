import type { DomainLabel } from "@RpgTypes/schema";
import type { ActorLabels } from "./actorLabels";

export const MockActorLabels = {
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
