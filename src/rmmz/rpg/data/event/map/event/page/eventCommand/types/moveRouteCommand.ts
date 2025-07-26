import type { AudioFileParams } from "src/libs/utils";
import type * as MoveRouteConstants from "./domains/moveRoute/constants";
import type { CommandTemplateSimple } from "./template/";

export type MoveRouteMapper = CommandTemplateSimple<
  typeof MoveRouteConstants,
  unknown[],
  {
    // 移動関連
    ROUTE_END: [];
    ROUTE_MOVE_DOWN: [];
    ROUTE_MOVE_LEFT: [];
    ROUTE_MOVE_RIGHT: [];
    ROUTE_MOVE_UP: [];
    ROUTE_MOVE_LOWER_L: [];
    ROUTE_MOVE_LOWER_R: [];
    ROUTE_MOVE_UPPER_L: [];
    ROUTE_MOVE_UPPER_R: [];
    ROUTE_MOVE_RANDOM: [];
    ROUTE_MOVE_TOWARD: [];
    ROUTE_MOVE_AWAY: [];
    ROUTE_MOVE_FORWARD: [];
    ROUTE_MOVE_BACKWARD: [];

    // ジャンプ
    ROUTE_JUMP: [x: number, y: number];

    // ウェイト
    ROUTE_WAIT: [frames: number];

    // 向きの変更
    ROUTE_TURN_DOWN: [];
    ROUTE_TURN_LEFT: [];
    ROUTE_TURN_RIGHT: [];
    ROUTE_TURN_UP: [];
    ROUTE_TURN_90D_R: [];
    ROUTE_TURN_90D_L: [];
    ROUTE_TURN_180D: [];
    ROUTE_TURN_90D_R_L: [];
    ROUTE_TURN_RANDOM: [];
    ROUTE_TURN_TOWARD: [];
    ROUTE_TURN_AWAY: [];

    // スイッチの操作
    ROUTE_SWITCH_ON: [switchId: number];
    ROUTE_SWITCH_OFF: [switchId: number];

    // 移動速度と頻度の変更
    ROUTE_CHANGE_SPEED: [speed: number];
    ROUTE_CHANGE_FREQ: [frequency: number];

    // アニメーション制御
    ROUTE_WALK_ANIME_ON: [];
    ROUTE_WALK_ANIME_OFF: [];
    ROUTE_STEP_ANIME_ON: [];
    ROUTE_STEP_ANIME_OFF: [];

    // 方向固定
    ROUTE_DIR_FIX_ON: [];
    ROUTE_DIR_FIX_OFF: [];

    // 通行設定
    ROUTE_THROUGH_ON: [];
    ROUTE_THROUGH_OFF: [];

    // 透明化
    ROUTE_TRANSPARENT_ON: [];
    ROUTE_TRANSPARENT_OFF: [];

    // キャラクター画像変更
    ROUTE_CHANGE_IMAGE: [characterName: string, characterIndex: number];

    // 不透明度変更
    ROUTE_CHANGE_OPACITY: [opacity: number];

    // 合成方法変更
    ROUTE_CHANGE_BLEND_MODE: [blendMode: number];

    // サウンドエフェクトの再生
    ROUTE_PLAY_SE: [se: AudioFileParams];

    // スクリプト実行
    ROUTE_SCRIPT: [script: string];
  }
>;
export type MoveRouteCommand = MoveRouteMapper["commandType"];
