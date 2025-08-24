import type { AudioFileParams } from "@RpgTypes/libs";
import type { Failure, Success } from "@RpgTypes/libs/templates/result";
import type {
  Command_ShowMessageBody,
  Command_ShowMessageHeader,
} from "@RpgTypes/rmmz";
import {
  makeCommandPlaySE,
  makeCommandShowMessage,
  makeCommandShowMessageBody,
} from "@RpgTypes/rmmz";
import type { DaihonActor } from "./actors/types";
import type { Command_Message } from "./commands/message";
import type { DataSet, ErrorMessageTable, XXX } from "./dataSet";

const convertCommandMessage = (
  command: Command_Message,
  dataSet: DataSet,
  xxx: XXX,
  error: ErrorMessageTable
) => {
  const voiceCommand = makeVoiceCommand(command, dataSet);
  const hedder = makeMessageHedder(command, dataSet, xxx, error);
  const body = messageBody(command, dataSet, xxx, error);

  return "";
};

const getFaceInfo = (command: Command_Message, actor: DaihonActor) => {};

const POSTION_TABLE = {
  top: 0,
  middle: 1,
  bottom: 2,
} as const;

const makeMessageHedder = (
  command: Command_Message,
  dataSet: DataSet,
  xxx: XXX,
  error: ErrorMessageTable
): Success<Command_ShowMessageHeader> | Failure => {
  const actor = dataSet.actors.get(command.args.speaker);
  if (actor === undefined) {
    return {
      success: false,
      error: error.actorNotFound,
    };
  }
  const face = actor.faces.find((face) => face.kind === command.args.emotion);
  if (face === undefined) {
    return {
      success: false,
      error: error.faceNotFound,
    };
  }

  const name =
    dataSet.vocab.get(actor.nameKey) ?? xxx.makeUnknownName(actor.nameKey);

  return {
    success: true,
    value: makeCommandShowMessage({
      faceIndex: face.faceIndex,
      facename: face.filename,
      speakerName: name,
      positionType: POSTION_TABLE[command.args.postionType],
      background: 0,
    }),
  };
};

const makeVoiceCommand = (command: Command_Message, dataSet: DataSet) => {
  if (command.args.voiceId === undefined) {
    return null;
  }
  const voice = dataSet.voice.get(command.args.voiceId);
  if (voice === undefined) {
    return null;
  }
  return makeCommandPlaySE(voice, command.indent);
};

const messageBody = (
  command: Command_Message,
  dataSet: DataSet,
  xxx: XXX,
  error: ErrorMessageTable
): Success<Command_ShowMessageBody> | Failure => {
  const msg = dataSet.messages.get(command.args.message);
  if (msg === undefined) {
    return {
      success: false,
      error: error.xx,
    };
  }
  return {
    success: true,
    value: makeCommandShowMessageBody(msg, command.indent),
  };
};
