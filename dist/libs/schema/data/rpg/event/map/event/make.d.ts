import { MapEvent_PageCondition, PageConditionArg } from './condition';
import { MapEvent } from './mapEvent';
import { MapEvent_Image, MapEventPage } from './page';
export declare const makeMapEvent: () => MapEvent;
export declare const makeMapEventIamge: () => MapEvent_Image;
export declare const makeEventPageCondition: (arg?: Partial<PageConditionArg>) => MapEvent_PageCondition;
export declare const makeMapEventPage: () => MapEventPage;
