import type { EventCommandLike2 } from "@RpgTypes/eventCommand/frame";
import type { AudioFileParams } from "@RpgTypes/utils";

export interface AudioCommandBase<Code extends number>
  extends EventCommandLike2<Code> {
  code: Code;
  parameters: [AudioFileParams];
}

export interface CommandUnion_AnyAudio
  extends AudioCommandBase<132 | 133 | 139 | 241 | 245 | 249 | 250> {}

export interface Command_ChangeBattleBGM extends AudioCommandBase<132> {
  parameters: [value: AudioFileParams];
}
export interface Command2_ChangeVictoryME extends AudioCommandBase<133> {
  parameters: [value: AudioFileParams];
}
export interface Command2_ChangeDefeatME extends AudioCommandBase<139> {
  parameters: [value: AudioFileParams];
}
export interface Command2_ChangeVehicleBGM extends EventCommandLike2<140> {
  parameters: [vehicleId: number, audio: AudioFileParams];
}
export interface Command_PlayBGM extends EventCommandLike2<241> {
  parameters: [value: AudioFileParams];
}

export interface Command_PlayBGS extends EventCommandLike2<245> {
  parameters: [value: AudioFileParams];
}
export interface Command_PlayME extends EventCommandLike2<249> {
  parameters: [value: AudioFileParams];
}

export interface Command_PlaySE extends EventCommandLike2<250> {
  parameters: [value: AudioFileParams];
}
