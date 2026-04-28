import { describe, expect, test } from "vitest";
import { makeMapDataFromTestDataSource } from "./makeTestData";
import type { Data_Map } from "./rpg";

describe("makeMapDataFromTestDataSource", () => {
  test("should create Data_Map with correct values from TestDataSourceWithNote", () => {
    const expected: Data_Map = {
      autoplayBgm: false,
      autoplayBgs: false,
      battleback1Name: "image",
      battleback2Name: "image",
      bgm: { name: "audio", pan: 0, pitch: 100, volume: 100 },
      bgs: { name: "audio", pan: 0, pitch: 100, volume: 100 },
      data: [],
      disableDashing: false,
      displayName: "text",
      encounterList: [],
      encounterStep: 30,
      events: [
        null,
        {
          id: 1,
          name: "",
          note: "note",
          pages: [
            {
              conditions: {
                actorId: 0,
                actorValid: false,
                itemId: 0,
                itemValid: false,
                selfSwitchCh: "A",
                selfSwitchValid: false,
                switch1Id: 0,
                switch1Valid: false,
                switch2Id: 0,
                switch2Valid: false,
                variableId: 0,
                variableValid: false,
                variableValue: 0,
              },
              directionFix: false,
              image: {
                characterIndex: 0,
                characterName: "image",
                direction: 2,
                pattern: 0,
                tileId: 0,
              },
              list: [
                {
                  code: 241,
                  indent: 0,
                  parameters: [
                    { name: "audio", pan: 0, pitch: 100, volume: 100 },
                  ],
                },
                {
                  code: 245,
                  indent: 0,
                  parameters: [
                    { name: "audio", pan: 0, pitch: 100, volume: 100 },
                  ],
                },
                {
                  code: 249,
                  indent: 0,
                  parameters: [
                    { name: "audio", pan: 0, pitch: 100, volume: 100 },
                  ],
                },
                {
                  code: 250,
                  indent: 0,
                  parameters: [
                    { name: "audio", pan: 0, pitch: 100, volume: 100 },
                  ],
                },
                {
                  code: 132,
                  indent: 0,
                  parameters: [
                    { name: "audio", pan: 0, pitch: 100, volume: 100 },
                  ],
                },
                {
                  code: 133,
                  indent: 0,
                  parameters: [
                    { name: "audio", pan: 0, pitch: 100, volume: 100 },
                  ],
                },
                {
                  code: 139,
                  indent: 0,
                  parameters: [
                    { name: "audio", pan: 0, pitch: 100, volume: 100 },
                  ],
                },
              ],
              moveFrequency: 5,
              moveRoute: {
                list: [],
                repeat: false,
                skippable: false,
                wait: false,
              },
              moveSpeed: 3,
              moveType: 0,
              priorityType: 1,
              stepAnime: false,
              through: false,
              trigger: 0,
              walkAnime: false,
            },
            {
              conditions: {
                actorId: 0,
                actorValid: false,
                itemId: 0,
                itemValid: false,
                selfSwitchCh: "A",
                selfSwitchValid: false,
                switch1Id: 0,
                switch1Valid: false,
                switch2Id: 0,
                switch2Valid: false,
                variableId: 0,
                variableValid: false,
                variableValue: 0,
              },
              directionFix: false,
              image: {
                characterIndex: 0,
                characterName: "image",
                direction: 4,
                pattern: 0,
                tileId: 0,
              },
              list: [
                {
                  code: 101,
                  indent: 0,
                  parameters: ["image", 0, 0, 2, "text"],
                },
                { code: 401, indent: 0, parameters: ["text"] },
                {
                  code: 322,
                  indent: 0,
                  parameters: [1, "image", 0, "image", 0, "image"],
                },
                { code: 320, indent: 0, parameters: [1, "text"] },
                { code: 324, indent: 0, parameters: [1, "text"] },
                { code: 108, indent: 0, parameters: ["text"] },
              ],
              moveFrequency: 5,
              moveRoute: {
                list: [],
                repeat: false,
                skippable: false,
                wait: false,
              },
              moveSpeed: 3,
              moveType: 0,
              priorityType: 1,
              stepAnime: false,
              through: false,
              trigger: 0,
              walkAnime: false,
            },
          ],
          x: 0,
          y: 0,
        },
      ],
      height: 0,
      note: "note",
      parallaxLoopX: false,
      parallaxLoopY: false,
      parallaxName: "image",
      parallaxShow: false,
      parallaxSx: 0,
      parallaxSy: 0,
      scrollType: 0,
      specifyBattleback: false,
      tilesetId: 1,
      width: 0,
    };

    const result = makeMapDataFromTestDataSource({
      text: "text",
      image: "image",
      audio: "audio",
      note: "note",
    });
    expect(result).toEqual(expected);
  });
});
