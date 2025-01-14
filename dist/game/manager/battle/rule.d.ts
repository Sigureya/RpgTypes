interface Battle_Rule {
    checkBattleEnd(): boolean;
    endAction(): void;
    updateAction(): void;
    startAction(): void;
}
