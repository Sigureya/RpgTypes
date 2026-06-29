export interface Rmmz_Action_Target<Battler, Team> {
    makeTargets(): Battler[];
    repeatTargets(targets: ReadonlyArray<Battler>): Battler[];
    confusionTarget(): Battler;
    targetsForEveryone(): Battler[];
    targetsForOpponents(): Battler[];
    targetsForFriends(): Battler[];
    randomTargets(unit: Team): Battler[];
    targetsForDead(unit: Team): Battler[];
    targetsForAlive(unit: Team): Battler[];
    targetsForDeadAndAlive(unit: Team): Battler[];
}
