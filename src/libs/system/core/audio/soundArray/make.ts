import { makeAudioFileParams } from "@RpgTypes/utils";
import type { System_SoundsArray, System_SoundsObject } from "./types";

export const makeSoundsArray = (
  sounds: Partial<System_SoundsObject> = {}
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

export const makeSoundsObject = (
  sounds: System_SoundsArray
): System_SoundsObject => {
  return {
    cursor: sounds[0],
    ok: sounds[1],
    cancel: sounds[2],
    buzzer: sounds[3],
    equip: sounds[4],
    save: sounds[5],
    load: sounds[6],
    battleStart: sounds[7],
    escape: sounds[8],
    enemyAttack: sounds[9],
    enemyDamage: sounds[10],
    enemyCollapse: sounds[11],
    bossCollapes1: sounds[12],
    bossCollapes2: sounds[13],
    actorDamage: sounds[14],
    actorCollapse: sounds[15],
    playRecovery: sounds[16],
    playMiss: sounds[17],
    playEvasion: sounds[18],
    playMagicEvasion: sounds[19],
    playReflection: sounds[20],
    shop: sounds[21],
    useItem: sounds[22],
    useSkill: sounds[23],
  };
};
