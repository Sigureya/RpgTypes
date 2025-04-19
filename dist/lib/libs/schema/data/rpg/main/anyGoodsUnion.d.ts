import { Data_Armor } from './traitContainers/armor';
import { Data_Weapon } from './traitContainers/weapon';
import { Data_Item } from './usableItems';
/**
 * @deprecated
 */
export type Data_AnyGoods = Data_AnyGoodsUnion;
export type Data_AnyGoodsUnion = Data_Item | Data_Weapon | Data_Armor;
