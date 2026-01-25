import { describe, test, expect } from "vitest";
import type { System_SoundsObject, Terms_Messages } from "./core";
import { makeSystemData } from "./make";
import type { Data_System } from "./system";
import type { SystemDataFragments } from "./systemSegments";

const fullFragments = {
  options: {
    optAutosave: true,
    optDisplayTp: false,
    optDrawTitle: true,
    optExtraExp: false,
    optFloorDeath: true,
    optFollowers: false,
    optKeyItemsNumber: true,
    optSideView: false,
    optSlipDeath: true,
    optTransparent: false,
    optMessageSkip: true,
    optSplashScreen: false,
  },
  advanced: {
    gameId: 12345,
    fontSize: 14,
    fallbackFonts: "fallback fonts",
    screenWidth: 1280,
    screenHeight: 720,
  },
  vehicles: {
    airship: {
      bgm: { name: "airship", volume: 100, pitch: 100, pan: 0 },
      characterName: "airship",
      characterIndex: 0,
      startMapId: 1,
      startX: 2,
      startY: 3,
    },
    boat: {
      bgm: { name: "boat", volume: 100, pitch: 100, pan: 0 },
      characterName: "boat",
      characterIndex: 1,
      startMapId: 4,
      startX: 5,
      startY: 6,
    },
    ship: {
      bgm: { name: "ship", volume: 100, pitch: 100, pan: 0 },
      characterName: "ship",
      characterIndex: 2,
      startMapId: 7,
      startX: 8,
      startY: 9,
    },
  },
  dataNames: {
    armorTypes: ["armorA", "armorB"],
    elements: ["fire", "ice"],
    equipTypes: ["weapon", "armor"],
    weaponTypes: ["sword", "axe"],
    skillTypes: ["magic", "special"],
    switches: ["switch1", "switch2"],
    variables: ["var1", "var2"],
  },
  bgm: {
    titleBgm: { name: "title", volume: 90, pitch: 100, pan: 0 },
    battleBgm: { name: "battle", volume: 80, pitch: 100, pan: 0 },
  },
  me: {
    gameoverMe: { name: "gameover", volume: 70, pitch: 100, pan: 0 },
    defeatMe: { name: "defeat", volume: 60, pitch: 100, pan: 0 },
    victoryMe: { name: "victory", volume: 50, pitch: 100, pan: 0 },
  },
  texts: {
    gameTitle: "Test Game",
    currencyUnit: "G",
  },
  battleTest: {
    battleback1Name: "bb1",
    battleback2Name: "bb2",
    testTroopId: 100,
    testBattlers: [
      { actorId: 1, equips: [1, 2], level: 5 },
      { actorId: 2, equips: [3, 4], level: 6 },
    ],
  },
  images: {
    title1Name: "title1",
    title2Name: "title2",
  },
  gameInit: {
    startMapId: 10,
    startX: 20,
    startY: 30,
    partyMembers: [1, 2, 3],
  },
  size: {
    tileSize: 48,
    faceSize: 144,
    iconSize: 32,
  },
  editing: {
    jsonFormatLevel: 1,
    messageWidth1: 600,
    messageWidth2: 400,
  },
} as const satisfies Partial<SystemDataFragments>;

