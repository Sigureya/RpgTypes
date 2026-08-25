import type {
  Command_ChangeEnemyHP,
  Command_ChangeEnemyMP,
  Command_ChangeEnemyTP,
} from "@RpgTypes/rmmz/eventCommand";
import { allowDeathByEnemy } from "@RpgTypes/rmmz/eventCommand/commands/enemy/change";
import type {
  Rmmz_Battler,
  Rmmz_Members,
  Rmmz_Variables,
} from "@RpgTypes/rmmzRuntime";
import { operateValue } from "@RpgTypes/rmmzRuntime";

export const iterateEnemyIndex = <T>(
  troop: Rmmz_Members<T>,
  index: number,
  fn: (e: T) => void,
): void => {
  const members = troop.members();
  if (index < 0) {
    members.forEach(fn);
    return;
  }
  const enemy = members[index];
  if (enemy) {
    fn(enemy);
  }
};

export const commandChangeEnemyMp = (
  command: Command_ChangeEnemyMP,
  troop: Rmmz_Members<Rmmz_Battler>,
  variables: Rmmz_Variables,
): void => {
  const value = resolveCommandValueByEnemy(command, variables);
  iterateEnemyIndex(troop, command.parameters[0], (enemy) => {
    enemy.gainMp(value);
  });
};

export const commandChangeEnemyTp = (
  command: Command_ChangeEnemyTP,
  troop: Rmmz_Members<Rmmz_Battler>,
  variables: Rmmz_Variables,
): void => {
  const value = resolveCommandValueByEnemy(command, variables);
  iterateEnemyIndex(troop, command.parameters[0], (enemy) => {
    enemy.gainTp(value);
  });
};

export const commandChangeEnemyHp = (
  command: Command_ChangeEnemyHP,
  troop: Rmmz_Members<Rmmz_Battler>,
  variables: Rmmz_Variables,
): void => {
  const value = resolveCommandValueByEnemy(command, variables);
  const death = allowDeathByEnemy(command);
  const targetIndex: number = command.parameters[0];
  if (death) {
    iterateEnemyIndex(troop, targetIndex, (enemy) => {
      enemy.gainHp(value, true);
    });
    return;
  }
  iterateEnemyIndex(troop, targetIndex, (enemy) => {
    const hpValue = hpValueEx(value, enemy);
    enemy.gainHp(hpValue, false);
  });
};

const hpValueEx = (value: number, battler: Rmmz_Battler): number => {
  const hp = battler.hp;
  if (hp <= -value) {
    return 1 - hp;
  }
  return value;
};

const resolveCommandValueByEnemy = (
  {
    parameters,
  }: Command_ChangeEnemyHP | Command_ChangeEnemyMP | Command_ChangeEnemyTP,
  variables: Rmmz_Variables,
): number => {
  return operateValue(variables, parameters[1], parameters[2], parameters[3]);
};
