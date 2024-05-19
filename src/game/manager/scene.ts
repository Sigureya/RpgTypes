export interface Manager_Scene {
  reloadGame(): void;
  backgroundBitmap(): any;
}

declare const SceneManager: Manager_Scene;
function hoge() {
  const old = SceneManager.reloadGame;
  SceneManager.reloadGame = function () {
    old.call(this);
  };
}
