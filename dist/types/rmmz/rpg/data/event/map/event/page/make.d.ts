import { EventCommandUnknown } from '../../../../../../eventCommand';
import { MapEvent_Image } from './image/types';
import { MapEvent } from './mapEvent';
import { MapEventPage } from './page';
export declare const makeMapEvent: <Command extends EventCommandUnknown>({ id, name, pages, note, x, y, }?: Partial<MapEvent<Command>>) => MapEvent<Command>;
export declare const makeMapEventIamge: ({ characterIndex, characterName, direction, pattern, tileId, }?: Partial<MapEvent_Image>) => MapEvent_Image;
export declare const makeMapEventPage: <Command extends EventCommandUnknown>({ list, conditions, image, moveFrequency, directionFix, moveRoute, priorityType, stepAnime, through, walkAnime, }?: Partial<MapEventPage<Command>>) => MapEventPage<Command>;
