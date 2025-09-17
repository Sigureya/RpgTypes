import { Rmmz_Battler, Rmmz_Map } from '../../../../rmmzRuntime';
import { Rmmz_ActorsTemplate } from '../../../../rmmzRuntime/objects/core/battler/actors';
export type FakeBattler = Pick<Rmmz_Battler, ActorKeys>;
export type FakeMap = Pick<Rmmz_Map, "mapId">;
export type FakeActos = Pick<Rmmz_ActorsTemplate<FakeBattler>, "actor">;
export type ActorKeys = "loseHp" | "loseMp" | "loseTp" | "gainHp" | "gainMp" | "gainTp" | "isAlive" | "isDead";
