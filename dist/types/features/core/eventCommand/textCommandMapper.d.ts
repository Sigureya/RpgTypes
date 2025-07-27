import { Command_ChangeActorName, Command_ChangeActorNickName, Command_ChangeActorProfile, Command_CommentBody, Command_ShowChoices, Command_ShowChoiceWhen, EventCommand } from '../../../rmmz';
import { EventCommandGroup_Message, EventCommandGroup_ScrollingText, EventCommandGroup_Comment, EventCommandGroup_Script } from './commandGroup';
import { CallBackFunc } from './types/basicCommandsMapper';
export interface TextCommandMapper<T> {
    showMessage(groop: EventCommandGroup_Message): T;
    showScrollingText(groop: EventCommandGroup_ScrollingText): T;
    comment(groop: EventCommandGroup_Comment): T;
    script(groop: EventCommandGroup_Script): T;
    showChoices: CallBackFunc<Command_ShowChoices, T>;
    choiceWhen: CallBackFunc<Command_ShowChoiceWhen, T>;
    changeName: CallBackFunc<Command_ChangeActorName, T>;
    changeProfile: CallBackFunc<Command_ChangeActorProfile, T>;
    changeNickname: CallBackFunc<Command_ChangeActorNickName, T>;
    commentBody: CallBackFunc<Command_CommentBody, T>;
    other: CallBackFunc<EventCommand, T>;
}
