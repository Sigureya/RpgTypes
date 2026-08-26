import type {
  Command_ChangeEnemyHP,
  Command_ChangeEnemyMP,
  Command_ChangeEnemyTP,
  Command_EnemyAppear,
  Command_EnemyRecoverAll,
  Command_EnemyTransform,
} from "@RpgTypes/rmmz/eventCommand";
import { allowDeathByEnemy } from "@RpgTypes/rmmz/eventCommand/commands/enemy/change";
import type {
  Rmmz_Battler,
  Rmmz_Battler_Poitns,
  Rmmz_Enemy,
  Rmmz_Members,
  Rmmz_Troop,
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

export const commandEnemyAppear = <T extends Pick<Rmmz_Enemy, "appear">>(
  command: Command_EnemyAppear,
  troop: Pick<Rmmz_Troop<T>, "members" | "makeUniqueNames">,
): void => {
  iterateEnemyIndex(troop, command.parameters[0], (enemy) => {
    enemy.appear();
  });
  troop.makeUniqueNames();
};

export const commandEnemyTransform = <T extends Pick<Rmmz_Enemy, "transform">>(
  command: Command_EnemyTransform,
  troop: Pick<Rmmz_Troop<T>, "members" | "makeUniqueNames">,
): void => {
  iterateEnemyIndex(troop, command.parameters[0], (enemy) => {
    enemy.transform(command.parameters[1]);
  });
  troop.makeUniqueNames();
};

export const commandEnemyRecoverAll = (
  command: Command_EnemyRecoverAll,
  troop: Rmmz_Members<Pick<Rmmz_Battler, "recoverAll">>,
): void => {
  iterateEnemyIndex(troop, command.parameters[0], (enemy) => {
    enemy.recoverAll();
  });
};

export const commandChangeEnemyMp = (
  command: Command_ChangeEnemyMP,
  troop: Rmmz_Members<Rmmz_Battler_Poitns>,
  variables: Rmmz_Variables,
): void => {
  const value = resolveCommandValueByEnemy(command, variables);
  iterateEnemyIndex(troop, command.parameters[0], (enemy) => {
    enemy.gainMp(value);
  });
};

export const commandChangeEnemyTp = (
  command: Command_ChangeEnemyTP,
  troop: Rmmz_Members<Rmmz_Battler_Poitns>,
  variables: Rmmz_Variables,
): void => {
  const value = resolveCommandValueByEnemy(command, variables);
  iterateEnemyIndex(troop, command.parameters[0], (enemy) => {
    enemy.gainTp(value);
  });
};

export const commandChangeEnemyHp = (
  command: Command_ChangeEnemyHP,
  troop: Rmmz_Members<Rmmz_Battler_Poitns>,
  variables: Rmmz_Variables,
): void => {
  const value = resolveCommandValueByEnemy(command, variables);
  const death: boolean = allowDeathByEnemy(command);
  const targetIndex: number = command.parameters[0];
  if (death) {
    iterateEnemyIndex(troop, targetIndex, (enemy) => {
      enemy.gainHp(value);
    });
    return;
  }
  iterateEnemyIndex(troop, targetIndex, (enemy) => {
    const hpValue = hpValueEx(value, enemy);
    enemy.gainHp(hpValue);
  });
};

const hpValueEx = (value: number, battler: Rmmz_Battler_Poitns): number => {
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
