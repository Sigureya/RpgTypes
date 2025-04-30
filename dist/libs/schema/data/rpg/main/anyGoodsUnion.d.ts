import { Data_Armor, Data_Weapon } from './traitContainers';
import { Data_Item } from './usableItems';
/**
 * @deprecated
 */
export type Data_AnyGoods = Data_AnyGoodsUnion;
export type Data_AnyGoodsUnion = Data_Item | Data_Weapon | Data_Armor;
