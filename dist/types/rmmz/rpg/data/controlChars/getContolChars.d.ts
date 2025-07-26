import { ControlChar } from './types';
/**
 * 指定されたテキストから制御文字を抽出し、ControlChar配列として返します。
 * 制御文字の形式: \(文字)[数字]
 * 文字の大文字小文字を区別しない。
 */
export declare const getControlChars: (text: string) => ControlChar[];
