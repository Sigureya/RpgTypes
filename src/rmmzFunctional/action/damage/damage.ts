import type { Trait } from "@RpgTypes/rmmz/rpg";
import { isPhysicalHit, type Data_UsableItem } from "@RpgTypes/rmmz/rpg";
import type { Rmmz_Battler } from "@RpgTypes/rmmzRuntime";

const dddx = (
  baseDamage: number,
  item: Data_UsableItem,
  tareget: Rmmz_Battler,
) => {
  //  const dp1 = isPhysicalHit(item) ? tareget.pdr : 0;
};

interface Dsx {
  pdr: number;
  mdr: number;
  rec: number;
  itemHit: number;
  itemEva: number;
  itemCri: number;
}

// interface SubjectParams {}

const damageXXtraits = (
  traits: ReadonlyArray<Trait>,
  targetTraits: ReadonlyArray<Trait>,
) => {};
