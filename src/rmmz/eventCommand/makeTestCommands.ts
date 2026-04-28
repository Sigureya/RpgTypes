import type { TestDataSource } from "@RpgTypes/libs";
import type { NormalizedEventCommand } from "./commands";
import {
  makeCommandChangeActorImages,
  makeCommandChangeActorName,
  makeCommandChangeActorNickName,
  makeCommandShowMessage,
  makeCommandShowMessageBody,
  makeCommandCommentHeader,
} from "./commands";

export const makeTestCommands = (
  soruce: TestDataSource,
): NormalizedEventCommand[] => {
  return [
    makeCommandShowMessage({
      facename: soruce.image,
      faceIndex: 0,
      speakerName: soruce.text,
    }),
    makeCommandShowMessageBody(soruce.text),
    makeCommandChangeActorImages({
      actorId: 1,
      characterName: soruce.image,
      characterIndex: 0,
      battlerName: soruce.image,
      faceName: soruce.image,
      faceIndex: 0,
    }),
    makeCommandChangeActorName({ name: soruce.text, actorId: 1 }),
    makeCommandChangeActorNickName({ nickname: soruce.text, actorId: 1 }),
    makeCommandCommentHeader(soruce.text),
  ];
};
