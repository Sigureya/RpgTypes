import type { AudioFileParams } from "@RpgTypes/libs";
import type {
  AudioFolders,
  CommandParameter,
  CommandUnion_AnyAudio,
  Data_CommonEvent,
  Data_Map,
  Data_Troop,
  EventCommand,
  NoteReadResult,
} from "@RpgTypes/rmmz";
import type { ExtractedAudioBase } from "./base";
import type { AudioPluginCommandParameter } from "./pluginCommand";

export interface AudioCommandParameter
  extends
    ExtractedAudioBase,
    CommandParameter<AudioFileParams, CommandUnion_AnyAudio["code"]> {
  directory: AudioFolders;
}

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
  T extends AudioPluginCommandParameter = AudioPluginCommandParameter,
> {
  eventId: number;
  commands: (T | AudioCommandParameter)[];
  pageIndex: number;
}

export interface ExtractedCommonEventAudio<
  T extends AudioPluginCommandParameter = AudioPluginCommandParameter,
> {
  eventId: number;
  commands: (T | AudioCommandParameter)[];
}

export interface ExtractedMapAudios<
  T extends AudioPluginCommandParameter = AudioPluginCommandParameter,
> {
  events: ExtractedMapEventAudios<T>[];
  note: string;
  noteItems: NoteReadResult[];
  bgm: AudioFileParams;
  bgs: AudioFileParams;
}

export interface ExtractedMapEventAudios<
  T extends AudioPluginCommandParameter = AudioPluginCommandParameter,
> {
  eventId: number;
  name: string;
  pageIndex: number;
  commands: (T | AudioCommandParameter)[];
  note: string;
  noteItems: NoteReadResult[];
}
