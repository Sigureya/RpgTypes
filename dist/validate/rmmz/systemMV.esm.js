import { n as e, t } from "../../shared/chunk.esm.js";
import { t as n } from "../../shared/ucs2length.esm.js";
var r = e(t(((e, t) => {
	t.exports = s, t.exports.default = s;
	var r = {
		$defs: {
			Audio: {
				type: "object",
				required: [
					"name",
					"volume",
					"pitch",
					"pan"
				],
				additionalProperties: !1,
				properties: {
					name: { type: "string" },
					volume: { type: "integer" },
					pitch: { type: "integer" },
					pan: { type: "integer" }
				}
			},
			Vehicle: {
				additionalProperties: !1,
				type: "object",
				required: [
					"characterIndex",
					"characterName",
					"bgm",
					"startMapId",
					"startX",
					"startY"
				],
				properties: {
					characterIndex: {
						type: "integer",
						minimum: 0,
						maximum: 7
					},
					characterName: { type: "string" },
					bgm: {
						type: "object",
						additionalProperties: !1,
						required: [
							"name",
							"volume",
							"pitch",
							"pan"
						],
						properties: {
							name: { type: "string" },
							volume: { type: "integer" },
							pitch: { type: "integer" },
							pan: { type: "integer" }
						}
					},
					startMapId: {
						type: "integer",
						minimum: 0
					},
					startX: {
						type: "integer",
						minimum: 0
					},
					startY: {
						type: "integer",
						minimum: 0
					}
				}
			},
			AttackMotion: {
				additionalProperties: !1,
				properties: {
					type: { type: "number" },
					weaponImageId: { type: "number" }
				},
				required: ["type", "weaponImageId"],
				type: "object"
			},
			TestBattler: {
				additionalProperties: !1,
				properties: {
					actorId: {
						minimum: 0,
						type: "integer"
					},
					equips: {
						items: { type: "integer" },
						type: "array"
					},
					level: {
						minimum: 0,
						type: "integer"
					}
				},
				required: [
					"actorId",
					"level",
					"equips"
				],
				type: "object"
			},
			MenuCommands: {
				type: "array",
				maxItems: 6,
				minItems: 6,
				items: { type: "boolean" }
			},
			TermsBasic: {
				items: { type: "string" },
				maxItems: 10,
				minItems: 10,
				type: "array"
			},
			TermsParams: {
				items: {
					minLength: 0,
					type: "string"
				},
				maxItems: 10,
				minItems: 10,
				type: "array"
			},
			TermsCommands: {
				maxItems: 26,
				minItems: 26,
				type: "array",
				items: [
					{ type: "string" },
					{ type: "string" },
					{ type: "string" },
					{ type: "string" },
					{ type: "string" },
					{ type: "string" },
					{ type: "string" },
					{ type: "string" },
					{ type: "string" },
					{ type: "string" },
					{ type: "string" },
					{ type: "string" },
					{ type: "string" },
					{ type: "string" },
					{ type: "string" },
					{ type: "string" },
					{ type: "string" },
					{ type: "string" },
					{ type: "string" },
					{ type: "string" },
					{
						type: "string",
						nullable: !0
					},
					{ type: "string" },
					{ type: "string" },
					{
						type: "string",
						nullable: !0
					},
					{ type: "string" },
					{ type: "string" }
				]
			},
			TermsMessages: {
				type: "object",
				additionalProperties: !1,
				required: /* @__PURE__ */ "actionFailure.actorDamage.actorDrain.actorGain.actorLoss.actorNoDamage.actorNoHit.actorRecovery.alwaysDash.bgmVolume.bgsVolume.buffAdd.buffRemove.commandRemember.counterAttack.criticalToActor.criticalToEnemy.debuffAdd.defeat.emerge.enemyDamage.enemyDrain.enemyGain.enemyLoss.enemyNoDamage.enemyNoHit.enemyRecovery.escapeFailure.escapeStart.evasion.expNext.expTotal.file.levelUp.loadMessage.magicEvasion.magicReflection.meVolume.obtainExp.obtainGold.obtainItem.obtainSkill.partyName.possession.preemptive.saveMessage.seVolume.substitute.surprise.useItem.victory".split("."),
				properties: {
					actionFailure: { type: "string" },
					actorDamage: { type: "string" },
					actorDrain: { type: "string" },
					actorGain: { type: "string" },
					actorLoss: { type: "string" },
					actorNoDamage: { type: "string" },
					actorNoHit: { type: "string" },
					actorRecovery: { type: "string" },
					alwaysDash: { type: "string" },
					bgmVolume: { type: "string" },
					bgsVolume: { type: "string" },
					buffAdd: { type: "string" },
					buffRemove: { type: "string" },
					commandRemember: { type: "string" },
					counterAttack: { type: "string" },
					criticalToActor: { type: "string" },
					criticalToEnemy: { type: "string" },
					debuffAdd: { type: "string" },
					defeat: { type: "string" },
					emerge: { type: "string" },
					enemyDamage: { type: "string" },
					enemyDrain: { type: "string" },
					enemyGain: { type: "string" },
					enemyLoss: { type: "string" },
					enemyNoDamage: { type: "string" },
					enemyNoHit: { type: "string" },
					enemyRecovery: { type: "string" },
					escapeFailure: { type: "string" },
					escapeStart: { type: "string" },
					evasion: { type: "string" },
					expNext: { type: "string" },
					expTotal: { type: "string" },
					file: { type: "string" },
					levelUp: { type: "string" },
					loadMessage: { type: "string" },
					magicEvasion: { type: "string" },
					magicReflection: { type: "string" },
					meVolume: { type: "string" },
					obtainExp: { type: "string" },
					obtainGold: { type: "string" },
					obtainItem: { type: "string" },
					obtainSkill: { type: "string" },
					partyName: { type: "string" },
					possession: { type: "string" },
					preemptive: { type: "string" },
					saveMessage: { type: "string" },
					seVolume: { type: "string" },
					substitute: { type: "string" },
					surprise: { type: "string" },
					useItem: { type: "string" },
					victory: { type: "string" }
				}
			}
		},
		additionalProperties: !1,
		properties: {
			airship: { $ref: "#/$defs/Vehicle" },
			armorTypes: {
				items: { type: "string" },
				type: "array"
			},
			attackMotions: {
				items: { $ref: "#/$defs/AttackMotion" },
				type: "array"
			},
			battleBgm: { $ref: "#/$defs/Audio" },
			battleback1Name: { type: "string" },
			battleback2Name: { type: "string" },
			battlerHue: { type: "integer" },
			battlerName: { type: "string" },
			boat: { $ref: "#/$defs/Vehicle" },
			currencyUnit: { type: "string" },
			defeatMe: { $ref: "#/$defs/Audio" },
			editMapId: {
				minimum: 0,
				type: "integer"
			},
			elements: {
				items: { type: "string" },
				type: "array"
			},
			equipTypes: {
				items: { type: "string" },
				type: "array"
			},
			gameTitle: { type: "string" },
			gameoverMe: { $ref: "#/$defs/Audio" },
			locale: { type: "string" },
			magicSkills: {
				items: { type: "integer" },
				type: "array"
			},
			menuCommands: { $ref: "#/$defs/MenuCommands" },
			optDisplayTp: { type: "boolean" },
			optDrawTitle: { type: "boolean" },
			optExtraExp: { type: "boolean" },
			optFloorDeath: { type: "boolean" },
			optFollowers: { type: "boolean" },
			optSideView: { type: "boolean" },
			optSlipDeath: { type: "boolean" },
			optTransparent: { type: "boolean" },
			partyMembers: {
				items: { type: "integer" },
				type: "array"
			},
			ship: { $ref: "#/$defs/Vehicle" },
			skillTypes: {
				items: { type: "string" },
				type: "array"
			},
			sounds: {
				items: { $ref: "#/$defs/Audio" },
				maxItems: 24,
				minItems: 24,
				type: "array"
			},
			startMapId: {
				minimum: 0,
				type: "integer"
			},
			startX: {
				minimum: 0,
				type: "integer"
			},
			startY: {
				minimum: 0,
				type: "integer"
			},
			switches: {
				items: { type: "string" },
				type: "array"
			},
			terms: {
				additionalProperties: !1,
				properties: {
					basic: { $ref: "#/$defs/TermsBasic" },
					commands: { $ref: "#/$defs/TermsCommands" },
					messages: { $ref: "#/$defs/TermsMessages" },
					params: { $ref: "#/$defs/TermsParams" }
				},
				required: [
					"messages",
					"commands",
					"basic",
					"params"
				],
				type: "object"
			},
			testBattlers: {
				items: { $ref: "#/$defs/TestBattler" },
				type: "array"
			},
			testTroopId: {
				minimum: 0,
				type: "integer"
			},
			title1Name: { type: "string" },
			title2Name: { type: "string" },
			titleBgm: { $ref: "#/$defs/Audio" },
			variables: {
				items: { type: "string" },
				type: "array"
			},
			versionId: { type: "integer" },
			victoryMe: { $ref: "#/$defs/Audio" },
			weaponTypes: {
				items: { type: "string" },
				type: "array"
			},
			windowTone: {
				items: {
					maximum: 255,
					minimum: 0,
					type: "integer"
				},
				type: "array"
			}
		},
		required: /* @__PURE__ */ "gameTitle.currencyUnit.terms.ship.boat.airship.titleBgm.battleBgm.gameoverMe.victoryMe.defeatMe.attackMotions.optDisplayTp.optFloorDeath.optFollowers.optSideView.optSlipDeath.optTransparent.optDrawTitle.optExtraExp.startMapId.startX.startY.elements.weaponTypes.armorTypes.equipTypes.skillTypes.switches.variables.magicSkills.battleback1Name.battleback2Name.testTroopId.partyMembers.testBattlers.editMapId.battlerHue.battlerName.sounds.title1Name.title2Name.versionId.locale.windowTone.menuCommands".split("."),
		type: "object"
	}, i = {
		type: "object",
		additionalProperties: !1,
		required: /* @__PURE__ */ "actionFailure.actorDamage.actorDrain.actorGain.actorLoss.actorNoDamage.actorNoHit.actorRecovery.alwaysDash.bgmVolume.bgsVolume.buffAdd.buffRemove.commandRemember.counterAttack.criticalToActor.criticalToEnemy.debuffAdd.defeat.emerge.enemyDamage.enemyDrain.enemyGain.enemyLoss.enemyNoDamage.enemyNoHit.enemyRecovery.escapeFailure.escapeStart.evasion.expNext.expTotal.file.levelUp.loadMessage.magicEvasion.magicReflection.meVolume.obtainExp.obtainGold.obtainItem.obtainSkill.partyName.possession.preemptive.saveMessage.seVolume.substitute.surprise.useItem.victory".split("."),
		properties: {
			actionFailure: { type: "string" },
			actorDamage: { type: "string" },
			actorDrain: { type: "string" },
			actorGain: { type: "string" },
			actorLoss: { type: "string" },
			actorNoDamage: { type: "string" },
			actorNoHit: { type: "string" },
			actorRecovery: { type: "string" },
			alwaysDash: { type: "string" },
			bgmVolume: { type: "string" },
			bgsVolume: { type: "string" },
			buffAdd: { type: "string" },
			buffRemove: { type: "string" },
			commandRemember: { type: "string" },
			counterAttack: { type: "string" },
			criticalToActor: { type: "string" },
			criticalToEnemy: { type: "string" },
			debuffAdd: { type: "string" },
			defeat: { type: "string" },
			emerge: { type: "string" },
			enemyDamage: { type: "string" },
			enemyDrain: { type: "string" },
			enemyGain: { type: "string" },
			enemyLoss: { type: "string" },
			enemyNoDamage: { type: "string" },
			enemyNoHit: { type: "string" },
			enemyRecovery: { type: "string" },
			escapeFailure: { type: "string" },
			escapeStart: { type: "string" },
			evasion: { type: "string" },
			expNext: { type: "string" },
			expTotal: { type: "string" },
			file: { type: "string" },
			levelUp: { type: "string" },
			loadMessage: { type: "string" },
			magicEvasion: { type: "string" },
			magicReflection: { type: "string" },
			meVolume: { type: "string" },
			obtainExp: { type: "string" },
			obtainGold: { type: "string" },
			obtainItem: { type: "string" },
			obtainSkill: { type: "string" },
			partyName: { type: "string" },
			possession: { type: "string" },
			preemptive: { type: "string" },
			saveMessage: { type: "string" },
			seVolume: { type: "string" },
			substitute: { type: "string" },
			surprise: { type: "string" },
			useItem: { type: "string" },
			victory: { type: "string" }
		}
	}, a = Object.prototype.hasOwnProperty, o = n().default;
	function s(e, { instancePath: t = "", parentData: n, parentDataProperty: c, rootData: l = e } = {}) {
		if (!e || typeof e != "object" || Array.isArray(e)) return s.errors = [{
			instancePath: t,
			schemaPath: "#/type",
			keyword: "type",
			params: { type: "object" },
			message: "must be object"
		}], !1;
		{
			let n;
			if (e.gameTitle === void 0 && (n = "gameTitle") || e.currencyUnit === void 0 && (n = "currencyUnit") || e.terms === void 0 && (n = "terms") || e.ship === void 0 && (n = "ship") || e.boat === void 0 && (n = "boat") || e.airship === void 0 && (n = "airship") || e.titleBgm === void 0 && (n = "titleBgm") || e.battleBgm === void 0 && (n = "battleBgm") || e.gameoverMe === void 0 && (n = "gameoverMe") || e.victoryMe === void 0 && (n = "victoryMe") || e.defeatMe === void 0 && (n = "defeatMe") || e.attackMotions === void 0 && (n = "attackMotions") || e.optDisplayTp === void 0 && (n = "optDisplayTp") || e.optFloorDeath === void 0 && (n = "optFloorDeath") || e.optFollowers === void 0 && (n = "optFollowers") || e.optSideView === void 0 && (n = "optSideView") || e.optSlipDeath === void 0 && (n = "optSlipDeath") || e.optTransparent === void 0 && (n = "optTransparent") || e.optDrawTitle === void 0 && (n = "optDrawTitle") || e.optExtraExp === void 0 && (n = "optExtraExp") || e.startMapId === void 0 && (n = "startMapId") || e.startX === void 0 && (n = "startX") || e.startY === void 0 && (n = "startY") || e.elements === void 0 && (n = "elements") || e.weaponTypes === void 0 && (n = "weaponTypes") || e.armorTypes === void 0 && (n = "armorTypes") || e.equipTypes === void 0 && (n = "equipTypes") || e.skillTypes === void 0 && (n = "skillTypes") || e.switches === void 0 && (n = "switches") || e.variables === void 0 && (n = "variables") || e.magicSkills === void 0 && (n = "magicSkills") || e.battleback1Name === void 0 && (n = "battleback1Name") || e.battleback2Name === void 0 && (n = "battleback2Name") || e.testTroopId === void 0 && (n = "testTroopId") || e.partyMembers === void 0 && (n = "partyMembers") || e.testBattlers === void 0 && (n = "testBattlers") || e.editMapId === void 0 && (n = "editMapId") || e.battlerHue === void 0 && (n = "battlerHue") || e.battlerName === void 0 && (n = "battlerName") || e.sounds === void 0 && (n = "sounds") || e.title1Name === void 0 && (n = "title1Name") || e.title2Name === void 0 && (n = "title2Name") || e.versionId === void 0 && (n = "versionId") || e.locale === void 0 && (n = "locale") || e.windowTone === void 0 && (n = "windowTone") || e.menuCommands === void 0 && (n = "menuCommands")) return s.errors = [{
				instancePath: t,
				schemaPath: "#/required",
				keyword: "required",
				params: { missingProperty: n },
				message: "must have required property '" + n + "'"
			}], !1;
			for (let n in e) if (!a.call(r.properties, n)) return s.errors = [{
				instancePath: t,
				schemaPath: "#/additionalProperties",
				keyword: "additionalProperties",
				params: { additionalProperty: n },
				message: "must NOT have additional properties"
			}], !1;
			if (e.airship !== void 0) {
				let n = e.airship;
				if (!n || typeof n != "object" || Array.isArray(n)) return s.errors = [{
					instancePath: t + "/airship",
					schemaPath: "#/$defs/Vehicle/type",
					keyword: "type",
					params: { type: "object" },
					message: "must be object"
				}], !1;
				{
					let e;
					if (n.characterIndex === void 0 && (e = "characterIndex") || n.characterName === void 0 && (e = "characterName") || n.bgm === void 0 && (e = "bgm") || n.startMapId === void 0 && (e = "startMapId") || n.startX === void 0 && (e = "startX") || n.startY === void 0 && (e = "startY")) return s.errors = [{
						instancePath: t + "/airship",
						schemaPath: "#/$defs/Vehicle/required",
						keyword: "required",
						params: { missingProperty: e },
						message: "must have required property '" + e + "'"
					}], !1;
					for (let e in n) if (e !== "characterIndex" && e !== "characterName" && e !== "bgm" && e !== "startMapId" && e !== "startX" && e !== "startY") return s.errors = [{
						instancePath: t + "/airship",
						schemaPath: "#/$defs/Vehicle/additionalProperties",
						keyword: "additionalProperties",
						params: { additionalProperty: e },
						message: "must NOT have additional properties"
					}], !1;
					if (n.characterIndex !== void 0) {
						let e = n.characterIndex;
						if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return s.errors = [{
							instancePath: t + "/airship/characterIndex",
							schemaPath: "#/$defs/Vehicle/properties/characterIndex/type",
							keyword: "type",
							params: { type: "integer" },
							message: "must be integer"
						}], !1;
						if (typeof e == "number" && isFinite(e)) {
							if (e > 7 || isNaN(e)) return s.errors = [{
								instancePath: t + "/airship/characterIndex",
								schemaPath: "#/$defs/Vehicle/properties/characterIndex/maximum",
								keyword: "maximum",
								params: {
									comparison: "<=",
									limit: 7
								},
								message: "must be <= 7"
							}], !1;
							if (e < 0 || isNaN(e)) return s.errors = [{
								instancePath: t + "/airship/characterIndex",
								schemaPath: "#/$defs/Vehicle/properties/characterIndex/minimum",
								keyword: "minimum",
								params: {
									comparison: ">=",
									limit: 0
								},
								message: "must be >= 0"
							}], !1;
						}
						var u = !0;
					} else u = !0;
					if (u) {
						if (n.characterName !== void 0) {
							if (typeof n.characterName != "string") return s.errors = [{
								instancePath: t + "/airship/characterName",
								schemaPath: "#/$defs/Vehicle/properties/characterName/type",
								keyword: "type",
								params: { type: "string" },
								message: "must be string"
							}], !1;
							u = !0;
						} else u = !0;
						if (u) {
							if (n.bgm !== void 0) {
								let e = n.bgm;
								if (!e || typeof e != "object" || Array.isArray(e)) return s.errors = [{
									instancePath: t + "/airship/bgm",
									schemaPath: "#/$defs/Vehicle/properties/bgm/type",
									keyword: "type",
									params: { type: "object" },
									message: "must be object"
								}], !1;
								{
									let n;
									if (e.name === void 0 && (n = "name") || e.volume === void 0 && (n = "volume") || e.pitch === void 0 && (n = "pitch") || e.pan === void 0 && (n = "pan")) return s.errors = [{
										instancePath: t + "/airship/bgm",
										schemaPath: "#/$defs/Vehicle/properties/bgm/required",
										keyword: "required",
										params: { missingProperty: n },
										message: "must have required property '" + n + "'"
									}], !1;
									for (let n in e) if (n !== "name" && n !== "volume" && n !== "pitch" && n !== "pan") return s.errors = [{
										instancePath: t + "/airship/bgm",
										schemaPath: "#/$defs/Vehicle/properties/bgm/additionalProperties",
										keyword: "additionalProperties",
										params: { additionalProperty: n },
										message: "must NOT have additional properties"
									}], !1;
									if (e.name !== void 0) {
										if (typeof e.name != "string") return s.errors = [{
											instancePath: t + "/airship/bgm/name",
											schemaPath: "#/$defs/Vehicle/properties/bgm/properties/name/type",
											keyword: "type",
											params: { type: "string" },
											message: "must be string"
										}], !1;
										var d = !0;
									} else d = !0;
									if (d) {
										if (e.volume !== void 0) {
											let n = e.volume;
											if (typeof n != "number" || n % 1 || isNaN(n) || !isFinite(n)) return s.errors = [{
												instancePath: t + "/airship/bgm/volume",
												schemaPath: "#/$defs/Vehicle/properties/bgm/properties/volume/type",
												keyword: "type",
												params: { type: "integer" },
												message: "must be integer"
											}], !1;
											d = !0;
										} else d = !0;
										if (d) {
											if (e.pitch !== void 0) {
												let n = e.pitch;
												if (typeof n != "number" || n % 1 || isNaN(n) || !isFinite(n)) return s.errors = [{
													instancePath: t + "/airship/bgm/pitch",
													schemaPath: "#/$defs/Vehicle/properties/bgm/properties/pitch/type",
													keyword: "type",
													params: { type: "integer" },
													message: "must be integer"
												}], !1;
												d = !0;
											} else d = !0;
											if (d) if (e.pan !== void 0) {
												let n = e.pan;
												if (typeof n != "number" || n % 1 || isNaN(n) || !isFinite(n)) return s.errors = [{
													instancePath: t + "/airship/bgm/pan",
													schemaPath: "#/$defs/Vehicle/properties/bgm/properties/pan/type",
													keyword: "type",
													params: { type: "integer" },
													message: "must be integer"
												}], !1;
												d = !0;
											} else d = !0;
										}
									}
								}
								u = !0;
							} else u = !0;
							if (u) {
								if (n.startMapId !== void 0) {
									let e = n.startMapId;
									if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return s.errors = [{
										instancePath: t + "/airship/startMapId",
										schemaPath: "#/$defs/Vehicle/properties/startMapId/type",
										keyword: "type",
										params: { type: "integer" },
										message: "must be integer"
									}], !1;
									if (typeof e == "number" && isFinite(e) && (e < 0 || isNaN(e))) return s.errors = [{
										instancePath: t + "/airship/startMapId",
										schemaPath: "#/$defs/Vehicle/properties/startMapId/minimum",
										keyword: "minimum",
										params: {
											comparison: ">=",
											limit: 0
										},
										message: "must be >= 0"
									}], !1;
									u = !0;
								} else u = !0;
								if (u) {
									if (n.startX !== void 0) {
										let e = n.startX;
										if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return s.errors = [{
											instancePath: t + "/airship/startX",
											schemaPath: "#/$defs/Vehicle/properties/startX/type",
											keyword: "type",
											params: { type: "integer" },
											message: "must be integer"
										}], !1;
										if (typeof e == "number" && isFinite(e) && (e < 0 || isNaN(e))) return s.errors = [{
											instancePath: t + "/airship/startX",
											schemaPath: "#/$defs/Vehicle/properties/startX/minimum",
											keyword: "minimum",
											params: {
												comparison: ">=",
												limit: 0
											},
											message: "must be >= 0"
										}], !1;
										u = !0;
									} else u = !0;
									if (u) if (n.startY !== void 0) {
										let e = n.startY;
										if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return s.errors = [{
											instancePath: t + "/airship/startY",
											schemaPath: "#/$defs/Vehicle/properties/startY/type",
											keyword: "type",
											params: { type: "integer" },
											message: "must be integer"
										}], !1;
										if (typeof e == "number" && isFinite(e) && (e < 0 || isNaN(e))) return s.errors = [{
											instancePath: t + "/airship/startY",
											schemaPath: "#/$defs/Vehicle/properties/startY/minimum",
											keyword: "minimum",
											params: {
												comparison: ">=",
												limit: 0
											},
											message: "must be >= 0"
										}], !1;
										u = !0;
									} else u = !0;
								}
							}
						}
					}
				}
				var f = !0;
			} else f = !0;
			if (f) {
				if (e.armorTypes !== void 0) {
					let n = e.armorTypes;
					if (!Array.isArray(n)) return s.errors = [{
						instancePath: t + "/armorTypes",
						schemaPath: "#/properties/armorTypes/type",
						keyword: "type",
						params: { type: "array" },
						message: "must be array"
					}], !1;
					{
						let e = n.length;
						for (let r = 0; r < e; r++) if (typeof n[r] != "string") return s.errors = [{
							instancePath: t + "/armorTypes/" + r,
							schemaPath: "#/properties/armorTypes/items/type",
							keyword: "type",
							params: { type: "string" },
							message: "must be string"
						}], !1;
					}
					f = !0;
				} else f = !0;
				if (f) {
					if (e.attackMotions !== void 0) {
						let n = e.attackMotions;
						if (!Array.isArray(n)) return s.errors = [{
							instancePath: t + "/attackMotions",
							schemaPath: "#/properties/attackMotions/type",
							keyword: "type",
							params: { type: "array" },
							message: "must be array"
						}], !1;
						{
							let e = n.length;
							for (let r = 0; r < e; r++) {
								let e = n[r];
								if (!e || typeof e != "object" || Array.isArray(e)) return s.errors = [{
									instancePath: t + "/attackMotions/" + r,
									schemaPath: "#/$defs/AttackMotion/type",
									keyword: "type",
									params: { type: "object" },
									message: "must be object"
								}], !1;
								{
									let n;
									if (e.type === void 0 && (n = "type") || e.weaponImageId === void 0 && (n = "weaponImageId")) return s.errors = [{
										instancePath: t + "/attackMotions/" + r,
										schemaPath: "#/$defs/AttackMotion/required",
										keyword: "required",
										params: { missingProperty: n },
										message: "must have required property '" + n + "'"
									}], !1;
									for (let n in e) if (n !== "type" && n !== "weaponImageId") return s.errors = [{
										instancePath: t + "/attackMotions/" + r,
										schemaPath: "#/$defs/AttackMotion/additionalProperties",
										keyword: "additionalProperties",
										params: { additionalProperty: n },
										message: "must NOT have additional properties"
									}], !1;
									if (e.type !== void 0) {
										let n = e.type;
										if (typeof n != "number" || !isFinite(n)) return s.errors = [{
											instancePath: t + "/attackMotions/" + r + "/type",
											schemaPath: "#/$defs/AttackMotion/properties/type/type",
											keyword: "type",
											params: { type: "number" },
											message: "must be number"
										}], !1;
										var p = !0;
									} else p = !0;
									if (p) if (e.weaponImageId !== void 0) {
										let n = e.weaponImageId;
										if (typeof n != "number" || !isFinite(n)) return s.errors = [{
											instancePath: t + "/attackMotions/" + r + "/weaponImageId",
											schemaPath: "#/$defs/AttackMotion/properties/weaponImageId/type",
											keyword: "type",
											params: { type: "number" },
											message: "must be number"
										}], !1;
										p = !0;
									} else p = !0;
								}
							}
						}
						f = !0;
					} else f = !0;
					if (f) {
						if (e.battleBgm !== void 0) {
							let n = e.battleBgm;
							if (!n || typeof n != "object" || Array.isArray(n)) return s.errors = [{
								instancePath: t + "/battleBgm",
								schemaPath: "#/$defs/Audio/type",
								keyword: "type",
								params: { type: "object" },
								message: "must be object"
							}], !1;
							{
								let e;
								if (n.name === void 0 && (e = "name") || n.volume === void 0 && (e = "volume") || n.pitch === void 0 && (e = "pitch") || n.pan === void 0 && (e = "pan")) return s.errors = [{
									instancePath: t + "/battleBgm",
									schemaPath: "#/$defs/Audio/required",
									keyword: "required",
									params: { missingProperty: e },
									message: "must have required property '" + e + "'"
								}], !1;
								for (let e in n) if (e !== "name" && e !== "volume" && e !== "pitch" && e !== "pan") return s.errors = [{
									instancePath: t + "/battleBgm",
									schemaPath: "#/$defs/Audio/additionalProperties",
									keyword: "additionalProperties",
									params: { additionalProperty: e },
									message: "must NOT have additional properties"
								}], !1;
								if (n.name !== void 0) {
									if (typeof n.name != "string") return s.errors = [{
										instancePath: t + "/battleBgm/name",
										schemaPath: "#/$defs/Audio/properties/name/type",
										keyword: "type",
										params: { type: "string" },
										message: "must be string"
									}], !1;
									var m = !0;
								} else m = !0;
								if (m) {
									if (n.volume !== void 0) {
										let e = n.volume;
										if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return s.errors = [{
											instancePath: t + "/battleBgm/volume",
											schemaPath: "#/$defs/Audio/properties/volume/type",
											keyword: "type",
											params: { type: "integer" },
											message: "must be integer"
										}], !1;
										m = !0;
									} else m = !0;
									if (m) {
										if (n.pitch !== void 0) {
											let e = n.pitch;
											if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return s.errors = [{
												instancePath: t + "/battleBgm/pitch",
												schemaPath: "#/$defs/Audio/properties/pitch/type",
												keyword: "type",
												params: { type: "integer" },
												message: "must be integer"
											}], !1;
											m = !0;
										} else m = !0;
										if (m) if (n.pan !== void 0) {
											let e = n.pan;
											if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return s.errors = [{
												instancePath: t + "/battleBgm/pan",
												schemaPath: "#/$defs/Audio/properties/pan/type",
												keyword: "type",
												params: { type: "integer" },
												message: "must be integer"
											}], !1;
											m = !0;
										} else m = !0;
									}
								}
							}
							f = !0;
						} else f = !0;
						if (f) {
							if (e.battleback1Name !== void 0) {
								if (typeof e.battleback1Name != "string") return s.errors = [{
									instancePath: t + "/battleback1Name",
									schemaPath: "#/properties/battleback1Name/type",
									keyword: "type",
									params: { type: "string" },
									message: "must be string"
								}], !1;
								f = !0;
							} else f = !0;
							if (f) {
								if (e.battleback2Name !== void 0) {
									if (typeof e.battleback2Name != "string") return s.errors = [{
										instancePath: t + "/battleback2Name",
										schemaPath: "#/properties/battleback2Name/type",
										keyword: "type",
										params: { type: "string" },
										message: "must be string"
									}], !1;
									f = !0;
								} else f = !0;
								if (f) {
									if (e.battlerHue !== void 0) {
										let n = e.battlerHue;
										if (typeof n != "number" || n % 1 || isNaN(n) || !isFinite(n)) return s.errors = [{
											instancePath: t + "/battlerHue",
											schemaPath: "#/properties/battlerHue/type",
											keyword: "type",
											params: { type: "integer" },
											message: "must be integer"
										}], !1;
										f = !0;
									} else f = !0;
									if (f) {
										if (e.battlerName !== void 0) {
											if (typeof e.battlerName != "string") return s.errors = [{
												instancePath: t + "/battlerName",
												schemaPath: "#/properties/battlerName/type",
												keyword: "type",
												params: { type: "string" },
												message: "must be string"
											}], !1;
											f = !0;
										} else f = !0;
										if (f) {
											if (e.boat !== void 0) {
												let n = e.boat;
												if (!n || typeof n != "object" || Array.isArray(n)) return s.errors = [{
													instancePath: t + "/boat",
													schemaPath: "#/$defs/Vehicle/type",
													keyword: "type",
													params: { type: "object" },
													message: "must be object"
												}], !1;
												{
													let e;
													if (n.characterIndex === void 0 && (e = "characterIndex") || n.characterName === void 0 && (e = "characterName") || n.bgm === void 0 && (e = "bgm") || n.startMapId === void 0 && (e = "startMapId") || n.startX === void 0 && (e = "startX") || n.startY === void 0 && (e = "startY")) return s.errors = [{
														instancePath: t + "/boat",
														schemaPath: "#/$defs/Vehicle/required",
														keyword: "required",
														params: { missingProperty: e },
														message: "must have required property '" + e + "'"
													}], !1;
													for (let e in n) if (e !== "characterIndex" && e !== "characterName" && e !== "bgm" && e !== "startMapId" && e !== "startX" && e !== "startY") return s.errors = [{
														instancePath: t + "/boat",
														schemaPath: "#/$defs/Vehicle/additionalProperties",
														keyword: "additionalProperties",
														params: { additionalProperty: e },
														message: "must NOT have additional properties"
													}], !1;
													if (n.characterIndex !== void 0) {
														let e = n.characterIndex;
														if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return s.errors = [{
															instancePath: t + "/boat/characterIndex",
															schemaPath: "#/$defs/Vehicle/properties/characterIndex/type",
															keyword: "type",
															params: { type: "integer" },
															message: "must be integer"
														}], !1;
														if (typeof e == "number" && isFinite(e)) {
															if (e > 7 || isNaN(e)) return s.errors = [{
																instancePath: t + "/boat/characterIndex",
																schemaPath: "#/$defs/Vehicle/properties/characterIndex/maximum",
																keyword: "maximum",
																params: {
																	comparison: "<=",
																	limit: 7
																},
																message: "must be <= 7"
															}], !1;
															if (e < 0 || isNaN(e)) return s.errors = [{
																instancePath: t + "/boat/characterIndex",
																schemaPath: "#/$defs/Vehicle/properties/characterIndex/minimum",
																keyword: "minimum",
																params: {
																	comparison: ">=",
																	limit: 0
																},
																message: "must be >= 0"
															}], !1;
														}
														var h = !0;
													} else h = !0;
													if (h) {
														if (n.characterName !== void 0) {
															if (typeof n.characterName != "string") return s.errors = [{
																instancePath: t + "/boat/characterName",
																schemaPath: "#/$defs/Vehicle/properties/characterName/type",
																keyword: "type",
																params: { type: "string" },
																message: "must be string"
															}], !1;
															h = !0;
														} else h = !0;
														if (h) {
															if (n.bgm !== void 0) {
																let e = n.bgm;
																if (!e || typeof e != "object" || Array.isArray(e)) return s.errors = [{
																	instancePath: t + "/boat/bgm",
																	schemaPath: "#/$defs/Vehicle/properties/bgm/type",
																	keyword: "type",
																	params: { type: "object" },
																	message: "must be object"
																}], !1;
																{
																	let n;
																	if (e.name === void 0 && (n = "name") || e.volume === void 0 && (n = "volume") || e.pitch === void 0 && (n = "pitch") || e.pan === void 0 && (n = "pan")) return s.errors = [{
																		instancePath: t + "/boat/bgm",
																		schemaPath: "#/$defs/Vehicle/properties/bgm/required",
																		keyword: "required",
																		params: { missingProperty: n },
																		message: "must have required property '" + n + "'"
																	}], !1;
																	for (let n in e) if (n !== "name" && n !== "volume" && n !== "pitch" && n !== "pan") return s.errors = [{
																		instancePath: t + "/boat/bgm",
																		schemaPath: "#/$defs/Vehicle/properties/bgm/additionalProperties",
																		keyword: "additionalProperties",
																		params: { additionalProperty: n },
																		message: "must NOT have additional properties"
																	}], !1;
																	if (e.name !== void 0) {
																		if (typeof e.name != "string") return s.errors = [{
																			instancePath: t + "/boat/bgm/name",
																			schemaPath: "#/$defs/Vehicle/properties/bgm/properties/name/type",
																			keyword: "type",
																			params: { type: "string" },
																			message: "must be string"
																		}], !1;
																		var g = !0;
																	} else g = !0;
																	if (g) {
																		if (e.volume !== void 0) {
																			let n = e.volume;
																			if (typeof n != "number" || n % 1 || isNaN(n) || !isFinite(n)) return s.errors = [{
																				instancePath: t + "/boat/bgm/volume",
																				schemaPath: "#/$defs/Vehicle/properties/bgm/properties/volume/type",
																				keyword: "type",
																				params: { type: "integer" },
																				message: "must be integer"
																			}], !1;
																			g = !0;
																		} else g = !0;
																		if (g) {
																			if (e.pitch !== void 0) {
																				let n = e.pitch;
																				if (typeof n != "number" || n % 1 || isNaN(n) || !isFinite(n)) return s.errors = [{
																					instancePath: t + "/boat/bgm/pitch",
																					schemaPath: "#/$defs/Vehicle/properties/bgm/properties/pitch/type",
																					keyword: "type",
																					params: { type: "integer" },
																					message: "must be integer"
																				}], !1;
																				g = !0;
																			} else g = !0;
																			if (g) if (e.pan !== void 0) {
																				let n = e.pan;
																				if (typeof n != "number" || n % 1 || isNaN(n) || !isFinite(n)) return s.errors = [{
																					instancePath: t + "/boat/bgm/pan",
																					schemaPath: "#/$defs/Vehicle/properties/bgm/properties/pan/type",
																					keyword: "type",
																					params: { type: "integer" },
																					message: "must be integer"
																				}], !1;
																				g = !0;
																			} else g = !0;
																		}
																	}
																}
																h = !0;
															} else h = !0;
															if (h) {
																if (n.startMapId !== void 0) {
																	let e = n.startMapId;
																	if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return s.errors = [{
																		instancePath: t + "/boat/startMapId",
																		schemaPath: "#/$defs/Vehicle/properties/startMapId/type",
																		keyword: "type",
																		params: { type: "integer" },
																		message: "must be integer"
																	}], !1;
																	if (typeof e == "number" && isFinite(e) && (e < 0 || isNaN(e))) return s.errors = [{
																		instancePath: t + "/boat/startMapId",
																		schemaPath: "#/$defs/Vehicle/properties/startMapId/minimum",
																		keyword: "minimum",
																		params: {
																			comparison: ">=",
																			limit: 0
																		},
																		message: "must be >= 0"
																	}], !1;
																	h = !0;
																} else h = !0;
																if (h) {
																	if (n.startX !== void 0) {
																		let e = n.startX;
																		if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return s.errors = [{
																			instancePath: t + "/boat/startX",
																			schemaPath: "#/$defs/Vehicle/properties/startX/type",
																			keyword: "type",
																			params: { type: "integer" },
																			message: "must be integer"
																		}], !1;
																		if (typeof e == "number" && isFinite(e) && (e < 0 || isNaN(e))) return s.errors = [{
																			instancePath: t + "/boat/startX",
																			schemaPath: "#/$defs/Vehicle/properties/startX/minimum",
																			keyword: "minimum",
																			params: {
																				comparison: ">=",
																				limit: 0
																			},
																			message: "must be >= 0"
																		}], !1;
																		h = !0;
																	} else h = !0;
																	if (h) if (n.startY !== void 0) {
																		let e = n.startY;
																		if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return s.errors = [{
																			instancePath: t + "/boat/startY",
																			schemaPath: "#/$defs/Vehicle/properties/startY/type",
																			keyword: "type",
																			params: { type: "integer" },
																			message: "must be integer"
																		}], !1;
																		if (typeof e == "number" && isFinite(e) && (e < 0 || isNaN(e))) return s.errors = [{
																			instancePath: t + "/boat/startY",
																			schemaPath: "#/$defs/Vehicle/properties/startY/minimum",
																			keyword: "minimum",
																			params: {
																				comparison: ">=",
																				limit: 0
																			},
																			message: "must be >= 0"
																		}], !1;
																		h = !0;
																	} else h = !0;
																}
															}
														}
													}
												}
												f = !0;
											} else f = !0;
											if (f) {
												if (e.currencyUnit !== void 0) {
													if (typeof e.currencyUnit != "string") return s.errors = [{
														instancePath: t + "/currencyUnit",
														schemaPath: "#/properties/currencyUnit/type",
														keyword: "type",
														params: { type: "string" },
														message: "must be string"
													}], !1;
													f = !0;
												} else f = !0;
												if (f) {
													if (e.defeatMe !== void 0) {
														let n = e.defeatMe;
														if (!n || typeof n != "object" || Array.isArray(n)) return s.errors = [{
															instancePath: t + "/defeatMe",
															schemaPath: "#/$defs/Audio/type",
															keyword: "type",
															params: { type: "object" },
															message: "must be object"
														}], !1;
														{
															let e;
															if (n.name === void 0 && (e = "name") || n.volume === void 0 && (e = "volume") || n.pitch === void 0 && (e = "pitch") || n.pan === void 0 && (e = "pan")) return s.errors = [{
																instancePath: t + "/defeatMe",
																schemaPath: "#/$defs/Audio/required",
																keyword: "required",
																params: { missingProperty: e },
																message: "must have required property '" + e + "'"
															}], !1;
															for (let e in n) if (e !== "name" && e !== "volume" && e !== "pitch" && e !== "pan") return s.errors = [{
																instancePath: t + "/defeatMe",
																schemaPath: "#/$defs/Audio/additionalProperties",
																keyword: "additionalProperties",
																params: { additionalProperty: e },
																message: "must NOT have additional properties"
															}], !1;
															if (n.name !== void 0) {
																if (typeof n.name != "string") return s.errors = [{
																	instancePath: t + "/defeatMe/name",
																	schemaPath: "#/$defs/Audio/properties/name/type",
																	keyword: "type",
																	params: { type: "string" },
																	message: "must be string"
																}], !1;
																var _ = !0;
															} else _ = !0;
															if (_) {
																if (n.volume !== void 0) {
																	let e = n.volume;
																	if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return s.errors = [{
																		instancePath: t + "/defeatMe/volume",
																		schemaPath: "#/$defs/Audio/properties/volume/type",
																		keyword: "type",
																		params: { type: "integer" },
																		message: "must be integer"
																	}], !1;
																	_ = !0;
																} else _ = !0;
																if (_) {
																	if (n.pitch !== void 0) {
																		let e = n.pitch;
																		if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return s.errors = [{
																			instancePath: t + "/defeatMe/pitch",
																			schemaPath: "#/$defs/Audio/properties/pitch/type",
																			keyword: "type",
																			params: { type: "integer" },
																			message: "must be integer"
																		}], !1;
																		_ = !0;
																	} else _ = !0;
																	if (_) if (n.pan !== void 0) {
																		let e = n.pan;
																		if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return s.errors = [{
																			instancePath: t + "/defeatMe/pan",
																			schemaPath: "#/$defs/Audio/properties/pan/type",
																			keyword: "type",
																			params: { type: "integer" },
																			message: "must be integer"
																		}], !1;
																		_ = !0;
																	} else _ = !0;
																}
															}
														}
														f = !0;
													} else f = !0;
													if (f) {
														if (e.editMapId !== void 0) {
															let n = e.editMapId;
															if (typeof n != "number" || n % 1 || isNaN(n) || !isFinite(n)) return s.errors = [{
																instancePath: t + "/editMapId",
																schemaPath: "#/properties/editMapId/type",
																keyword: "type",
																params: { type: "integer" },
																message: "must be integer"
															}], !1;
															if (typeof n == "number" && isFinite(n) && (n < 0 || isNaN(n))) return s.errors = [{
																instancePath: t + "/editMapId",
																schemaPath: "#/properties/editMapId/minimum",
																keyword: "minimum",
																params: {
																	comparison: ">=",
																	limit: 0
																},
																message: "must be >= 0"
															}], !1;
															f = !0;
														} else f = !0;
														if (f) {
															if (e.elements !== void 0) {
																let n = e.elements;
																if (!Array.isArray(n)) return s.errors = [{
																	instancePath: t + "/elements",
																	schemaPath: "#/properties/elements/type",
																	keyword: "type",
																	params: { type: "array" },
																	message: "must be array"
																}], !1;
																{
																	let e = n.length;
																	for (let r = 0; r < e; r++) if (typeof n[r] != "string") return s.errors = [{
																		instancePath: t + "/elements/" + r,
																		schemaPath: "#/properties/elements/items/type",
																		keyword: "type",
																		params: { type: "string" },
																		message: "must be string"
																	}], !1;
																}
																f = !0;
															} else f = !0;
															if (f) {
																if (e.equipTypes !== void 0) {
																	let n = e.equipTypes;
																	if (!Array.isArray(n)) return s.errors = [{
																		instancePath: t + "/equipTypes",
																		schemaPath: "#/properties/equipTypes/type",
																		keyword: "type",
																		params: { type: "array" },
																		message: "must be array"
																	}], !1;
																	{
																		let e = n.length;
																		for (let r = 0; r < e; r++) if (typeof n[r] != "string") return s.errors = [{
																			instancePath: t + "/equipTypes/" + r,
																			schemaPath: "#/properties/equipTypes/items/type",
																			keyword: "type",
																			params: { type: "string" },
																			message: "must be string"
																		}], !1;
																	}
																	f = !0;
																} else f = !0;
																if (f) {
																	if (e.gameTitle !== void 0) {
																		if (typeof e.gameTitle != "string") return s.errors = [{
																			instancePath: t + "/gameTitle",
																			schemaPath: "#/properties/gameTitle/type",
																			keyword: "type",
																			params: { type: "string" },
																			message: "must be string"
																		}], !1;
																		f = !0;
																	} else f = !0;
																	if (f) {
																		if (e.gameoverMe !== void 0) {
																			let n = e.gameoverMe;
																			if (!n || typeof n != "object" || Array.isArray(n)) return s.errors = [{
																				instancePath: t + "/gameoverMe",
																				schemaPath: "#/$defs/Audio/type",
																				keyword: "type",
																				params: { type: "object" },
																				message: "must be object"
																			}], !1;
																			{
																				let e;
																				if (n.name === void 0 && (e = "name") || n.volume === void 0 && (e = "volume") || n.pitch === void 0 && (e = "pitch") || n.pan === void 0 && (e = "pan")) return s.errors = [{
																					instancePath: t + "/gameoverMe",
																					schemaPath: "#/$defs/Audio/required",
																					keyword: "required",
																					params: { missingProperty: e },
																					message: "must have required property '" + e + "'"
																				}], !1;
																				for (let e in n) if (e !== "name" && e !== "volume" && e !== "pitch" && e !== "pan") return s.errors = [{
																					instancePath: t + "/gameoverMe",
																					schemaPath: "#/$defs/Audio/additionalProperties",
																					keyword: "additionalProperties",
																					params: { additionalProperty: e },
																					message: "must NOT have additional properties"
																				}], !1;
																				if (n.name !== void 0) {
																					if (typeof n.name != "string") return s.errors = [{
																						instancePath: t + "/gameoverMe/name",
																						schemaPath: "#/$defs/Audio/properties/name/type",
																						keyword: "type",
																						params: { type: "string" },
																						message: "must be string"
																					}], !1;
																					var v = !0;
																				} else v = !0;
																				if (v) {
																					if (n.volume !== void 0) {
																						let e = n.volume;
																						if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return s.errors = [{
																							instancePath: t + "/gameoverMe/volume",
																							schemaPath: "#/$defs/Audio/properties/volume/type",
																							keyword: "type",
																							params: { type: "integer" },
																							message: "must be integer"
																						}], !1;
																						v = !0;
																					} else v = !0;
																					if (v) {
																						if (n.pitch !== void 0) {
																							let e = n.pitch;
																							if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return s.errors = [{
																								instancePath: t + "/gameoverMe/pitch",
																								schemaPath: "#/$defs/Audio/properties/pitch/type",
																								keyword: "type",
																								params: { type: "integer" },
																								message: "must be integer"
																							}], !1;
																							v = !0;
																						} else v = !0;
																						if (v) if (n.pan !== void 0) {
																							let e = n.pan;
																							if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return s.errors = [{
																								instancePath: t + "/gameoverMe/pan",
																								schemaPath: "#/$defs/Audio/properties/pan/type",
																								keyword: "type",
																								params: { type: "integer" },
																								message: "must be integer"
																							}], !1;
																							v = !0;
																						} else v = !0;
																					}
																				}
																			}
																			f = !0;
																		} else f = !0;
																		if (f) {
																			if (e.locale !== void 0) {
																				if (typeof e.locale != "string") return s.errors = [{
																					instancePath: t + "/locale",
																					schemaPath: "#/properties/locale/type",
																					keyword: "type",
																					params: { type: "string" },
																					message: "must be string"
																				}], !1;
																				f = !0;
																			} else f = !0;
																			if (f) {
																				if (e.magicSkills !== void 0) {
																					let n = e.magicSkills;
																					if (!Array.isArray(n)) return s.errors = [{
																						instancePath: t + "/magicSkills",
																						schemaPath: "#/properties/magicSkills/type",
																						keyword: "type",
																						params: { type: "array" },
																						message: "must be array"
																					}], !1;
																					{
																						let e = n.length;
																						for (let r = 0; r < e; r++) {
																							let e = n[r];
																							if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return s.errors = [{
																								instancePath: t + "/magicSkills/" + r,
																								schemaPath: "#/properties/magicSkills/items/type",
																								keyword: "type",
																								params: { type: "integer" },
																								message: "must be integer"
																							}], !1;
																						}
																					}
																					f = !0;
																				} else f = !0;
																				if (f) {
																					if (e.menuCommands !== void 0) {
																						let n = e.menuCommands;
																						if (!Array.isArray(n)) return s.errors = [{
																							instancePath: t + "/menuCommands",
																							schemaPath: "#/$defs/MenuCommands/type",
																							keyword: "type",
																							params: { type: "array" },
																							message: "must be array"
																						}], !1;
																						if (n.length > 6) return s.errors = [{
																							instancePath: t + "/menuCommands",
																							schemaPath: "#/$defs/MenuCommands/maxItems",
																							keyword: "maxItems",
																							params: { limit: 6 },
																							message: "must NOT have more than 6 items"
																						}], !1;
																						if (n.length < 6) return s.errors = [{
																							instancePath: t + "/menuCommands",
																							schemaPath: "#/$defs/MenuCommands/minItems",
																							keyword: "minItems",
																							params: { limit: 6 },
																							message: "must NOT have fewer than 6 items"
																						}], !1;
																						{
																							let e = n.length;
																							for (let r = 0; r < e; r++) if (typeof n[r] != "boolean") return s.errors = [{
																								instancePath: t + "/menuCommands/" + r,
																								schemaPath: "#/$defs/MenuCommands/items/type",
																								keyword: "type",
																								params: { type: "boolean" },
																								message: "must be boolean"
																							}], !1;
																						}
																						f = !0;
																					} else f = !0;
																					if (f) {
																						if (e.optDisplayTp !== void 0) {
																							if (typeof e.optDisplayTp != "boolean") return s.errors = [{
																								instancePath: t + "/optDisplayTp",
																								schemaPath: "#/properties/optDisplayTp/type",
																								keyword: "type",
																								params: { type: "boolean" },
																								message: "must be boolean"
																							}], !1;
																							f = !0;
																						} else f = !0;
																						if (f) {
																							if (e.optDrawTitle !== void 0) {
																								if (typeof e.optDrawTitle != "boolean") return s.errors = [{
																									instancePath: t + "/optDrawTitle",
																									schemaPath: "#/properties/optDrawTitle/type",
																									keyword: "type",
																									params: { type: "boolean" },
																									message: "must be boolean"
																								}], !1;
																								f = !0;
																							} else f = !0;
																							if (f) {
																								if (e.optExtraExp !== void 0) {
																									if (typeof e.optExtraExp != "boolean") return s.errors = [{
																										instancePath: t + "/optExtraExp",
																										schemaPath: "#/properties/optExtraExp/type",
																										keyword: "type",
																										params: { type: "boolean" },
																										message: "must be boolean"
																									}], !1;
																									f = !0;
																								} else f = !0;
																								if (f) {
																									if (e.optFloorDeath !== void 0) {
																										if (typeof e.optFloorDeath != "boolean") return s.errors = [{
																											instancePath: t + "/optFloorDeath",
																											schemaPath: "#/properties/optFloorDeath/type",
																											keyword: "type",
																											params: { type: "boolean" },
																											message: "must be boolean"
																										}], !1;
																										f = !0;
																									} else f = !0;
																									if (f) {
																										if (e.optFollowers !== void 0) {
																											if (typeof e.optFollowers != "boolean") return s.errors = [{
																												instancePath: t + "/optFollowers",
																												schemaPath: "#/properties/optFollowers/type",
																												keyword: "type",
																												params: { type: "boolean" },
																												message: "must be boolean"
																											}], !1;
																											f = !0;
																										} else f = !0;
																										if (f) {
																											if (e.optSideView !== void 0) {
																												if (typeof e.optSideView != "boolean") return s.errors = [{
																													instancePath: t + "/optSideView",
																													schemaPath: "#/properties/optSideView/type",
																													keyword: "type",
																													params: { type: "boolean" },
																													message: "must be boolean"
																												}], !1;
																												f = !0;
																											} else f = !0;
																											if (f) {
																												if (e.optSlipDeath !== void 0) {
																													if (typeof e.optSlipDeath != "boolean") return s.errors = [{
																														instancePath: t + "/optSlipDeath",
																														schemaPath: "#/properties/optSlipDeath/type",
																														keyword: "type",
																														params: { type: "boolean" },
																														message: "must be boolean"
																													}], !1;
																													f = !0;
																												} else f = !0;
																												if (f) {
																													if (e.optTransparent !== void 0) {
																														if (typeof e.optTransparent != "boolean") return s.errors = [{
																															instancePath: t + "/optTransparent",
																															schemaPath: "#/properties/optTransparent/type",
																															keyword: "type",
																															params: { type: "boolean" },
																															message: "must be boolean"
																														}], !1;
																														f = !0;
																													} else f = !0;
																													if (f) {
																														if (e.partyMembers !== void 0) {
																															let n = e.partyMembers;
																															if (!Array.isArray(n)) return s.errors = [{
																																instancePath: t + "/partyMembers",
																																schemaPath: "#/properties/partyMembers/type",
																																keyword: "type",
																																params: { type: "array" },
																																message: "must be array"
																															}], !1;
																															{
																																let e = n.length;
																																for (let r = 0; r < e; r++) {
																																	let e = n[r];
																																	if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return s.errors = [{
																																		instancePath: t + "/partyMembers/" + r,
																																		schemaPath: "#/properties/partyMembers/items/type",
																																		keyword: "type",
																																		params: { type: "integer" },
																																		message: "must be integer"
																																	}], !1;
																																}
																															}
																															f = !0;
																														} else f = !0;
																														if (f) {
																															if (e.ship !== void 0) {
																																let n = e.ship;
																																if (!n || typeof n != "object" || Array.isArray(n)) return s.errors = [{
																																	instancePath: t + "/ship",
																																	schemaPath: "#/$defs/Vehicle/type",
																																	keyword: "type",
																																	params: { type: "object" },
																																	message: "must be object"
																																}], !1;
																																{
																																	let e;
																																	if (n.characterIndex === void 0 && (e = "characterIndex") || n.characterName === void 0 && (e = "characterName") || n.bgm === void 0 && (e = "bgm") || n.startMapId === void 0 && (e = "startMapId") || n.startX === void 0 && (e = "startX") || n.startY === void 0 && (e = "startY")) return s.errors = [{
																																		instancePath: t + "/ship",
																																		schemaPath: "#/$defs/Vehicle/required",
																																		keyword: "required",
																																		params: { missingProperty: e },
																																		message: "must have required property '" + e + "'"
																																	}], !1;
																																	for (let e in n) if (e !== "characterIndex" && e !== "characterName" && e !== "bgm" && e !== "startMapId" && e !== "startX" && e !== "startY") return s.errors = [{
																																		instancePath: t + "/ship",
																																		schemaPath: "#/$defs/Vehicle/additionalProperties",
																																		keyword: "additionalProperties",
																																		params: { additionalProperty: e },
																																		message: "must NOT have additional properties"
																																	}], !1;
																																	if (n.characterIndex !== void 0) {
																																		let e = n.characterIndex;
																																		if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return s.errors = [{
																																			instancePath: t + "/ship/characterIndex",
																																			schemaPath: "#/$defs/Vehicle/properties/characterIndex/type",
																																			keyword: "type",
																																			params: { type: "integer" },
																																			message: "must be integer"
																																		}], !1;
																																		if (typeof e == "number" && isFinite(e)) {
																																			if (e > 7 || isNaN(e)) return s.errors = [{
																																				instancePath: t + "/ship/characterIndex",
																																				schemaPath: "#/$defs/Vehicle/properties/characterIndex/maximum",
																																				keyword: "maximum",
																																				params: {
																																					comparison: "<=",
																																					limit: 7
																																				},
																																				message: "must be <= 7"
																																			}], !1;
																																			if (e < 0 || isNaN(e)) return s.errors = [{
																																				instancePath: t + "/ship/characterIndex",
																																				schemaPath: "#/$defs/Vehicle/properties/characterIndex/minimum",
																																				keyword: "minimum",
																																				params: {
																																					comparison: ">=",
																																					limit: 0
																																				},
																																				message: "must be >= 0"
																																			}], !1;
																																		}
																																		var y = !0;
																																	} else y = !0;
																																	if (y) {
																																		if (n.characterName !== void 0) {
																																			if (typeof n.characterName != "string") return s.errors = [{
																																				instancePath: t + "/ship/characterName",
																																				schemaPath: "#/$defs/Vehicle/properties/characterName/type",
																																				keyword: "type",
																																				params: { type: "string" },
																																				message: "must be string"
																																			}], !1;
																																			y = !0;
																																		} else y = !0;
																																		if (y) {
																																			if (n.bgm !== void 0) {
																																				let e = n.bgm;
																																				if (!e || typeof e != "object" || Array.isArray(e)) return s.errors = [{
																																					instancePath: t + "/ship/bgm",
																																					schemaPath: "#/$defs/Vehicle/properties/bgm/type",
																																					keyword: "type",
																																					params: { type: "object" },
																																					message: "must be object"
																																				}], !1;
																																				{
																																					let n;
																																					if (e.name === void 0 && (n = "name") || e.volume === void 0 && (n = "volume") || e.pitch === void 0 && (n = "pitch") || e.pan === void 0 && (n = "pan")) return s.errors = [{
																																						instancePath: t + "/ship/bgm",
																																						schemaPath: "#/$defs/Vehicle/properties/bgm/required",
																																						keyword: "required",
																																						params: { missingProperty: n },
																																						message: "must have required property '" + n + "'"
																																					}], !1;
																																					for (let n in e) if (n !== "name" && n !== "volume" && n !== "pitch" && n !== "pan") return s.errors = [{
																																						instancePath: t + "/ship/bgm",
																																						schemaPath: "#/$defs/Vehicle/properties/bgm/additionalProperties",
																																						keyword: "additionalProperties",
																																						params: { additionalProperty: n },
																																						message: "must NOT have additional properties"
																																					}], !1;
																																					if (e.name !== void 0) {
																																						if (typeof e.name != "string") return s.errors = [{
																																							instancePath: t + "/ship/bgm/name",
																																							schemaPath: "#/$defs/Vehicle/properties/bgm/properties/name/type",
																																							keyword: "type",
																																							params: { type: "string" },
																																							message: "must be string"
																																						}], !1;
																																						var b = !0;
																																					} else b = !0;
																																					if (b) {
																																						if (e.volume !== void 0) {
																																							let n = e.volume;
																																							if (typeof n != "number" || n % 1 || isNaN(n) || !isFinite(n)) return s.errors = [{
																																								instancePath: t + "/ship/bgm/volume",
																																								schemaPath: "#/$defs/Vehicle/properties/bgm/properties/volume/type",
																																								keyword: "type",
																																								params: { type: "integer" },
																																								message: "must be integer"
																																							}], !1;
																																							b = !0;
																																						} else b = !0;
																																						if (b) {
																																							if (e.pitch !== void 0) {
																																								let n = e.pitch;
																																								if (typeof n != "number" || n % 1 || isNaN(n) || !isFinite(n)) return s.errors = [{
																																									instancePath: t + "/ship/bgm/pitch",
																																									schemaPath: "#/$defs/Vehicle/properties/bgm/properties/pitch/type",
																																									keyword: "type",
																																									params: { type: "integer" },
																																									message: "must be integer"
																																								}], !1;
																																								b = !0;
																																							} else b = !0;
																																							if (b) if (e.pan !== void 0) {
																																								let n = e.pan;
																																								if (typeof n != "number" || n % 1 || isNaN(n) || !isFinite(n)) return s.errors = [{
																																									instancePath: t + "/ship/bgm/pan",
																																									schemaPath: "#/$defs/Vehicle/properties/bgm/properties/pan/type",
																																									keyword: "type",
																																									params: { type: "integer" },
																																									message: "must be integer"
																																								}], !1;
																																								b = !0;
																																							} else b = !0;
																																						}
																																					}
																																				}
																																				y = !0;
																																			} else y = !0;
																																			if (y) {
																																				if (n.startMapId !== void 0) {
																																					let e = n.startMapId;
																																					if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return s.errors = [{
																																						instancePath: t + "/ship/startMapId",
																																						schemaPath: "#/$defs/Vehicle/properties/startMapId/type",
																																						keyword: "type",
																																						params: { type: "integer" },
																																						message: "must be integer"
																																					}], !1;
																																					if (typeof e == "number" && isFinite(e) && (e < 0 || isNaN(e))) return s.errors = [{
																																						instancePath: t + "/ship/startMapId",
																																						schemaPath: "#/$defs/Vehicle/properties/startMapId/minimum",
																																						keyword: "minimum",
																																						params: {
																																							comparison: ">=",
																																							limit: 0
																																						},
																																						message: "must be >= 0"
																																					}], !1;
																																					y = !0;
																																				} else y = !0;
																																				if (y) {
																																					if (n.startX !== void 0) {
																																						let e = n.startX;
																																						if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return s.errors = [{
																																							instancePath: t + "/ship/startX",
																																							schemaPath: "#/$defs/Vehicle/properties/startX/type",
																																							keyword: "type",
																																							params: { type: "integer" },
																																							message: "must be integer"
																																						}], !1;
																																						if (typeof e == "number" && isFinite(e) && (e < 0 || isNaN(e))) return s.errors = [{
																																							instancePath: t + "/ship/startX",
																																							schemaPath: "#/$defs/Vehicle/properties/startX/minimum",
																																							keyword: "minimum",
																																							params: {
																																								comparison: ">=",
																																								limit: 0
																																							},
																																							message: "must be >= 0"
																																						}], !1;
																																						y = !0;
																																					} else y = !0;
																																					if (y) if (n.startY !== void 0) {
																																						let e = n.startY;
																																						if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return s.errors = [{
																																							instancePath: t + "/ship/startY",
																																							schemaPath: "#/$defs/Vehicle/properties/startY/type",
																																							keyword: "type",
																																							params: { type: "integer" },
																																							message: "must be integer"
																																						}], !1;
																																						if (typeof e == "number" && isFinite(e) && (e < 0 || isNaN(e))) return s.errors = [{
																																							instancePath: t + "/ship/startY",
																																							schemaPath: "#/$defs/Vehicle/properties/startY/minimum",
																																							keyword: "minimum",
																																							params: {
																																								comparison: ">=",
																																								limit: 0
																																							},
																																							message: "must be >= 0"
																																						}], !1;
																																						y = !0;
																																					} else y = !0;
																																				}
																																			}
																																		}
																																	}
																																}
																																f = !0;
																															} else f = !0;
																															if (f) {
																																if (e.skillTypes !== void 0) {
																																	let n = e.skillTypes;
																																	if (!Array.isArray(n)) return s.errors = [{
																																		instancePath: t + "/skillTypes",
																																		schemaPath: "#/properties/skillTypes/type",
																																		keyword: "type",
																																		params: { type: "array" },
																																		message: "must be array"
																																	}], !1;
																																	{
																																		let e = n.length;
																																		for (let r = 0; r < e; r++) if (typeof n[r] != "string") return s.errors = [{
																																			instancePath: t + "/skillTypes/" + r,
																																			schemaPath: "#/properties/skillTypes/items/type",
																																			keyword: "type",
																																			params: { type: "string" },
																																			message: "must be string"
																																		}], !1;
																																	}
																																	f = !0;
																																} else f = !0;
																																if (f) {
																																	if (e.sounds !== void 0) {
																																		let n = e.sounds;
																																		if (!Array.isArray(n)) return s.errors = [{
																																			instancePath: t + "/sounds",
																																			schemaPath: "#/properties/sounds/type",
																																			keyword: "type",
																																			params: { type: "array" },
																																			message: "must be array"
																																		}], !1;
																																		if (n.length > 24) return s.errors = [{
																																			instancePath: t + "/sounds",
																																			schemaPath: "#/properties/sounds/maxItems",
																																			keyword: "maxItems",
																																			params: { limit: 24 },
																																			message: "must NOT have more than 24 items"
																																		}], !1;
																																		if (n.length < 24) return s.errors = [{
																																			instancePath: t + "/sounds",
																																			schemaPath: "#/properties/sounds/minItems",
																																			keyword: "minItems",
																																			params: { limit: 24 },
																																			message: "must NOT have fewer than 24 items"
																																		}], !1;
																																		{
																																			let e = n.length;
																																			for (let r = 0; r < e; r++) {
																																				let e = n[r];
																																				if (!e || typeof e != "object" || Array.isArray(e)) return s.errors = [{
																																					instancePath: t + "/sounds/" + r,
																																					schemaPath: "#/$defs/Audio/type",
																																					keyword: "type",
																																					params: { type: "object" },
																																					message: "must be object"
																																				}], !1;
																																				{
																																					let n;
																																					if (e.name === void 0 && (n = "name") || e.volume === void 0 && (n = "volume") || e.pitch === void 0 && (n = "pitch") || e.pan === void 0 && (n = "pan")) return s.errors = [{
																																						instancePath: t + "/sounds/" + r,
																																						schemaPath: "#/$defs/Audio/required",
																																						keyword: "required",
																																						params: { missingProperty: n },
																																						message: "must have required property '" + n + "'"
																																					}], !1;
																																					for (let n in e) if (n !== "name" && n !== "volume" && n !== "pitch" && n !== "pan") return s.errors = [{
																																						instancePath: t + "/sounds/" + r,
																																						schemaPath: "#/$defs/Audio/additionalProperties",
																																						keyword: "additionalProperties",
																																						params: { additionalProperty: n },
																																						message: "must NOT have additional properties"
																																					}], !1;
																																					if (e.name !== void 0) {
																																						if (typeof e.name != "string") return s.errors = [{
																																							instancePath: t + "/sounds/" + r + "/name",
																																							schemaPath: "#/$defs/Audio/properties/name/type",
																																							keyword: "type",
																																							params: { type: "string" },
																																							message: "must be string"
																																						}], !1;
																																						var x = !0;
																																					} else x = !0;
																																					if (x) {
																																						if (e.volume !== void 0) {
																																							let n = e.volume;
																																							if (typeof n != "number" || n % 1 || isNaN(n) || !isFinite(n)) return s.errors = [{
																																								instancePath: t + "/sounds/" + r + "/volume",
																																								schemaPath: "#/$defs/Audio/properties/volume/type",
																																								keyword: "type",
																																								params: { type: "integer" },
																																								message: "must be integer"
																																							}], !1;
																																							x = !0;
																																						} else x = !0;
																																						if (x) {
																																							if (e.pitch !== void 0) {
																																								let n = e.pitch;
																																								if (typeof n != "number" || n % 1 || isNaN(n) || !isFinite(n)) return s.errors = [{
																																									instancePath: t + "/sounds/" + r + "/pitch",
																																									schemaPath: "#/$defs/Audio/properties/pitch/type",
																																									keyword: "type",
																																									params: { type: "integer" },
																																									message: "must be integer"
																																								}], !1;
																																								x = !0;
																																							} else x = !0;
																																							if (x) if (e.pan !== void 0) {
																																								let n = e.pan;
																																								if (typeof n != "number" || n % 1 || isNaN(n) || !isFinite(n)) return s.errors = [{
																																									instancePath: t + "/sounds/" + r + "/pan",
																																									schemaPath: "#/$defs/Audio/properties/pan/type",
																																									keyword: "type",
																																									params: { type: "integer" },
																																									message: "must be integer"
																																								}], !1;
																																								x = !0;
																																							} else x = !0;
																																						}
																																					}
																																				}
																																			}
																																		}
																																		f = !0;
																																	} else f = !0;
																																	if (f) {
																																		if (e.startMapId !== void 0) {
																																			let n = e.startMapId;
																																			if (typeof n != "number" || n % 1 || isNaN(n) || !isFinite(n)) return s.errors = [{
																																				instancePath: t + "/startMapId",
																																				schemaPath: "#/properties/startMapId/type",
																																				keyword: "type",
																																				params: { type: "integer" },
																																				message: "must be integer"
																																			}], !1;
																																			if (typeof n == "number" && isFinite(n) && (n < 0 || isNaN(n))) return s.errors = [{
																																				instancePath: t + "/startMapId",
																																				schemaPath: "#/properties/startMapId/minimum",
																																				keyword: "minimum",
																																				params: {
																																					comparison: ">=",
																																					limit: 0
																																				},
																																				message: "must be >= 0"
																																			}], !1;
																																			f = !0;
																																		} else f = !0;
																																		if (f) {
																																			if (e.startX !== void 0) {
																																				let n = e.startX;
																																				if (typeof n != "number" || n % 1 || isNaN(n) || !isFinite(n)) return s.errors = [{
																																					instancePath: t + "/startX",
																																					schemaPath: "#/properties/startX/type",
																																					keyword: "type",
																																					params: { type: "integer" },
																																					message: "must be integer"
																																				}], !1;
																																				if (typeof n == "number" && isFinite(n) && (n < 0 || isNaN(n))) return s.errors = [{
																																					instancePath: t + "/startX",
																																					schemaPath: "#/properties/startX/minimum",
																																					keyword: "minimum",
																																					params: {
																																						comparison: ">=",
																																						limit: 0
																																					},
																																					message: "must be >= 0"
																																				}], !1;
																																				f = !0;
																																			} else f = !0;
																																			if (f) {
																																				if (e.startY !== void 0) {
																																					let n = e.startY;
																																					if (typeof n != "number" || n % 1 || isNaN(n) || !isFinite(n)) return s.errors = [{
																																						instancePath: t + "/startY",
																																						schemaPath: "#/properties/startY/type",
																																						keyword: "type",
																																						params: { type: "integer" },
																																						message: "must be integer"
																																					}], !1;
																																					if (typeof n == "number" && isFinite(n) && (n < 0 || isNaN(n))) return s.errors = [{
																																						instancePath: t + "/startY",
																																						schemaPath: "#/properties/startY/minimum",
																																						keyword: "minimum",
																																						params: {
																																							comparison: ">=",
																																							limit: 0
																																						},
																																						message: "must be >= 0"
																																					}], !1;
																																					f = !0;
																																				} else f = !0;
																																				if (f) {
																																					if (e.switches !== void 0) {
																																						let n = e.switches;
																																						if (!Array.isArray(n)) return s.errors = [{
																																							instancePath: t + "/switches",
																																							schemaPath: "#/properties/switches/type",
																																							keyword: "type",
																																							params: { type: "array" },
																																							message: "must be array"
																																						}], !1;
																																						{
																																							let e = n.length;
																																							for (let r = 0; r < e; r++) if (typeof n[r] != "string") return s.errors = [{
																																								instancePath: t + "/switches/" + r,
																																								schemaPath: "#/properties/switches/items/type",
																																								keyword: "type",
																																								params: { type: "string" },
																																								message: "must be string"
																																							}], !1;
																																						}
																																						f = !0;
																																					} else f = !0;
																																					if (f) {
																																						if (e.terms !== void 0) {
																																							let n = e.terms;
																																							if (!n || typeof n != "object" || Array.isArray(n)) return s.errors = [{
																																								instancePath: t + "/terms",
																																								schemaPath: "#/properties/terms/type",
																																								keyword: "type",
																																								params: { type: "object" },
																																								message: "must be object"
																																							}], !1;
																																							{
																																								let e;
																																								if (n.messages === void 0 && (e = "messages") || n.commands === void 0 && (e = "commands") || n.basic === void 0 && (e = "basic") || n.params === void 0 && (e = "params")) return s.errors = [{
																																									instancePath: t + "/terms",
																																									schemaPath: "#/properties/terms/required",
																																									keyword: "required",
																																									params: { missingProperty: e },
																																									message: "must have required property '" + e + "'"
																																								}], !1;
																																								for (let e in n) if (e !== "basic" && e !== "commands" && e !== "messages" && e !== "params") return s.errors = [{
																																									instancePath: t + "/terms",
																																									schemaPath: "#/properties/terms/additionalProperties",
																																									keyword: "additionalProperties",
																																									params: { additionalProperty: e },
																																									message: "must NOT have additional properties"
																																								}], !1;
																																								if (n.basic !== void 0) {
																																									let e = n.basic;
																																									if (!Array.isArray(e)) return s.errors = [{
																																										instancePath: t + "/terms/basic",
																																										schemaPath: "#/$defs/TermsBasic/type",
																																										keyword: "type",
																																										params: { type: "array" },
																																										message: "must be array"
																																									}], !1;
																																									if (e.length > 10) return s.errors = [{
																																										instancePath: t + "/terms/basic",
																																										schemaPath: "#/$defs/TermsBasic/maxItems",
																																										keyword: "maxItems",
																																										params: { limit: 10 },
																																										message: "must NOT have more than 10 items"
																																									}], !1;
																																									if (e.length < 10) return s.errors = [{
																																										instancePath: t + "/terms/basic",
																																										schemaPath: "#/$defs/TermsBasic/minItems",
																																										keyword: "minItems",
																																										params: { limit: 10 },
																																										message: "must NOT have fewer than 10 items"
																																									}], !1;
																																									{
																																										let n = e.length;
																																										for (let r = 0; r < n; r++) if (typeof e[r] != "string") return s.errors = [{
																																											instancePath: t + "/terms/basic/" + r,
																																											schemaPath: "#/$defs/TermsBasic/items/type",
																																											keyword: "type",
																																											params: { type: "string" },
																																											message: "must be string"
																																										}], !1;
																																									}
																																									var S = !0;
																																								} else S = !0;
																																								if (S) {
																																									if (n.commands !== void 0) {
																																										let e = n.commands;
																																										if (!Array.isArray(e)) return s.errors = [{
																																											instancePath: t + "/terms/commands",
																																											schemaPath: "#/$defs/TermsCommands/type",
																																											keyword: "type",
																																											params: { type: "array" },
																																											message: "must be array"
																																										}], !1;
																																										if (e.length > 26) return s.errors = [{
																																											instancePath: t + "/terms/commands",
																																											schemaPath: "#/$defs/TermsCommands/maxItems",
																																											keyword: "maxItems",
																																											params: { limit: 26 },
																																											message: "must NOT have more than 26 items"
																																										}], !1;
																																										if (e.length < 26) return s.errors = [{
																																											instancePath: t + "/terms/commands",
																																											schemaPath: "#/$defs/TermsCommands/minItems",
																																											keyword: "minItems",
																																											params: { limit: 26 },
																																											message: "must NOT have fewer than 26 items"
																																										}], !1;
																																										{
																																											let n = e.length;
																																											if (n > 0) {
																																												if (typeof e[0] != "string") return s.errors = [{
																																													instancePath: t + "/terms/commands/0",
																																													schemaPath: "#/$defs/TermsCommands/items/0/type",
																																													keyword: "type",
																																													params: { type: "string" },
																																													message: "must be string"
																																												}], !1;
																																												var C = !0;
																																											}
																																											if (C) {
																																												if (n > 1) {
																																													if (typeof e[1] != "string") return s.errors = [{
																																														instancePath: t + "/terms/commands/1",
																																														schemaPath: "#/$defs/TermsCommands/items/1/type",
																																														keyword: "type",
																																														params: { type: "string" },
																																														message: "must be string"
																																													}], !1;
																																													C = !0;
																																												}
																																												if (C) {
																																													if (n > 2) {
																																														if (typeof e[2] != "string") return s.errors = [{
																																															instancePath: t + "/terms/commands/2",
																																															schemaPath: "#/$defs/TermsCommands/items/2/type",
																																															keyword: "type",
																																															params: { type: "string" },
																																															message: "must be string"
																																														}], !1;
																																														C = !0;
																																													}
																																													if (C) {
																																														if (n > 3) {
																																															if (typeof e[3] != "string") return s.errors = [{
																																																instancePath: t + "/terms/commands/3",
																																																schemaPath: "#/$defs/TermsCommands/items/3/type",
																																																keyword: "type",
																																																params: { type: "string" },
																																																message: "must be string"
																																															}], !1;
																																															C = !0;
																																														}
																																														if (C) {
																																															if (n > 4) {
																																																if (typeof e[4] != "string") return s.errors = [{
																																																	instancePath: t + "/terms/commands/4",
																																																	schemaPath: "#/$defs/TermsCommands/items/4/type",
																																																	keyword: "type",
																																																	params: { type: "string" },
																																																	message: "must be string"
																																																}], !1;
																																																C = !0;
																																															}
																																															if (C) {
																																																if (n > 5) {
																																																	if (typeof e[5] != "string") return s.errors = [{
																																																		instancePath: t + "/terms/commands/5",
																																																		schemaPath: "#/$defs/TermsCommands/items/5/type",
																																																		keyword: "type",
																																																		params: { type: "string" },
																																																		message: "must be string"
																																																	}], !1;
																																																	C = !0;
																																																}
																																																if (C) {
																																																	if (n > 6) {
																																																		if (typeof e[6] != "string") return s.errors = [{
																																																			instancePath: t + "/terms/commands/6",
																																																			schemaPath: "#/$defs/TermsCommands/items/6/type",
																																																			keyword: "type",
																																																			params: { type: "string" },
																																																			message: "must be string"
																																																		}], !1;
																																																		C = !0;
																																																	}
																																																	if (C) {
																																																		if (n > 7) {
																																																			if (typeof e[7] != "string") return s.errors = [{
																																																				instancePath: t + "/terms/commands/7",
																																																				schemaPath: "#/$defs/TermsCommands/items/7/type",
																																																				keyword: "type",
																																																				params: { type: "string" },
																																																				message: "must be string"
																																																			}], !1;
																																																			C = !0;
																																																		}
																																																		if (C) {
																																																			if (n > 8) {
																																																				if (typeof e[8] != "string") return s.errors = [{
																																																					instancePath: t + "/terms/commands/8",
																																																					schemaPath: "#/$defs/TermsCommands/items/8/type",
																																																					keyword: "type",
																																																					params: { type: "string" },
																																																					message: "must be string"
																																																				}], !1;
																																																				C = !0;
																																																			}
																																																			if (C) {
																																																				if (n > 9) {
																																																					if (typeof e[9] != "string") return s.errors = [{
																																																						instancePath: t + "/terms/commands/9",
																																																						schemaPath: "#/$defs/TermsCommands/items/9/type",
																																																						keyword: "type",
																																																						params: { type: "string" },
																																																						message: "must be string"
																																																					}], !1;
																																																					C = !0;
																																																				}
																																																				if (C) {
																																																					if (n > 10) {
																																																						if (typeof e[10] != "string") return s.errors = [{
																																																							instancePath: t + "/terms/commands/10",
																																																							schemaPath: "#/$defs/TermsCommands/items/10/type",
																																																							keyword: "type",
																																																							params: { type: "string" },
																																																							message: "must be string"
																																																						}], !1;
																																																						C = !0;
																																																					}
																																																					if (C) {
																																																						if (n > 11) {
																																																							if (typeof e[11] != "string") return s.errors = [{
																																																								instancePath: t + "/terms/commands/11",
																																																								schemaPath: "#/$defs/TermsCommands/items/11/type",
																																																								keyword: "type",
																																																								params: { type: "string" },
																																																								message: "must be string"
																																																							}], !1;
																																																							C = !0;
																																																						}
																																																						if (C) {
																																																							if (n > 12) {
																																																								if (typeof e[12] != "string") return s.errors = [{
																																																									instancePath: t + "/terms/commands/12",
																																																									schemaPath: "#/$defs/TermsCommands/items/12/type",
																																																									keyword: "type",
																																																									params: { type: "string" },
																																																									message: "must be string"
																																																								}], !1;
																																																								C = !0;
																																																							}
																																																							if (C) {
																																																								if (n > 13) {
																																																									if (typeof e[13] != "string") return s.errors = [{
																																																										instancePath: t + "/terms/commands/13",
																																																										schemaPath: "#/$defs/TermsCommands/items/13/type",
																																																										keyword: "type",
																																																										params: { type: "string" },
																																																										message: "must be string"
																																																									}], !1;
																																																									C = !0;
																																																								}
																																																								if (C) {
																																																									if (n > 14) {
																																																										if (typeof e[14] != "string") return s.errors = [{
																																																											instancePath: t + "/terms/commands/14",
																																																											schemaPath: "#/$defs/TermsCommands/items/14/type",
																																																											keyword: "type",
																																																											params: { type: "string" },
																																																											message: "must be string"
																																																										}], !1;
																																																										C = !0;
																																																									}
																																																									if (C) {
																																																										if (n > 15) {
																																																											if (typeof e[15] != "string") return s.errors = [{
																																																												instancePath: t + "/terms/commands/15",
																																																												schemaPath: "#/$defs/TermsCommands/items/15/type",
																																																												keyword: "type",
																																																												params: { type: "string" },
																																																												message: "must be string"
																																																											}], !1;
																																																											C = !0;
																																																										}
																																																										if (C) {
																																																											if (n > 16) {
																																																												if (typeof e[16] != "string") return s.errors = [{
																																																													instancePath: t + "/terms/commands/16",
																																																													schemaPath: "#/$defs/TermsCommands/items/16/type",
																																																													keyword: "type",
																																																													params: { type: "string" },
																																																													message: "must be string"
																																																												}], !1;
																																																												C = !0;
																																																											}
																																																											if (C) {
																																																												if (n > 17) {
																																																													if (typeof e[17] != "string") return s.errors = [{
																																																														instancePath: t + "/terms/commands/17",
																																																														schemaPath: "#/$defs/TermsCommands/items/17/type",
																																																														keyword: "type",
																																																														params: { type: "string" },
																																																														message: "must be string"
																																																													}], !1;
																																																													C = !0;
																																																												}
																																																												if (C) {
																																																													if (n > 18) {
																																																														if (typeof e[18] != "string") return s.errors = [{
																																																															instancePath: t + "/terms/commands/18",
																																																															schemaPath: "#/$defs/TermsCommands/items/18/type",
																																																															keyword: "type",
																																																															params: { type: "string" },
																																																															message: "must be string"
																																																														}], !1;
																																																														C = !0;
																																																													}
																																																													if (C) {
																																																														if (n > 19) {
																																																															if (typeof e[19] != "string") return s.errors = [{
																																																																instancePath: t + "/terms/commands/19",
																																																																schemaPath: "#/$defs/TermsCommands/items/19/type",
																																																																keyword: "type",
																																																																params: { type: "string" },
																																																																message: "must be string"
																																																															}], !1;
																																																															C = !0;
																																																														}
																																																														if (C) {
																																																															if (n > 20) {
																																																																let n = e[20];
																																																																if (typeof n != "string" && n !== null) return s.errors = [{
																																																																	instancePath: t + "/terms/commands/20",
																																																																	schemaPath: "#/$defs/TermsCommands/items/20/type",
																																																																	keyword: "type",
																																																																	params: { type: "string" },
																																																																	message: "must be string"
																																																																}], !1;
																																																																C = !0;
																																																															}
																																																															if (C) {
																																																																if (n > 21) {
																																																																	if (typeof e[21] != "string") return s.errors = [{
																																																																		instancePath: t + "/terms/commands/21",
																																																																		schemaPath: "#/$defs/TermsCommands/items/21/type",
																																																																		keyword: "type",
																																																																		params: { type: "string" },
																																																																		message: "must be string"
																																																																	}], !1;
																																																																	C = !0;
																																																																}
																																																																if (C) {
																																																																	if (n > 22) {
																																																																		if (typeof e[22] != "string") return s.errors = [{
																																																																			instancePath: t + "/terms/commands/22",
																																																																			schemaPath: "#/$defs/TermsCommands/items/22/type",
																																																																			keyword: "type",
																																																																			params: { type: "string" },
																																																																			message: "must be string"
																																																																		}], !1;
																																																																		C = !0;
																																																																	}
																																																																	if (C) {
																																																																		if (n > 23) {
																																																																			let n = e[23];
																																																																			if (typeof n != "string" && n !== null) return s.errors = [{
																																																																				instancePath: t + "/terms/commands/23",
																																																																				schemaPath: "#/$defs/TermsCommands/items/23/type",
																																																																				keyword: "type",
																																																																				params: { type: "string" },
																																																																				message: "must be string"
																																																																			}], !1;
																																																																			C = !0;
																																																																		}
																																																																		if (C) {
																																																																			if (n > 24) {
																																																																				if (typeof e[24] != "string") return s.errors = [{
																																																																					instancePath: t + "/terms/commands/24",
																																																																					schemaPath: "#/$defs/TermsCommands/items/24/type",
																																																																					keyword: "type",
																																																																					params: { type: "string" },
																																																																					message: "must be string"
																																																																				}], !1;
																																																																				C = !0;
																																																																			}
																																																																			if (C && n > 25) {
																																																																				if (typeof e[25] != "string") return s.errors = [{
																																																																					instancePath: t + "/terms/commands/25",
																																																																					schemaPath: "#/$defs/TermsCommands/items/25/type",
																																																																					keyword: "type",
																																																																					params: { type: "string" },
																																																																					message: "must be string"
																																																																				}], !1;
																																																																				C = !0;
																																																																			}
																																																																		}
																																																																	}
																																																																}
																																																															}
																																																														}
																																																													}
																																																												}
																																																											}
																																																										}
																																																									}
																																																								}
																																																							}
																																																						}
																																																					}
																																																				}
																																																			}
																																																		}
																																																	}
																																																}
																																															}
																																														}
																																													}
																																												}
																																											}
																																										}
																																										S = !0;
																																									} else S = !0;
																																									if (S) {
																																										if (n.messages !== void 0) {
																																											let e = n.messages;
																																											if (!e || typeof e != "object" || Array.isArray(e)) return s.errors = [{
																																												instancePath: t + "/terms/messages",
																																												schemaPath: "#/$defs/TermsMessages/type",
																																												keyword: "type",
																																												params: { type: "object" },
																																												message: "must be object"
																																											}], !1;
																																											{
																																												let n;
																																												if (e.actionFailure === void 0 && (n = "actionFailure") || e.actorDamage === void 0 && (n = "actorDamage") || e.actorDrain === void 0 && (n = "actorDrain") || e.actorGain === void 0 && (n = "actorGain") || e.actorLoss === void 0 && (n = "actorLoss") || e.actorNoDamage === void 0 && (n = "actorNoDamage") || e.actorNoHit === void 0 && (n = "actorNoHit") || e.actorRecovery === void 0 && (n = "actorRecovery") || e.alwaysDash === void 0 && (n = "alwaysDash") || e.bgmVolume === void 0 && (n = "bgmVolume") || e.bgsVolume === void 0 && (n = "bgsVolume") || e.buffAdd === void 0 && (n = "buffAdd") || e.buffRemove === void 0 && (n = "buffRemove") || e.commandRemember === void 0 && (n = "commandRemember") || e.counterAttack === void 0 && (n = "counterAttack") || e.criticalToActor === void 0 && (n = "criticalToActor") || e.criticalToEnemy === void 0 && (n = "criticalToEnemy") || e.debuffAdd === void 0 && (n = "debuffAdd") || e.defeat === void 0 && (n = "defeat") || e.emerge === void 0 && (n = "emerge") || e.enemyDamage === void 0 && (n = "enemyDamage") || e.enemyDrain === void 0 && (n = "enemyDrain") || e.enemyGain === void 0 && (n = "enemyGain") || e.enemyLoss === void 0 && (n = "enemyLoss") || e.enemyNoDamage === void 0 && (n = "enemyNoDamage") || e.enemyNoHit === void 0 && (n = "enemyNoHit") || e.enemyRecovery === void 0 && (n = "enemyRecovery") || e.escapeFailure === void 0 && (n = "escapeFailure") || e.escapeStart === void 0 && (n = "escapeStart") || e.evasion === void 0 && (n = "evasion") || e.expNext === void 0 && (n = "expNext") || e.expTotal === void 0 && (n = "expTotal") || e.file === void 0 && (n = "file") || e.levelUp === void 0 && (n = "levelUp") || e.loadMessage === void 0 && (n = "loadMessage") || e.magicEvasion === void 0 && (n = "magicEvasion") || e.magicReflection === void 0 && (n = "magicReflection") || e.meVolume === void 0 && (n = "meVolume") || e.obtainExp === void 0 && (n = "obtainExp") || e.obtainGold === void 0 && (n = "obtainGold") || e.obtainItem === void 0 && (n = "obtainItem") || e.obtainSkill === void 0 && (n = "obtainSkill") || e.partyName === void 0 && (n = "partyName") || e.possession === void 0 && (n = "possession") || e.preemptive === void 0 && (n = "preemptive") || e.saveMessage === void 0 && (n = "saveMessage") || e.seVolume === void 0 && (n = "seVolume") || e.substitute === void 0 && (n = "substitute") || e.surprise === void 0 && (n = "surprise") || e.useItem === void 0 && (n = "useItem") || e.victory === void 0 && (n = "victory")) return s.errors = [{
																																													instancePath: t + "/terms/messages",
																																													schemaPath: "#/$defs/TermsMessages/required",
																																													keyword: "required",
																																													params: { missingProperty: n },
																																													message: "must have required property '" + n + "'"
																																												}], !1;
																																												for (let n in e) if (!a.call(i.properties, n)) return s.errors = [{
																																													instancePath: t + "/terms/messages",
																																													schemaPath: "#/$defs/TermsMessages/additionalProperties",
																																													keyword: "additionalProperties",
																																													params: { additionalProperty: n },
																																													message: "must NOT have additional properties"
																																												}], !1;
																																												if (e.actionFailure !== void 0) {
																																													if (typeof e.actionFailure != "string") return s.errors = [{
																																														instancePath: t + "/terms/messages/actionFailure",
																																														schemaPath: "#/$defs/TermsMessages/properties/actionFailure/type",
																																														keyword: "type",
																																														params: { type: "string" },
																																														message: "must be string"
																																													}], !1;
																																													var w = !0;
																																												} else w = !0;
																																												if (w) {
																																													if (e.actorDamage !== void 0) {
																																														if (typeof e.actorDamage != "string") return s.errors = [{
																																															instancePath: t + "/terms/messages/actorDamage",
																																															schemaPath: "#/$defs/TermsMessages/properties/actorDamage/type",
																																															keyword: "type",
																																															params: { type: "string" },
																																															message: "must be string"
																																														}], !1;
																																														w = !0;
																																													} else w = !0;
																																													if (w) {
																																														if (e.actorDrain !== void 0) {
																																															if (typeof e.actorDrain != "string") return s.errors = [{
																																																instancePath: t + "/terms/messages/actorDrain",
																																																schemaPath: "#/$defs/TermsMessages/properties/actorDrain/type",
																																																keyword: "type",
																																																params: { type: "string" },
																																																message: "must be string"
																																															}], !1;
																																															w = !0;
																																														} else w = !0;
																																														if (w) {
																																															if (e.actorGain !== void 0) {
																																																if (typeof e.actorGain != "string") return s.errors = [{
																																																	instancePath: t + "/terms/messages/actorGain",
																																																	schemaPath: "#/$defs/TermsMessages/properties/actorGain/type",
																																																	keyword: "type",
																																																	params: { type: "string" },
																																																	message: "must be string"
																																																}], !1;
																																																w = !0;
																																															} else w = !0;
																																															if (w) {
																																																if (e.actorLoss !== void 0) {
																																																	if (typeof e.actorLoss != "string") return s.errors = [{
																																																		instancePath: t + "/terms/messages/actorLoss",
																																																		schemaPath: "#/$defs/TermsMessages/properties/actorLoss/type",
																																																		keyword: "type",
																																																		params: { type: "string" },
																																																		message: "must be string"
																																																	}], !1;
																																																	w = !0;
																																																} else w = !0;
																																																if (w) {
																																																	if (e.actorNoDamage !== void 0) {
																																																		if (typeof e.actorNoDamage != "string") return s.errors = [{
																																																			instancePath: t + "/terms/messages/actorNoDamage",
																																																			schemaPath: "#/$defs/TermsMessages/properties/actorNoDamage/type",
																																																			keyword: "type",
																																																			params: { type: "string" },
																																																			message: "must be string"
																																																		}], !1;
																																																		w = !0;
																																																	} else w = !0;
																																																	if (w) {
																																																		if (e.actorNoHit !== void 0) {
																																																			if (typeof e.actorNoHit != "string") return s.errors = [{
																																																				instancePath: t + "/terms/messages/actorNoHit",
																																																				schemaPath: "#/$defs/TermsMessages/properties/actorNoHit/type",
																																																				keyword: "type",
																																																				params: { type: "string" },
																																																				message: "must be string"
																																																			}], !1;
																																																			w = !0;
																																																		} else w = !0;
																																																		if (w) {
																																																			if (e.actorRecovery !== void 0) {
																																																				if (typeof e.actorRecovery != "string") return s.errors = [{
																																																					instancePath: t + "/terms/messages/actorRecovery",
																																																					schemaPath: "#/$defs/TermsMessages/properties/actorRecovery/type",
																																																					keyword: "type",
																																																					params: { type: "string" },
																																																					message: "must be string"
																																																				}], !1;
																																																				w = !0;
																																																			} else w = !0;
																																																			if (w) {
																																																				if (e.alwaysDash !== void 0) {
																																																					if (typeof e.alwaysDash != "string") return s.errors = [{
																																																						instancePath: t + "/terms/messages/alwaysDash",
																																																						schemaPath: "#/$defs/TermsMessages/properties/alwaysDash/type",
																																																						keyword: "type",
																																																						params: { type: "string" },
																																																						message: "must be string"
																																																					}], !1;
																																																					w = !0;
																																																				} else w = !0;
																																																				if (w) {
																																																					if (e.bgmVolume !== void 0) {
																																																						if (typeof e.bgmVolume != "string") return s.errors = [{
																																																							instancePath: t + "/terms/messages/bgmVolume",
																																																							schemaPath: "#/$defs/TermsMessages/properties/bgmVolume/type",
																																																							keyword: "type",
																																																							params: { type: "string" },
																																																							message: "must be string"
																																																						}], !1;
																																																						w = !0;
																																																					} else w = !0;
																																																					if (w) {
																																																						if (e.bgsVolume !== void 0) {
																																																							if (typeof e.bgsVolume != "string") return s.errors = [{
																																																								instancePath: t + "/terms/messages/bgsVolume",
																																																								schemaPath: "#/$defs/TermsMessages/properties/bgsVolume/type",
																																																								keyword: "type",
																																																								params: { type: "string" },
																																																								message: "must be string"
																																																							}], !1;
																																																							w = !0;
																																																						} else w = !0;
																																																						if (w) {
																																																							if (e.buffAdd !== void 0) {
																																																								if (typeof e.buffAdd != "string") return s.errors = [{
																																																									instancePath: t + "/terms/messages/buffAdd",
																																																									schemaPath: "#/$defs/TermsMessages/properties/buffAdd/type",
																																																									keyword: "type",
																																																									params: { type: "string" },
																																																									message: "must be string"
																																																								}], !1;
																																																								w = !0;
																																																							} else w = !0;
																																																							if (w) {
																																																								if (e.buffRemove !== void 0) {
																																																									if (typeof e.buffRemove != "string") return s.errors = [{
																																																										instancePath: t + "/terms/messages/buffRemove",
																																																										schemaPath: "#/$defs/TermsMessages/properties/buffRemove/type",
																																																										keyword: "type",
																																																										params: { type: "string" },
																																																										message: "must be string"
																																																									}], !1;
																																																									w = !0;
																																																								} else w = !0;
																																																								if (w) {
																																																									if (e.commandRemember !== void 0) {
																																																										if (typeof e.commandRemember != "string") return s.errors = [{
																																																											instancePath: t + "/terms/messages/commandRemember",
																																																											schemaPath: "#/$defs/TermsMessages/properties/commandRemember/type",
																																																											keyword: "type",
																																																											params: { type: "string" },
																																																											message: "must be string"
																																																										}], !1;
																																																										w = !0;
																																																									} else w = !0;
																																																									if (w) {
																																																										if (e.counterAttack !== void 0) {
																																																											if (typeof e.counterAttack != "string") return s.errors = [{
																																																												instancePath: t + "/terms/messages/counterAttack",
																																																												schemaPath: "#/$defs/TermsMessages/properties/counterAttack/type",
																																																												keyword: "type",
																																																												params: { type: "string" },
																																																												message: "must be string"
																																																											}], !1;
																																																											w = !0;
																																																										} else w = !0;
																																																										if (w) {
																																																											if (e.criticalToActor !== void 0) {
																																																												if (typeof e.criticalToActor != "string") return s.errors = [{
																																																													instancePath: t + "/terms/messages/criticalToActor",
																																																													schemaPath: "#/$defs/TermsMessages/properties/criticalToActor/type",
																																																													keyword: "type",
																																																													params: { type: "string" },
																																																													message: "must be string"
																																																												}], !1;
																																																												w = !0;
																																																											} else w = !0;
																																																											if (w) {
																																																												if (e.criticalToEnemy !== void 0) {
																																																													if (typeof e.criticalToEnemy != "string") return s.errors = [{
																																																														instancePath: t + "/terms/messages/criticalToEnemy",
																																																														schemaPath: "#/$defs/TermsMessages/properties/criticalToEnemy/type",
																																																														keyword: "type",
																																																														params: { type: "string" },
																																																														message: "must be string"
																																																													}], !1;
																																																													w = !0;
																																																												} else w = !0;
																																																												if (w) {
																																																													if (e.debuffAdd !== void 0) {
																																																														if (typeof e.debuffAdd != "string") return s.errors = [{
																																																															instancePath: t + "/terms/messages/debuffAdd",
																																																															schemaPath: "#/$defs/TermsMessages/properties/debuffAdd/type",
																																																															keyword: "type",
																																																															params: { type: "string" },
																																																															message: "must be string"
																																																														}], !1;
																																																														w = !0;
																																																													} else w = !0;
																																																													if (w) {
																																																														if (e.defeat !== void 0) {
																																																															if (typeof e.defeat != "string") return s.errors = [{
																																																																instancePath: t + "/terms/messages/defeat",
																																																																schemaPath: "#/$defs/TermsMessages/properties/defeat/type",
																																																																keyword: "type",
																																																																params: { type: "string" },
																																																																message: "must be string"
																																																															}], !1;
																																																															w = !0;
																																																														} else w = !0;
																																																														if (w) {
																																																															if (e.emerge !== void 0) {
																																																																if (typeof e.emerge != "string") return s.errors = [{
																																																																	instancePath: t + "/terms/messages/emerge",
																																																																	schemaPath: "#/$defs/TermsMessages/properties/emerge/type",
																																																																	keyword: "type",
																																																																	params: { type: "string" },
																																																																	message: "must be string"
																																																																}], !1;
																																																																w = !0;
																																																															} else w = !0;
																																																															if (w) {
																																																																if (e.enemyDamage !== void 0) {
																																																																	if (typeof e.enemyDamage != "string") return s.errors = [{
																																																																		instancePath: t + "/terms/messages/enemyDamage",
																																																																		schemaPath: "#/$defs/TermsMessages/properties/enemyDamage/type",
																																																																		keyword: "type",
																																																																		params: { type: "string" },
																																																																		message: "must be string"
																																																																	}], !1;
																																																																	w = !0;
																																																																} else w = !0;
																																																																if (w) {
																																																																	if (e.enemyDrain !== void 0) {
																																																																		if (typeof e.enemyDrain != "string") return s.errors = [{
																																																																			instancePath: t + "/terms/messages/enemyDrain",
																																																																			schemaPath: "#/$defs/TermsMessages/properties/enemyDrain/type",
																																																																			keyword: "type",
																																																																			params: { type: "string" },
																																																																			message: "must be string"
																																																																		}], !1;
																																																																		w = !0;
																																																																	} else w = !0;
																																																																	if (w) {
																																																																		if (e.enemyGain !== void 0) {
																																																																			if (typeof e.enemyGain != "string") return s.errors = [{
																																																																				instancePath: t + "/terms/messages/enemyGain",
																																																																				schemaPath: "#/$defs/TermsMessages/properties/enemyGain/type",
																																																																				keyword: "type",
																																																																				params: { type: "string" },
																																																																				message: "must be string"
																																																																			}], !1;
																																																																			w = !0;
																																																																		} else w = !0;
																																																																		if (w) {
																																																																			if (e.enemyLoss !== void 0) {
																																																																				if (typeof e.enemyLoss != "string") return s.errors = [{
																																																																					instancePath: t + "/terms/messages/enemyLoss",
																																																																					schemaPath: "#/$defs/TermsMessages/properties/enemyLoss/type",
																																																																					keyword: "type",
																																																																					params: { type: "string" },
																																																																					message: "must be string"
																																																																				}], !1;
																																																																				w = !0;
																																																																			} else w = !0;
																																																																			if (w) {
																																																																				if (e.enemyNoDamage !== void 0) {
																																																																					if (typeof e.enemyNoDamage != "string") return s.errors = [{
																																																																						instancePath: t + "/terms/messages/enemyNoDamage",
																																																																						schemaPath: "#/$defs/TermsMessages/properties/enemyNoDamage/type",
																																																																						keyword: "type",
																																																																						params: { type: "string" },
																																																																						message: "must be string"
																																																																					}], !1;
																																																																					w = !0;
																																																																				} else w = !0;
																																																																				if (w) {
																																																																					if (e.enemyNoHit !== void 0) {
																																																																						if (typeof e.enemyNoHit != "string") return s.errors = [{
																																																																							instancePath: t + "/terms/messages/enemyNoHit",
																																																																							schemaPath: "#/$defs/TermsMessages/properties/enemyNoHit/type",
																																																																							keyword: "type",
																																																																							params: { type: "string" },
																																																																							message: "must be string"
																																																																						}], !1;
																																																																						w = !0;
																																																																					} else w = !0;
																																																																					if (w) {
																																																																						if (e.enemyRecovery !== void 0) {
																																																																							if (typeof e.enemyRecovery != "string") return s.errors = [{
																																																																								instancePath: t + "/terms/messages/enemyRecovery",
																																																																								schemaPath: "#/$defs/TermsMessages/properties/enemyRecovery/type",
																																																																								keyword: "type",
																																																																								params: { type: "string" },
																																																																								message: "must be string"
																																																																							}], !1;
																																																																							w = !0;
																																																																						} else w = !0;
																																																																						if (w) {
																																																																							if (e.escapeFailure !== void 0) {
																																																																								if (typeof e.escapeFailure != "string") return s.errors = [{
																																																																									instancePath: t + "/terms/messages/escapeFailure",
																																																																									schemaPath: "#/$defs/TermsMessages/properties/escapeFailure/type",
																																																																									keyword: "type",
																																																																									params: { type: "string" },
																																																																									message: "must be string"
																																																																								}], !1;
																																																																								w = !0;
																																																																							} else w = !0;
																																																																							if (w) {
																																																																								if (e.escapeStart !== void 0) {
																																																																									if (typeof e.escapeStart != "string") return s.errors = [{
																																																																										instancePath: t + "/terms/messages/escapeStart",
																																																																										schemaPath: "#/$defs/TermsMessages/properties/escapeStart/type",
																																																																										keyword: "type",
																																																																										params: { type: "string" },
																																																																										message: "must be string"
																																																																									}], !1;
																																																																									w = !0;
																																																																								} else w = !0;
																																																																								if (w) {
																																																																									if (e.evasion !== void 0) {
																																																																										if (typeof e.evasion != "string") return s.errors = [{
																																																																											instancePath: t + "/terms/messages/evasion",
																																																																											schemaPath: "#/$defs/TermsMessages/properties/evasion/type",
																																																																											keyword: "type",
																																																																											params: { type: "string" },
																																																																											message: "must be string"
																																																																										}], !1;
																																																																										w = !0;
																																																																									} else w = !0;
																																																																									if (w) {
																																																																										if (e.expNext !== void 0) {
																																																																											if (typeof e.expNext != "string") return s.errors = [{
																																																																												instancePath: t + "/terms/messages/expNext",
																																																																												schemaPath: "#/$defs/TermsMessages/properties/expNext/type",
																																																																												keyword: "type",
																																																																												params: { type: "string" },
																																																																												message: "must be string"
																																																																											}], !1;
																																																																											w = !0;
																																																																										} else w = !0;
																																																																										if (w) {
																																																																											if (e.expTotal !== void 0) {
																																																																												if (typeof e.expTotal != "string") return s.errors = [{
																																																																													instancePath: t + "/terms/messages/expTotal",
																																																																													schemaPath: "#/$defs/TermsMessages/properties/expTotal/type",
																																																																													keyword: "type",
																																																																													params: { type: "string" },
																																																																													message: "must be string"
																																																																												}], !1;
																																																																												w = !0;
																																																																											} else w = !0;
																																																																											if (w) {
																																																																												if (e.file !== void 0) {
																																																																													if (typeof e.file != "string") return s.errors = [{
																																																																														instancePath: t + "/terms/messages/file",
																																																																														schemaPath: "#/$defs/TermsMessages/properties/file/type",
																																																																														keyword: "type",
																																																																														params: { type: "string" },
																																																																														message: "must be string"
																																																																													}], !1;
																																																																													w = !0;
																																																																												} else w = !0;
																																																																												if (w) {
																																																																													if (e.levelUp !== void 0) {
																																																																														if (typeof e.levelUp != "string") return s.errors = [{
																																																																															instancePath: t + "/terms/messages/levelUp",
																																																																															schemaPath: "#/$defs/TermsMessages/properties/levelUp/type",
																																																																															keyword: "type",
																																																																															params: { type: "string" },
																																																																															message: "must be string"
																																																																														}], !1;
																																																																														w = !0;
																																																																													} else w = !0;
																																																																													if (w) {
																																																																														if (e.loadMessage !== void 0) {
																																																																															if (typeof e.loadMessage != "string") return s.errors = [{
																																																																																instancePath: t + "/terms/messages/loadMessage",
																																																																																schemaPath: "#/$defs/TermsMessages/properties/loadMessage/type",
																																																																																keyword: "type",
																																																																																params: { type: "string" },
																																																																																message: "must be string"
																																																																															}], !1;
																																																																															w = !0;
																																																																														} else w = !0;
																																																																														if (w) {
																																																																															if (e.magicEvasion !== void 0) {
																																																																																if (typeof e.magicEvasion != "string") return s.errors = [{
																																																																																	instancePath: t + "/terms/messages/magicEvasion",
																																																																																	schemaPath: "#/$defs/TermsMessages/properties/magicEvasion/type",
																																																																																	keyword: "type",
																																																																																	params: { type: "string" },
																																																																																	message: "must be string"
																																																																																}], !1;
																																																																																w = !0;
																																																																															} else w = !0;
																																																																															if (w) {
																																																																																if (e.magicReflection !== void 0) {
																																																																																	if (typeof e.magicReflection != "string") return s.errors = [{
																																																																																		instancePath: t + "/terms/messages/magicReflection",
																																																																																		schemaPath: "#/$defs/TermsMessages/properties/magicReflection/type",
																																																																																		keyword: "type",
																																																																																		params: { type: "string" },
																																																																																		message: "must be string"
																																																																																	}], !1;
																																																																																	w = !0;
																																																																																} else w = !0;
																																																																																if (w) {
																																																																																	if (e.meVolume !== void 0) {
																																																																																		if (typeof e.meVolume != "string") return s.errors = [{
																																																																																			instancePath: t + "/terms/messages/meVolume",
																																																																																			schemaPath: "#/$defs/TermsMessages/properties/meVolume/type",
																																																																																			keyword: "type",
																																																																																			params: { type: "string" },
																																																																																			message: "must be string"
																																																																																		}], !1;
																																																																																		w = !0;
																																																																																	} else w = !0;
																																																																																	if (w) {
																																																																																		if (e.obtainExp !== void 0) {
																																																																																			if (typeof e.obtainExp != "string") return s.errors = [{
																																																																																				instancePath: t + "/terms/messages/obtainExp",
																																																																																				schemaPath: "#/$defs/TermsMessages/properties/obtainExp/type",
																																																																																				keyword: "type",
																																																																																				params: { type: "string" },
																																																																																				message: "must be string"
																																																																																			}], !1;
																																																																																			w = !0;
																																																																																		} else w = !0;
																																																																																		if (w) {
																																																																																			if (e.obtainGold !== void 0) {
																																																																																				if (typeof e.obtainGold != "string") return s.errors = [{
																																																																																					instancePath: t + "/terms/messages/obtainGold",
																																																																																					schemaPath: "#/$defs/TermsMessages/properties/obtainGold/type",
																																																																																					keyword: "type",
																																																																																					params: { type: "string" },
																																																																																					message: "must be string"
																																																																																				}], !1;
																																																																																				w = !0;
																																																																																			} else w = !0;
																																																																																			if (w) {
																																																																																				if (e.obtainItem !== void 0) {
																																																																																					if (typeof e.obtainItem != "string") return s.errors = [{
																																																																																						instancePath: t + "/terms/messages/obtainItem",
																																																																																						schemaPath: "#/$defs/TermsMessages/properties/obtainItem/type",
																																																																																						keyword: "type",
																																																																																						params: { type: "string" },
																																																																																						message: "must be string"
																																																																																					}], !1;
																																																																																					w = !0;
																																																																																				} else w = !0;
																																																																																				if (w) {
																																																																																					if (e.obtainSkill !== void 0) {
																																																																																						if (typeof e.obtainSkill != "string") return s.errors = [{
																																																																																							instancePath: t + "/terms/messages/obtainSkill",
																																																																																							schemaPath: "#/$defs/TermsMessages/properties/obtainSkill/type",
																																																																																							keyword: "type",
																																																																																							params: { type: "string" },
																																																																																							message: "must be string"
																																																																																						}], !1;
																																																																																						w = !0;
																																																																																					} else w = !0;
																																																																																					if (w) {
																																																																																						if (e.partyName !== void 0) {
																																																																																							if (typeof e.partyName != "string") return s.errors = [{
																																																																																								instancePath: t + "/terms/messages/partyName",
																																																																																								schemaPath: "#/$defs/TermsMessages/properties/partyName/type",
																																																																																								keyword: "type",
																																																																																								params: { type: "string" },
																																																																																								message: "must be string"
																																																																																							}], !1;
																																																																																							w = !0;
																																																																																						} else w = !0;
																																																																																						if (w) {
																																																																																							if (e.possession !== void 0) {
																																																																																								if (typeof e.possession != "string") return s.errors = [{
																																																																																									instancePath: t + "/terms/messages/possession",
																																																																																									schemaPath: "#/$defs/TermsMessages/properties/possession/type",
																																																																																									keyword: "type",
																																																																																									params: { type: "string" },
																																																																																									message: "must be string"
																																																																																								}], !1;
																																																																																								w = !0;
																																																																																							} else w = !0;
																																																																																							if (w) {
																																																																																								if (e.preemptive !== void 0) {
																																																																																									if (typeof e.preemptive != "string") return s.errors = [{
																																																																																										instancePath: t + "/terms/messages/preemptive",
																																																																																										schemaPath: "#/$defs/TermsMessages/properties/preemptive/type",
																																																																																										keyword: "type",
																																																																																										params: { type: "string" },
																																																																																										message: "must be string"
																																																																																									}], !1;
																																																																																									w = !0;
																																																																																								} else w = !0;
																																																																																								if (w) {
																																																																																									if (e.saveMessage !== void 0) {
																																																																																										if (typeof e.saveMessage != "string") return s.errors = [{
																																																																																											instancePath: t + "/terms/messages/saveMessage",
																																																																																											schemaPath: "#/$defs/TermsMessages/properties/saveMessage/type",
																																																																																											keyword: "type",
																																																																																											params: { type: "string" },
																																																																																											message: "must be string"
																																																																																										}], !1;
																																																																																										w = !0;
																																																																																									} else w = !0;
																																																																																									if (w) {
																																																																																										if (e.seVolume !== void 0) {
																																																																																											if (typeof e.seVolume != "string") return s.errors = [{
																																																																																												instancePath: t + "/terms/messages/seVolume",
																																																																																												schemaPath: "#/$defs/TermsMessages/properties/seVolume/type",
																																																																																												keyword: "type",
																																																																																												params: { type: "string" },
																																																																																												message: "must be string"
																																																																																											}], !1;
																																																																																											w = !0;
																																																																																										} else w = !0;
																																																																																										if (w) {
																																																																																											if (e.substitute !== void 0) {
																																																																																												if (typeof e.substitute != "string") return s.errors = [{
																																																																																													instancePath: t + "/terms/messages/substitute",
																																																																																													schemaPath: "#/$defs/TermsMessages/properties/substitute/type",
																																																																																													keyword: "type",
																																																																																													params: { type: "string" },
																																																																																													message: "must be string"
																																																																																												}], !1;
																																																																																												w = !0;
																																																																																											} else w = !0;
																																																																																											if (w) {
																																																																																												if (e.surprise !== void 0) {
																																																																																													if (typeof e.surprise != "string") return s.errors = [{
																																																																																														instancePath: t + "/terms/messages/surprise",
																																																																																														schemaPath: "#/$defs/TermsMessages/properties/surprise/type",
																																																																																														keyword: "type",
																																																																																														params: { type: "string" },
																																																																																														message: "must be string"
																																																																																													}], !1;
																																																																																													w = !0;
																																																																																												} else w = !0;
																																																																																												if (w) {
																																																																																													if (e.useItem !== void 0) {
																																																																																														if (typeof e.useItem != "string") return s.errors = [{
																																																																																															instancePath: t + "/terms/messages/useItem",
																																																																																															schemaPath: "#/$defs/TermsMessages/properties/useItem/type",
																																																																																															keyword: "type",
																																																																																															params: { type: "string" },
																																																																																															message: "must be string"
																																																																																														}], !1;
																																																																																														w = !0;
																																																																																													} else w = !0;
																																																																																													if (w) if (e.victory !== void 0) {
																																																																																														if (typeof e.victory != "string") return s.errors = [{
																																																																																															instancePath: t + "/terms/messages/victory",
																																																																																															schemaPath: "#/$defs/TermsMessages/properties/victory/type",
																																																																																															keyword: "type",
																																																																																															params: { type: "string" },
																																																																																															message: "must be string"
																																																																																														}], !1;
																																																																																														w = !0;
																																																																																													} else w = !0;
																																																																																												}
																																																																																											}
																																																																																										}
																																																																																									}
																																																																																								}
																																																																																							}
																																																																																						}
																																																																																					}
																																																																																				}
																																																																																			}
																																																																																		}
																																																																																	}
																																																																																}
																																																																															}
																																																																														}
																																																																													}
																																																																												}
																																																																											}
																																																																										}
																																																																									}
																																																																								}
																																																																							}
																																																																						}
																																																																					}
																																																																				}
																																																																			}
																																																																		}
																																																																	}
																																																																}
																																																															}
																																																														}
																																																													}
																																																												}
																																																											}
																																																										}
																																																									}
																																																								}
																																																							}
																																																						}
																																																					}
																																																				}
																																																			}
																																																		}
																																																	}
																																																}
																																															}
																																														}
																																													}
																																												}
																																											}
																																											S = !0;
																																										} else S = !0;
																																										if (S) if (n.params !== void 0) {
																																											let e = n.params;
																																											if (!Array.isArray(e)) return s.errors = [{
																																												instancePath: t + "/terms/params",
																																												schemaPath: "#/$defs/TermsParams/type",
																																												keyword: "type",
																																												params: { type: "array" },
																																												message: "must be array"
																																											}], !1;
																																											if (e.length > 10) return s.errors = [{
																																												instancePath: t + "/terms/params",
																																												schemaPath: "#/$defs/TermsParams/maxItems",
																																												keyword: "maxItems",
																																												params: { limit: 10 },
																																												message: "must NOT have more than 10 items"
																																											}], !1;
																																											if (e.length < 10) return s.errors = [{
																																												instancePath: t + "/terms/params",
																																												schemaPath: "#/$defs/TermsParams/minItems",
																																												keyword: "minItems",
																																												params: { limit: 10 },
																																												message: "must NOT have fewer than 10 items"
																																											}], !1;
																																											{
																																												let n = e.length;
																																												for (let r = 0; r < n; r++) {
																																													let n = e[r];
																																													if (typeof n != "string") return s.errors = [{
																																														instancePath: t + "/terms/params/" + r,
																																														schemaPath: "#/$defs/TermsParams/items/type",
																																														keyword: "type",
																																														params: { type: "string" },
																																														message: "must be string"
																																													}], !1;
																																													if (o(n) < 0) return s.errors = [{
																																														instancePath: t + "/terms/params/" + r,
																																														schemaPath: "#/$defs/TermsParams/items/minLength",
																																														keyword: "minLength",
																																														params: { limit: 0 },
																																														message: "must NOT have fewer than 0 characters"
																																													}], !1;
																																												}
																																											}
																																											S = !0;
																																										} else S = !0;
																																									}
																																								}
																																							}
																																							f = !0;
																																						} else f = !0;
																																						if (f) {
																																							if (e.testBattlers !== void 0) {
																																								let n = e.testBattlers;
																																								if (!Array.isArray(n)) return s.errors = [{
																																									instancePath: t + "/testBattlers",
																																									schemaPath: "#/properties/testBattlers/type",
																																									keyword: "type",
																																									params: { type: "array" },
																																									message: "must be array"
																																								}], !1;
																																								{
																																									let e = n.length;
																																									for (let r = 0; r < e; r++) {
																																										let e = n[r];
																																										if (!e || typeof e != "object" || Array.isArray(e)) return s.errors = [{
																																											instancePath: t + "/testBattlers/" + r,
																																											schemaPath: "#/$defs/TestBattler/type",
																																											keyword: "type",
																																											params: { type: "object" },
																																											message: "must be object"
																																										}], !1;
																																										{
																																											let n;
																																											if (e.actorId === void 0 && (n = "actorId") || e.level === void 0 && (n = "level") || e.equips === void 0 && (n = "equips")) return s.errors = [{
																																												instancePath: t + "/testBattlers/" + r,
																																												schemaPath: "#/$defs/TestBattler/required",
																																												keyword: "required",
																																												params: { missingProperty: n },
																																												message: "must have required property '" + n + "'"
																																											}], !1;
																																											for (let n in e) if (n !== "actorId" && n !== "equips" && n !== "level") return s.errors = [{
																																												instancePath: t + "/testBattlers/" + r,
																																												schemaPath: "#/$defs/TestBattler/additionalProperties",
																																												keyword: "additionalProperties",
																																												params: { additionalProperty: n },
																																												message: "must NOT have additional properties"
																																											}], !1;
																																											if (e.actorId !== void 0) {
																																												let n = e.actorId;
																																												if (typeof n != "number" || n % 1 || isNaN(n) || !isFinite(n)) return s.errors = [{
																																													instancePath: t + "/testBattlers/" + r + "/actorId",
																																													schemaPath: "#/$defs/TestBattler/properties/actorId/type",
																																													keyword: "type",
																																													params: { type: "integer" },
																																													message: "must be integer"
																																												}], !1;
																																												if (typeof n == "number" && isFinite(n) && (n < 0 || isNaN(n))) return s.errors = [{
																																													instancePath: t + "/testBattlers/" + r + "/actorId",
																																													schemaPath: "#/$defs/TestBattler/properties/actorId/minimum",
																																													keyword: "minimum",
																																													params: {
																																														comparison: ">=",
																																														limit: 0
																																													},
																																													message: "must be >= 0"
																																												}], !1;
																																												var T = !0;
																																											} else T = !0;
																																											if (T) {
																																												if (e.equips !== void 0) {
																																													let n = e.equips;
																																													if (!Array.isArray(n)) return s.errors = [{
																																														instancePath: t + "/testBattlers/" + r + "/equips",
																																														schemaPath: "#/$defs/TestBattler/properties/equips/type",
																																														keyword: "type",
																																														params: { type: "array" },
																																														message: "must be array"
																																													}], !1;
																																													{
																																														let e = n.length;
																																														for (let i = 0; i < e; i++) {
																																															let e = n[i];
																																															if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return s.errors = [{
																																																instancePath: t + "/testBattlers/" + r + "/equips/" + i,
																																																schemaPath: "#/$defs/TestBattler/properties/equips/items/type",
																																																keyword: "type",
																																																params: { type: "integer" },
																																																message: "must be integer"
																																															}], !1;
																																														}
																																													}
																																													T = !0;
																																												} else T = !0;
																																												if (T) if (e.level !== void 0) {
																																													let n = e.level;
																																													if (typeof n != "number" || n % 1 || isNaN(n) || !isFinite(n)) return s.errors = [{
																																														instancePath: t + "/testBattlers/" + r + "/level",
																																														schemaPath: "#/$defs/TestBattler/properties/level/type",
																																														keyword: "type",
																																														params: { type: "integer" },
																																														message: "must be integer"
																																													}], !1;
																																													if (typeof n == "number" && isFinite(n) && (n < 0 || isNaN(n))) return s.errors = [{
																																														instancePath: t + "/testBattlers/" + r + "/level",
																																														schemaPath: "#/$defs/TestBattler/properties/level/minimum",
																																														keyword: "minimum",
																																														params: {
																																															comparison: ">=",
																																															limit: 0
																																														},
																																														message: "must be >= 0"
																																													}], !1;
																																													T = !0;
																																												} else T = !0;
																																											}
																																										}
																																									}
																																								}
																																								f = !0;
																																							} else f = !0;
																																							if (f) {
																																								if (e.testTroopId !== void 0) {
																																									let n = e.testTroopId;
																																									if (typeof n != "number" || n % 1 || isNaN(n) || !isFinite(n)) return s.errors = [{
																																										instancePath: t + "/testTroopId",
																																										schemaPath: "#/properties/testTroopId/type",
																																										keyword: "type",
																																										params: { type: "integer" },
																																										message: "must be integer"
																																									}], !1;
																																									if (typeof n == "number" && isFinite(n) && (n < 0 || isNaN(n))) return s.errors = [{
																																										instancePath: t + "/testTroopId",
																																										schemaPath: "#/properties/testTroopId/minimum",
																																										keyword: "minimum",
																																										params: {
																																											comparison: ">=",
																																											limit: 0
																																										},
																																										message: "must be >= 0"
																																									}], !1;
																																									f = !0;
																																								} else f = !0;
																																								if (f) {
																																									if (e.title1Name !== void 0) {
																																										if (typeof e.title1Name != "string") return s.errors = [{
																																											instancePath: t + "/title1Name",
																																											schemaPath: "#/properties/title1Name/type",
																																											keyword: "type",
																																											params: { type: "string" },
																																											message: "must be string"
																																										}], !1;
																																										f = !0;
																																									} else f = !0;
																																									if (f) {
																																										if (e.title2Name !== void 0) {
																																											if (typeof e.title2Name != "string") return s.errors = [{
																																												instancePath: t + "/title2Name",
																																												schemaPath: "#/properties/title2Name/type",
																																												keyword: "type",
																																												params: { type: "string" },
																																												message: "must be string"
																																											}], !1;
																																											f = !0;
																																										} else f = !0;
																																										if (f) {
																																											if (e.titleBgm !== void 0) {
																																												let n = e.titleBgm;
																																												if (!n || typeof n != "object" || Array.isArray(n)) return s.errors = [{
																																													instancePath: t + "/titleBgm",
																																													schemaPath: "#/$defs/Audio/type",
																																													keyword: "type",
																																													params: { type: "object" },
																																													message: "must be object"
																																												}], !1;
																																												{
																																													let e;
																																													if (n.name === void 0 && (e = "name") || n.volume === void 0 && (e = "volume") || n.pitch === void 0 && (e = "pitch") || n.pan === void 0 && (e = "pan")) return s.errors = [{
																																														instancePath: t + "/titleBgm",
																																														schemaPath: "#/$defs/Audio/required",
																																														keyword: "required",
																																														params: { missingProperty: e },
																																														message: "must have required property '" + e + "'"
																																													}], !1;
																																													for (let e in n) if (e !== "name" && e !== "volume" && e !== "pitch" && e !== "pan") return s.errors = [{
																																														instancePath: t + "/titleBgm",
																																														schemaPath: "#/$defs/Audio/additionalProperties",
																																														keyword: "additionalProperties",
																																														params: { additionalProperty: e },
																																														message: "must NOT have additional properties"
																																													}], !1;
																																													if (n.name !== void 0) {
																																														if (typeof n.name != "string") return s.errors = [{
																																															instancePath: t + "/titleBgm/name",
																																															schemaPath: "#/$defs/Audio/properties/name/type",
																																															keyword: "type",
																																															params: { type: "string" },
																																															message: "must be string"
																																														}], !1;
																																														var E = !0;
																																													} else E = !0;
																																													if (E) {
																																														if (n.volume !== void 0) {
																																															let e = n.volume;
																																															if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return s.errors = [{
																																																instancePath: t + "/titleBgm/volume",
																																																schemaPath: "#/$defs/Audio/properties/volume/type",
																																																keyword: "type",
																																																params: { type: "integer" },
																																																message: "must be integer"
																																															}], !1;
																																															E = !0;
																																														} else E = !0;
																																														if (E) {
																																															if (n.pitch !== void 0) {
																																																let e = n.pitch;
																																																if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return s.errors = [{
																																																	instancePath: t + "/titleBgm/pitch",
																																																	schemaPath: "#/$defs/Audio/properties/pitch/type",
																																																	keyword: "type",
																																																	params: { type: "integer" },
																																																	message: "must be integer"
																																																}], !1;
																																																E = !0;
																																															} else E = !0;
																																															if (E) if (n.pan !== void 0) {
																																																let e = n.pan;
																																																if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return s.errors = [{
																																																	instancePath: t + "/titleBgm/pan",
																																																	schemaPath: "#/$defs/Audio/properties/pan/type",
																																																	keyword: "type",
																																																	params: { type: "integer" },
																																																	message: "must be integer"
																																																}], !1;
																																																E = !0;
																																															} else E = !0;
																																														}
																																													}
																																												}
																																												f = !0;
																																											} else f = !0;
																																											if (f) {
																																												if (e.variables !== void 0) {
																																													let n = e.variables;
																																													if (!Array.isArray(n)) return s.errors = [{
																																														instancePath: t + "/variables",
																																														schemaPath: "#/properties/variables/type",
																																														keyword: "type",
																																														params: { type: "array" },
																																														message: "must be array"
																																													}], !1;
																																													{
																																														let e = n.length;
																																														for (let r = 0; r < e; r++) if (typeof n[r] != "string") return s.errors = [{
																																															instancePath: t + "/variables/" + r,
																																															schemaPath: "#/properties/variables/items/type",
																																															keyword: "type",
																																															params: { type: "string" },
																																															message: "must be string"
																																														}], !1;
																																													}
																																													f = !0;
																																												} else f = !0;
																																												if (f) {
																																													if (e.versionId !== void 0) {
																																														let n = e.versionId;
																																														if (typeof n != "number" || n % 1 || isNaN(n) || !isFinite(n)) return s.errors = [{
																																															instancePath: t + "/versionId",
																																															schemaPath: "#/properties/versionId/type",
																																															keyword: "type",
																																															params: { type: "integer" },
																																															message: "must be integer"
																																														}], !1;
																																														f = !0;
																																													} else f = !0;
																																													if (f) {
																																														if (e.victoryMe !== void 0) {
																																															let n = e.victoryMe;
																																															if (!n || typeof n != "object" || Array.isArray(n)) return s.errors = [{
																																																instancePath: t + "/victoryMe",
																																																schemaPath: "#/$defs/Audio/type",
																																																keyword: "type",
																																																params: { type: "object" },
																																																message: "must be object"
																																															}], !1;
																																															{
																																																let e;
																																																if (n.name === void 0 && (e = "name") || n.volume === void 0 && (e = "volume") || n.pitch === void 0 && (e = "pitch") || n.pan === void 0 && (e = "pan")) return s.errors = [{
																																																	instancePath: t + "/victoryMe",
																																																	schemaPath: "#/$defs/Audio/required",
																																																	keyword: "required",
																																																	params: { missingProperty: e },
																																																	message: "must have required property '" + e + "'"
																																																}], !1;
																																																for (let e in n) if (e !== "name" && e !== "volume" && e !== "pitch" && e !== "pan") return s.errors = [{
																																																	instancePath: t + "/victoryMe",
																																																	schemaPath: "#/$defs/Audio/additionalProperties",
																																																	keyword: "additionalProperties",
																																																	params: { additionalProperty: e },
																																																	message: "must NOT have additional properties"
																																																}], !1;
																																																if (n.name !== void 0) {
																																																	if (typeof n.name != "string") return s.errors = [{
																																																		instancePath: t + "/victoryMe/name",
																																																		schemaPath: "#/$defs/Audio/properties/name/type",
																																																		keyword: "type",
																																																		params: { type: "string" },
																																																		message: "must be string"
																																																	}], !1;
																																																	var D = !0;
																																																} else D = !0;
																																																if (D) {
																																																	if (n.volume !== void 0) {
																																																		let e = n.volume;
																																																		if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return s.errors = [{
																																																			instancePath: t + "/victoryMe/volume",
																																																			schemaPath: "#/$defs/Audio/properties/volume/type",
																																																			keyword: "type",
																																																			params: { type: "integer" },
																																																			message: "must be integer"
																																																		}], !1;
																																																		D = !0;
																																																	} else D = !0;
																																																	if (D) {
																																																		if (n.pitch !== void 0) {
																																																			let e = n.pitch;
																																																			if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return s.errors = [{
																																																				instancePath: t + "/victoryMe/pitch",
																																																				schemaPath: "#/$defs/Audio/properties/pitch/type",
																																																				keyword: "type",
																																																				params: { type: "integer" },
																																																				message: "must be integer"
																																																			}], !1;
																																																			D = !0;
																																																		} else D = !0;
																																																		if (D) if (n.pan !== void 0) {
																																																			let e = n.pan;
																																																			if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return s.errors = [{
																																																				instancePath: t + "/victoryMe/pan",
																																																				schemaPath: "#/$defs/Audio/properties/pan/type",
																																																				keyword: "type",
																																																				params: { type: "integer" },
																																																				message: "must be integer"
																																																			}], !1;
																																																			D = !0;
																																																		} else D = !0;
																																																	}
																																																}
																																															}
																																															f = !0;
																																														} else f = !0;
																																														if (f) {
																																															if (e.weaponTypes !== void 0) {
																																																let n = e.weaponTypes;
																																																if (!Array.isArray(n)) return s.errors = [{
																																																	instancePath: t + "/weaponTypes",
																																																	schemaPath: "#/properties/weaponTypes/type",
																																																	keyword: "type",
																																																	params: { type: "array" },
																																																	message: "must be array"
																																																}], !1;
																																																{
																																																	let e = n.length;
																																																	for (let r = 0; r < e; r++) if (typeof n[r] != "string") return s.errors = [{
																																																		instancePath: t + "/weaponTypes/" + r,
																																																		schemaPath: "#/properties/weaponTypes/items/type",
																																																		keyword: "type",
																																																		params: { type: "string" },
																																																		message: "must be string"
																																																	}], !1;
																																																}
																																																f = !0;
																																															} else f = !0;
																																															if (f) if (e.windowTone !== void 0) {
																																																let n = e.windowTone;
																																																if (!Array.isArray(n)) return s.errors = [{
																																																	instancePath: t + "/windowTone",
																																																	schemaPath: "#/properties/windowTone/type",
																																																	keyword: "type",
																																																	params: { type: "array" },
																																																	message: "must be array"
																																																}], !1;
																																																{
																																																	let e = n.length;
																																																	for (let r = 0; r < e; r++) {
																																																		let e = n[r];
																																																		if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return s.errors = [{
																																																			instancePath: t + "/windowTone/" + r,
																																																			schemaPath: "#/properties/windowTone/items/type",
																																																			keyword: "type",
																																																			params: { type: "integer" },
																																																			message: "must be integer"
																																																		}], !1;
																																																		if (typeof e == "number" && isFinite(e)) {
																																																			if (e > 255 || isNaN(e)) return s.errors = [{
																																																				instancePath: t + "/windowTone/" + r,
																																																				schemaPath: "#/properties/windowTone/items/maximum",
																																																				keyword: "maximum",
																																																				params: {
																																																					comparison: "<=",
																																																					limit: 255
																																																				},
																																																				message: "must be <= 255"
																																																			}], !1;
																																																			if (e < 0 || isNaN(e)) return s.errors = [{
																																																				instancePath: t + "/windowTone/" + r,
																																																				schemaPath: "#/properties/windowTone/items/minimum",
																																																				keyword: "minimum",
																																																				params: {
																																																					comparison: ">=",
																																																					limit: 0
																																																				},
																																																				message: "must be >= 0"
																																																			}], !1;
																																																		}
																																																	}
																																																}
																																																f = !0;
																																															} else f = !0;
																																														}
																																													}
																																												}
																																											}
																																										}
																																									}
																																								}
																																							}
																																						}
																																					}
																																				}
																																			}
																																		}
																																	}
																																}
																															}
																														}
																													}
																												}
																											}
																										}
																									}
																								}
																							}
																						}
																					}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
		return s.errors = null, !0;
	}
}))()), i = (e) => (0, r.default)(e);
export { i as isDataSystemMV };
