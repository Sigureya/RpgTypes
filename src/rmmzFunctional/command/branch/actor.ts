import type {
  Command_BranchByActor,
  BranchByActorClass,
  BranchByActorName,
  BranchByActorSkill,
  BranchByActorWeapon,
  BranchByActorArmor,
  Data_Class,
  Data_Armor,
  Data_Weapon,
} from "@RpgTypes/rmmz";
import type { Rmmz_Actor, Rmmz_Party } from "@RpgTypes/rmmzRuntime";

export interface BranchDataProvider {
  gameActor(actorId: number): Rmmz_Actor | null | undefined;
  classData(classId: number): Data_Class | null | undefined;
  armorData(armorId: number): Data_Armor | null | undefined;
  weaponData(weaponId: number): Data_Weapon | null | undefined;
}

export const evaluateActorBranch = (
  { parameters }: Command_BranchByActor,
  party: Rmmz_Party,
  provider: BranchDataProvider,
): boolean => {
  const actor = provider.gameActor(parameters[1]);
  if (!actor) {
    return false;
  }
  // TSの都合でif文の連続になっている。C#移植の場合はイベントコマンドの構造自体が変わるので、この関数は使わない
  switch (parameters[2]) {
    case 0:
      return party.members().includes(actor);
    case 1:
      return branchByActorName(parameters, actor);
    case 2:
      return branchByActorClass(parameters, actor, provider);
    case 3:
      return branchByActorSkill(parameters, actor);
    case 4:
      return branchByActorWeapon(parameters, actor, provider);
    case 5:
      return branchByActorArmor(parameters, actor, provider);
    case 6:
      return actor.isStateAffected(parameters[3]);
    default:
      return false;
  }
};

const branchByActorName = (
  params: BranchByActorName,
  actor: Rmmz_Actor,
): boolean => {
  // C#移植メモ ここの実装は大変問題があるため、C#向けの実装は全然違うものを用意する
  const name: string = params[3];
  return actor.name() === name;
};

const branchByActorClass = (
  params: BranchByActorClass,
  actor: Rmmz_Actor,
  provider: BranchDataProvider,
): boolean => {
  // この実装は大変非効率だが、ツクールMZ本体と同じにする必要がある
  const classObj = provider.classData(params[3]);
  return actor.isClass(classObj);
};

const branchByActorSkill = (
  params: BranchByActorSkill,
  actor: Rmmz_Actor,
): boolean => {
  return actor.hasSkill(params[3]);
};

const branchByActorWeapon = (
  params: BranchByActorWeapon,
  actor: Rmmz_Actor,
  provider: BranchDataProvider,
): boolean => {
  const weaponObj = provider.weaponData(params[3]);
  return actor.hasWeapon(weaponObj);
};

const branchByActorArmor = (
  params: BranchByActorArmor,
  actor: Rmmz_Actor,
  provider: BranchDataProvider,
): boolean => {
  return actor.hasArmor(provider.armorData(params[3]));
};
