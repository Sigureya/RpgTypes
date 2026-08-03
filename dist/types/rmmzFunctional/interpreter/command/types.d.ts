import { EventCommand } from '../../../rmmz/eventCommand';
export interface InterprterState {
    /**
     * @description 別シーンから結果を受け取る際に使う
     */
    session: number;
    codeIndex: number;
    source: number;
}
export declare const skipBranch: (state: InterprterState, commands: ReadonlyArray<EventCommand>, indent: number) => InterprterState;
