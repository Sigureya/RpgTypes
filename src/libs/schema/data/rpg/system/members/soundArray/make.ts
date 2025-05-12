import type { System_SoundsArray, System_SoundsObject } from "./types";
import { makeAudioFileParams } from "@RpgTypes/utils";

export const makeSoundsArray = (
  sounds: Partial<System_SoundsObject>
): System_SoundsArray => {
  return [
    makeAudioFileParams(sounds.cursor),
    makeAudioFileParams(sounds.ok),
    makeAudioFileParams(sounds.cancel),
    makeAudioFileParams(sounds.buzzer),
    makeAudioFileParams(sounds.equip),
    makeAudioFileParams(sounds.save),
    makeAudioFileParams(sounds.load),
    makeAudioFileParams(sounds.battleStart),
    makeAudioFileParams(sounds.escape),
    makeAudioFileParams(sounds.enemyAttack),
    makeAudioFileParams(sounds.enemyDamage),
    makeAudioFileParams(sounds.enemyCollapse),
    makeAudioFileParams(sounds.bossCollapes1),
    makeAudioFileParams(sounds.bossCollapes2),
    makeAudioFileParams(sounds.actorDamage),
    makeAudioFileParams(sounds.actorCollapse),
    makeAudioFileParams(sounds.playRecovery),
    makeAudioFileParams(sounds.playMiss),
    makeAudioFileParams(sounds.playEvasion),
    makeAudioFileParams(sounds.playMagicEvasion),
    makeAudioFileParams(sounds.playReflection),
    makeAudioFileParams(sounds.shop),
    makeAudioFileParams(sounds.useItem),
    makeAudioFileParams(sounds.useSkill),
  ];
};
