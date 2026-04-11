import type { AudioFileParams } from "@RpgTypes/libs";
import type {
  CommandParameter,
  CommandUnion_AnyAudio,
  Data_CommonEvent,
  Data_Map,
  Data_Troop,
  EventCommand,
  NoteReadResult,
} from "@RpgTypes/rmmz";
import type { ExtractedAudioBase } from "./base";

export type AudioCommandParameter = ExtractedAudioBase &
  CommandParameter<AudioFileParams, CommandUnion_AnyAudio["code"]>;

export type GameDataAudioExtractor = EventContainerAudioExtractor &
  EventCommandAudioExtractor;

export interface EventContainerAudioExtractor {
  extractMapAudio(rpgMap: Data_Map): ExtractedMapAudios;
  extractBattleAudio(troop: Data_Troop): ExtractedBattleEventAudio[];
  extractCommonEventAudio(commons: Data_CommonEvent): ExtractedCommonEventAudio;
}

export interface EventCommandAudioExtractor {
  extractAudioCommands(
    commands: ReadonlyArray<EventCommand>,
  ): AudioCommandParameter[];
}

export interface ExtractedBattleEventAudio<
  T extends AudioCommandParameter = AudioCommandParameter,
> {
  eventId: number;
  commands: T[];
  pageIndex: number;
}

export interface ExtractedCommonEventAudio<
  T extends AudioCommandParameter = AudioCommandParameter,
> {
  eventId: number;
  commands: T[];
}

export interface ExtractedMapAudios<
  T extends AudioCommandParameter = AudioCommandParameter,
> {
  events: ExtractedMapEventAudios<T>[];
  note: string;
  noteItems: NoteReadResult[];
  bgm: AudioFileParams;
  bgs: AudioFileParams;
}

export interface ExtractedMapEventAudios<
  T extends AudioCommandParameter = AudioCommandParameter,
> {
  eventId: number;
  name: string;
  pageIndex: number;
  commands: T[];
  note: string;
  noteItems: NoteReadResult[];
}
