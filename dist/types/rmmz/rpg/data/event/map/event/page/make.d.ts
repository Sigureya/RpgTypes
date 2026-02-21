import { EventCommandUnknown } from '../../../../../../../libs/eventCommand';
import { MoveRouteCommandUnknown } from '../../../../../../eventCommand';
import { MapEvent_Image } from './image/types';
import { MapEvent } from './mapEvent';
import { MapEventPage } from './page';
export declare const makeMapEvent: <Command extends EventCommandUnknown, MoveRoute extends MoveRouteCommandUnknown>({ id, name, pages, note, x, y, }?: Partial<MapEvent<Command, MoveRoute>>) => MapEvent<Command, MoveRoute>;
export declare const makeMapEventIamge: ({ characterIndex, characterName, direction, pattern, tileId, }?: Partial<MapEvent_Image>) => MapEvent_Image;
export declare const makeMapEventPage: <Command extends EventCommandUnknown, M extends MoveRouteCommandUnknown>({ list, conditions, image, moveFrequency, directionFix, moveRoute, priorityType, stepAnime, through, walkAnime, moveSpeed, moveType, trigger, }?: Partial<MapEventPage<Command, M>>) => MapEventPage<Command, M>;
