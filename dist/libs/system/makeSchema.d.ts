import { JSONSchemaType } from 'ajv';
import { OmitByType } from '../templates';
import { AudioFileParams } from '../utils';
import { System_Terms } from './core';
import { EditorSettings, TestBattler } from './gameEdit';
import { Data_System } from './system';
export declare const SCHEMA_SYSTEM_PARTIAL_BUNDLE: JSONSchemaType<OmitByType<Data_System, number[] | string[] | string | number | boolean | AudioFileParams | EditorSettings | System_Terms | AudioFileParams[] | boolean[] | TestBattler[]>>;