describe("makeSystemData", () => {
  const result: Data_System = makeSystemData(fullFragments);
  describe("copies and assigns main fragments", () => {
    test("copies options", () => {
      expect(result).toMatchObject(fullFragments.options);
    });
    test("copies dataNames", () => {
      expect(result).toMatchObject(fullFragments.dataNames);
    });
    test("copies vehicles", () => {
      expect(result).toMatchObject(fullFragments.vehicles);
    });
    test("copies bgm", () => {
      expect(result).toMatchObject(fullFragments.bgm);
    });
    test("copies me", () => {
      expect(result).toMatchObject(fullFragments.me);
    });
    test("copies texts", () => {
      expect(result).toMatchObject(fullFragments.texts);
    });

    test("copies images", () => {
      expect(result).toMatchObject(fullFragments.images);
    });
    test("copies size", () => {
      expect(result).toMatchObject(fullFragments.size);
    });
  });
  describe("copies and assigns optional fragments", () => {
    test("copies editing", () => {
      expect(result.editor).toEqual(fullFragments.editing);
      expect(result.editor).not.toBe(fullFragments.editing);
    });

    test("copies advanced", () => {
      expect(result.advanced).toMatchObject(fullFragments.advanced);
      expect(result.advanced).not.toBe(fullFragments.advanced);
    });
  });

  describe("deep copy for dataNames arrays", () => {
    test("armorTypes is deep copied", () => {
      expect(result.armorTypes).toEqual(fullFragments.dataNames.armorTypes);
      expect(result.armorTypes).not.toBe(fullFragments.dataNames.armorTypes);
    });
    test("elements is deep copied", () => {
      expect(result.elements).toEqual(fullFragments.dataNames.elements);
      expect(result.elements).not.toBe(fullFragments.dataNames.elements);
    });
    test("equipTypes is deep copied", () => {
      expect(result.equipTypes).toEqual(fullFragments.dataNames.equipTypes);
      expect(result.equipTypes).not.toBe(fullFragments.dataNames.equipTypes);
    });
    test("weaponTypes is deep copied", () => {
      expect(result.weaponTypes).toEqual(fullFragments.dataNames.weaponTypes);
      expect(result.weaponTypes).not.toBe(fullFragments.dataNames.weaponTypes);
    });
    test("skillTypes is deep copied", () => {
      expect(result.skillTypes).toEqual(fullFragments.dataNames.skillTypes);
      expect(result.skillTypes).not.toBe(fullFragments.dataNames.skillTypes);
    });
    test("switches is deep copied", () => {
      expect(result.switches).toEqual(fullFragments.dataNames.switches);
      expect(result.switches).not.toBe(fullFragments.dataNames.switches);
    });
    test("variables is deep copied", () => {
      expect(result.variables).toEqual(fullFragments.dataNames.variables);
      expect(result.variables).not.toBe(fullFragments.dataNames.variables);
    });
  });
  test("should create the correct Data_System object", () => {
    const expected: Data_System = {
      optAutosave: true,
      optDisplayTp: false,
      optDrawTitle: true,
      optExtraExp: false,
      optFloorDeath: true,
      optFollowers: false,
      optKeyItemsNumber: true,
      optSideView: false,
      optSlipDeath: true,
      optTransparent: false,
      optMessageSkip: true,
      optSplashScreen: false,
      gameTitle: "Test Game",
      currencyUnit: "Gold",
      title1Name: "Title1",
      title2Name: "Title2",
      battleback1Name: "Battleback1",
      battleback2Name: "Battleback2",
      titleBgm: { name: "TitleBGM", volume: 100, pitch: 100, pan: 0 },
      battleBgm: { name: "BattleBGM", volume: 100, pitch: 100, pan: 0 },
      gameoverMe: { name: "GameoverME", volume: 100, pitch: 100, pan: 0 },
      defeatMe: { name: "DefeatME", volume: 100, pitch: 100, pan: 0 },
      victoryMe: { name: "VictoryME", volume: 100, pitch: 100, pan: 0 },
      boat: {
        characterName: "Boat",
        characterIndex: 0,
        bgm: { name: "BoatBGM", volume: 100, pitch: 100, pan: 0 },
        startMapId: 0,
        startX: 0,
        startY: 0,
      },
      ship: {
        characterName: "Ship",
        characterIndex: 0,
        bgm: { name: "ShipBGM", volume: 100, pitch: 100, pan: 0 },
        startMapId: 0,
        startX: 0,
        startY: 0,
      },
      airship: {
        characterName: "Airship",
        characterIndex: 0,
        bgm: { name: "AirshipBGM", volume: 100, pitch: 100, pan: 0 },
        startMapId: 0,
        startX: 0,
        startY: 0,
      },
      sounds: [
        { name: "cursor", volume: 100, pitch: 100, pan: 0 },
        { name: "ok", volume: 100, pitch: 100, pan: 0 },
        { name: "cancel", volume: 100, pitch: 100, pan: 0 },
        { name: "buzzer", volume: 100, pitch: 100, pan: 0 },
        { name: "equip", volume: 100, pitch: 100, pan: 0 },
        { name: "save", volume: 100, pitch: 100, pan: 0 },
        { name: "load", volume: 100, pitch: 100, pan: 0 },
        { name: "battleStart", volume: 100, pitch: 100, pan: 0 },
        { name: "escape", volume: 100, pitch: 100, pan: 0 },
        { name: "enemyAttack", volume: 100, pitch: 100, pan: 0 },
        { name: "enemyDamage", volume: 100, pitch: 100, pan: 0 },
        { name: "enemyCollapse", volume: 100, pitch: 100, pan: 0 },
        { name: "bossCollapse1", volume: 100, pitch: 100, pan: 0 },
        { name: "bossCollapse2", volume: 100, pitch: 100, pan: 0 },
        { name: "actorDamage", volume: 100, pitch: 100, pan: 0 },
        { name: "actorCollapse", volume: 100, pitch: 100, pan: 0 },
        { name: "playRecovery", volume: 100, pitch: 100, pan: 0 },
        { name: "playMiss", volume: 100, pitch: 100, pan: 0 },
        { name: "playEvasion", volume: 100, pitch: 100, pan: 0 },
        { name: "playMagicEvasion", volume: 100, pitch: 100, pan: 0 },
        { name: "playReflection", volume: 100, pitch: 100, pan: 0 },
        { name: "shop", volume: 100, pitch: 100, pan: 0 },
        { name: "useItem", volume: 100, pitch: 100, pan: 0 },
        { name: "useSkill", volume: 100, pitch: 100, pan: 0 },
      ],
      armorTypes: ["Armor1", "Armor2"],
      elements: ["Element1", "Element2"],
      equipTypes: ["EquipType1", "EquipType2"],
      weaponTypes: ["WeaponType1", "WeaponType2"],
      skillTypes: ["SkillType1", "SkillType2"],
      switches: ["Switch1", "Switch2"],
      variables: ["Variable1", "Variable2"],
      magicSkills: [1, 4],
      attackMotions: [
        { type: 4, weaponImageId: 3 },
        { type: 5, weaponImageId: 6 },
      ],
      testBattlers: [{ actorId: 1, equips: [12, 45], level: 85 }],
      advanced: {
        fallbackFonts: "",
        fontSize: 28,
        gameId: 0xe653,
        mainFontFilename: "GameFont",
        numberFontFilename: "ggg",
        screenWidth: 816,
        screenHeight: 624,
        screenScale: 1,
        uiAreaHeight: 0,
        uiAreaWidth: 0,
        windowOpacity: 255,
      },
      battlerHue: 0,
      battlerName: "BattlerName",
      editMapId: 956,
      locale: "ja-JP",
      startMapId: 58,
      startX: 22,
      startY: 44,
      testTroopId: 0,
      windowTone: [0, 0, 0, 0],
      battleSystem: 1,
      faceSize: 144,
      iconSize: 32,
      tileSize: 48,
      terms: {
        basic: [
          "level",
          "levelA",
          "hp",
          "hpA",
          "mp",
          "mpA",
          "tp",
          "tpA",
          "experience",
          "exp",
        ],
        commands: [
          "fight",
          "escape",
          "attack",
          "guard",
          "item",
          "skill",
          "equip",
          "status",
          "formation",
          "save",
          "gameEnd",
          "options",
          "weapon",
          "armor",
          "keyItem",
          "equip2",
          "optimize",
          "clear",
          "newGame",
          "continue",
          "",
          "toTitle",
          "cancel",
          "",
          "buy",
          "sell",
        ],
        params: [
          "mhp",
          "mmp",
          "atk",
          "def",
          "mat",
          "mdf",
          "agi",
          "luk",
          "hit",
          "eva",
        ],
        messages: {
          actionFailure: "Action Failure",
          actorDamage: "Actor Damage",
          actorNoDamage: "Actor No Damage",
          actorRecovery: "Actor Recovery",
          actorNoHit: "Actor No Hit",
          actorDrain: "Actor Drain",
          actorGain: "Actor Gain",
          actorLoss: "Actor Loss",
          alwaysDash: "Always Dash",
          autosave: "Autosave",
          bgmVolume: "BGM Volume",
          bgsVolume: "BGS Volume",
          commandRemember: "Command Remember",
          criticalToActor: "Critical To Actor",
          criticalToEnemy: "Critical To Enemy",
          counterAttack: "Counter Attack",
          debuffAdd: "Debuff Add",
          defeat: "Defeat",
          enemyDamage: "Enemy Damage",
          enemyNoDamage: "Enemy No Damage",
          enemyRecovery: "Enemy Recovery",
          enemyDrain: "Enemy Drain",
          enemyGain: "Enemy Gain",
          enemyLoss: "Enemy Loss",
          enemyNoHit: "Enemy No Hit",
          evasion: "Evasion",
          escapeFailure: "Escape Failure",
          escapeStart: "Escape Start",
          emerge: "Emerge",
          expNext: "Exp Next",
          expTotal: "Exp Total",
          file: "File",
          buffAdd: "Buff Add",
          buffRemove: "Buff Remove",
          obtainExp: "Obtain Exp",
          obtainGold: "Obtain Gold",
          obtainItem: "Obtain Item",
          obtainSkill: "Obtain Skill",
          levelUp: "Level Up",
          partyName: "Party Name",
          loadMessage: "Load Message",
          meVolume: "ME Volume",
          possession: "Possession",
          preemptive: "Preemptive",
          saveMessage: "Save Message",
          seVolume: "SE Volume",
          magicEvasion: "Magic Evasion",
          magicReflection: "Magic Reflection",
          substitute: "Substitute",
          surprise: "Surprise",
          useItem: "Use Item",
          touchUI: "Touch UI",
          victory: "Victory",
        } satisfies Terms_Messages,
      },
      versionId: 1,
      partyMembers: [1, 2, 3],
      itemCategories: [true, true, false, false],
      menuCommands: [true, true, true, false, false, false],
      editor: {
        jsonFormatLevel: 0,
        messageWidth1: 816,
        messageWidth2: 816,
      },
      titleCommandWindow: {
        background: 1,
        offsetX: 120,
        offsetY: 240,
      },
    };

    const sounds: System_SoundsObject = {
      actorCollapse: { name: "actorCollapse", volume: 100, pitch: 100, pan: 0 },
      actorDamage: { name: "actorDamage", volume: 100, pitch: 100, pan: 0 },
      battleStart: { name: "battleStart", volume: 100, pitch: 100, pan: 0 },
      bossCollapes1: { name: "bossCollapse1", volume: 100, pitch: 100, pan: 0 },
      bossCollapes2: { name: "bossCollapse2", volume: 100, pitch: 100, pan: 0 },
      buzzer: { name: "buzzer", volume: 100, pitch: 100, pan: 0 },
      cancel: { name: "cancel", volume: 100, pitch: 100, pan: 0 },
      cursor: { name: "cursor", volume: 100, pitch: 100, pan: 0 },
      enemyAttack: { name: "enemyAttack", volume: 100, pitch: 100, pan: 0 },
      enemyCollapse: { name: "enemyCollapse", volume: 100, pitch: 100, pan: 0 },
      enemyDamage: { name: "enemyDamage", volume: 100, pitch: 100, pan: 0 },
      escape: { name: "escape", volume: 100, pitch: 100, pan: 0 },
      equip: { name: "equip", volume: 100, pitch: 100, pan: 0 },
      load: { name: "load", volume: 100, pitch: 100, pan: 0 },
      ok: { name: "ok", volume: 100, pitch: 100, pan: 0 },
      playEvasion: { name: "playEvasion", volume: 100, pitch: 100, pan: 0 },
      playMiss: { name: "playMiss", volume: 100, pitch: 100, pan: 0 },
      playRecovery: { name: "playRecovery", volume: 100, pitch: 100, pan: 0 },
      save: { name: "save", volume: 100, pitch: 100, pan: 0 },
      shop: { name: "shop", volume: 100, pitch: 100, pan: 0 },
      useItem: { name: "useItem", volume: 100, pitch: 100, pan: 0 },
      useSkill: { name: "useSkill", volume: 100, pitch: 100, pan: 0 },
      playMagicEvasion: {
        name: "playMagicEvasion",
        volume: 100,
        pitch: 100,
        pan: 0,
      },
      playReflection: {
        name: "playReflection",
        volume: 100,
        pitch: 100,
        pan: 0,
      },
    };

    const data = makeSystemData({
      sounds,
      locale: "ja-JP",
      attackMotion: [
        { type: 4, weaponImageId: 3 },
        { type: 5, weaponImageId: 6 },
      ],

      options: {
        optAutosave: true,
        optDisplayTp: false,
        optDrawTitle: true,
        optExtraExp: false,
        optFloorDeath: true,
        optFollowers: false,
        optKeyItemsNumber: true,
        optSideView: false,
        optSlipDeath: true,
        optTransparent: false,
        optMessageSkip: true,
        optSplashScreen: false,
      },
      advanced: {
        fontSize: 28,
        gameId: 0xe653,
        fallbackFonts: "",
        screenWidth: 816,
        screenHeight: 624,
        mainFontFilename: "GameFont",
        numberFontFilename: "ggg",
        screenScale: 1,
        uiAreaWidth: 0,
        uiAreaHeight: 0,
        windowOpacity: 255,
      },
      texts: {
        gameTitle: "Test Game",
        currencyUnit: "Gold",
      },

      terms: {
        basic: {
          exp: "exp",
          experience: "experience",
          hp: "hp",
          hpA: "hpA",
          level: "level",
          levelA: "levelA",
          mp: "mp",
          mpA: "mpA",
          tp: "tp",
          tpA: "tpA",
        },
        params: {
          mhp: "mhp",
          mmp: "mmp",
          atk: "atk",
          def: "def",
          mat: "mat",
          mdf: "mdf",
          agi: "agi",
          luk: "luk",
          hit: "hit",
          eva: "eva",
        },

        commands: {
          fight: "fight",
          escape: "escape",
          attack: "attack",
          guard: "guard",
          item: "item",
          skill: "skill",
          equip: "equip",
          status: "status",
          formation: "formation",
          save: "save",
          gameEnd: "gameEnd",
          options: "options",
          weapon: "weapon",

          armor: "armor",
          buy: "buy",
          cancel: "cancel",
          clear: "clear",
          continueGame: "continue",
          equip2: "equip2",
          newGame: "newGame",
          optimize: "optimize",
          sell: "sell",
          toTitle: "toTitle",
          keyItem: "keyItem",
        },
        messages: {
          actionFailure: "Action Failure",
          actorDamage: "Actor Damage",
          actorNoDamage: "Actor No Damage",
          actorRecovery: "Actor Recovery",
          actorNoHit: "Actor No Hit",
          actorDrain: "Actor Drain",
          actorGain: "Actor Gain",
          actorLoss: "Actor Loss",
          alwaysDash: "Always Dash",
          autosave: "Autosave",
          bgmVolume: "BGM Volume",
          bgsVolume: "BGS Volume",
          buffAdd: "Buff Add",
          buffRemove: "Buff Remove",
          commandRemember: "Command Remember",
          criticalToActor: "Critical To Actor",
          criticalToEnemy: "Critical To Enemy",
          counterAttack: "Counter Attack",
          debuffAdd: "Debuff Add",
          defeat: "Defeat",
          enemyDamage: "Enemy Damage",
          enemyNoDamage: "Enemy No Damage",
          enemyRecovery: "Enemy Recovery",
          enemyDrain: "Enemy Drain",
          enemyGain: "Enemy Gain",
          enemyLoss: "Enemy Loss",
          enemyNoHit: "Enemy No Hit",
          evasion: "Evasion",
          escapeFailure: "Escape Failure",
          escapeStart: "Escape Start",
          emerge: "Emerge",
          expNext: "Exp Next",
          expTotal: "Exp Total",
          file: "File",
          levelUp: "Level Up",
          obtainExp: "Obtain Exp",
          obtainGold: "Obtain Gold",
          obtainItem: "Obtain Item",
          obtainSkill: "Obtain Skill",
          partyName: "Party Name",
          loadMessage: "Load Message",
          meVolume: "ME Volume",
          possession: "Possession",
          preemptive: "Preemptive",
          saveMessage: "Save Message",
          seVolume: "SE Volume",
          magicEvasion: "Magic Evasion",
          magicReflection: "Magic Reflection",
          substitute: "Substitute",
          surprise: "Surprise",
          useItem: "Use Item",
          victory: "Victory",
          touchUI: "Touch UI",
        },
      },
      images: {
        title1Name: "Title1",
        title2Name: "Title2",
      },
      battleTest: {
        battleback1Name: "Battleback1",
        battleback2Name: "Battleback2",
        testBattlers: [{ actorId: 1, equips: [12, 45], level: 85 }],
      },
      bgm: {
        titleBgm: { name: "TitleBGM", volume: 100, pitch: 100, pan: 0 },
        battleBgm: { name: "BattleBGM", volume: 100, pitch: 100, pan: 0 },
      },
      me: {
        gameoverMe: { name: "GameoverME", volume: 100, pitch: 100, pan: 0 },
        defeatMe: { name: "DefeatME", volume: 100, pitch: 100, pan: 0 },
        victoryMe: { name: "VictoryME", volume: 100, pitch: 100, pan: 0 },
      },
      dataNames: {
        armorTypes: ["Armor1", "Armor2"],
        elements: ["Element1", "Element2"],
        equipTypes: ["EquipType1", "EquipType2"],
        weaponTypes: ["WeaponType1", "WeaponType2"],
        skillTypes: ["SkillType1", "SkillType2"],
        switches: ["Switch1", "Switch2"],
        variables: ["Variable1", "Variable2"],
      },
      itemCategories: {
        item: true,
        weapon: true,
        armor: false,
        keyItem: false,
      },
      vehicles: {
        airship: {
          characterName: "Airship",
          characterIndex: 0,
          bgm: { name: "AirshipBGM", volume: 100, pitch: 100, pan: 0 },
          startMapId: 0,
          startX: 0,
          startY: 0,
        },
        boat: {
          characterName: "Boat",
          characterIndex: 0,
          bgm: { name: "BoatBGM", volume: 100, pitch: 100, pan: 0 },
          startMapId: 0,
          startX: 0,
          startY: 0,
        },
        ship: {
          characterName: "Ship",
          characterIndex: 0,
          bgm: { name: "ShipBGM", volume: 100, pitch: 100, pan: 0 },
          startMapId: 0,
          startX: 0,
          startY: 0,
        },
      },
      gameInit: {
        startMapId: 58,
        startX: 22,
        startY: 44,
        partyMembers: [1, 2, 3],
      },
      editorTemporary: {
        battlerName: "BattlerName",
        battlerHue: 0,
        editMapId: 956,
      },
      menuComamnds: {
        item: true,
        skill: true,
        equip: true,
        status: false,
        formation: false,
        save: false,
      },
      battle: {
        battleSystem: 1,
        magicSkills: [1, 4],
      },
    });
    expect(data.locale).toEqual(expected.locale);
    expect(data.advanced).toEqual(expected.advanced);
    expect(data.editor).toEqual(expected.editor);
    expect(data.sounds).toEqual(expected.sounds);
    expect(data.terms.commands).toEqual(expected.terms.commands);
    expect(data.terms.messages).toEqual(expected.terms.messages);
    expect(data.terms.basic).toEqual(expected.terms.basic);
    expect(data.terms.params).toEqual(expected.terms.params);
    expect(data.ship).toEqual(expected.ship);
    expect(data.airship).toEqual(expected.airship);
    expect(data.boat).toEqual(expected.boat);
    expect(data.menuCommands).toEqual(expected.menuCommands);
    expect(data).toEqual(expected);
  });
});
