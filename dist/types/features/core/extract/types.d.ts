import { NoteReadResult } from '../../../rmmz';
import { TextCommandParameter } from './text/eventCommand';
export interface ExtractedBattleEventText {
    eventId: number;
    commands: TextCommandParameter[];
    pageIndex: number;
}
export interface ExtractedCommonEventText {
    eventId: number;
    commands: TextCommandParameter[];
}
export interface ExtractedMapTexts {
    events: ExtractedMapEventTexts[];
    note: string;
    noteItems: NoteReadResult[];
    displayedName: string;
}
export interface ExtractedMapEventTexts {
    eventId: number;
    name: string;
    pageIndex: number;
    commands: TextCommandParameter[];
    note: string;
    noteItems: NoteReadResult[];
}
