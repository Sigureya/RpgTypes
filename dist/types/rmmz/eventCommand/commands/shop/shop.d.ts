import { Command_ShopProcessing, Command_ShopProcessingBody, ParamObject_ShopProcessing } from './types';
export declare const makeCommandShopProcessing: ({ goods, buyOnly }: ParamObject_ShopProcessing, indent?: number) => (Command_ShopProcessing | Command_ShopProcessingBody)[];
