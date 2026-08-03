import { Command_BattleProcessing } from '../../../../rmmz/eventCommand';
import { Data_Map } from '../../../../rmmz/events';
import { Rmmz_PlayerCharactor, Rmmz_Variables } from '../../../../rmmzRuntime';
export declare const ggTroopId: ({ parameters }: Command_BattleProcessing, variables: Rmmz_Variables, player: Rmmz_PlayerCharactor, map: Data_Map, random: (maxWeight: number) => number) => number | undefined;
