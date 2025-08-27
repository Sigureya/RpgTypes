import { AudioFileParams } from '../../libs';
import { DaihonActor } from './actors/types';
export interface DataSet {
    voice: Map<string, AudioFileParams>;
    messages: Map<string, string>;
    actors: Map<string, DaihonActor>;
    vocab: Map<string, string>;
}
export interface XXX {
    makeUnknownName: (nameKey: string) => string;
}
export interface ErrorMessageTable {
    xx: string;
    actorNotFound: string;
    faceNotFound: string;
}
