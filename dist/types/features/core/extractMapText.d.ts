import { NoteReadResult, Data_Map } from '../../rmmz';
import { TextCommandParameter } from './extract/text/eventCommand';
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
export declare const extractMapText: (map: Data_Map) => ExtractedMapTexts;
