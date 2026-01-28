import type { Rmmz_Actor, Rmmz_Battler, Rmmz_Map } from "@RpgTypes/rmmzRuntime";
import type { Rmmz_ActorsTemplate } from "@RpgTypes/rmmzRuntime/objects/core/battler/actors";

export type FakeBattler = Pick<Rmmz_Battler, ActorKeys>;

export type FakeMap = Pick<Rmmz_Map, "mapId">;

export type FakeActors = Pick<Rmmz_ActorsTemplate<FakeBattler>, "actor">;
export type ActorKeys =
  | "loseHp"
  | "loseMp"
  | "loseTp"
  | "gainHp"
  | "gainMp"
  | "gainTp"
  | "isAlive"
  | "isDead";

export type FakeActor = Pick<
  Rmmz_Actor,
  "actorId" | "gainHp" | "loseHp" | "isAlive" | "isDead"
>;
