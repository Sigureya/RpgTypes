import { ValueOf } from 'src/libs/templates/valueOf';
import type * as EventCommandCodes from "./eventCommandCodes";
export type EventCode = ValueOf<typeof EventCommandCodes>;
