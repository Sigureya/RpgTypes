import { SourceIdentifier } from '../../../../schema';
import { Data_Item } from './types';
export declare const itemSourceId: () => SourceIdentifier;
export declare const makeItemData: (item?: Partial<Data_Item>) => Data_Item;
