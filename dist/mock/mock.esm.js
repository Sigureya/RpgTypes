import "../shared/fileio.esm.js";
var e = (e, n, r = /* @__PURE__ */ new Map()) => t(r, e) || (n.mapInfos && e.endsWith("MapInfos.json") ? JSON.stringify(n.mapInfos) : n.actors && e.endsWith("Actors.json") ? JSON.stringify(n.actors) : n.enemies && e.endsWith("Enemies.json") ? JSON.stringify(n.enemies) : n.weapons && e.endsWith("Weapons.json") ? JSON.stringify(n.weapons) : n.classes && e.endsWith("Classes.json") ? JSON.stringify(n.classes) : n.armors && e.endsWith("Armors.json") ? JSON.stringify(n.armors) : n.items && e.endsWith("Items.json") ? JSON.stringify(n.items) : n.troops && e.endsWith("Troops.json") ? JSON.stringify(n.troops) : n.commonEvents && e.endsWith("CommonEvents.json") ? JSON.stringify(n.commonEvents) : n.skills && e.endsWith("Skills.json") ? JSON.stringify(n.skills) : n.states && e.endsWith("States.json") ? JSON.stringify(n.states) : n.animations && e.endsWith("Animations.json") ? JSON.stringify(n.animations) : n.system && e.endsWith("System.json") ? JSON.stringify(n.system) : n.tilesets && e.endsWith("Tilesets.json") ? JSON.stringify(n.tilesets) : void 0), t = (e, t) => {
	if (e.size === 0) return;
	let n = t.match(/Map(\d{4}).json$/);
	if (n) {
		let t = Number.parseInt(n[1], 10);
		if (e.has(t)) return JSON.stringify(e.get(t));
	}
};
export { e as fakeFileRead };
