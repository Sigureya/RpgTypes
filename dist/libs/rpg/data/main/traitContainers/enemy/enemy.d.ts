import { SourceIdentifier } from '../../../../../namedItemSource';
import { Data_Enemy, DropItem, Enemy_Action } from './types';
export declare const makeDropItem: (dropItem?: Partial<DropItem>) => DropItem;
export declare const makeEnemyAction: (action?: Partial<Enemy_Action>) => Enemy_Action;
export declare const makeEnemyData: (data?: Partial<Data_Enemy>) => Data_Enemy;
export declare const enemySourceId: () => SourceIdentifier;
