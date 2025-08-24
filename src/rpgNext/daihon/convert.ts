import type { AudioFileParams } from "@RpgTypes/libs";
import { makeCommandPlaySE, makeCommandShowMessage } from "@RpgTypes/rmmz";
import type { DaihonActor } from "./actors/types";
import type { Command_Message } from "./commands/message";
import type { DataSet, XXX } from "./dataSet";

const convertCommandMessage = (
  command: Command_Message,
  dataSet: DataSet,
  xxx: XXX
) => {
  const voiceCommand = makeVoiceCommand(command, dataSet);

  return "";
};

const getFaceInfo = (command: Command_Message, actor: DaihonActor) => {};

const POSTION_TABLE = {
  top: 0,
  middle: 1,
  bottom: 2,
};

const makeMessageHedder = (
  command: Command_Message,
  dataSet: DataSet,
  xxx: XXX
) => {
  const actor = dataSet.actors.get(command.args.speaker);
  if (actor === undefined) {
    return null;
  }
  const face = actor.faces.find((face) => face.kind === command.args.emotion);
  if (face === undefined) {
    return null;
  }
  const name =
    dataSet.vocab.get(actor.nameKey) ?? xxx.makeUnknownName(actor.nameKey);

  return makeCommandShowMessage({
    faceIndex: face.faceIndex,
    facename: face.filename,
    speakerName: name,
    positionType: POSTION_TABLE[command.args.postionType],
    background: 0,
  });
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
