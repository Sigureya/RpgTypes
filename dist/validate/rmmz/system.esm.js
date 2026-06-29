import { n as e, t } from "../../shared/chunk.esm.js";
import { t as n } from "../../shared/ucs2length.esm.js";
var r = e(t(((e, t) => {
	t.exports = c, t.exports.default = c;
	var r = {
		additionalProperties: !1,
		$defs: {
			Advanced: {
				additionalProperties: !1,
				type: "object",
				properties: {
					gameId: { type: "integer" },
					screenWidth: { type: "integer" },
					screenHeight: { type: "integer" },
					uiAreaWidth: { type: "integer" },
					uiAreaHeight: { type: "integer" },
					windowOpacity: { type: "integer" },
					screenScale: { type: "number" },
					numberFontFilename: { type: "string" },
					mainFontFilename: { type: "string" },
					fallbackFonts: { type: "string" },
					fontSize: { type: "integer" },
					picturesUpperLimit: {
						nullable: !0,
						type: "integer"
					}
				},
				required: [
					"gameId",
					"screenWidth",
					"screenHeight",
					"uiAreaWidth",
					"uiAreaHeight",
					"windowOpacity",
					"screenScale",
					"numberFontFilename",
					"mainFontFilename",
					"fallbackFonts",
					"fontSize"
				]
			},
			Editor: {
				additionalProperties: !1,
				type: "object",
				required: [
					"messageWidth1",
					"messageWidth2",
					"jsonFormatLevel"
				],
				properties: {
					messageWidth1: {
						type: "integer",
						minimum: 0,
						maximum: 1e3
					},
					messageWidth2: {
						type: "integer",
						minimum: 0,
						maximum: 1e3
					},
					jsonFormatLevel: {
						type: "integer",
						minimum: 0,
						maximum: 4
					}
				}
			},
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
			ItemCategories: {
				type: "array",
				maxItems: 4,
				minItems: 4,
				items: { type: "boolean" }
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
				required: /* @__PURE__ */ "actionFailure.actorDamage.actorDrain.actorGain.actorLoss.actorNoDamage.actorNoHit.actorRecovery.alwaysDash.autosave.bgmVolume.bgsVolume.buffAdd.buffRemove.commandRemember.counterAttack.criticalToActor.criticalToEnemy.debuffAdd.defeat.emerge.enemyDamage.enemyDrain.enemyGain.enemyLoss.enemyNoDamage.enemyNoHit.enemyRecovery.escapeFailure.escapeStart.evasion.expNext.expTotal.file.levelUp.loadMessage.magicEvasion.magicReflection.meVolume.obtainExp.obtainGold.obtainItem.obtainSkill.partyName.possession.preemptive.saveMessage.seVolume.substitute.surprise.touchUI.useItem.victory".split("."),
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
					autosave: { type: "string" },
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
					touchUI: { type: "string" },
					useItem: { type: "string" },
					victory: { type: "string" }
				}
			},
			TitleCommandWindow: {
				type: "object",
				additionalProperties: !1,
				required: [
					"background",
					"offsetX",
					"offsetY"
				],
				properties: {
					background: { type: "integer" },
					offsetX: { type: "integer" },
					offsetY: { type: "integer" }
				}
			}
		},
		type: "object",
		required: /* @__PURE__ */ "gameTitle.currencyUnit.terms.ship.boat.airship.advanced.titleBgm.battleBgm.gameoverMe.victoryMe.defeatMe.attackMotions.optAutosave.optDisplayTp.optFloorDeath.optFollowers.optKeyItemsNumber.optSideView.optSlipDeath.optTransparent.optSplashScreen.optDrawTitle.optExtraExp.optMessageSkip.startMapId.startX.startY.faceSize.tileSize.iconSize.battleSystem.elements.weaponTypes.armorTypes.equipTypes.skillTypes.switches.variables.magicSkills.battleback1Name.battleback2Name.testTroopId.partyMembers.editor.testBattlers.editMapId.battlerHue.battlerName.sounds.title1Name.title2Name.versionId.locale.windowTone.itemCategories.menuCommands.titleCommandWindow".split("."),
		properties: {
			gameTitle: { type: "string" },
			currencyUnit: { type: "string" },
			editor: { $ref: "#/$defs/Editor" },
			advanced: { $ref: "#/$defs/Advanced" },
			attackMotions: {
				items: { $ref: "#/$defs/AttackMotion" },
				type: "array"
			},
			titleBgm: { $ref: "#/$defs/Audio" },
			battleBgm: { $ref: "#/$defs/Audio" },
			gameoverMe: { $ref: "#/$defs/Audio" },
			victoryMe: { $ref: "#/$defs/Audio" },
			defeatMe: { $ref: "#/$defs/Audio" },
			sounds: {
				type: "array",
				maxItems: 24,
				minItems: 24,
				items: { $ref: "#/$defs/Audio" }
			},
			itemCategories: { $ref: "#/$defs/ItemCategories" },
			menuCommands: { $ref: "#/$defs/MenuCommands" },
			ship: { $ref: "#/$defs/Vehicle" },
			boat: { $ref: "#/$defs/Vehicle" },
			airship: { $ref: "#/$defs/Vehicle" },
			testBattlers: {
				type: "array",
				items: { $ref: "#/$defs/TestBattler" }
			},
			terms: {
				type: "object",
				additionalProperties: !1,
				required: [
					"messages",
					"commands",
					"basic",
					"params"
				],
				properties: {
					messages: { $ref: "#/$defs/TermsMessages" },
					commands: { $ref: "#/$defs/TermsCommands" },
					basic: { $ref: "#/$defs/TermsBasic" },
					params: { $ref: "#/$defs/TermsParams" }
				}
			},
			optAutosave: { type: "boolean" },
			optDisplayTp: { type: "boolean" },
			optFloorDeath: { type: "boolean" },
			optFollowers: { type: "boolean" },
			optKeyItemsNumber: { type: "boolean" },
			optSideView: { type: "boolean" },
			optSlipDeath: { type: "boolean" },
			optTransparent: { type: "boolean" },
			optSplashScreen: { type: "boolean" },
			optDrawTitle: { type: "boolean" },
			optExtraExp: { type: "boolean" },
			optMessageSkip: { type: "boolean" },
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
			},
			faceSize: {
				type: "integer",
				minimum: 0
			},
			tileSize: {
				type: "integer",
				minimum: 0
			},
			iconSize: {
				type: "integer",
				minimum: 0
			},
			battleSystem: {
				type: "integer",
				minimum: 0,
				maximum: 2
			},
			elements: {
				type: "array",
				items: { type: "string" }
			},
			weaponTypes: {
				type: "array",
				items: { type: "string" }
			},
			armorTypes: {
				type: "array",
				items: { type: "string" }
			},
			equipTypes: {
				type: "array",
				items: { type: "string" }
			},
			skillTypes: {
				type: "array",
				items: { type: "string" }
			},
			switches: {
				type: "array",
				items: { type: "string" }
			},
			variables: {
				type: "array",
				items: { type: "string" }
			},
			magicSkills: {
				type: "array",
				items: { type: "integer" }
			},
			battleback1Name: { type: "string" },
			battleback2Name: { type: "string" },
			testTroopId: {
				type: "integer",
				minimum: 0
			},
			partyMembers: {
				type: "array",
				items: { type: "integer" }
			},
			editMapId: {
				type: "integer",
				minimum: 0
			},
			battlerHue: { type: "integer" },
			battlerName: { type: "string" },
			title1Name: { type: "string" },
			title2Name: { type: "string" },
			versionId: { type: "integer" },
			locale: { type: "string" },
			windowTone: {
				type: "array",
				items: {
					type: "integer",
					minimum: 0,
					maximum: 255
				}
			},
			titleCommandWindow: { $ref: "#/$defs/TitleCommandWindow" }
		}
	}, i = {
		additionalProperties: !1,
		type: "object",
		properties: {
			gameId: { type: "integer" },
			screenWidth: { type: "integer" },
			screenHeight: { type: "integer" },
			uiAreaWidth: { type: "integer" },
			uiAreaHeight: { type: "integer" },
			windowOpacity: { type: "integer" },
			screenScale: { type: "number" },
			numberFontFilename: { type: "string" },
			mainFontFilename: { type: "string" },
			fallbackFonts: { type: "string" },
			fontSize: { type: "integer" },
			picturesUpperLimit: {
				nullable: !0,
				type: "integer"
			}
		},
		required: [
			"gameId",
			"screenWidth",
			"screenHeight",
			"uiAreaWidth",
			"uiAreaHeight",
			"windowOpacity",
			"screenScale",
			"numberFontFilename",
			"mainFontFilename",
			"fallbackFonts",
			"fontSize"
		]
	}, a = {
		type: "object",
		additionalProperties: !1,
		required: /* @__PURE__ */ "actionFailure.actorDamage.actorDrain.actorGain.actorLoss.actorNoDamage.actorNoHit.actorRecovery.alwaysDash.autosave.bgmVolume.bgsVolume.buffAdd.buffRemove.commandRemember.counterAttack.criticalToActor.criticalToEnemy.debuffAdd.defeat.emerge.enemyDamage.enemyDrain.enemyGain.enemyLoss.enemyNoDamage.enemyNoHit.enemyRecovery.escapeFailure.escapeStart.evasion.expNext.expTotal.file.levelUp.loadMessage.magicEvasion.magicReflection.meVolume.obtainExp.obtainGold.obtainItem.obtainSkill.partyName.possession.preemptive.saveMessage.seVolume.substitute.surprise.touchUI.useItem.victory".split("."),
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
			autosave: { type: "string" },
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
			touchUI: { type: "string" },
			useItem: { type: "string" },
			victory: { type: "string" }
		}
	}, o = Object.prototype.hasOwnProperty, s = n().default;
	function c(e, { instancePath: t = "", parentData: n, parentDataProperty: l, rootData: u = e } = {}) {
		if (!e || typeof e != "object" || Array.isArray(e)) return c.errors = [{
			instancePath: t,
			schemaPath: "#/type",
			keyword: "type",
			params: { type: "object" },
			message: "must be object"
		}], !1;
		{
			let n;
			if (e.gameTitle === void 0 && (n = "gameTitle") || e.currencyUnit === void 0 && (n = "currencyUnit") || e.terms === void 0 && (n = "terms") || e.ship === void 0 && (n = "ship") || e.boat === void 0 && (n = "boat") || e.airship === void 0 && (n = "airship") || e.advanced === void 0 && (n = "advanced") || e.titleBgm === void 0 && (n = "titleBgm") || e.battleBgm === void 0 && (n = "battleBgm") || e.gameoverMe === void 0 && (n = "gameoverMe") || e.victoryMe === void 0 && (n = "victoryMe") || e.defeatMe === void 0 && (n = "defeatMe") || e.attackMotions === void 0 && (n = "attackMotions") || e.optAutosave === void 0 && (n = "optAutosave") || e.optDisplayTp === void 0 && (n = "optDisplayTp") || e.optFloorDeath === void 0 && (n = "optFloorDeath") || e.optFollowers === void 0 && (n = "optFollowers") || e.optKeyItemsNumber === void 0 && (n = "optKeyItemsNumber") || e.optSideView === void 0 && (n = "optSideView") || e.optSlipDeath === void 0 && (n = "optSlipDeath") || e.optTransparent === void 0 && (n = "optTransparent") || e.optSplashScreen === void 0 && (n = "optSplashScreen") || e.optDrawTitle === void 0 && (n = "optDrawTitle") || e.optExtraExp === void 0 && (n = "optExtraExp") || e.optMessageSkip === void 0 && (n = "optMessageSkip") || e.startMapId === void 0 && (n = "startMapId") || e.startX === void 0 && (n = "startX") || e.startY === void 0 && (n = "startY") || e.faceSize === void 0 && (n = "faceSize") || e.tileSize === void 0 && (n = "tileSize") || e.iconSize === void 0 && (n = "iconSize") || e.battleSystem === void 0 && (n = "battleSystem") || e.elements === void 0 && (n = "elements") || e.weaponTypes === void 0 && (n = "weaponTypes") || e.armorTypes === void 0 && (n = "armorTypes") || e.equipTypes === void 0 && (n = "equipTypes") || e.skillTypes === void 0 && (n = "skillTypes") || e.switches === void 0 && (n = "switches") || e.variables === void 0 && (n = "variables") || e.magicSkills === void 0 && (n = "magicSkills") || e.battleback1Name === void 0 && (n = "battleback1Name") || e.battleback2Name === void 0 && (n = "battleback2Name") || e.testTroopId === void 0 && (n = "testTroopId") || e.partyMembers === void 0 && (n = "partyMembers") || e.editor === void 0 && (n = "editor") || e.testBattlers === void 0 && (n = "testBattlers") || e.editMapId === void 0 && (n = "editMapId") || e.battlerHue === void 0 && (n = "battlerHue") || e.battlerName === void 0 && (n = "battlerName") || e.sounds === void 0 && (n = "sounds") || e.title1Name === void 0 && (n = "title1Name") || e.title2Name === void 0 && (n = "title2Name") || e.versionId === void 0 && (n = "versionId") || e.locale === void 0 && (n = "locale") || e.windowTone === void 0 && (n = "windowTone") || e.itemCategories === void 0 && (n = "itemCategories") || e.menuCommands === void 0 && (n = "menuCommands") || e.titleCommandWindow === void 0 && (n = "titleCommandWindow")) return c.errors = [{
				instancePath: t,
				schemaPath: "#/required",
				keyword: "required",
				params: { missingProperty: n },
				message: "must have required property '" + n + "'"
			}], !1;
			for (let n in e) if (!o.call(r.properties, n)) return c.errors = [{
				instancePath: t,
				schemaPath: "#/additionalProperties",
				keyword: "additionalProperties",
				params: { additionalProperty: n },
				message: "must NOT have additional properties"
			}], !1;
			if (e.gameTitle !== void 0) {
				if (typeof e.gameTitle != "string") return c.errors = [{
					instancePath: t + "/gameTitle",
					schemaPath: "#/properties/gameTitle/type",
					keyword: "type",
					params: { type: "string" },
					message: "must be string"
				}], !1;
				var d = !0;
			} else d = !0;
			if (d) {
				if (e.currencyUnit !== void 0) {
					if (typeof e.currencyUnit != "string") return c.errors = [{
						instancePath: t + "/currencyUnit",
						schemaPath: "#/properties/currencyUnit/type",
						keyword: "type",
						params: { type: "string" },
						message: "must be string"
					}], !1;
					d = !0;
				} else d = !0;
				if (d) {
					if (e.editor !== void 0) {
						let n = e.editor;
						if (!n || typeof n != "object" || Array.isArray(n)) return c.errors = [{
							instancePath: t + "/editor",
							schemaPath: "#/$defs/Editor/type",
							keyword: "type",
							params: { type: "object" },
							message: "must be object"
						}], !1;
						{
							let e;
							if (n.messageWidth1 === void 0 && (e = "messageWidth1") || n.messageWidth2 === void 0 && (e = "messageWidth2") || n.jsonFormatLevel === void 0 && (e = "jsonFormatLevel")) return c.errors = [{
								instancePath: t + "/editor",
								schemaPath: "#/$defs/Editor/required",
								keyword: "required",
								params: { missingProperty: e },
								message: "must have required property '" + e + "'"
							}], !1;
							for (let e in n) if (e !== "messageWidth1" && e !== "messageWidth2" && e !== "jsonFormatLevel") return c.errors = [{
								instancePath: t + "/editor",
								schemaPath: "#/$defs/Editor/additionalProperties",
								keyword: "additionalProperties",
								params: { additionalProperty: e },
								message: "must NOT have additional properties"
							}], !1;
							if (n.messageWidth1 !== void 0) {
								let e = n.messageWidth1;
								if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return c.errors = [{
									instancePath: t + "/editor/messageWidth1",
									schemaPath: "#/$defs/Editor/properties/messageWidth1/type",
									keyword: "type",
									params: { type: "integer" },
									message: "must be integer"
								}], !1;
								if (typeof e == "number" && isFinite(e)) {
									if (e > 1e3 || isNaN(e)) return c.errors = [{
										instancePath: t + "/editor/messageWidth1",
										schemaPath: "#/$defs/Editor/properties/messageWidth1/maximum",
										keyword: "maximum",
										params: {
											comparison: "<=",
											limit: 1e3
										},
										message: "must be <= 1000"
									}], !1;
									if (e < 0 || isNaN(e)) return c.errors = [{
										instancePath: t + "/editor/messageWidth1",
										schemaPath: "#/$defs/Editor/properties/messageWidth1/minimum",
										keyword: "minimum",
										params: {
											comparison: ">=",
											limit: 0
										},
										message: "must be >= 0"
									}], !1;
								}
								var f = !0;
							} else f = !0;
							if (f) {
								if (n.messageWidth2 !== void 0) {
									let e = n.messageWidth2;
									if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return c.errors = [{
										instancePath: t + "/editor/messageWidth2",
										schemaPath: "#/$defs/Editor/properties/messageWidth2/type",
										keyword: "type",
										params: { type: "integer" },
										message: "must be integer"
									}], !1;
									if (typeof e == "number" && isFinite(e)) {
										if (e > 1e3 || isNaN(e)) return c.errors = [{
											instancePath: t + "/editor/messageWidth2",
											schemaPath: "#/$defs/Editor/properties/messageWidth2/maximum",
											keyword: "maximum",
											params: {
												comparison: "<=",
												limit: 1e3
											},
											message: "must be <= 1000"
										}], !1;
										if (e < 0 || isNaN(e)) return c.errors = [{
											instancePath: t + "/editor/messageWidth2",
											schemaPath: "#/$defs/Editor/properties/messageWidth2/minimum",
											keyword: "minimum",
											params: {
												comparison: ">=",
												limit: 0
											},
											message: "must be >= 0"
										}], !1;
									}
									f = !0;
								} else f = !0;
								if (f) if (n.jsonFormatLevel !== void 0) {
									let e = n.jsonFormatLevel;
									if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return c.errors = [{
										instancePath: t + "/editor/jsonFormatLevel",
										schemaPath: "#/$defs/Editor/properties/jsonFormatLevel/type",
										keyword: "type",
										params: { type: "integer" },
										message: "must be integer"
									}], !1;
									if (typeof e == "number" && isFinite(e)) {
										if (e > 4 || isNaN(e)) return c.errors = [{
											instancePath: t + "/editor/jsonFormatLevel",
											schemaPath: "#/$defs/Editor/properties/jsonFormatLevel/maximum",
											keyword: "maximum",
											params: {
												comparison: "<=",
												limit: 4
											},
											message: "must be <= 4"
										}], !1;
										if (e < 0 || isNaN(e)) return c.errors = [{
											instancePath: t + "/editor/jsonFormatLevel",
											schemaPath: "#/$defs/Editor/properties/jsonFormatLevel/minimum",
											keyword: "minimum",
											params: {
												comparison: ">=",
												limit: 0
											},
											message: "must be >= 0"
										}], !1;
									}
									f = !0;
								} else f = !0;
							}
						}
						d = !0;
					} else d = !0;
					if (d) {
						if (e.advanced !== void 0) {
							let n = e.advanced;
							if (!n || typeof n != "object" || Array.isArray(n)) return c.errors = [{
								instancePath: t + "/advanced",
								schemaPath: "#/$defs/Advanced/type",
								keyword: "type",
								params: { type: "object" },
								message: "must be object"
							}], !1;
							{
								let e;
								if (n.gameId === void 0 && (e = "gameId") || n.screenWidth === void 0 && (e = "screenWidth") || n.screenHeight === void 0 && (e = "screenHeight") || n.uiAreaWidth === void 0 && (e = "uiAreaWidth") || n.uiAreaHeight === void 0 && (e = "uiAreaHeight") || n.windowOpacity === void 0 && (e = "windowOpacity") || n.screenScale === void 0 && (e = "screenScale") || n.numberFontFilename === void 0 && (e = "numberFontFilename") || n.mainFontFilename === void 0 && (e = "mainFontFilename") || n.fallbackFonts === void 0 && (e = "fallbackFonts") || n.fontSize === void 0 && (e = "fontSize")) return c.errors = [{
									instancePath: t + "/advanced",
									schemaPath: "#/$defs/Advanced/required",
									keyword: "required",
									params: { missingProperty: e },
									message: "must have required property '" + e + "'"
								}], !1;
								for (let e in n) if (!o.call(i.properties, e)) return c.errors = [{
									instancePath: t + "/advanced",
									schemaPath: "#/$defs/Advanced/additionalProperties",
									keyword: "additionalProperties",
									params: { additionalProperty: e },
									message: "must NOT have additional properties"
								}], !1;
								if (n.gameId !== void 0) {
									let e = n.gameId;
									if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return c.errors = [{
										instancePath: t + "/advanced/gameId",
										schemaPath: "#/$defs/Advanced/properties/gameId/type",
										keyword: "type",
										params: { type: "integer" },
										message: "must be integer"
									}], !1;
									var p = !0;
								} else p = !0;
								if (p) {
									if (n.screenWidth !== void 0) {
										let e = n.screenWidth;
										if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return c.errors = [{
											instancePath: t + "/advanced/screenWidth",
											schemaPath: "#/$defs/Advanced/properties/screenWidth/type",
											keyword: "type",
											params: { type: "integer" },
											message: "must be integer"
										}], !1;
										p = !0;
									} else p = !0;
									if (p) {
										if (n.screenHeight !== void 0) {
											let e = n.screenHeight;
											if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return c.errors = [{
												instancePath: t + "/advanced/screenHeight",
												schemaPath: "#/$defs/Advanced/properties/screenHeight/type",
												keyword: "type",
												params: { type: "integer" },
												message: "must be integer"
											}], !1;
											p = !0;
										} else p = !0;
										if (p) {
											if (n.uiAreaWidth !== void 0) {
												let e = n.uiAreaWidth;
												if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return c.errors = [{
													instancePath: t + "/advanced/uiAreaWidth",
													schemaPath: "#/$defs/Advanced/properties/uiAreaWidth/type",
													keyword: "type",
													params: { type: "integer" },
													message: "must be integer"
												}], !1;
												p = !0;
											} else p = !0;
											if (p) {
												if (n.uiAreaHeight !== void 0) {
													let e = n.uiAreaHeight;
													if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return c.errors = [{
														instancePath: t + "/advanced/uiAreaHeight",
														schemaPath: "#/$defs/Advanced/properties/uiAreaHeight/type",
														keyword: "type",
														params: { type: "integer" },
														message: "must be integer"
													}], !1;
													p = !0;
												} else p = !0;
												if (p) {
													if (n.windowOpacity !== void 0) {
														let e = n.windowOpacity;
														if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return c.errors = [{
															instancePath: t + "/advanced/windowOpacity",
															schemaPath: "#/$defs/Advanced/properties/windowOpacity/type",
															keyword: "type",
															params: { type: "integer" },
															message: "must be integer"
														}], !1;
														p = !0;
													} else p = !0;
													if (p) {
														if (n.screenScale !== void 0) {
															let e = n.screenScale;
															if (typeof e != "number" || !isFinite(e)) return c.errors = [{
																instancePath: t + "/advanced/screenScale",
																schemaPath: "#/$defs/Advanced/properties/screenScale/type",
																keyword: "type",
																params: { type: "number" },
																message: "must be number"
															}], !1;
															p = !0;
														} else p = !0;
														if (p) {
															if (n.numberFontFilename !== void 0) {
																if (typeof n.numberFontFilename != "string") return c.errors = [{
																	instancePath: t + "/advanced/numberFontFilename",
																	schemaPath: "#/$defs/Advanced/properties/numberFontFilename/type",
																	keyword: "type",
																	params: { type: "string" },
																	message: "must be string"
																}], !1;
																p = !0;
															} else p = !0;
															if (p) {
																if (n.mainFontFilename !== void 0) {
																	if (typeof n.mainFontFilename != "string") return c.errors = [{
																		instancePath: t + "/advanced/mainFontFilename",
																		schemaPath: "#/$defs/Advanced/properties/mainFontFilename/type",
																		keyword: "type",
																		params: { type: "string" },
																		message: "must be string"
																	}], !1;
																	p = !0;
																} else p = !0;
																if (p) {
																	if (n.fallbackFonts !== void 0) {
																		if (typeof n.fallbackFonts != "string") return c.errors = [{
																			instancePath: t + "/advanced/fallbackFonts",
																			schemaPath: "#/$defs/Advanced/properties/fallbackFonts/type",
																			keyword: "type",
																			params: { type: "string" },
																			message: "must be string"
																		}], !1;
																		p = !0;
																	} else p = !0;
																	if (p) {
																		if (n.fontSize !== void 0) {
																			let e = n.fontSize;
																			if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return c.errors = [{
																				instancePath: t + "/advanced/fontSize",
																				schemaPath: "#/$defs/Advanced/properties/fontSize/type",
																				keyword: "type",
																				params: { type: "integer" },
																				message: "must be integer"
																			}], !1;
																			p = !0;
																		} else p = !0;
																		if (p) if (n.picturesUpperLimit !== void 0) {
																			let e = n.picturesUpperLimit;
																			if ((typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) && e !== null) return c.errors = [{
																				instancePath: t + "/advanced/picturesUpperLimit",
																				schemaPath: "#/$defs/Advanced/properties/picturesUpperLimit/type",
																				keyword: "type",
																				params: { type: "integer" },
																				message: "must be integer"
																			}], !1;
																			p = !0;
																		} else p = !0;
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
							d = !0;
						} else d = !0;
						if (d) {
							if (e.attackMotions !== void 0) {
								let n = e.attackMotions;
								if (!Array.isArray(n)) return c.errors = [{
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
										if (!e || typeof e != "object" || Array.isArray(e)) return c.errors = [{
											instancePath: t + "/attackMotions/" + r,
											schemaPath: "#/$defs/AttackMotion/type",
											keyword: "type",
											params: { type: "object" },
											message: "must be object"
										}], !1;
										{
											let n;
											if (e.type === void 0 && (n = "type") || e.weaponImageId === void 0 && (n = "weaponImageId")) return c.errors = [{
												instancePath: t + "/attackMotions/" + r,
												schemaPath: "#/$defs/AttackMotion/required",
												keyword: "required",
												params: { missingProperty: n },
												message: "must have required property '" + n + "'"
											}], !1;
											for (let n in e) if (n !== "type" && n !== "weaponImageId") return c.errors = [{
												instancePath: t + "/attackMotions/" + r,
												schemaPath: "#/$defs/AttackMotion/additionalProperties",
												keyword: "additionalProperties",
												params: { additionalProperty: n },
												message: "must NOT have additional properties"
											}], !1;
											if (e.type !== void 0) {
												let n = e.type;
												if (typeof n != "number" || !isFinite(n)) return c.errors = [{
													instancePath: t + "/attackMotions/" + r + "/type",
													schemaPath: "#/$defs/AttackMotion/properties/type/type",
													keyword: "type",
													params: { type: "number" },
													message: "must be number"
												}], !1;
												var m = !0;
											} else m = !0;
											if (m) if (e.weaponImageId !== void 0) {
												let n = e.weaponImageId;
												if (typeof n != "number" || !isFinite(n)) return c.errors = [{
													instancePath: t + "/attackMotions/" + r + "/weaponImageId",
													schemaPath: "#/$defs/AttackMotion/properties/weaponImageId/type",
													keyword: "type",
													params: { type: "number" },
													message: "must be number"
												}], !1;
												m = !0;
											} else m = !0;
										}
									}
								}
								d = !0;
							} else d = !0;
							if (d) {
								if (e.titleBgm !== void 0) {
									let n = e.titleBgm;
									if (!n || typeof n != "object" || Array.isArray(n)) return c.errors = [{
										instancePath: t + "/titleBgm",
										schemaPath: "#/$defs/Audio/type",
										keyword: "type",
										params: { type: "object" },
										message: "must be object"
									}], !1;
									{
										let e;
										if (n.name === void 0 && (e = "name") || n.volume === void 0 && (e = "volume") || n.pitch === void 0 && (e = "pitch") || n.pan === void 0 && (e = "pan")) return c.errors = [{
											instancePath: t + "/titleBgm",
											schemaPath: "#/$defs/Audio/required",
											keyword: "required",
											params: { missingProperty: e },
											message: "must have required property '" + e + "'"
										}], !1;
										for (let e in n) if (e !== "name" && e !== "volume" && e !== "pitch" && e !== "pan") return c.errors = [{
											instancePath: t + "/titleBgm",
											schemaPath: "#/$defs/Audio/additionalProperties",
											keyword: "additionalProperties",
											params: { additionalProperty: e },
											message: "must NOT have additional properties"
										}], !1;
										if (n.name !== void 0) {
											if (typeof n.name != "string") return c.errors = [{
												instancePath: t + "/titleBgm/name",
												schemaPath: "#/$defs/Audio/properties/name/type",
												keyword: "type",
												params: { type: "string" },
												message: "must be string"
											}], !1;
											var h = !0;
										} else h = !0;
										if (h) {
											if (n.volume !== void 0) {
												let e = n.volume;
												if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return c.errors = [{
													instancePath: t + "/titleBgm/volume",
													schemaPath: "#/$defs/Audio/properties/volume/type",
													keyword: "type",
													params: { type: "integer" },
													message: "must be integer"
												}], !1;
												h = !0;
											} else h = !0;
											if (h) {
												if (n.pitch !== void 0) {
													let e = n.pitch;
													if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return c.errors = [{
														instancePath: t + "/titleBgm/pitch",
														schemaPath: "#/$defs/Audio/properties/pitch/type",
														keyword: "type",
														params: { type: "integer" },
														message: "must be integer"
													}], !1;
													h = !0;
												} else h = !0;
												if (h) if (n.pan !== void 0) {
													let e = n.pan;
													if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return c.errors = [{
														instancePath: t + "/titleBgm/pan",
														schemaPath: "#/$defs/Audio/properties/pan/type",
														keyword: "type",
														params: { type: "integer" },
														message: "must be integer"
													}], !1;
													h = !0;
												} else h = !0;
											}
										}
									}
									d = !0;
								} else d = !0;
								if (d) {
									if (e.battleBgm !== void 0) {
										let n = e.battleBgm;
										if (!n || typeof n != "object" || Array.isArray(n)) return c.errors = [{
											instancePath: t + "/battleBgm",
											schemaPath: "#/$defs/Audio/type",
											keyword: "type",
											params: { type: "object" },
											message: "must be object"
										}], !1;
										{
											let e;
											if (n.name === void 0 && (e = "name") || n.volume === void 0 && (e = "volume") || n.pitch === void 0 && (e = "pitch") || n.pan === void 0 && (e = "pan")) return c.errors = [{
												instancePath: t + "/battleBgm",
												schemaPath: "#/$defs/Audio/required",
												keyword: "required",
												params: { missingProperty: e },
												message: "must have required property '" + e + "'"
											}], !1;
											for (let e in n) if (e !== "name" && e !== "volume" && e !== "pitch" && e !== "pan") return c.errors = [{
												instancePath: t + "/battleBgm",
												schemaPath: "#/$defs/Audio/additionalProperties",
												keyword: "additionalProperties",
												params: { additionalProperty: e },
												message: "must NOT have additional properties"
											}], !1;
											if (n.name !== void 0) {
												if (typeof n.name != "string") return c.errors = [{
													instancePath: t + "/battleBgm/name",
													schemaPath: "#/$defs/Audio/properties/name/type",
													keyword: "type",
													params: { type: "string" },
													message: "must be string"
												}], !1;
												var g = !0;
											} else g = !0;
											if (g) {
												if (n.volume !== void 0) {
													let e = n.volume;
													if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return c.errors = [{
														instancePath: t + "/battleBgm/volume",
														schemaPath: "#/$defs/Audio/properties/volume/type",
														keyword: "type",
														params: { type: "integer" },
														message: "must be integer"
													}], !1;
													g = !0;
												} else g = !0;
												if (g) {
													if (n.pitch !== void 0) {
														let e = n.pitch;
														if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return c.errors = [{
															instancePath: t + "/battleBgm/pitch",
															schemaPath: "#/$defs/Audio/properties/pitch/type",
															keyword: "type",
															params: { type: "integer" },
															message: "must be integer"
														}], !1;
														g = !0;
													} else g = !0;
													if (g) if (n.pan !== void 0) {
														let e = n.pan;
														if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return c.errors = [{
															instancePath: t + "/battleBgm/pan",
															schemaPath: "#/$defs/Audio/properties/pan/type",
															keyword: "type",
															params: { type: "integer" },
															message: "must be integer"
														}], !1;
														g = !0;
													} else g = !0;
												}
											}
										}
										d = !0;
									} else d = !0;
									if (d) {
										if (e.gameoverMe !== void 0) {
											let n = e.gameoverMe;
											if (!n || typeof n != "object" || Array.isArray(n)) return c.errors = [{
												instancePath: t + "/gameoverMe",
												schemaPath: "#/$defs/Audio/type",
												keyword: "type",
												params: { type: "object" },
												message: "must be object"
											}], !1;
											{
												let e;
												if (n.name === void 0 && (e = "name") || n.volume === void 0 && (e = "volume") || n.pitch === void 0 && (e = "pitch") || n.pan === void 0 && (e = "pan")) return c.errors = [{
													instancePath: t + "/gameoverMe",
													schemaPath: "#/$defs/Audio/required",
													keyword: "required",
													params: { missingProperty: e },
													message: "must have required property '" + e + "'"
												}], !1;
												for (let e in n) if (e !== "name" && e !== "volume" && e !== "pitch" && e !== "pan") return c.errors = [{
													instancePath: t + "/gameoverMe",
													schemaPath: "#/$defs/Audio/additionalProperties",
													keyword: "additionalProperties",
													params: { additionalProperty: e },
													message: "must NOT have additional properties"
												}], !1;
												if (n.name !== void 0) {
													if (typeof n.name != "string") return c.errors = [{
														instancePath: t + "/gameoverMe/name",
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
														if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return c.errors = [{
															instancePath: t + "/gameoverMe/volume",
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
															if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return c.errors = [{
																instancePath: t + "/gameoverMe/pitch",
																schemaPath: "#/$defs/Audio/properties/pitch/type",
																keyword: "type",
																params: { type: "integer" },
																message: "must be integer"
															}], !1;
															_ = !0;
														} else _ = !0;
														if (_) if (n.pan !== void 0) {
															let e = n.pan;
															if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return c.errors = [{
																instancePath: t + "/gameoverMe/pan",
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
											d = !0;
										} else d = !0;
										if (d) {
											if (e.victoryMe !== void 0) {
												let n = e.victoryMe;
												if (!n || typeof n != "object" || Array.isArray(n)) return c.errors = [{
													instancePath: t + "/victoryMe",
													schemaPath: "#/$defs/Audio/type",
													keyword: "type",
													params: { type: "object" },
													message: "must be object"
												}], !1;
												{
													let e;
													if (n.name === void 0 && (e = "name") || n.volume === void 0 && (e = "volume") || n.pitch === void 0 && (e = "pitch") || n.pan === void 0 && (e = "pan")) return c.errors = [{
														instancePath: t + "/victoryMe",
														schemaPath: "#/$defs/Audio/required",
														keyword: "required",
														params: { missingProperty: e },
														message: "must have required property '" + e + "'"
													}], !1;
													for (let e in n) if (e !== "name" && e !== "volume" && e !== "pitch" && e !== "pan") return c.errors = [{
														instancePath: t + "/victoryMe",
														schemaPath: "#/$defs/Audio/additionalProperties",
														keyword: "additionalProperties",
														params: { additionalProperty: e },
														message: "must NOT have additional properties"
													}], !1;
													if (n.name !== void 0) {
														if (typeof n.name != "string") return c.errors = [{
															instancePath: t + "/victoryMe/name",
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
															if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return c.errors = [{
																instancePath: t + "/victoryMe/volume",
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
																if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return c.errors = [{
																	instancePath: t + "/victoryMe/pitch",
																	schemaPath: "#/$defs/Audio/properties/pitch/type",
																	keyword: "type",
																	params: { type: "integer" },
																	message: "must be integer"
																}], !1;
																v = !0;
															} else v = !0;
															if (v) if (n.pan !== void 0) {
																let e = n.pan;
																if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return c.errors = [{
																	instancePath: t + "/victoryMe/pan",
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
												d = !0;
											} else d = !0;
											if (d) {
												if (e.defeatMe !== void 0) {
													let n = e.defeatMe;
													if (!n || typeof n != "object" || Array.isArray(n)) return c.errors = [{
														instancePath: t + "/defeatMe",
														schemaPath: "#/$defs/Audio/type",
														keyword: "type",
														params: { type: "object" },
														message: "must be object"
													}], !1;
													{
														let e;
														if (n.name === void 0 && (e = "name") || n.volume === void 0 && (e = "volume") || n.pitch === void 0 && (e = "pitch") || n.pan === void 0 && (e = "pan")) return c.errors = [{
															instancePath: t + "/defeatMe",
															schemaPath: "#/$defs/Audio/required",
															keyword: "required",
															params: { missingProperty: e },
															message: "must have required property '" + e + "'"
														}], !1;
														for (let e in n) if (e !== "name" && e !== "volume" && e !== "pitch" && e !== "pan") return c.errors = [{
															instancePath: t + "/defeatMe",
															schemaPath: "#/$defs/Audio/additionalProperties",
															keyword: "additionalProperties",
															params: { additionalProperty: e },
															message: "must NOT have additional properties"
														}], !1;
														if (n.name !== void 0) {
															if (typeof n.name != "string") return c.errors = [{
																instancePath: t + "/defeatMe/name",
																schemaPath: "#/$defs/Audio/properties/name/type",
																keyword: "type",
																params: { type: "string" },
																message: "must be string"
															}], !1;
															var y = !0;
														} else y = !0;
														if (y) {
															if (n.volume !== void 0) {
																let e = n.volume;
																if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return c.errors = [{
																	instancePath: t + "/defeatMe/volume",
																	schemaPath: "#/$defs/Audio/properties/volume/type",
																	keyword: "type",
																	params: { type: "integer" },
																	message: "must be integer"
																}], !1;
																y = !0;
															} else y = !0;
															if (y) {
																if (n.pitch !== void 0) {
																	let e = n.pitch;
																	if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return c.errors = [{
																		instancePath: t + "/defeatMe/pitch",
																		schemaPath: "#/$defs/Audio/properties/pitch/type",
																		keyword: "type",
																		params: { type: "integer" },
																		message: "must be integer"
																	}], !1;
																	y = !0;
																} else y = !0;
																if (y) if (n.pan !== void 0) {
																	let e = n.pan;
																	if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return c.errors = [{
																		instancePath: t + "/defeatMe/pan",
																		schemaPath: "#/$defs/Audio/properties/pan/type",
																		keyword: "type",
																		params: { type: "integer" },
																		message: "must be integer"
																	}], !1;
																	y = !0;
																} else y = !0;
															}
														}
													}
													d = !0;
												} else d = !0;
												if (d) {
													if (e.sounds !== void 0) {
														let n = e.sounds;
														if (!Array.isArray(n)) return c.errors = [{
															instancePath: t + "/sounds",
															schemaPath: "#/properties/sounds/type",
															keyword: "type",
															params: { type: "array" },
															message: "must be array"
														}], !1;
														if (n.length > 24) return c.errors = [{
															instancePath: t + "/sounds",
															schemaPath: "#/properties/sounds/maxItems",
															keyword: "maxItems",
															params: { limit: 24 },
															message: "must NOT have more than 24 items"
														}], !1;
														if (n.length < 24) return c.errors = [{
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
																if (!e || typeof e != "object" || Array.isArray(e)) return c.errors = [{
																	instancePath: t + "/sounds/" + r,
																	schemaPath: "#/$defs/Audio/type",
																	keyword: "type",
																	params: { type: "object" },
																	message: "must be object"
																}], !1;
																{
																	let n;
																	if (e.name === void 0 && (n = "name") || e.volume === void 0 && (n = "volume") || e.pitch === void 0 && (n = "pitch") || e.pan === void 0 && (n = "pan")) return c.errors = [{
																		instancePath: t + "/sounds/" + r,
																		schemaPath: "#/$defs/Audio/required",
																		keyword: "required",
																		params: { missingProperty: n },
																		message: "must have required property '" + n + "'"
																	}], !1;
																	for (let n in e) if (n !== "name" && n !== "volume" && n !== "pitch" && n !== "pan") return c.errors = [{
																		instancePath: t + "/sounds/" + r,
																		schemaPath: "#/$defs/Audio/additionalProperties",
																		keyword: "additionalProperties",
																		params: { additionalProperty: n },
																		message: "must NOT have additional properties"
																	}], !1;
																	if (e.name !== void 0) {
																		if (typeof e.name != "string") return c.errors = [{
																			instancePath: t + "/sounds/" + r + "/name",
																			schemaPath: "#/$defs/Audio/properties/name/type",
																			keyword: "type",
																			params: { type: "string" },
																			message: "must be string"
																		}], !1;
																		var b = !0;
																	} else b = !0;
																	if (b) {
																		if (e.volume !== void 0) {
																			let n = e.volume;
																			if (typeof n != "number" || n % 1 || isNaN(n) || !isFinite(n)) return c.errors = [{
																				instancePath: t + "/sounds/" + r + "/volume",
																				schemaPath: "#/$defs/Audio/properties/volume/type",
																				keyword: "type",
																				params: { type: "integer" },
																				message: "must be integer"
																			}], !1;
																			b = !0;
																		} else b = !0;
																		if (b) {
																			if (e.pitch !== void 0) {
																				let n = e.pitch;
																				if (typeof n != "number" || n % 1 || isNaN(n) || !isFinite(n)) return c.errors = [{
																					instancePath: t + "/sounds/" + r + "/pitch",
																					schemaPath: "#/$defs/Audio/properties/pitch/type",
																					keyword: "type",
																					params: { type: "integer" },
																					message: "must be integer"
																				}], !1;
																				b = !0;
																			} else b = !0;
																			if (b) if (e.pan !== void 0) {
																				let n = e.pan;
																				if (typeof n != "number" || n % 1 || isNaN(n) || !isFinite(n)) return c.errors = [{
																					instancePath: t + "/sounds/" + r + "/pan",
																					schemaPath: "#/$defs/Audio/properties/pan/type",
																					keyword: "type",
																					params: { type: "integer" },
																					message: "must be integer"
																				}], !1;
																				b = !0;
																			} else b = !0;
																		}
																	}
																}
															}
														}
														d = !0;
													} else d = !0;
													if (d) {
														if (e.itemCategories !== void 0) {
															let n = e.itemCategories;
															if (!Array.isArray(n)) return c.errors = [{
																instancePath: t + "/itemCategories",
																schemaPath: "#/$defs/ItemCategories/type",
																keyword: "type",
																params: { type: "array" },
																message: "must be array"
															}], !1;
															if (n.length > 4) return c.errors = [{
																instancePath: t + "/itemCategories",
																schemaPath: "#/$defs/ItemCategories/maxItems",
																keyword: "maxItems",
																params: { limit: 4 },
																message: "must NOT have more than 4 items"
															}], !1;
															if (n.length < 4) return c.errors = [{
																instancePath: t + "/itemCategories",
																schemaPath: "#/$defs/ItemCategories/minItems",
																keyword: "minItems",
																params: { limit: 4 },
																message: "must NOT have fewer than 4 items"
															}], !1;
															{
																let e = n.length;
																for (let r = 0; r < e; r++) if (typeof n[r] != "boolean") return c.errors = [{
																	instancePath: t + "/itemCategories/" + r,
																	schemaPath: "#/$defs/ItemCategories/items/type",
																	keyword: "type",
																	params: { type: "boolean" },
																	message: "must be boolean"
																}], !1;
															}
															d = !0;
														} else d = !0;
														if (d) {
															if (e.menuCommands !== void 0) {
																let n = e.menuCommands;
																if (!Array.isArray(n)) return c.errors = [{
																	instancePath: t + "/menuCommands",
																	schemaPath: "#/$defs/MenuCommands/type",
																	keyword: "type",
																	params: { type: "array" },
																	message: "must be array"
																}], !1;
																if (n.length > 6) return c.errors = [{
																	instancePath: t + "/menuCommands",
																	schemaPath: "#/$defs/MenuCommands/maxItems",
																	keyword: "maxItems",
																	params: { limit: 6 },
																	message: "must NOT have more than 6 items"
																}], !1;
																if (n.length < 6) return c.errors = [{
																	instancePath: t + "/menuCommands",
																	schemaPath: "#/$defs/MenuCommands/minItems",
																	keyword: "minItems",
																	params: { limit: 6 },
																	message: "must NOT have fewer than 6 items"
																}], !1;
																{
																	let e = n.length;
																	for (let r = 0; r < e; r++) if (typeof n[r] != "boolean") return c.errors = [{
																		instancePath: t + "/menuCommands/" + r,
																		schemaPath: "#/$defs/MenuCommands/items/type",
																		keyword: "type",
																		params: { type: "boolean" },
																		message: "must be boolean"
																	}], !1;
																}
																d = !0;
															} else d = !0;
															if (d) {
																if (e.ship !== void 0) {
																	let n = e.ship;
																	if (!n || typeof n != "object" || Array.isArray(n)) return c.errors = [{
																		instancePath: t + "/ship",
																		schemaPath: "#/$defs/Vehicle/type",
																		keyword: "type",
																		params: { type: "object" },
																		message: "must be object"
																	}], !1;
																	{
																		let e;
																		if (n.characterIndex === void 0 && (e = "characterIndex") || n.characterName === void 0 && (e = "characterName") || n.bgm === void 0 && (e = "bgm") || n.startMapId === void 0 && (e = "startMapId") || n.startX === void 0 && (e = "startX") || n.startY === void 0 && (e = "startY")) return c.errors = [{
																			instancePath: t + "/ship",
																			schemaPath: "#/$defs/Vehicle/required",
																			keyword: "required",
																			params: { missingProperty: e },
																			message: "must have required property '" + e + "'"
																		}], !1;
																		for (let e in n) if (e !== "characterIndex" && e !== "characterName" && e !== "bgm" && e !== "startMapId" && e !== "startX" && e !== "startY") return c.errors = [{
																			instancePath: t + "/ship",
																			schemaPath: "#/$defs/Vehicle/additionalProperties",
																			keyword: "additionalProperties",
																			params: { additionalProperty: e },
																			message: "must NOT have additional properties"
																		}], !1;
																		if (n.characterIndex !== void 0) {
																			let e = n.characterIndex;
																			if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return c.errors = [{
																				instancePath: t + "/ship/characterIndex",
																				schemaPath: "#/$defs/Vehicle/properties/characterIndex/type",
																				keyword: "type",
																				params: { type: "integer" },
																				message: "must be integer"
																			}], !1;
																			if (typeof e == "number" && isFinite(e)) {
																				if (e > 7 || isNaN(e)) return c.errors = [{
																					instancePath: t + "/ship/characterIndex",
																					schemaPath: "#/$defs/Vehicle/properties/characterIndex/maximum",
																					keyword: "maximum",
																					params: {
																						comparison: "<=",
																						limit: 7
																					},
																					message: "must be <= 7"
																				}], !1;
																				if (e < 0 || isNaN(e)) return c.errors = [{
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
																			var x = !0;
																		} else x = !0;
																		if (x) {
																			if (n.characterName !== void 0) {
																				if (typeof n.characterName != "string") return c.errors = [{
																					instancePath: t + "/ship/characterName",
																					schemaPath: "#/$defs/Vehicle/properties/characterName/type",
																					keyword: "type",
																					params: { type: "string" },
																					message: "must be string"
																				}], !1;
																				x = !0;
																			} else x = !0;
																			if (x) {
																				if (n.bgm !== void 0) {
																					let e = n.bgm;
																					if (!e || typeof e != "object" || Array.isArray(e)) return c.errors = [{
																						instancePath: t + "/ship/bgm",
																						schemaPath: "#/$defs/Vehicle/properties/bgm/type",
																						keyword: "type",
																						params: { type: "object" },
																						message: "must be object"
																					}], !1;
																					{
																						let n;
																						if (e.name === void 0 && (n = "name") || e.volume === void 0 && (n = "volume") || e.pitch === void 0 && (n = "pitch") || e.pan === void 0 && (n = "pan")) return c.errors = [{
																							instancePath: t + "/ship/bgm",
																							schemaPath: "#/$defs/Vehicle/properties/bgm/required",
																							keyword: "required",
																							params: { missingProperty: n },
																							message: "must have required property '" + n + "'"
																						}], !1;
																						for (let n in e) if (n !== "name" && n !== "volume" && n !== "pitch" && n !== "pan") return c.errors = [{
																							instancePath: t + "/ship/bgm",
																							schemaPath: "#/$defs/Vehicle/properties/bgm/additionalProperties",
																							keyword: "additionalProperties",
																							params: { additionalProperty: n },
																							message: "must NOT have additional properties"
																						}], !1;
																						if (e.name !== void 0) {
																							if (typeof e.name != "string") return c.errors = [{
																								instancePath: t + "/ship/bgm/name",
																								schemaPath: "#/$defs/Vehicle/properties/bgm/properties/name/type",
																								keyword: "type",
																								params: { type: "string" },
																								message: "must be string"
																							}], !1;
																							var S = !0;
																						} else S = !0;
																						if (S) {
																							if (e.volume !== void 0) {
																								let n = e.volume;
																								if (typeof n != "number" || n % 1 || isNaN(n) || !isFinite(n)) return c.errors = [{
																									instancePath: t + "/ship/bgm/volume",
																									schemaPath: "#/$defs/Vehicle/properties/bgm/properties/volume/type",
																									keyword: "type",
																									params: { type: "integer" },
																									message: "must be integer"
																								}], !1;
																								S = !0;
																							} else S = !0;
																							if (S) {
																								if (e.pitch !== void 0) {
																									let n = e.pitch;
																									if (typeof n != "number" || n % 1 || isNaN(n) || !isFinite(n)) return c.errors = [{
																										instancePath: t + "/ship/bgm/pitch",
																										schemaPath: "#/$defs/Vehicle/properties/bgm/properties/pitch/type",
																										keyword: "type",
																										params: { type: "integer" },
																										message: "must be integer"
																									}], !1;
																									S = !0;
																								} else S = !0;
																								if (S) if (e.pan !== void 0) {
																									let n = e.pan;
																									if (typeof n != "number" || n % 1 || isNaN(n) || !isFinite(n)) return c.errors = [{
																										instancePath: t + "/ship/bgm/pan",
																										schemaPath: "#/$defs/Vehicle/properties/bgm/properties/pan/type",
																										keyword: "type",
																										params: { type: "integer" },
																										message: "must be integer"
																									}], !1;
																									S = !0;
																								} else S = !0;
																							}
																						}
																					}
																					x = !0;
																				} else x = !0;
																				if (x) {
																					if (n.startMapId !== void 0) {
																						let e = n.startMapId;
																						if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return c.errors = [{
																							instancePath: t + "/ship/startMapId",
																							schemaPath: "#/$defs/Vehicle/properties/startMapId/type",
																							keyword: "type",
																							params: { type: "integer" },
																							message: "must be integer"
																						}], !1;
																						if (typeof e == "number" && isFinite(e) && (e < 0 || isNaN(e))) return c.errors = [{
																							instancePath: t + "/ship/startMapId",
																							schemaPath: "#/$defs/Vehicle/properties/startMapId/minimum",
																							keyword: "minimum",
																							params: {
																								comparison: ">=",
																								limit: 0
																							},
																							message: "must be >= 0"
																						}], !1;
																						x = !0;
																					} else x = !0;
																					if (x) {
																						if (n.startX !== void 0) {
																							let e = n.startX;
																							if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return c.errors = [{
																								instancePath: t + "/ship/startX",
																								schemaPath: "#/$defs/Vehicle/properties/startX/type",
																								keyword: "type",
																								params: { type: "integer" },
																								message: "must be integer"
																							}], !1;
																							if (typeof e == "number" && isFinite(e) && (e < 0 || isNaN(e))) return c.errors = [{
																								instancePath: t + "/ship/startX",
																								schemaPath: "#/$defs/Vehicle/properties/startX/minimum",
																								keyword: "minimum",
																								params: {
																									comparison: ">=",
																									limit: 0
																								},
																								message: "must be >= 0"
																							}], !1;
																							x = !0;
																						} else x = !0;
																						if (x) if (n.startY !== void 0) {
																							let e = n.startY;
																							if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return c.errors = [{
																								instancePath: t + "/ship/startY",
																								schemaPath: "#/$defs/Vehicle/properties/startY/type",
																								keyword: "type",
																								params: { type: "integer" },
																								message: "must be integer"
																							}], !1;
																							if (typeof e == "number" && isFinite(e) && (e < 0 || isNaN(e))) return c.errors = [{
																								instancePath: t + "/ship/startY",
																								schemaPath: "#/$defs/Vehicle/properties/startY/minimum",
																								keyword: "minimum",
																								params: {
																									comparison: ">=",
																									limit: 0
																								},
																								message: "must be >= 0"
																							}], !1;
																							x = !0;
																						} else x = !0;
																					}
																				}
																			}
																		}
																	}
																	d = !0;
																} else d = !0;
																if (d) {
																	if (e.boat !== void 0) {
																		let n = e.boat;
																		if (!n || typeof n != "object" || Array.isArray(n)) return c.errors = [{
																			instancePath: t + "/boat",
																			schemaPath: "#/$defs/Vehicle/type",
																			keyword: "type",
																			params: { type: "object" },
																			message: "must be object"
																		}], !1;
																		{
																			let e;
																			if (n.characterIndex === void 0 && (e = "characterIndex") || n.characterName === void 0 && (e = "characterName") || n.bgm === void 0 && (e = "bgm") || n.startMapId === void 0 && (e = "startMapId") || n.startX === void 0 && (e = "startX") || n.startY === void 0 && (e = "startY")) return c.errors = [{
																				instancePath: t + "/boat",
																				schemaPath: "#/$defs/Vehicle/required",
																				keyword: "required",
																				params: { missingProperty: e },
																				message: "must have required property '" + e + "'"
																			}], !1;
																			for (let e in n) if (e !== "characterIndex" && e !== "characterName" && e !== "bgm" && e !== "startMapId" && e !== "startX" && e !== "startY") return c.errors = [{
																				instancePath: t + "/boat",
																				schemaPath: "#/$defs/Vehicle/additionalProperties",
																				keyword: "additionalProperties",
																				params: { additionalProperty: e },
																				message: "must NOT have additional properties"
																			}], !1;
																			if (n.characterIndex !== void 0) {
																				let e = n.characterIndex;
																				if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return c.errors = [{
																					instancePath: t + "/boat/characterIndex",
																					schemaPath: "#/$defs/Vehicle/properties/characterIndex/type",
																					keyword: "type",
																					params: { type: "integer" },
																					message: "must be integer"
																				}], !1;
																				if (typeof e == "number" && isFinite(e)) {
																					if (e > 7 || isNaN(e)) return c.errors = [{
																						instancePath: t + "/boat/characterIndex",
																						schemaPath: "#/$defs/Vehicle/properties/characterIndex/maximum",
																						keyword: "maximum",
																						params: {
																							comparison: "<=",
																							limit: 7
																						},
																						message: "must be <= 7"
																					}], !1;
																					if (e < 0 || isNaN(e)) return c.errors = [{
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
																				var C = !0;
																			} else C = !0;
																			if (C) {
																				if (n.characterName !== void 0) {
																					if (typeof n.characterName != "string") return c.errors = [{
																						instancePath: t + "/boat/characterName",
																						schemaPath: "#/$defs/Vehicle/properties/characterName/type",
																						keyword: "type",
																						params: { type: "string" },
																						message: "must be string"
																					}], !1;
																					C = !0;
																				} else C = !0;
																				if (C) {
																					if (n.bgm !== void 0) {
																						let e = n.bgm;
																						if (!e || typeof e != "object" || Array.isArray(e)) return c.errors = [{
																							instancePath: t + "/boat/bgm",
																							schemaPath: "#/$defs/Vehicle/properties/bgm/type",
																							keyword: "type",
																							params: { type: "object" },
																							message: "must be object"
																						}], !1;
																						{
																							let n;
																							if (e.name === void 0 && (n = "name") || e.volume === void 0 && (n = "volume") || e.pitch === void 0 && (n = "pitch") || e.pan === void 0 && (n = "pan")) return c.errors = [{
																								instancePath: t + "/boat/bgm",
																								schemaPath: "#/$defs/Vehicle/properties/bgm/required",
																								keyword: "required",
																								params: { missingProperty: n },
																								message: "must have required property '" + n + "'"
																							}], !1;
																							for (let n in e) if (n !== "name" && n !== "volume" && n !== "pitch" && n !== "pan") return c.errors = [{
																								instancePath: t + "/boat/bgm",
																								schemaPath: "#/$defs/Vehicle/properties/bgm/additionalProperties",
																								keyword: "additionalProperties",
																								params: { additionalProperty: n },
																								message: "must NOT have additional properties"
																							}], !1;
																							if (e.name !== void 0) {
																								if (typeof e.name != "string") return c.errors = [{
																									instancePath: t + "/boat/bgm/name",
																									schemaPath: "#/$defs/Vehicle/properties/bgm/properties/name/type",
																									keyword: "type",
																									params: { type: "string" },
																									message: "must be string"
																								}], !1;
																								var w = !0;
																							} else w = !0;
																							if (w) {
																								if (e.volume !== void 0) {
																									let n = e.volume;
																									if (typeof n != "number" || n % 1 || isNaN(n) || !isFinite(n)) return c.errors = [{
																										instancePath: t + "/boat/bgm/volume",
																										schemaPath: "#/$defs/Vehicle/properties/bgm/properties/volume/type",
																										keyword: "type",
																										params: { type: "integer" },
																										message: "must be integer"
																									}], !1;
																									w = !0;
																								} else w = !0;
																								if (w) {
																									if (e.pitch !== void 0) {
																										let n = e.pitch;
																										if (typeof n != "number" || n % 1 || isNaN(n) || !isFinite(n)) return c.errors = [{
																											instancePath: t + "/boat/bgm/pitch",
																											schemaPath: "#/$defs/Vehicle/properties/bgm/properties/pitch/type",
																											keyword: "type",
																											params: { type: "integer" },
																											message: "must be integer"
																										}], !1;
																										w = !0;
																									} else w = !0;
																									if (w) if (e.pan !== void 0) {
																										let n = e.pan;
																										if (typeof n != "number" || n % 1 || isNaN(n) || !isFinite(n)) return c.errors = [{
																											instancePath: t + "/boat/bgm/pan",
																											schemaPath: "#/$defs/Vehicle/properties/bgm/properties/pan/type",
																											keyword: "type",
																											params: { type: "integer" },
																											message: "must be integer"
																										}], !1;
																										w = !0;
																									} else w = !0;
																								}
																							}
																						}
																						C = !0;
																					} else C = !0;
																					if (C) {
																						if (n.startMapId !== void 0) {
																							let e = n.startMapId;
																							if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return c.errors = [{
																								instancePath: t + "/boat/startMapId",
																								schemaPath: "#/$defs/Vehicle/properties/startMapId/type",
																								keyword: "type",
																								params: { type: "integer" },
																								message: "must be integer"
																							}], !1;
																							if (typeof e == "number" && isFinite(e) && (e < 0 || isNaN(e))) return c.errors = [{
																								instancePath: t + "/boat/startMapId",
																								schemaPath: "#/$defs/Vehicle/properties/startMapId/minimum",
																								keyword: "minimum",
																								params: {
																									comparison: ">=",
																									limit: 0
																								},
																								message: "must be >= 0"
																							}], !1;
																							C = !0;
																						} else C = !0;
																						if (C) {
																							if (n.startX !== void 0) {
																								let e = n.startX;
																								if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return c.errors = [{
																									instancePath: t + "/boat/startX",
																									schemaPath: "#/$defs/Vehicle/properties/startX/type",
																									keyword: "type",
																									params: { type: "integer" },
																									message: "must be integer"
																								}], !1;
																								if (typeof e == "number" && isFinite(e) && (e < 0 || isNaN(e))) return c.errors = [{
																									instancePath: t + "/boat/startX",
																									schemaPath: "#/$defs/Vehicle/properties/startX/minimum",
																									keyword: "minimum",
																									params: {
																										comparison: ">=",
																										limit: 0
																									},
																									message: "must be >= 0"
																								}], !1;
																								C = !0;
																							} else C = !0;
																							if (C) if (n.startY !== void 0) {
																								let e = n.startY;
																								if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return c.errors = [{
																									instancePath: t + "/boat/startY",
																									schemaPath: "#/$defs/Vehicle/properties/startY/type",
																									keyword: "type",
																									params: { type: "integer" },
																									message: "must be integer"
																								}], !1;
																								if (typeof e == "number" && isFinite(e) && (e < 0 || isNaN(e))) return c.errors = [{
																									instancePath: t + "/boat/startY",
																									schemaPath: "#/$defs/Vehicle/properties/startY/minimum",
																									keyword: "minimum",
																									params: {
																										comparison: ">=",
																										limit: 0
																									},
																									message: "must be >= 0"
																								}], !1;
																								C = !0;
																							} else C = !0;
																						}
																					}
																				}
																			}
																		}
																		d = !0;
																	} else d = !0;
																	if (d) {
																		if (e.airship !== void 0) {
																			let n = e.airship;
																			if (!n || typeof n != "object" || Array.isArray(n)) return c.errors = [{
																				instancePath: t + "/airship",
																				schemaPath: "#/$defs/Vehicle/type",
																				keyword: "type",
																				params: { type: "object" },
																				message: "must be object"
																			}], !1;
																			{
																				let e;
																				if (n.characterIndex === void 0 && (e = "characterIndex") || n.characterName === void 0 && (e = "characterName") || n.bgm === void 0 && (e = "bgm") || n.startMapId === void 0 && (e = "startMapId") || n.startX === void 0 && (e = "startX") || n.startY === void 0 && (e = "startY")) return c.errors = [{
																					instancePath: t + "/airship",
																					schemaPath: "#/$defs/Vehicle/required",
																					keyword: "required",
																					params: { missingProperty: e },
																					message: "must have required property '" + e + "'"
																				}], !1;
																				for (let e in n) if (e !== "characterIndex" && e !== "characterName" && e !== "bgm" && e !== "startMapId" && e !== "startX" && e !== "startY") return c.errors = [{
																					instancePath: t + "/airship",
																					schemaPath: "#/$defs/Vehicle/additionalProperties",
																					keyword: "additionalProperties",
																					params: { additionalProperty: e },
																					message: "must NOT have additional properties"
																				}], !1;
																				if (n.characterIndex !== void 0) {
																					let e = n.characterIndex;
																					if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return c.errors = [{
																						instancePath: t + "/airship/characterIndex",
																						schemaPath: "#/$defs/Vehicle/properties/characterIndex/type",
																						keyword: "type",
																						params: { type: "integer" },
																						message: "must be integer"
																					}], !1;
																					if (typeof e == "number" && isFinite(e)) {
																						if (e > 7 || isNaN(e)) return c.errors = [{
																							instancePath: t + "/airship/characterIndex",
																							schemaPath: "#/$defs/Vehicle/properties/characterIndex/maximum",
																							keyword: "maximum",
																							params: {
																								comparison: "<=",
																								limit: 7
																							},
																							message: "must be <= 7"
																						}], !1;
																						if (e < 0 || isNaN(e)) return c.errors = [{
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
																					var T = !0;
																				} else T = !0;
																				if (T) {
																					if (n.characterName !== void 0) {
																						if (typeof n.characterName != "string") return c.errors = [{
																							instancePath: t + "/airship/characterName",
																							schemaPath: "#/$defs/Vehicle/properties/characterName/type",
																							keyword: "type",
																							params: { type: "string" },
																							message: "must be string"
																						}], !1;
																						T = !0;
																					} else T = !0;
																					if (T) {
																						if (n.bgm !== void 0) {
																							let e = n.bgm;
																							if (!e || typeof e != "object" || Array.isArray(e)) return c.errors = [{
																								instancePath: t + "/airship/bgm",
																								schemaPath: "#/$defs/Vehicle/properties/bgm/type",
																								keyword: "type",
																								params: { type: "object" },
																								message: "must be object"
																							}], !1;
																							{
																								let n;
																								if (e.name === void 0 && (n = "name") || e.volume === void 0 && (n = "volume") || e.pitch === void 0 && (n = "pitch") || e.pan === void 0 && (n = "pan")) return c.errors = [{
																									instancePath: t + "/airship/bgm",
																									schemaPath: "#/$defs/Vehicle/properties/bgm/required",
																									keyword: "required",
																									params: { missingProperty: n },
																									message: "must have required property '" + n + "'"
																								}], !1;
																								for (let n in e) if (n !== "name" && n !== "volume" && n !== "pitch" && n !== "pan") return c.errors = [{
																									instancePath: t + "/airship/bgm",
																									schemaPath: "#/$defs/Vehicle/properties/bgm/additionalProperties",
																									keyword: "additionalProperties",
																									params: { additionalProperty: n },
																									message: "must NOT have additional properties"
																								}], !1;
																								if (e.name !== void 0) {
																									if (typeof e.name != "string") return c.errors = [{
																										instancePath: t + "/airship/bgm/name",
																										schemaPath: "#/$defs/Vehicle/properties/bgm/properties/name/type",
																										keyword: "type",
																										params: { type: "string" },
																										message: "must be string"
																									}], !1;
																									var E = !0;
																								} else E = !0;
																								if (E) {
																									if (e.volume !== void 0) {
																										let n = e.volume;
																										if (typeof n != "number" || n % 1 || isNaN(n) || !isFinite(n)) return c.errors = [{
																											instancePath: t + "/airship/bgm/volume",
																											schemaPath: "#/$defs/Vehicle/properties/bgm/properties/volume/type",
																											keyword: "type",
																											params: { type: "integer" },
																											message: "must be integer"
																										}], !1;
																										E = !0;
																									} else E = !0;
																									if (E) {
																										if (e.pitch !== void 0) {
																											let n = e.pitch;
																											if (typeof n != "number" || n % 1 || isNaN(n) || !isFinite(n)) return c.errors = [{
																												instancePath: t + "/airship/bgm/pitch",
																												schemaPath: "#/$defs/Vehicle/properties/bgm/properties/pitch/type",
																												keyword: "type",
																												params: { type: "integer" },
																												message: "must be integer"
																											}], !1;
																											E = !0;
																										} else E = !0;
																										if (E) if (e.pan !== void 0) {
																											let n = e.pan;
																											if (typeof n != "number" || n % 1 || isNaN(n) || !isFinite(n)) return c.errors = [{
																												instancePath: t + "/airship/bgm/pan",
																												schemaPath: "#/$defs/Vehicle/properties/bgm/properties/pan/type",
																												keyword: "type",
																												params: { type: "integer" },
																												message: "must be integer"
																											}], !1;
																											E = !0;
																										} else E = !0;
																									}
																								}
																							}
																							T = !0;
																						} else T = !0;
																						if (T) {
																							if (n.startMapId !== void 0) {
																								let e = n.startMapId;
																								if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return c.errors = [{
																									instancePath: t + "/airship/startMapId",
																									schemaPath: "#/$defs/Vehicle/properties/startMapId/type",
																									keyword: "type",
																									params: { type: "integer" },
																									message: "must be integer"
																								}], !1;
																								if (typeof e == "number" && isFinite(e) && (e < 0 || isNaN(e))) return c.errors = [{
																									instancePath: t + "/airship/startMapId",
																									schemaPath: "#/$defs/Vehicle/properties/startMapId/minimum",
																									keyword: "minimum",
																									params: {
																										comparison: ">=",
																										limit: 0
																									},
																									message: "must be >= 0"
																								}], !1;
																								T = !0;
																							} else T = !0;
																							if (T) {
																								if (n.startX !== void 0) {
																									let e = n.startX;
																									if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return c.errors = [{
																										instancePath: t + "/airship/startX",
																										schemaPath: "#/$defs/Vehicle/properties/startX/type",
																										keyword: "type",
																										params: { type: "integer" },
																										message: "must be integer"
																									}], !1;
																									if (typeof e == "number" && isFinite(e) && (e < 0 || isNaN(e))) return c.errors = [{
																										instancePath: t + "/airship/startX",
																										schemaPath: "#/$defs/Vehicle/properties/startX/minimum",
																										keyword: "minimum",
																										params: {
																											comparison: ">=",
																											limit: 0
																										},
																										message: "must be >= 0"
																									}], !1;
																									T = !0;
																								} else T = !0;
																								if (T) if (n.startY !== void 0) {
																									let e = n.startY;
																									if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return c.errors = [{
																										instancePath: t + "/airship/startY",
																										schemaPath: "#/$defs/Vehicle/properties/startY/type",
																										keyword: "type",
																										params: { type: "integer" },
																										message: "must be integer"
																									}], !1;
																									if (typeof e == "number" && isFinite(e) && (e < 0 || isNaN(e))) return c.errors = [{
																										instancePath: t + "/airship/startY",
																										schemaPath: "#/$defs/Vehicle/properties/startY/minimum",
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
																			}
																			d = !0;
																		} else d = !0;
																		if (d) {
																			if (e.testBattlers !== void 0) {
																				let n = e.testBattlers;
																				if (!Array.isArray(n)) return c.errors = [{
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
																						if (!e || typeof e != "object" || Array.isArray(e)) return c.errors = [{
																							instancePath: t + "/testBattlers/" + r,
																							schemaPath: "#/$defs/TestBattler/type",
																							keyword: "type",
																							params: { type: "object" },
																							message: "must be object"
																						}], !1;
																						{
																							let n;
																							if (e.actorId === void 0 && (n = "actorId") || e.level === void 0 && (n = "level") || e.equips === void 0 && (n = "equips")) return c.errors = [{
																								instancePath: t + "/testBattlers/" + r,
																								schemaPath: "#/$defs/TestBattler/required",
																								keyword: "required",
																								params: { missingProperty: n },
																								message: "must have required property '" + n + "'"
																							}], !1;
																							for (let n in e) if (n !== "actorId" && n !== "equips" && n !== "level") return c.errors = [{
																								instancePath: t + "/testBattlers/" + r,
																								schemaPath: "#/$defs/TestBattler/additionalProperties",
																								keyword: "additionalProperties",
																								params: { additionalProperty: n },
																								message: "must NOT have additional properties"
																							}], !1;
																							if (e.actorId !== void 0) {
																								let n = e.actorId;
																								if (typeof n != "number" || n % 1 || isNaN(n) || !isFinite(n)) return c.errors = [{
																									instancePath: t + "/testBattlers/" + r + "/actorId",
																									schemaPath: "#/$defs/TestBattler/properties/actorId/type",
																									keyword: "type",
																									params: { type: "integer" },
																									message: "must be integer"
																								}], !1;
																								if (typeof n == "number" && isFinite(n) && (n < 0 || isNaN(n))) return c.errors = [{
																									instancePath: t + "/testBattlers/" + r + "/actorId",
																									schemaPath: "#/$defs/TestBattler/properties/actorId/minimum",
																									keyword: "minimum",
																									params: {
																										comparison: ">=",
																										limit: 0
																									},
																									message: "must be >= 0"
																								}], !1;
																								var D = !0;
																							} else D = !0;
																							if (D) {
																								if (e.equips !== void 0) {
																									let n = e.equips;
																									if (!Array.isArray(n)) return c.errors = [{
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
																											if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return c.errors = [{
																												instancePath: t + "/testBattlers/" + r + "/equips/" + i,
																												schemaPath: "#/$defs/TestBattler/properties/equips/items/type",
																												keyword: "type",
																												params: { type: "integer" },
																												message: "must be integer"
																											}], !1;
																										}
																									}
																									D = !0;
																								} else D = !0;
																								if (D) if (e.level !== void 0) {
																									let n = e.level;
																									if (typeof n != "number" || n % 1 || isNaN(n) || !isFinite(n)) return c.errors = [{
																										instancePath: t + "/testBattlers/" + r + "/level",
																										schemaPath: "#/$defs/TestBattler/properties/level/type",
																										keyword: "type",
																										params: { type: "integer" },
																										message: "must be integer"
																									}], !1;
																									if (typeof n == "number" && isFinite(n) && (n < 0 || isNaN(n))) return c.errors = [{
																										instancePath: t + "/testBattlers/" + r + "/level",
																										schemaPath: "#/$defs/TestBattler/properties/level/minimum",
																										keyword: "minimum",
																										params: {
																											comparison: ">=",
																											limit: 0
																										},
																										message: "must be >= 0"
																									}], !1;
																									D = !0;
																								} else D = !0;
																							}
																						}
																					}
																				}
																				d = !0;
																			} else d = !0;
																			if (d) {
																				if (e.terms !== void 0) {
																					let n = e.terms;
																					if (!n || typeof n != "object" || Array.isArray(n)) return c.errors = [{
																						instancePath: t + "/terms",
																						schemaPath: "#/properties/terms/type",
																						keyword: "type",
																						params: { type: "object" },
																						message: "must be object"
																					}], !1;
																					{
																						let e;
																						if (n.messages === void 0 && (e = "messages") || n.commands === void 0 && (e = "commands") || n.basic === void 0 && (e = "basic") || n.params === void 0 && (e = "params")) return c.errors = [{
																							instancePath: t + "/terms",
																							schemaPath: "#/properties/terms/required",
																							keyword: "required",
																							params: { missingProperty: e },
																							message: "must have required property '" + e + "'"
																						}], !1;
																						for (let e in n) if (e !== "messages" && e !== "commands" && e !== "basic" && e !== "params") return c.errors = [{
																							instancePath: t + "/terms",
																							schemaPath: "#/properties/terms/additionalProperties",
																							keyword: "additionalProperties",
																							params: { additionalProperty: e },
																							message: "must NOT have additional properties"
																						}], !1;
																						if (n.messages !== void 0) {
																							let e = n.messages;
																							if (!e || typeof e != "object" || Array.isArray(e)) return c.errors = [{
																								instancePath: t + "/terms/messages",
																								schemaPath: "#/$defs/TermsMessages/type",
																								keyword: "type",
																								params: { type: "object" },
																								message: "must be object"
																							}], !1;
																							{
																								let n;
																								if (e.actionFailure === void 0 && (n = "actionFailure") || e.actorDamage === void 0 && (n = "actorDamage") || e.actorDrain === void 0 && (n = "actorDrain") || e.actorGain === void 0 && (n = "actorGain") || e.actorLoss === void 0 && (n = "actorLoss") || e.actorNoDamage === void 0 && (n = "actorNoDamage") || e.actorNoHit === void 0 && (n = "actorNoHit") || e.actorRecovery === void 0 && (n = "actorRecovery") || e.alwaysDash === void 0 && (n = "alwaysDash") || e.autosave === void 0 && (n = "autosave") || e.bgmVolume === void 0 && (n = "bgmVolume") || e.bgsVolume === void 0 && (n = "bgsVolume") || e.buffAdd === void 0 && (n = "buffAdd") || e.buffRemove === void 0 && (n = "buffRemove") || e.commandRemember === void 0 && (n = "commandRemember") || e.counterAttack === void 0 && (n = "counterAttack") || e.criticalToActor === void 0 && (n = "criticalToActor") || e.criticalToEnemy === void 0 && (n = "criticalToEnemy") || e.debuffAdd === void 0 && (n = "debuffAdd") || e.defeat === void 0 && (n = "defeat") || e.emerge === void 0 && (n = "emerge") || e.enemyDamage === void 0 && (n = "enemyDamage") || e.enemyDrain === void 0 && (n = "enemyDrain") || e.enemyGain === void 0 && (n = "enemyGain") || e.enemyLoss === void 0 && (n = "enemyLoss") || e.enemyNoDamage === void 0 && (n = "enemyNoDamage") || e.enemyNoHit === void 0 && (n = "enemyNoHit") || e.enemyRecovery === void 0 && (n = "enemyRecovery") || e.escapeFailure === void 0 && (n = "escapeFailure") || e.escapeStart === void 0 && (n = "escapeStart") || e.evasion === void 0 && (n = "evasion") || e.expNext === void 0 && (n = "expNext") || e.expTotal === void 0 && (n = "expTotal") || e.file === void 0 && (n = "file") || e.levelUp === void 0 && (n = "levelUp") || e.loadMessage === void 0 && (n = "loadMessage") || e.magicEvasion === void 0 && (n = "magicEvasion") || e.magicReflection === void 0 && (n = "magicReflection") || e.meVolume === void 0 && (n = "meVolume") || e.obtainExp === void 0 && (n = "obtainExp") || e.obtainGold === void 0 && (n = "obtainGold") || e.obtainItem === void 0 && (n = "obtainItem") || e.obtainSkill === void 0 && (n = "obtainSkill") || e.partyName === void 0 && (n = "partyName") || e.possession === void 0 && (n = "possession") || e.preemptive === void 0 && (n = "preemptive") || e.saveMessage === void 0 && (n = "saveMessage") || e.seVolume === void 0 && (n = "seVolume") || e.substitute === void 0 && (n = "substitute") || e.surprise === void 0 && (n = "surprise") || e.touchUI === void 0 && (n = "touchUI") || e.useItem === void 0 && (n = "useItem") || e.victory === void 0 && (n = "victory")) return c.errors = [{
																									instancePath: t + "/terms/messages",
																									schemaPath: "#/$defs/TermsMessages/required",
																									keyword: "required",
																									params: { missingProperty: n },
																									message: "must have required property '" + n + "'"
																								}], !1;
																								for (let n in e) if (!o.call(a.properties, n)) return c.errors = [{
																									instancePath: t + "/terms/messages",
																									schemaPath: "#/$defs/TermsMessages/additionalProperties",
																									keyword: "additionalProperties",
																									params: { additionalProperty: n },
																									message: "must NOT have additional properties"
																								}], !1;
																								if (e.actionFailure !== void 0) {
																									if (typeof e.actionFailure != "string") return c.errors = [{
																										instancePath: t + "/terms/messages/actionFailure",
																										schemaPath: "#/$defs/TermsMessages/properties/actionFailure/type",
																										keyword: "type",
																										params: { type: "string" },
																										message: "must be string"
																									}], !1;
																									var O = !0;
																								} else O = !0;
																								if (O) {
																									if (e.actorDamage !== void 0) {
																										if (typeof e.actorDamage != "string") return c.errors = [{
																											instancePath: t + "/terms/messages/actorDamage",
																											schemaPath: "#/$defs/TermsMessages/properties/actorDamage/type",
																											keyword: "type",
																											params: { type: "string" },
																											message: "must be string"
																										}], !1;
																										O = !0;
																									} else O = !0;
																									if (O) {
																										if (e.actorDrain !== void 0) {
																											if (typeof e.actorDrain != "string") return c.errors = [{
																												instancePath: t + "/terms/messages/actorDrain",
																												schemaPath: "#/$defs/TermsMessages/properties/actorDrain/type",
																												keyword: "type",
																												params: { type: "string" },
																												message: "must be string"
																											}], !1;
																											O = !0;
																										} else O = !0;
																										if (O) {
																											if (e.actorGain !== void 0) {
																												if (typeof e.actorGain != "string") return c.errors = [{
																													instancePath: t + "/terms/messages/actorGain",
																													schemaPath: "#/$defs/TermsMessages/properties/actorGain/type",
																													keyword: "type",
																													params: { type: "string" },
																													message: "must be string"
																												}], !1;
																												O = !0;
																											} else O = !0;
																											if (O) {
																												if (e.actorLoss !== void 0) {
																													if (typeof e.actorLoss != "string") return c.errors = [{
																														instancePath: t + "/terms/messages/actorLoss",
																														schemaPath: "#/$defs/TermsMessages/properties/actorLoss/type",
																														keyword: "type",
																														params: { type: "string" },
																														message: "must be string"
																													}], !1;
																													O = !0;
																												} else O = !0;
																												if (O) {
																													if (e.actorNoDamage !== void 0) {
																														if (typeof e.actorNoDamage != "string") return c.errors = [{
																															instancePath: t + "/terms/messages/actorNoDamage",
																															schemaPath: "#/$defs/TermsMessages/properties/actorNoDamage/type",
																															keyword: "type",
																															params: { type: "string" },
																															message: "must be string"
																														}], !1;
																														O = !0;
																													} else O = !0;
																													if (O) {
																														if (e.actorNoHit !== void 0) {
																															if (typeof e.actorNoHit != "string") return c.errors = [{
																																instancePath: t + "/terms/messages/actorNoHit",
																																schemaPath: "#/$defs/TermsMessages/properties/actorNoHit/type",
																																keyword: "type",
																																params: { type: "string" },
																																message: "must be string"
																															}], !1;
																															O = !0;
																														} else O = !0;
																														if (O) {
																															if (e.actorRecovery !== void 0) {
																																if (typeof e.actorRecovery != "string") return c.errors = [{
																																	instancePath: t + "/terms/messages/actorRecovery",
																																	schemaPath: "#/$defs/TermsMessages/properties/actorRecovery/type",
																																	keyword: "type",
																																	params: { type: "string" },
																																	message: "must be string"
																																}], !1;
																																O = !0;
																															} else O = !0;
																															if (O) {
																																if (e.alwaysDash !== void 0) {
																																	if (typeof e.alwaysDash != "string") return c.errors = [{
																																		instancePath: t + "/terms/messages/alwaysDash",
																																		schemaPath: "#/$defs/TermsMessages/properties/alwaysDash/type",
																																		keyword: "type",
																																		params: { type: "string" },
																																		message: "must be string"
																																	}], !1;
																																	O = !0;
																																} else O = !0;
																																if (O) {
																																	if (e.autosave !== void 0) {
																																		if (typeof e.autosave != "string") return c.errors = [{
																																			instancePath: t + "/terms/messages/autosave",
																																			schemaPath: "#/$defs/TermsMessages/properties/autosave/type",
																																			keyword: "type",
																																			params: { type: "string" },
																																			message: "must be string"
																																		}], !1;
																																		O = !0;
																																	} else O = !0;
																																	if (O) {
																																		if (e.bgmVolume !== void 0) {
																																			if (typeof e.bgmVolume != "string") return c.errors = [{
																																				instancePath: t + "/terms/messages/bgmVolume",
																																				schemaPath: "#/$defs/TermsMessages/properties/bgmVolume/type",
																																				keyword: "type",
																																				params: { type: "string" },
																																				message: "must be string"
																																			}], !1;
																																			O = !0;
																																		} else O = !0;
																																		if (O) {
																																			if (e.bgsVolume !== void 0) {
																																				if (typeof e.bgsVolume != "string") return c.errors = [{
																																					instancePath: t + "/terms/messages/bgsVolume",
																																					schemaPath: "#/$defs/TermsMessages/properties/bgsVolume/type",
																																					keyword: "type",
																																					params: { type: "string" },
																																					message: "must be string"
																																				}], !1;
																																				O = !0;
																																			} else O = !0;
																																			if (O) {
																																				if (e.buffAdd !== void 0) {
																																					if (typeof e.buffAdd != "string") return c.errors = [{
																																						instancePath: t + "/terms/messages/buffAdd",
																																						schemaPath: "#/$defs/TermsMessages/properties/buffAdd/type",
																																						keyword: "type",
																																						params: { type: "string" },
																																						message: "must be string"
																																					}], !1;
																																					O = !0;
																																				} else O = !0;
																																				if (O) {
																																					if (e.buffRemove !== void 0) {
																																						if (typeof e.buffRemove != "string") return c.errors = [{
																																							instancePath: t + "/terms/messages/buffRemove",
																																							schemaPath: "#/$defs/TermsMessages/properties/buffRemove/type",
																																							keyword: "type",
																																							params: { type: "string" },
																																							message: "must be string"
																																						}], !1;
																																						O = !0;
																																					} else O = !0;
																																					if (O) {
																																						if (e.commandRemember !== void 0) {
																																							if (typeof e.commandRemember != "string") return c.errors = [{
																																								instancePath: t + "/terms/messages/commandRemember",
																																								schemaPath: "#/$defs/TermsMessages/properties/commandRemember/type",
																																								keyword: "type",
																																								params: { type: "string" },
																																								message: "must be string"
																																							}], !1;
																																							O = !0;
																																						} else O = !0;
																																						if (O) {
																																							if (e.counterAttack !== void 0) {
																																								if (typeof e.counterAttack != "string") return c.errors = [{
																																									instancePath: t + "/terms/messages/counterAttack",
																																									schemaPath: "#/$defs/TermsMessages/properties/counterAttack/type",
																																									keyword: "type",
																																									params: { type: "string" },
																																									message: "must be string"
																																								}], !1;
																																								O = !0;
																																							} else O = !0;
																																							if (O) {
																																								if (e.criticalToActor !== void 0) {
																																									if (typeof e.criticalToActor != "string") return c.errors = [{
																																										instancePath: t + "/terms/messages/criticalToActor",
																																										schemaPath: "#/$defs/TermsMessages/properties/criticalToActor/type",
																																										keyword: "type",
																																										params: { type: "string" },
																																										message: "must be string"
																																									}], !1;
																																									O = !0;
																																								} else O = !0;
																																								if (O) {
																																									if (e.criticalToEnemy !== void 0) {
																																										if (typeof e.criticalToEnemy != "string") return c.errors = [{
																																											instancePath: t + "/terms/messages/criticalToEnemy",
																																											schemaPath: "#/$defs/TermsMessages/properties/criticalToEnemy/type",
																																											keyword: "type",
																																											params: { type: "string" },
																																											message: "must be string"
																																										}], !1;
																																										O = !0;
																																									} else O = !0;
																																									if (O) {
																																										if (e.debuffAdd !== void 0) {
																																											if (typeof e.debuffAdd != "string") return c.errors = [{
																																												instancePath: t + "/terms/messages/debuffAdd",
																																												schemaPath: "#/$defs/TermsMessages/properties/debuffAdd/type",
																																												keyword: "type",
																																												params: { type: "string" },
																																												message: "must be string"
																																											}], !1;
																																											O = !0;
																																										} else O = !0;
																																										if (O) {
																																											if (e.defeat !== void 0) {
																																												if (typeof e.defeat != "string") return c.errors = [{
																																													instancePath: t + "/terms/messages/defeat",
																																													schemaPath: "#/$defs/TermsMessages/properties/defeat/type",
																																													keyword: "type",
																																													params: { type: "string" },
																																													message: "must be string"
																																												}], !1;
																																												O = !0;
																																											} else O = !0;
																																											if (O) {
																																												if (e.emerge !== void 0) {
																																													if (typeof e.emerge != "string") return c.errors = [{
																																														instancePath: t + "/terms/messages/emerge",
																																														schemaPath: "#/$defs/TermsMessages/properties/emerge/type",
																																														keyword: "type",
																																														params: { type: "string" },
																																														message: "must be string"
																																													}], !1;
																																													O = !0;
																																												} else O = !0;
																																												if (O) {
																																													if (e.enemyDamage !== void 0) {
																																														if (typeof e.enemyDamage != "string") return c.errors = [{
																																															instancePath: t + "/terms/messages/enemyDamage",
																																															schemaPath: "#/$defs/TermsMessages/properties/enemyDamage/type",
																																															keyword: "type",
																																															params: { type: "string" },
																																															message: "must be string"
																																														}], !1;
																																														O = !0;
																																													} else O = !0;
																																													if (O) {
																																														if (e.enemyDrain !== void 0) {
																																															if (typeof e.enemyDrain != "string") return c.errors = [{
																																																instancePath: t + "/terms/messages/enemyDrain",
																																																schemaPath: "#/$defs/TermsMessages/properties/enemyDrain/type",
																																																keyword: "type",
																																																params: { type: "string" },
																																																message: "must be string"
																																															}], !1;
																																															O = !0;
																																														} else O = !0;
																																														if (O) {
																																															if (e.enemyGain !== void 0) {
																																																if (typeof e.enemyGain != "string") return c.errors = [{
																																																	instancePath: t + "/terms/messages/enemyGain",
																																																	schemaPath: "#/$defs/TermsMessages/properties/enemyGain/type",
																																																	keyword: "type",
																																																	params: { type: "string" },
																																																	message: "must be string"
																																																}], !1;
																																																O = !0;
																																															} else O = !0;
																																															if (O) {
																																																if (e.enemyLoss !== void 0) {
																																																	if (typeof e.enemyLoss != "string") return c.errors = [{
																																																		instancePath: t + "/terms/messages/enemyLoss",
																																																		schemaPath: "#/$defs/TermsMessages/properties/enemyLoss/type",
																																																		keyword: "type",
																																																		params: { type: "string" },
																																																		message: "must be string"
																																																	}], !1;
																																																	O = !0;
																																																} else O = !0;
																																																if (O) {
																																																	if (e.enemyNoDamage !== void 0) {
																																																		if (typeof e.enemyNoDamage != "string") return c.errors = [{
																																																			instancePath: t + "/terms/messages/enemyNoDamage",
																																																			schemaPath: "#/$defs/TermsMessages/properties/enemyNoDamage/type",
																																																			keyword: "type",
																																																			params: { type: "string" },
																																																			message: "must be string"
																																																		}], !1;
																																																		O = !0;
																																																	} else O = !0;
																																																	if (O) {
																																																		if (e.enemyNoHit !== void 0) {
																																																			if (typeof e.enemyNoHit != "string") return c.errors = [{
																																																				instancePath: t + "/terms/messages/enemyNoHit",
																																																				schemaPath: "#/$defs/TermsMessages/properties/enemyNoHit/type",
																																																				keyword: "type",
																																																				params: { type: "string" },
																																																				message: "must be string"
																																																			}], !1;
																																																			O = !0;
																																																		} else O = !0;
																																																		if (O) {
																																																			if (e.enemyRecovery !== void 0) {
																																																				if (typeof e.enemyRecovery != "string") return c.errors = [{
																																																					instancePath: t + "/terms/messages/enemyRecovery",
																																																					schemaPath: "#/$defs/TermsMessages/properties/enemyRecovery/type",
																																																					keyword: "type",
																																																					params: { type: "string" },
																																																					message: "must be string"
																																																				}], !1;
																																																				O = !0;
																																																			} else O = !0;
																																																			if (O) {
																																																				if (e.escapeFailure !== void 0) {
																																																					if (typeof e.escapeFailure != "string") return c.errors = [{
																																																						instancePath: t + "/terms/messages/escapeFailure",
																																																						schemaPath: "#/$defs/TermsMessages/properties/escapeFailure/type",
																																																						keyword: "type",
																																																						params: { type: "string" },
																																																						message: "must be string"
																																																					}], !1;
																																																					O = !0;
																																																				} else O = !0;
																																																				if (O) {
																																																					if (e.escapeStart !== void 0) {
																																																						if (typeof e.escapeStart != "string") return c.errors = [{
																																																							instancePath: t + "/terms/messages/escapeStart",
																																																							schemaPath: "#/$defs/TermsMessages/properties/escapeStart/type",
																																																							keyword: "type",
																																																							params: { type: "string" },
																																																							message: "must be string"
																																																						}], !1;
																																																						O = !0;
																																																					} else O = !0;
																																																					if (O) {
																																																						if (e.evasion !== void 0) {
																																																							if (typeof e.evasion != "string") return c.errors = [{
																																																								instancePath: t + "/terms/messages/evasion",
																																																								schemaPath: "#/$defs/TermsMessages/properties/evasion/type",
																																																								keyword: "type",
																																																								params: { type: "string" },
																																																								message: "must be string"
																																																							}], !1;
																																																							O = !0;
																																																						} else O = !0;
																																																						if (O) {
																																																							if (e.expNext !== void 0) {
																																																								if (typeof e.expNext != "string") return c.errors = [{
																																																									instancePath: t + "/terms/messages/expNext",
																																																									schemaPath: "#/$defs/TermsMessages/properties/expNext/type",
																																																									keyword: "type",
																																																									params: { type: "string" },
																																																									message: "must be string"
																																																								}], !1;
																																																								O = !0;
																																																							} else O = !0;
																																																							if (O) {
																																																								if (e.expTotal !== void 0) {
																																																									if (typeof e.expTotal != "string") return c.errors = [{
																																																										instancePath: t + "/terms/messages/expTotal",
																																																										schemaPath: "#/$defs/TermsMessages/properties/expTotal/type",
																																																										keyword: "type",
																																																										params: { type: "string" },
																																																										message: "must be string"
																																																									}], !1;
																																																									O = !0;
																																																								} else O = !0;
																																																								if (O) {
																																																									if (e.file !== void 0) {
																																																										if (typeof e.file != "string") return c.errors = [{
																																																											instancePath: t + "/terms/messages/file",
																																																											schemaPath: "#/$defs/TermsMessages/properties/file/type",
																																																											keyword: "type",
																																																											params: { type: "string" },
																																																											message: "must be string"
																																																										}], !1;
																																																										O = !0;
																																																									} else O = !0;
																																																									if (O) {
																																																										if (e.levelUp !== void 0) {
																																																											if (typeof e.levelUp != "string") return c.errors = [{
																																																												instancePath: t + "/terms/messages/levelUp",
																																																												schemaPath: "#/$defs/TermsMessages/properties/levelUp/type",
																																																												keyword: "type",
																																																												params: { type: "string" },
																																																												message: "must be string"
																																																											}], !1;
																																																											O = !0;
																																																										} else O = !0;
																																																										if (O) {
																																																											if (e.loadMessage !== void 0) {
																																																												if (typeof e.loadMessage != "string") return c.errors = [{
																																																													instancePath: t + "/terms/messages/loadMessage",
																																																													schemaPath: "#/$defs/TermsMessages/properties/loadMessage/type",
																																																													keyword: "type",
																																																													params: { type: "string" },
																																																													message: "must be string"
																																																												}], !1;
																																																												O = !0;
																																																											} else O = !0;
																																																											if (O) {
																																																												if (e.magicEvasion !== void 0) {
																																																													if (typeof e.magicEvasion != "string") return c.errors = [{
																																																														instancePath: t + "/terms/messages/magicEvasion",
																																																														schemaPath: "#/$defs/TermsMessages/properties/magicEvasion/type",
																																																														keyword: "type",
																																																														params: { type: "string" },
																																																														message: "must be string"
																																																													}], !1;
																																																													O = !0;
																																																												} else O = !0;
																																																												if (O) {
																																																													if (e.magicReflection !== void 0) {
																																																														if (typeof e.magicReflection != "string") return c.errors = [{
																																																															instancePath: t + "/terms/messages/magicReflection",
																																																															schemaPath: "#/$defs/TermsMessages/properties/magicReflection/type",
																																																															keyword: "type",
																																																															params: { type: "string" },
																																																															message: "must be string"
																																																														}], !1;
																																																														O = !0;
																																																													} else O = !0;
																																																													if (O) {
																																																														if (e.meVolume !== void 0) {
																																																															if (typeof e.meVolume != "string") return c.errors = [{
																																																																instancePath: t + "/terms/messages/meVolume",
																																																																schemaPath: "#/$defs/TermsMessages/properties/meVolume/type",
																																																																keyword: "type",
																																																																params: { type: "string" },
																																																																message: "must be string"
																																																															}], !1;
																																																															O = !0;
																																																														} else O = !0;
																																																														if (O) {
																																																															if (e.obtainExp !== void 0) {
																																																																if (typeof e.obtainExp != "string") return c.errors = [{
																																																																	instancePath: t + "/terms/messages/obtainExp",
																																																																	schemaPath: "#/$defs/TermsMessages/properties/obtainExp/type",
																																																																	keyword: "type",
																																																																	params: { type: "string" },
																																																																	message: "must be string"
																																																																}], !1;
																																																																O = !0;
																																																															} else O = !0;
																																																															if (O) {
																																																																if (e.obtainGold !== void 0) {
																																																																	if (typeof e.obtainGold != "string") return c.errors = [{
																																																																		instancePath: t + "/terms/messages/obtainGold",
																																																																		schemaPath: "#/$defs/TermsMessages/properties/obtainGold/type",
																																																																		keyword: "type",
																																																																		params: { type: "string" },
																																																																		message: "must be string"
																																																																	}], !1;
																																																																	O = !0;
																																																																} else O = !0;
																																																																if (O) {
																																																																	if (e.obtainItem !== void 0) {
																																																																		if (typeof e.obtainItem != "string") return c.errors = [{
																																																																			instancePath: t + "/terms/messages/obtainItem",
																																																																			schemaPath: "#/$defs/TermsMessages/properties/obtainItem/type",
																																																																			keyword: "type",
																																																																			params: { type: "string" },
																																																																			message: "must be string"
																																																																		}], !1;
																																																																		O = !0;
																																																																	} else O = !0;
																																																																	if (O) {
																																																																		if (e.obtainSkill !== void 0) {
																																																																			if (typeof e.obtainSkill != "string") return c.errors = [{
																																																																				instancePath: t + "/terms/messages/obtainSkill",
																																																																				schemaPath: "#/$defs/TermsMessages/properties/obtainSkill/type",
																																																																				keyword: "type",
																																																																				params: { type: "string" },
																																																																				message: "must be string"
																																																																			}], !1;
																																																																			O = !0;
																																																																		} else O = !0;
																																																																		if (O) {
																																																																			if (e.partyName !== void 0) {
																																																																				if (typeof e.partyName != "string") return c.errors = [{
																																																																					instancePath: t + "/terms/messages/partyName",
																																																																					schemaPath: "#/$defs/TermsMessages/properties/partyName/type",
																																																																					keyword: "type",
																																																																					params: { type: "string" },
																																																																					message: "must be string"
																																																																				}], !1;
																																																																				O = !0;
																																																																			} else O = !0;
																																																																			if (O) {
																																																																				if (e.possession !== void 0) {
																																																																					if (typeof e.possession != "string") return c.errors = [{
																																																																						instancePath: t + "/terms/messages/possession",
																																																																						schemaPath: "#/$defs/TermsMessages/properties/possession/type",
																																																																						keyword: "type",
																																																																						params: { type: "string" },
																																																																						message: "must be string"
																																																																					}], !1;
																																																																					O = !0;
																																																																				} else O = !0;
																																																																				if (O) {
																																																																					if (e.preemptive !== void 0) {
																																																																						if (typeof e.preemptive != "string") return c.errors = [{
																																																																							instancePath: t + "/terms/messages/preemptive",
																																																																							schemaPath: "#/$defs/TermsMessages/properties/preemptive/type",
																																																																							keyword: "type",
																																																																							params: { type: "string" },
																																																																							message: "must be string"
																																																																						}], !1;
																																																																						O = !0;
																																																																					} else O = !0;
																																																																					if (O) {
																																																																						if (e.saveMessage !== void 0) {
																																																																							if (typeof e.saveMessage != "string") return c.errors = [{
																																																																								instancePath: t + "/terms/messages/saveMessage",
																																																																								schemaPath: "#/$defs/TermsMessages/properties/saveMessage/type",
																																																																								keyword: "type",
																																																																								params: { type: "string" },
																																																																								message: "must be string"
																																																																							}], !1;
																																																																							O = !0;
																																																																						} else O = !0;
																																																																						if (O) {
																																																																							if (e.seVolume !== void 0) {
																																																																								if (typeof e.seVolume != "string") return c.errors = [{
																																																																									instancePath: t + "/terms/messages/seVolume",
																																																																									schemaPath: "#/$defs/TermsMessages/properties/seVolume/type",
																																																																									keyword: "type",
																																																																									params: { type: "string" },
																																																																									message: "must be string"
																																																																								}], !1;
																																																																								O = !0;
																																																																							} else O = !0;
																																																																							if (O) {
																																																																								if (e.substitute !== void 0) {
																																																																									if (typeof e.substitute != "string") return c.errors = [{
																																																																										instancePath: t + "/terms/messages/substitute",
																																																																										schemaPath: "#/$defs/TermsMessages/properties/substitute/type",
																																																																										keyword: "type",
																																																																										params: { type: "string" },
																																																																										message: "must be string"
																																																																									}], !1;
																																																																									O = !0;
																																																																								} else O = !0;
																																																																								if (O) {
																																																																									if (e.surprise !== void 0) {
																																																																										if (typeof e.surprise != "string") return c.errors = [{
																																																																											instancePath: t + "/terms/messages/surprise",
																																																																											schemaPath: "#/$defs/TermsMessages/properties/surprise/type",
																																																																											keyword: "type",
																																																																											params: { type: "string" },
																																																																											message: "must be string"
																																																																										}], !1;
																																																																										O = !0;
																																																																									} else O = !0;
																																																																									if (O) {
																																																																										if (e.touchUI !== void 0) {
																																																																											if (typeof e.touchUI != "string") return c.errors = [{
																																																																												instancePath: t + "/terms/messages/touchUI",
																																																																												schemaPath: "#/$defs/TermsMessages/properties/touchUI/type",
																																																																												keyword: "type",
																																																																												params: { type: "string" },
																																																																												message: "must be string"
																																																																											}], !1;
																																																																											O = !0;
																																																																										} else O = !0;
																																																																										if (O) {
																																																																											if (e.useItem !== void 0) {
																																																																												if (typeof e.useItem != "string") return c.errors = [{
																																																																													instancePath: t + "/terms/messages/useItem",
																																																																													schemaPath: "#/$defs/TermsMessages/properties/useItem/type",
																																																																													keyword: "type",
																																																																													params: { type: "string" },
																																																																													message: "must be string"
																																																																												}], !1;
																																																																												O = !0;
																																																																											} else O = !0;
																																																																											if (O) if (e.victory !== void 0) {
																																																																												if (typeof e.victory != "string") return c.errors = [{
																																																																													instancePath: t + "/terms/messages/victory",
																																																																													schemaPath: "#/$defs/TermsMessages/properties/victory/type",
																																																																													keyword: "type",
																																																																													params: { type: "string" },
																																																																													message: "must be string"
																																																																												}], !1;
																																																																												O = !0;
																																																																											} else O = !0;
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
																								}
																							}
																							var k = !0;
																						} else k = !0;
																						if (k) {
																							if (n.commands !== void 0) {
																								let e = n.commands;
																								if (!Array.isArray(e)) return c.errors = [{
																									instancePath: t + "/terms/commands",
																									schemaPath: "#/$defs/TermsCommands/type",
																									keyword: "type",
																									params: { type: "array" },
																									message: "must be array"
																								}], !1;
																								if (e.length > 26) return c.errors = [{
																									instancePath: t + "/terms/commands",
																									schemaPath: "#/$defs/TermsCommands/maxItems",
																									keyword: "maxItems",
																									params: { limit: 26 },
																									message: "must NOT have more than 26 items"
																								}], !1;
																								if (e.length < 26) return c.errors = [{
																									instancePath: t + "/terms/commands",
																									schemaPath: "#/$defs/TermsCommands/minItems",
																									keyword: "minItems",
																									params: { limit: 26 },
																									message: "must NOT have fewer than 26 items"
																								}], !1;
																								{
																									let n = e.length;
																									if (n > 0) {
																										if (typeof e[0] != "string") return c.errors = [{
																											instancePath: t + "/terms/commands/0",
																											schemaPath: "#/$defs/TermsCommands/items/0/type",
																											keyword: "type",
																											params: { type: "string" },
																											message: "must be string"
																										}], !1;
																										var A = !0;
																									}
																									if (A) {
																										if (n > 1) {
																											if (typeof e[1] != "string") return c.errors = [{
																												instancePath: t + "/terms/commands/1",
																												schemaPath: "#/$defs/TermsCommands/items/1/type",
																												keyword: "type",
																												params: { type: "string" },
																												message: "must be string"
																											}], !1;
																											A = !0;
																										}
																										if (A) {
																											if (n > 2) {
																												if (typeof e[2] != "string") return c.errors = [{
																													instancePath: t + "/terms/commands/2",
																													schemaPath: "#/$defs/TermsCommands/items/2/type",
																													keyword: "type",
																													params: { type: "string" },
																													message: "must be string"
																												}], !1;
																												A = !0;
																											}
																											if (A) {
																												if (n > 3) {
																													if (typeof e[3] != "string") return c.errors = [{
																														instancePath: t + "/terms/commands/3",
																														schemaPath: "#/$defs/TermsCommands/items/3/type",
																														keyword: "type",
																														params: { type: "string" },
																														message: "must be string"
																													}], !1;
																													A = !0;
																												}
																												if (A) {
																													if (n > 4) {
																														if (typeof e[4] != "string") return c.errors = [{
																															instancePath: t + "/terms/commands/4",
																															schemaPath: "#/$defs/TermsCommands/items/4/type",
																															keyword: "type",
																															params: { type: "string" },
																															message: "must be string"
																														}], !1;
																														A = !0;
																													}
																													if (A) {
																														if (n > 5) {
																															if (typeof e[5] != "string") return c.errors = [{
																																instancePath: t + "/terms/commands/5",
																																schemaPath: "#/$defs/TermsCommands/items/5/type",
																																keyword: "type",
																																params: { type: "string" },
																																message: "must be string"
																															}], !1;
																															A = !0;
																														}
																														if (A) {
																															if (n > 6) {
																																if (typeof e[6] != "string") return c.errors = [{
																																	instancePath: t + "/terms/commands/6",
																																	schemaPath: "#/$defs/TermsCommands/items/6/type",
																																	keyword: "type",
																																	params: { type: "string" },
																																	message: "must be string"
																																}], !1;
																																A = !0;
																															}
																															if (A) {
																																if (n > 7) {
																																	if (typeof e[7] != "string") return c.errors = [{
																																		instancePath: t + "/terms/commands/7",
																																		schemaPath: "#/$defs/TermsCommands/items/7/type",
																																		keyword: "type",
																																		params: { type: "string" },
																																		message: "must be string"
																																	}], !1;
																																	A = !0;
																																}
																																if (A) {
																																	if (n > 8) {
																																		if (typeof e[8] != "string") return c.errors = [{
																																			instancePath: t + "/terms/commands/8",
																																			schemaPath: "#/$defs/TermsCommands/items/8/type",
																																			keyword: "type",
																																			params: { type: "string" },
																																			message: "must be string"
																																		}], !1;
																																		A = !0;
																																	}
																																	if (A) {
																																		if (n > 9) {
																																			if (typeof e[9] != "string") return c.errors = [{
																																				instancePath: t + "/terms/commands/9",
																																				schemaPath: "#/$defs/TermsCommands/items/9/type",
																																				keyword: "type",
																																				params: { type: "string" },
																																				message: "must be string"
																																			}], !1;
																																			A = !0;
																																		}
																																		if (A) {
																																			if (n > 10) {
																																				if (typeof e[10] != "string") return c.errors = [{
																																					instancePath: t + "/terms/commands/10",
																																					schemaPath: "#/$defs/TermsCommands/items/10/type",
																																					keyword: "type",
																																					params: { type: "string" },
																																					message: "must be string"
																																				}], !1;
																																				A = !0;
																																			}
																																			if (A) {
																																				if (n > 11) {
																																					if (typeof e[11] != "string") return c.errors = [{
																																						instancePath: t + "/terms/commands/11",
																																						schemaPath: "#/$defs/TermsCommands/items/11/type",
																																						keyword: "type",
																																						params: { type: "string" },
																																						message: "must be string"
																																					}], !1;
																																					A = !0;
																																				}
																																				if (A) {
																																					if (n > 12) {
																																						if (typeof e[12] != "string") return c.errors = [{
																																							instancePath: t + "/terms/commands/12",
																																							schemaPath: "#/$defs/TermsCommands/items/12/type",
																																							keyword: "type",
																																							params: { type: "string" },
																																							message: "must be string"
																																						}], !1;
																																						A = !0;
																																					}
																																					if (A) {
																																						if (n > 13) {
																																							if (typeof e[13] != "string") return c.errors = [{
																																								instancePath: t + "/terms/commands/13",
																																								schemaPath: "#/$defs/TermsCommands/items/13/type",
																																								keyword: "type",
																																								params: { type: "string" },
																																								message: "must be string"
																																							}], !1;
																																							A = !0;
																																						}
																																						if (A) {
																																							if (n > 14) {
																																								if (typeof e[14] != "string") return c.errors = [{
																																									instancePath: t + "/terms/commands/14",
																																									schemaPath: "#/$defs/TermsCommands/items/14/type",
																																									keyword: "type",
																																									params: { type: "string" },
																																									message: "must be string"
																																								}], !1;
																																								A = !0;
																																							}
																																							if (A) {
																																								if (n > 15) {
																																									if (typeof e[15] != "string") return c.errors = [{
																																										instancePath: t + "/terms/commands/15",
																																										schemaPath: "#/$defs/TermsCommands/items/15/type",
																																										keyword: "type",
																																										params: { type: "string" },
																																										message: "must be string"
																																									}], !1;
																																									A = !0;
																																								}
																																								if (A) {
																																									if (n > 16) {
																																										if (typeof e[16] != "string") return c.errors = [{
																																											instancePath: t + "/terms/commands/16",
																																											schemaPath: "#/$defs/TermsCommands/items/16/type",
																																											keyword: "type",
																																											params: { type: "string" },
																																											message: "must be string"
																																										}], !1;
																																										A = !0;
																																									}
																																									if (A) {
																																										if (n > 17) {
																																											if (typeof e[17] != "string") return c.errors = [{
																																												instancePath: t + "/terms/commands/17",
																																												schemaPath: "#/$defs/TermsCommands/items/17/type",
																																												keyword: "type",
																																												params: { type: "string" },
																																												message: "must be string"
																																											}], !1;
																																											A = !0;
																																										}
																																										if (A) {
																																											if (n > 18) {
																																												if (typeof e[18] != "string") return c.errors = [{
																																													instancePath: t + "/terms/commands/18",
																																													schemaPath: "#/$defs/TermsCommands/items/18/type",
																																													keyword: "type",
																																													params: { type: "string" },
																																													message: "must be string"
																																												}], !1;
																																												A = !0;
																																											}
																																											if (A) {
																																												if (n > 19) {
																																													if (typeof e[19] != "string") return c.errors = [{
																																														instancePath: t + "/terms/commands/19",
																																														schemaPath: "#/$defs/TermsCommands/items/19/type",
																																														keyword: "type",
																																														params: { type: "string" },
																																														message: "must be string"
																																													}], !1;
																																													A = !0;
																																												}
																																												if (A) {
																																													if (n > 20) {
																																														let n = e[20];
																																														if (typeof n != "string" && n !== null) return c.errors = [{
																																															instancePath: t + "/terms/commands/20",
																																															schemaPath: "#/$defs/TermsCommands/items/20/type",
																																															keyword: "type",
																																															params: { type: "string" },
																																															message: "must be string"
																																														}], !1;
																																														A = !0;
																																													}
																																													if (A) {
																																														if (n > 21) {
																																															if (typeof e[21] != "string") return c.errors = [{
																																																instancePath: t + "/terms/commands/21",
																																																schemaPath: "#/$defs/TermsCommands/items/21/type",
																																																keyword: "type",
																																																params: { type: "string" },
																																																message: "must be string"
																																															}], !1;
																																															A = !0;
																																														}
																																														if (A) {
																																															if (n > 22) {
																																																if (typeof e[22] != "string") return c.errors = [{
																																																	instancePath: t + "/terms/commands/22",
																																																	schemaPath: "#/$defs/TermsCommands/items/22/type",
																																																	keyword: "type",
																																																	params: { type: "string" },
																																																	message: "must be string"
																																																}], !1;
																																																A = !0;
																																															}
																																															if (A) {
																																																if (n > 23) {
																																																	let n = e[23];
																																																	if (typeof n != "string" && n !== null) return c.errors = [{
																																																		instancePath: t + "/terms/commands/23",
																																																		schemaPath: "#/$defs/TermsCommands/items/23/type",
																																																		keyword: "type",
																																																		params: { type: "string" },
																																																		message: "must be string"
																																																	}], !1;
																																																	A = !0;
																																																}
																																																if (A) {
																																																	if (n > 24) {
																																																		if (typeof e[24] != "string") return c.errors = [{
																																																			instancePath: t + "/terms/commands/24",
																																																			schemaPath: "#/$defs/TermsCommands/items/24/type",
																																																			keyword: "type",
																																																			params: { type: "string" },
																																																			message: "must be string"
																																																		}], !1;
																																																		A = !0;
																																																	}
																																																	if (A && n > 25) {
																																																		if (typeof e[25] != "string") return c.errors = [{
																																																			instancePath: t + "/terms/commands/25",
																																																			schemaPath: "#/$defs/TermsCommands/items/25/type",
																																																			keyword: "type",
																																																			params: { type: "string" },
																																																			message: "must be string"
																																																		}], !1;
																																																		A = !0;
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
																								k = !0;
																							} else k = !0;
																							if (k) {
																								if (n.basic !== void 0) {
																									let e = n.basic;
																									if (!Array.isArray(e)) return c.errors = [{
																										instancePath: t + "/terms/basic",
																										schemaPath: "#/$defs/TermsBasic/type",
																										keyword: "type",
																										params: { type: "array" },
																										message: "must be array"
																									}], !1;
																									if (e.length > 10) return c.errors = [{
																										instancePath: t + "/terms/basic",
																										schemaPath: "#/$defs/TermsBasic/maxItems",
																										keyword: "maxItems",
																										params: { limit: 10 },
																										message: "must NOT have more than 10 items"
																									}], !1;
																									if (e.length < 10) return c.errors = [{
																										instancePath: t + "/terms/basic",
																										schemaPath: "#/$defs/TermsBasic/minItems",
																										keyword: "minItems",
																										params: { limit: 10 },
																										message: "must NOT have fewer than 10 items"
																									}], !1;
																									{
																										let n = e.length;
																										for (let r = 0; r < n; r++) if (typeof e[r] != "string") return c.errors = [{
																											instancePath: t + "/terms/basic/" + r,
																											schemaPath: "#/$defs/TermsBasic/items/type",
																											keyword: "type",
																											params: { type: "string" },
																											message: "must be string"
																										}], !1;
																									}
																									k = !0;
																								} else k = !0;
																								if (k) if (n.params !== void 0) {
																									let e = n.params;
																									if (!Array.isArray(e)) return c.errors = [{
																										instancePath: t + "/terms/params",
																										schemaPath: "#/$defs/TermsParams/type",
																										keyword: "type",
																										params: { type: "array" },
																										message: "must be array"
																									}], !1;
																									if (e.length > 10) return c.errors = [{
																										instancePath: t + "/terms/params",
																										schemaPath: "#/$defs/TermsParams/maxItems",
																										keyword: "maxItems",
																										params: { limit: 10 },
																										message: "must NOT have more than 10 items"
																									}], !1;
																									if (e.length < 10) return c.errors = [{
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
																											if (typeof n != "string") return c.errors = [{
																												instancePath: t + "/terms/params/" + r,
																												schemaPath: "#/$defs/TermsParams/items/type",
																												keyword: "type",
																												params: { type: "string" },
																												message: "must be string"
																											}], !1;
																											if (s(n) < 0) return c.errors = [{
																												instancePath: t + "/terms/params/" + r,
																												schemaPath: "#/$defs/TermsParams/items/minLength",
																												keyword: "minLength",
																												params: { limit: 0 },
																												message: "must NOT have fewer than 0 characters"
																											}], !1;
																										}
																									}
																									k = !0;
																								} else k = !0;
																							}
																						}
																					}
																					d = !0;
																				} else d = !0;
																				if (d) {
																					if (e.optAutosave !== void 0) {
																						if (typeof e.optAutosave != "boolean") return c.errors = [{
																							instancePath: t + "/optAutosave",
																							schemaPath: "#/properties/optAutosave/type",
																							keyword: "type",
																							params: { type: "boolean" },
																							message: "must be boolean"
																						}], !1;
																						d = !0;
																					} else d = !0;
																					if (d) {
																						if (e.optDisplayTp !== void 0) {
																							if (typeof e.optDisplayTp != "boolean") return c.errors = [{
																								instancePath: t + "/optDisplayTp",
																								schemaPath: "#/properties/optDisplayTp/type",
																								keyword: "type",
																								params: { type: "boolean" },
																								message: "must be boolean"
																							}], !1;
																							d = !0;
																						} else d = !0;
																						if (d) {
																							if (e.optFloorDeath !== void 0) {
																								if (typeof e.optFloorDeath != "boolean") return c.errors = [{
																									instancePath: t + "/optFloorDeath",
																									schemaPath: "#/properties/optFloorDeath/type",
																									keyword: "type",
																									params: { type: "boolean" },
																									message: "must be boolean"
																								}], !1;
																								d = !0;
																							} else d = !0;
																							if (d) {
																								if (e.optFollowers !== void 0) {
																									if (typeof e.optFollowers != "boolean") return c.errors = [{
																										instancePath: t + "/optFollowers",
																										schemaPath: "#/properties/optFollowers/type",
																										keyword: "type",
																										params: { type: "boolean" },
																										message: "must be boolean"
																									}], !1;
																									d = !0;
																								} else d = !0;
																								if (d) {
																									if (e.optKeyItemsNumber !== void 0) {
																										if (typeof e.optKeyItemsNumber != "boolean") return c.errors = [{
																											instancePath: t + "/optKeyItemsNumber",
																											schemaPath: "#/properties/optKeyItemsNumber/type",
																											keyword: "type",
																											params: { type: "boolean" },
																											message: "must be boolean"
																										}], !1;
																										d = !0;
																									} else d = !0;
																									if (d) {
																										if (e.optSideView !== void 0) {
																											if (typeof e.optSideView != "boolean") return c.errors = [{
																												instancePath: t + "/optSideView",
																												schemaPath: "#/properties/optSideView/type",
																												keyword: "type",
																												params: { type: "boolean" },
																												message: "must be boolean"
																											}], !1;
																											d = !0;
																										} else d = !0;
																										if (d) {
																											if (e.optSlipDeath !== void 0) {
																												if (typeof e.optSlipDeath != "boolean") return c.errors = [{
																													instancePath: t + "/optSlipDeath",
																													schemaPath: "#/properties/optSlipDeath/type",
																													keyword: "type",
																													params: { type: "boolean" },
																													message: "must be boolean"
																												}], !1;
																												d = !0;
																											} else d = !0;
																											if (d) {
																												if (e.optTransparent !== void 0) {
																													if (typeof e.optTransparent != "boolean") return c.errors = [{
																														instancePath: t + "/optTransparent",
																														schemaPath: "#/properties/optTransparent/type",
																														keyword: "type",
																														params: { type: "boolean" },
																														message: "must be boolean"
																													}], !1;
																													d = !0;
																												} else d = !0;
																												if (d) {
																													if (e.optSplashScreen !== void 0) {
																														if (typeof e.optSplashScreen != "boolean") return c.errors = [{
																															instancePath: t + "/optSplashScreen",
																															schemaPath: "#/properties/optSplashScreen/type",
																															keyword: "type",
																															params: { type: "boolean" },
																															message: "must be boolean"
																														}], !1;
																														d = !0;
																													} else d = !0;
																													if (d) {
																														if (e.optDrawTitle !== void 0) {
																															if (typeof e.optDrawTitle != "boolean") return c.errors = [{
																																instancePath: t + "/optDrawTitle",
																																schemaPath: "#/properties/optDrawTitle/type",
																																keyword: "type",
																																params: { type: "boolean" },
																																message: "must be boolean"
																															}], !1;
																															d = !0;
																														} else d = !0;
																														if (d) {
																															if (e.optExtraExp !== void 0) {
																																if (typeof e.optExtraExp != "boolean") return c.errors = [{
																																	instancePath: t + "/optExtraExp",
																																	schemaPath: "#/properties/optExtraExp/type",
																																	keyword: "type",
																																	params: { type: "boolean" },
																																	message: "must be boolean"
																																}], !1;
																																d = !0;
																															} else d = !0;
																															if (d) {
																																if (e.optMessageSkip !== void 0) {
																																	if (typeof e.optMessageSkip != "boolean") return c.errors = [{
																																		instancePath: t + "/optMessageSkip",
																																		schemaPath: "#/properties/optMessageSkip/type",
																																		keyword: "type",
																																		params: { type: "boolean" },
																																		message: "must be boolean"
																																	}], !1;
																																	d = !0;
																																} else d = !0;
																																if (d) {
																																	if (e.startMapId !== void 0) {
																																		let n = e.startMapId;
																																		if (typeof n != "number" || n % 1 || isNaN(n) || !isFinite(n)) return c.errors = [{
																																			instancePath: t + "/startMapId",
																																			schemaPath: "#/properties/startMapId/type",
																																			keyword: "type",
																																			params: { type: "integer" },
																																			message: "must be integer"
																																		}], !1;
																																		if (typeof n == "number" && isFinite(n) && (n < 0 || isNaN(n))) return c.errors = [{
																																			instancePath: t + "/startMapId",
																																			schemaPath: "#/properties/startMapId/minimum",
																																			keyword: "minimum",
																																			params: {
																																				comparison: ">=",
																																				limit: 0
																																			},
																																			message: "must be >= 0"
																																		}], !1;
																																		d = !0;
																																	} else d = !0;
																																	if (d) {
																																		if (e.startX !== void 0) {
																																			let n = e.startX;
																																			if (typeof n != "number" || n % 1 || isNaN(n) || !isFinite(n)) return c.errors = [{
																																				instancePath: t + "/startX",
																																				schemaPath: "#/properties/startX/type",
																																				keyword: "type",
																																				params: { type: "integer" },
																																				message: "must be integer"
																																			}], !1;
																																			if (typeof n == "number" && isFinite(n) && (n < 0 || isNaN(n))) return c.errors = [{
																																				instancePath: t + "/startX",
																																				schemaPath: "#/properties/startX/minimum",
																																				keyword: "minimum",
																																				params: {
																																					comparison: ">=",
																																					limit: 0
																																				},
																																				message: "must be >= 0"
																																			}], !1;
																																			d = !0;
																																		} else d = !0;
																																		if (d) {
																																			if (e.startY !== void 0) {
																																				let n = e.startY;
																																				if (typeof n != "number" || n % 1 || isNaN(n) || !isFinite(n)) return c.errors = [{
																																					instancePath: t + "/startY",
																																					schemaPath: "#/properties/startY/type",
																																					keyword: "type",
																																					params: { type: "integer" },
																																					message: "must be integer"
																																				}], !1;
																																				if (typeof n == "number" && isFinite(n) && (n < 0 || isNaN(n))) return c.errors = [{
																																					instancePath: t + "/startY",
																																					schemaPath: "#/properties/startY/minimum",
																																					keyword: "minimum",
																																					params: {
																																						comparison: ">=",
																																						limit: 0
																																					},
																																					message: "must be >= 0"
																																				}], !1;
																																				d = !0;
																																			} else d = !0;
																																			if (d) {
																																				if (e.faceSize !== void 0) {
																																					let n = e.faceSize;
																																					if (typeof n != "number" || n % 1 || isNaN(n) || !isFinite(n)) return c.errors = [{
																																						instancePath: t + "/faceSize",
																																						schemaPath: "#/properties/faceSize/type",
																																						keyword: "type",
																																						params: { type: "integer" },
																																						message: "must be integer"
																																					}], !1;
																																					if (typeof n == "number" && isFinite(n) && (n < 0 || isNaN(n))) return c.errors = [{
																																						instancePath: t + "/faceSize",
																																						schemaPath: "#/properties/faceSize/minimum",
																																						keyword: "minimum",
																																						params: {
																																							comparison: ">=",
																																							limit: 0
																																						},
																																						message: "must be >= 0"
																																					}], !1;
																																					d = !0;
																																				} else d = !0;
																																				if (d) {
																																					if (e.tileSize !== void 0) {
																																						let n = e.tileSize;
																																						if (typeof n != "number" || n % 1 || isNaN(n) || !isFinite(n)) return c.errors = [{
																																							instancePath: t + "/tileSize",
																																							schemaPath: "#/properties/tileSize/type",
																																							keyword: "type",
																																							params: { type: "integer" },
																																							message: "must be integer"
																																						}], !1;
																																						if (typeof n == "number" && isFinite(n) && (n < 0 || isNaN(n))) return c.errors = [{
																																							instancePath: t + "/tileSize",
																																							schemaPath: "#/properties/tileSize/minimum",
																																							keyword: "minimum",
																																							params: {
																																								comparison: ">=",
																																								limit: 0
																																							},
																																							message: "must be >= 0"
																																						}], !1;
																																						d = !0;
																																					} else d = !0;
																																					if (d) {
																																						if (e.iconSize !== void 0) {
																																							let n = e.iconSize;
																																							if (typeof n != "number" || n % 1 || isNaN(n) || !isFinite(n)) return c.errors = [{
																																								instancePath: t + "/iconSize",
																																								schemaPath: "#/properties/iconSize/type",
																																								keyword: "type",
																																								params: { type: "integer" },
																																								message: "must be integer"
																																							}], !1;
																																							if (typeof n == "number" && isFinite(n) && (n < 0 || isNaN(n))) return c.errors = [{
																																								instancePath: t + "/iconSize",
																																								schemaPath: "#/properties/iconSize/minimum",
																																								keyword: "minimum",
																																								params: {
																																									comparison: ">=",
																																									limit: 0
																																								},
																																								message: "must be >= 0"
																																							}], !1;
																																							d = !0;
																																						} else d = !0;
																																						if (d) {
																																							if (e.battleSystem !== void 0) {
																																								let n = e.battleSystem;
																																								if (typeof n != "number" || n % 1 || isNaN(n) || !isFinite(n)) return c.errors = [{
																																									instancePath: t + "/battleSystem",
																																									schemaPath: "#/properties/battleSystem/type",
																																									keyword: "type",
																																									params: { type: "integer" },
																																									message: "must be integer"
																																								}], !1;
																																								if (typeof n == "number" && isFinite(n)) {
																																									if (n > 2 || isNaN(n)) return c.errors = [{
																																										instancePath: t + "/battleSystem",
																																										schemaPath: "#/properties/battleSystem/maximum",
																																										keyword: "maximum",
																																										params: {
																																											comparison: "<=",
																																											limit: 2
																																										},
																																										message: "must be <= 2"
																																									}], !1;
																																									if (n < 0 || isNaN(n)) return c.errors = [{
																																										instancePath: t + "/battleSystem",
																																										schemaPath: "#/properties/battleSystem/minimum",
																																										keyword: "minimum",
																																										params: {
																																											comparison: ">=",
																																											limit: 0
																																										},
																																										message: "must be >= 0"
																																									}], !1;
																																								}
																																								d = !0;
																																							} else d = !0;
																																							if (d) {
																																								if (e.elements !== void 0) {
																																									let n = e.elements;
																																									if (!Array.isArray(n)) return c.errors = [{
																																										instancePath: t + "/elements",
																																										schemaPath: "#/properties/elements/type",
																																										keyword: "type",
																																										params: { type: "array" },
																																										message: "must be array"
																																									}], !1;
																																									{
																																										let e = n.length;
																																										for (let r = 0; r < e; r++) if (typeof n[r] != "string") return c.errors = [{
																																											instancePath: t + "/elements/" + r,
																																											schemaPath: "#/properties/elements/items/type",
																																											keyword: "type",
																																											params: { type: "string" },
																																											message: "must be string"
																																										}], !1;
																																									}
																																									d = !0;
																																								} else d = !0;
																																								if (d) {
																																									if (e.weaponTypes !== void 0) {
																																										let n = e.weaponTypes;
																																										if (!Array.isArray(n)) return c.errors = [{
																																											instancePath: t + "/weaponTypes",
																																											schemaPath: "#/properties/weaponTypes/type",
																																											keyword: "type",
																																											params: { type: "array" },
																																											message: "must be array"
																																										}], !1;
																																										{
																																											let e = n.length;
																																											for (let r = 0; r < e; r++) if (typeof n[r] != "string") return c.errors = [{
																																												instancePath: t + "/weaponTypes/" + r,
																																												schemaPath: "#/properties/weaponTypes/items/type",
																																												keyword: "type",
																																												params: { type: "string" },
																																												message: "must be string"
																																											}], !1;
																																										}
																																										d = !0;
																																									} else d = !0;
																																									if (d) {
																																										if (e.armorTypes !== void 0) {
																																											let n = e.armorTypes;
																																											if (!Array.isArray(n)) return c.errors = [{
																																												instancePath: t + "/armorTypes",
																																												schemaPath: "#/properties/armorTypes/type",
																																												keyword: "type",
																																												params: { type: "array" },
																																												message: "must be array"
																																											}], !1;
																																											{
																																												let e = n.length;
																																												for (let r = 0; r < e; r++) if (typeof n[r] != "string") return c.errors = [{
																																													instancePath: t + "/armorTypes/" + r,
																																													schemaPath: "#/properties/armorTypes/items/type",
																																													keyword: "type",
																																													params: { type: "string" },
																																													message: "must be string"
																																												}], !1;
																																											}
																																											d = !0;
																																										} else d = !0;
																																										if (d) {
																																											if (e.equipTypes !== void 0) {
																																												let n = e.equipTypes;
																																												if (!Array.isArray(n)) return c.errors = [{
																																													instancePath: t + "/equipTypes",
																																													schemaPath: "#/properties/equipTypes/type",
																																													keyword: "type",
																																													params: { type: "array" },
																																													message: "must be array"
																																												}], !1;
																																												{
																																													let e = n.length;
																																													for (let r = 0; r < e; r++) if (typeof n[r] != "string") return c.errors = [{
																																														instancePath: t + "/equipTypes/" + r,
																																														schemaPath: "#/properties/equipTypes/items/type",
																																														keyword: "type",
																																														params: { type: "string" },
																																														message: "must be string"
																																													}], !1;
																																												}
																																												d = !0;
																																											} else d = !0;
																																											if (d) {
																																												if (e.skillTypes !== void 0) {
																																													let n = e.skillTypes;
																																													if (!Array.isArray(n)) return c.errors = [{
																																														instancePath: t + "/skillTypes",
																																														schemaPath: "#/properties/skillTypes/type",
																																														keyword: "type",
																																														params: { type: "array" },
																																														message: "must be array"
																																													}], !1;
																																													{
																																														let e = n.length;
																																														for (let r = 0; r < e; r++) if (typeof n[r] != "string") return c.errors = [{
																																															instancePath: t + "/skillTypes/" + r,
																																															schemaPath: "#/properties/skillTypes/items/type",
																																															keyword: "type",
																																															params: { type: "string" },
																																															message: "must be string"
																																														}], !1;
																																													}
																																													d = !0;
																																												} else d = !0;
																																												if (d) {
																																													if (e.switches !== void 0) {
																																														let n = e.switches;
																																														if (!Array.isArray(n)) return c.errors = [{
																																															instancePath: t + "/switches",
																																															schemaPath: "#/properties/switches/type",
																																															keyword: "type",
																																															params: { type: "array" },
																																															message: "must be array"
																																														}], !1;
																																														{
																																															let e = n.length;
																																															for (let r = 0; r < e; r++) if (typeof n[r] != "string") return c.errors = [{
																																																instancePath: t + "/switches/" + r,
																																																schemaPath: "#/properties/switches/items/type",
																																																keyword: "type",
																																																params: { type: "string" },
																																																message: "must be string"
																																															}], !1;
																																														}
																																														d = !0;
																																													} else d = !0;
																																													if (d) {
																																														if (e.variables !== void 0) {
																																															let n = e.variables;
																																															if (!Array.isArray(n)) return c.errors = [{
																																																instancePath: t + "/variables",
																																																schemaPath: "#/properties/variables/type",
																																																keyword: "type",
																																																params: { type: "array" },
																																																message: "must be array"
																																															}], !1;
																																															{
																																																let e = n.length;
																																																for (let r = 0; r < e; r++) if (typeof n[r] != "string") return c.errors = [{
																																																	instancePath: t + "/variables/" + r,
																																																	schemaPath: "#/properties/variables/items/type",
																																																	keyword: "type",
																																																	params: { type: "string" },
																																																	message: "must be string"
																																																}], !1;
																																															}
																																															d = !0;
																																														} else d = !0;
																																														if (d) {
																																															if (e.magicSkills !== void 0) {
																																																let n = e.magicSkills;
																																																if (!Array.isArray(n)) return c.errors = [{
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
																																																		if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return c.errors = [{
																																																			instancePath: t + "/magicSkills/" + r,
																																																			schemaPath: "#/properties/magicSkills/items/type",
																																																			keyword: "type",
																																																			params: { type: "integer" },
																																																			message: "must be integer"
																																																		}], !1;
																																																	}
																																																}
																																																d = !0;
																																															} else d = !0;
																																															if (d) {
																																																if (e.battleback1Name !== void 0) {
																																																	if (typeof e.battleback1Name != "string") return c.errors = [{
																																																		instancePath: t + "/battleback1Name",
																																																		schemaPath: "#/properties/battleback1Name/type",
																																																		keyword: "type",
																																																		params: { type: "string" },
																																																		message: "must be string"
																																																	}], !1;
																																																	d = !0;
																																																} else d = !0;
																																																if (d) {
																																																	if (e.battleback2Name !== void 0) {
																																																		if (typeof e.battleback2Name != "string") return c.errors = [{
																																																			instancePath: t + "/battleback2Name",
																																																			schemaPath: "#/properties/battleback2Name/type",
																																																			keyword: "type",
																																																			params: { type: "string" },
																																																			message: "must be string"
																																																		}], !1;
																																																		d = !0;
																																																	} else d = !0;
																																																	if (d) {
																																																		if (e.testTroopId !== void 0) {
																																																			let n = e.testTroopId;
																																																			if (typeof n != "number" || n % 1 || isNaN(n) || !isFinite(n)) return c.errors = [{
																																																				instancePath: t + "/testTroopId",
																																																				schemaPath: "#/properties/testTroopId/type",
																																																				keyword: "type",
																																																				params: { type: "integer" },
																																																				message: "must be integer"
																																																			}], !1;
																																																			if (typeof n == "number" && isFinite(n) && (n < 0 || isNaN(n))) return c.errors = [{
																																																				instancePath: t + "/testTroopId",
																																																				schemaPath: "#/properties/testTroopId/minimum",
																																																				keyword: "minimum",
																																																				params: {
																																																					comparison: ">=",
																																																					limit: 0
																																																				},
																																																				message: "must be >= 0"
																																																			}], !1;
																																																			d = !0;
																																																		} else d = !0;
																																																		if (d) {
																																																			if (e.partyMembers !== void 0) {
																																																				let n = e.partyMembers;
																																																				if (!Array.isArray(n)) return c.errors = [{
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
																																																						if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return c.errors = [{
																																																							instancePath: t + "/partyMembers/" + r,
																																																							schemaPath: "#/properties/partyMembers/items/type",
																																																							keyword: "type",
																																																							params: { type: "integer" },
																																																							message: "must be integer"
																																																						}], !1;
																																																					}
																																																				}
																																																				d = !0;
																																																			} else d = !0;
																																																			if (d) {
																																																				if (e.editMapId !== void 0) {
																																																					let n = e.editMapId;
																																																					if (typeof n != "number" || n % 1 || isNaN(n) || !isFinite(n)) return c.errors = [{
																																																						instancePath: t + "/editMapId",
																																																						schemaPath: "#/properties/editMapId/type",
																																																						keyword: "type",
																																																						params: { type: "integer" },
																																																						message: "must be integer"
																																																					}], !1;
																																																					if (typeof n == "number" && isFinite(n) && (n < 0 || isNaN(n))) return c.errors = [{
																																																						instancePath: t + "/editMapId",
																																																						schemaPath: "#/properties/editMapId/minimum",
																																																						keyword: "minimum",
																																																						params: {
																																																							comparison: ">=",
																																																							limit: 0
																																																						},
																																																						message: "must be >= 0"
																																																					}], !1;
																																																					d = !0;
																																																				} else d = !0;
																																																				if (d) {
																																																					if (e.battlerHue !== void 0) {
																																																						let n = e.battlerHue;
																																																						if (typeof n != "number" || n % 1 || isNaN(n) || !isFinite(n)) return c.errors = [{
																																																							instancePath: t + "/battlerHue",
																																																							schemaPath: "#/properties/battlerHue/type",
																																																							keyword: "type",
																																																							params: { type: "integer" },
																																																							message: "must be integer"
																																																						}], !1;
																																																						d = !0;
																																																					} else d = !0;
																																																					if (d) {
																																																						if (e.battlerName !== void 0) {
																																																							if (typeof e.battlerName != "string") return c.errors = [{
																																																								instancePath: t + "/battlerName",
																																																								schemaPath: "#/properties/battlerName/type",
																																																								keyword: "type",
																																																								params: { type: "string" },
																																																								message: "must be string"
																																																							}], !1;
																																																							d = !0;
																																																						} else d = !0;
																																																						if (d) {
																																																							if (e.title1Name !== void 0) {
																																																								if (typeof e.title1Name != "string") return c.errors = [{
																																																									instancePath: t + "/title1Name",
																																																									schemaPath: "#/properties/title1Name/type",
																																																									keyword: "type",
																																																									params: { type: "string" },
																																																									message: "must be string"
																																																								}], !1;
																																																								d = !0;
																																																							} else d = !0;
																																																							if (d) {
																																																								if (e.title2Name !== void 0) {
																																																									if (typeof e.title2Name != "string") return c.errors = [{
																																																										instancePath: t + "/title2Name",
																																																										schemaPath: "#/properties/title2Name/type",
																																																										keyword: "type",
																																																										params: { type: "string" },
																																																										message: "must be string"
																																																									}], !1;
																																																									d = !0;
																																																								} else d = !0;
																																																								if (d) {
																																																									if (e.versionId !== void 0) {
																																																										let n = e.versionId;
																																																										if (typeof n != "number" || n % 1 || isNaN(n) || !isFinite(n)) return c.errors = [{
																																																											instancePath: t + "/versionId",
																																																											schemaPath: "#/properties/versionId/type",
																																																											keyword: "type",
																																																											params: { type: "integer" },
																																																											message: "must be integer"
																																																										}], !1;
																																																										d = !0;
																																																									} else d = !0;
																																																									if (d) {
																																																										if (e.locale !== void 0) {
																																																											if (typeof e.locale != "string") return c.errors = [{
																																																												instancePath: t + "/locale",
																																																												schemaPath: "#/properties/locale/type",
																																																												keyword: "type",
																																																												params: { type: "string" },
																																																												message: "must be string"
																																																											}], !1;
																																																											d = !0;
																																																										} else d = !0;
																																																										if (d) {
																																																											if (e.windowTone !== void 0) {
																																																												let n = e.windowTone;
																																																												if (!Array.isArray(n)) return c.errors = [{
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
																																																														if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return c.errors = [{
																																																															instancePath: t + "/windowTone/" + r,
																																																															schemaPath: "#/properties/windowTone/items/type",
																																																															keyword: "type",
																																																															params: { type: "integer" },
																																																															message: "must be integer"
																																																														}], !1;
																																																														if (typeof e == "number" && isFinite(e)) {
																																																															if (e > 255 || isNaN(e)) return c.errors = [{
																																																																instancePath: t + "/windowTone/" + r,
																																																																schemaPath: "#/properties/windowTone/items/maximum",
																																																																keyword: "maximum",
																																																																params: {
																																																																	comparison: "<=",
																																																																	limit: 255
																																																																},
																																																																message: "must be <= 255"
																																																															}], !1;
																																																															if (e < 0 || isNaN(e)) return c.errors = [{
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
																																																												d = !0;
																																																											} else d = !0;
																																																											if (d) if (e.titleCommandWindow !== void 0) {
																																																												let n = e.titleCommandWindow;
																																																												if (!n || typeof n != "object" || Array.isArray(n)) return c.errors = [{
																																																													instancePath: t + "/titleCommandWindow",
																																																													schemaPath: "#/$defs/TitleCommandWindow/type",
																																																													keyword: "type",
																																																													params: { type: "object" },
																																																													message: "must be object"
																																																												}], !1;
																																																												{
																																																													let e;
																																																													if (n.background === void 0 && (e = "background") || n.offsetX === void 0 && (e = "offsetX") || n.offsetY === void 0 && (e = "offsetY")) return c.errors = [{
																																																														instancePath: t + "/titleCommandWindow",
																																																														schemaPath: "#/$defs/TitleCommandWindow/required",
																																																														keyword: "required",
																																																														params: { missingProperty: e },
																																																														message: "must have required property '" + e + "'"
																																																													}], !1;
																																																													for (let e in n) if (e !== "background" && e !== "offsetX" && e !== "offsetY") return c.errors = [{
																																																														instancePath: t + "/titleCommandWindow",
																																																														schemaPath: "#/$defs/TitleCommandWindow/additionalProperties",
																																																														keyword: "additionalProperties",
																																																														params: { additionalProperty: e },
																																																														message: "must NOT have additional properties"
																																																													}], !1;
																																																													if (n.background !== void 0) {
																																																														let e = n.background;
																																																														if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return c.errors = [{
																																																															instancePath: t + "/titleCommandWindow/background",
																																																															schemaPath: "#/$defs/TitleCommandWindow/properties/background/type",
																																																															keyword: "type",
																																																															params: { type: "integer" },
																																																															message: "must be integer"
																																																														}], !1;
																																																														var j = !0;
																																																													} else j = !0;
																																																													if (j) {
																																																														if (n.offsetX !== void 0) {
																																																															let e = n.offsetX;
																																																															if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return c.errors = [{
																																																																instancePath: t + "/titleCommandWindow/offsetX",
																																																																schemaPath: "#/$defs/TitleCommandWindow/properties/offsetX/type",
																																																																keyword: "type",
																																																																params: { type: "integer" },
																																																																message: "must be integer"
																																																															}], !1;
																																																															j = !0;
																																																														} else j = !0;
																																																														if (j) if (n.offsetY !== void 0) {
																																																															let e = n.offsetY;
																																																															if (typeof e != "number" || e % 1 || isNaN(e) || !isFinite(e)) return c.errors = [{
																																																																instancePath: t + "/titleCommandWindow/offsetY",
																																																																schemaPath: "#/$defs/TitleCommandWindow/properties/offsetY/type",
																																																																keyword: "type",
																																																																params: { type: "integer" },
																																																																message: "must be integer"
																																																															}], !1;
																																																															j = !0;
																																																														} else j = !0;
																																																													}
																																																												}
																																																												d = !0;
																																																											} else d = !0;
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
								}
							}
						}
					}
				}
			}
		}
		return c.errors = null, !0;
	}
}))()), i = r.default, a = (e) => (0, r.default)(e), o = e(t(((e, t) => {
	function n(e, { instancePath: t = "", parentData: r, parentDataProperty: i, rootData: a = e } = {}) {
		if (!e || typeof e != "object" || Array.isArray(e)) return n.errors = [{
			instancePath: t,
			schemaPath: "#/type",
			keyword: "type",
			params: { type: "object" },
			message: "must be object"
		}], !1;
		{
			let r;
			if (e.gameTitle === void 0 && (r = "gameTitle") || e.currencyUnit === void 0 && (r = "currencyUnit") || e.equipTypes === void 0 && (r = "equipTypes") || e.armorTypes === void 0 && (r = "armorTypes") || e.weaponTypes === void 0 && (r = "weaponTypes") || e.elements === void 0 && (r = "elements") || e.skillTypes === void 0 && (r = "skillTypes") || e.terms === void 0 && (r = "terms")) return n.errors = [{
				instancePath: t,
				schemaPath: "#/required",
				keyword: "required",
				params: { missingProperty: r },
				message: "must have required property '" + r + "'"
			}], !1;
			if (e.gameTitle !== void 0) {
				if (typeof e.gameTitle != "string") return n.errors = [{
					instancePath: t + "/gameTitle",
					schemaPath: "#/properties/gameTitle/type",
					keyword: "type",
					params: { type: "string" },
					message: "must be string"
				}], !1;
				var o = !0;
			} else o = !0;
			if (o) {
				if (e.currencyUnit !== void 0) {
					if (typeof e.currencyUnit != "string") return n.errors = [{
						instancePath: t + "/currencyUnit",
						schemaPath: "#/properties/currencyUnit/type",
						keyword: "type",
						params: { type: "string" },
						message: "must be string"
					}], !1;
					o = !0;
				} else o = !0;
				if (o) {
					if (e.equipTypes !== void 0) {
						let r = e.equipTypes;
						if (!Array.isArray(r)) return n.errors = [{
							instancePath: t + "/equipTypes",
							schemaPath: "#/properties/equipTypes/type",
							keyword: "type",
							params: { type: "array" },
							message: "must be array"
						}], !1;
						{
							let e = r.length;
							for (let i = 0; i < e; i++) if (typeof r[i] != "string") return n.errors = [{
								instancePath: t + "/equipTypes/" + i,
								schemaPath: "#/properties/equipTypes/items/type",
								keyword: "type",
								params: { type: "string" },
								message: "must be string"
							}], !1;
						}
						o = !0;
					} else o = !0;
					if (o) {
						if (e.armorTypes !== void 0) {
							let r = e.armorTypes;
							if (!Array.isArray(r)) return n.errors = [{
								instancePath: t + "/armorTypes",
								schemaPath: "#/properties/armorTypes/type",
								keyword: "type",
								params: { type: "array" },
								message: "must be array"
							}], !1;
							{
								let e = r.length;
								for (let i = 0; i < e; i++) if (typeof r[i] != "string") return n.errors = [{
									instancePath: t + "/armorTypes/" + i,
									schemaPath: "#/properties/armorTypes/items/type",
									keyword: "type",
									params: { type: "string" },
									message: "must be string"
								}], !1;
							}
							o = !0;
						} else o = !0;
						if (o) {
							if (e.weaponTypes !== void 0) {
								let r = e.weaponTypes;
								if (!Array.isArray(r)) return n.errors = [{
									instancePath: t + "/weaponTypes",
									schemaPath: "#/properties/weaponTypes/type",
									keyword: "type",
									params: { type: "array" },
									message: "must be array"
								}], !1;
								{
									let e = r.length;
									for (let i = 0; i < e; i++) if (typeof r[i] != "string") return n.errors = [{
										instancePath: t + "/weaponTypes/" + i,
										schemaPath: "#/properties/weaponTypes/items/type",
										keyword: "type",
										params: { type: "string" },
										message: "must be string"
									}], !1;
								}
								o = !0;
							} else o = !0;
							if (o) {
								if (e.elements !== void 0) {
									let r = e.elements;
									if (!Array.isArray(r)) return n.errors = [{
										instancePath: t + "/elements",
										schemaPath: "#/properties/elements/type",
										keyword: "type",
										params: { type: "array" },
										message: "must be array"
									}], !1;
									{
										let e = r.length;
										for (let i = 0; i < e; i++) if (typeof r[i] != "string") return n.errors = [{
											instancePath: t + "/elements/" + i,
											schemaPath: "#/properties/elements/items/type",
											keyword: "type",
											params: { type: "string" },
											message: "must be string"
										}], !1;
									}
									o = !0;
								} else o = !0;
								if (o) {
									if (e.skillTypes !== void 0) {
										let r = e.skillTypes;
										if (!Array.isArray(r)) return n.errors = [{
											instancePath: t + "/skillTypes",
											schemaPath: "#/properties/skillTypes/type",
											keyword: "type",
											params: { type: "array" },
											message: "must be array"
										}], !1;
										{
											let e = r.length;
											for (let i = 0; i < e; i++) if (typeof r[i] != "string") return n.errors = [{
												instancePath: t + "/skillTypes/" + i,
												schemaPath: "#/properties/skillTypes/items/type",
												keyword: "type",
												params: { type: "string" },
												message: "must be string"
											}], !1;
										}
										o = !0;
									} else o = !0;
									if (o) if (e.terms !== void 0) {
										let r = e.terms;
										if (!r || typeof r != "object" || Array.isArray(r)) return n.errors = [{
											instancePath: t + "/terms",
											schemaPath: "#/properties/terms/type",
											keyword: "type",
											params: { type: "object" },
											message: "must be object"
										}], !1;
										{
											let e;
											if (r.basic === void 0 && (e = "basic") || r.commands === void 0 && (e = "commands") || r.messages === void 0 && (e = "messages") || r.params === void 0 && (e = "params")) return n.errors = [{
												instancePath: t + "/terms",
												schemaPath: "#/properties/terms/required",
												keyword: "required",
												params: { missingProperty: e },
												message: "must have required property '" + e + "'"
											}], !1;
											if (r.basic !== void 0) {
												let e = r.basic;
												if (!e || typeof e != "object" || Array.isArray(e)) return n.errors = [{
													instancePath: t + "/terms/basic",
													schemaPath: "#/properties/terms/properties/basic/type",
													keyword: "type",
													params: { type: "object" },
													message: "must be object"
												}], !1;
												{
													let r;
													if (e.level === void 0 && (r = "level") || e.hp === void 0 && (r = "hp") || e.mp === void 0 && (r = "mp") || e.tp === void 0 && (r = "tp") || e.levelA === void 0 && (r = "levelA") || e.hpA === void 0 && (r = "hpA") || e.mpA === void 0 && (r = "mpA") || e.tpA === void 0 && (r = "tpA") || e.experience === void 0 && (r = "experience") || e.exp === void 0 && (r = "exp")) return n.errors = [{
														instancePath: t + "/terms/basic",
														schemaPath: "#/properties/terms/properties/basic/required",
														keyword: "required",
														params: { missingProperty: r },
														message: "must have required property '" + r + "'"
													}], !1;
													if (e.level !== void 0) {
														if (typeof e.level != "string") return n.errors = [{
															instancePath: t + "/terms/basic/level",
															schemaPath: "#/properties/terms/properties/basic/properties/level/type",
															keyword: "type",
															params: { type: "string" },
															message: "must be string"
														}], !1;
														var s = !0;
													} else s = !0;
													if (s) {
														if (e.hp !== void 0) {
															if (typeof e.hp != "string") return n.errors = [{
																instancePath: t + "/terms/basic/hp",
																schemaPath: "#/properties/terms/properties/basic/properties/hp/type",
																keyword: "type",
																params: { type: "string" },
																message: "must be string"
															}], !1;
															s = !0;
														} else s = !0;
														if (s) {
															if (e.mp !== void 0) {
																if (typeof e.mp != "string") return n.errors = [{
																	instancePath: t + "/terms/basic/mp",
																	schemaPath: "#/properties/terms/properties/basic/properties/mp/type",
																	keyword: "type",
																	params: { type: "string" },
																	message: "must be string"
																}], !1;
																s = !0;
															} else s = !0;
															if (s) {
																if (e.tp !== void 0) {
																	if (typeof e.tp != "string") return n.errors = [{
																		instancePath: t + "/terms/basic/tp",
																		schemaPath: "#/properties/terms/properties/basic/properties/tp/type",
																		keyword: "type",
																		params: { type: "string" },
																		message: "must be string"
																	}], !1;
																	s = !0;
																} else s = !0;
																if (s) {
																	if (e.levelA !== void 0) {
																		if (typeof e.levelA != "string") return n.errors = [{
																			instancePath: t + "/terms/basic/levelA",
																			schemaPath: "#/properties/terms/properties/basic/properties/levelA/type",
																			keyword: "type",
																			params: { type: "string" },
																			message: "must be string"
																		}], !1;
																		s = !0;
																	} else s = !0;
																	if (s) {
																		if (e.hpA !== void 0) {
																			if (typeof e.hpA != "string") return n.errors = [{
																				instancePath: t + "/terms/basic/hpA",
																				schemaPath: "#/properties/terms/properties/basic/properties/hpA/type",
																				keyword: "type",
																				params: { type: "string" },
																				message: "must be string"
																			}], !1;
																			s = !0;
																		} else s = !0;
																		if (s) {
																			if (e.mpA !== void 0) {
																				if (typeof e.mpA != "string") return n.errors = [{
																					instancePath: t + "/terms/basic/mpA",
																					schemaPath: "#/properties/terms/properties/basic/properties/mpA/type",
																					keyword: "type",
																					params: { type: "string" },
																					message: "must be string"
																				}], !1;
																				s = !0;
																			} else s = !0;
																			if (s) {
																				if (e.tpA !== void 0) {
																					if (typeof e.tpA != "string") return n.errors = [{
																						instancePath: t + "/terms/basic/tpA",
																						schemaPath: "#/properties/terms/properties/basic/properties/tpA/type",
																						keyword: "type",
																						params: { type: "string" },
																						message: "must be string"
																					}], !1;
																					s = !0;
																				} else s = !0;
																				if (s) {
																					if (e.experience !== void 0) {
																						if (typeof e.experience != "string") return n.errors = [{
																							instancePath: t + "/terms/basic/experience",
																							schemaPath: "#/properties/terms/properties/basic/properties/experience/type",
																							keyword: "type",
																							params: { type: "string" },
																							message: "must be string"
																						}], !1;
																						s = !0;
																					} else s = !0;
																					if (s) if (e.exp !== void 0) {
																						if (typeof e.exp != "string") return n.errors = [{
																							instancePath: t + "/terms/basic/exp",
																							schemaPath: "#/properties/terms/properties/basic/properties/exp/type",
																							keyword: "type",
																							params: { type: "string" },
																							message: "must be string"
																						}], !1;
																						s = !0;
																					} else s = !0;
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
												var c = !0;
											} else c = !0;
											if (c) {
												if (r.commands !== void 0) {
													let e = r.commands;
													if (!e || typeof e != "object" || Array.isArray(e)) return n.errors = [{
														instancePath: t + "/terms/commands",
														schemaPath: "#/properties/terms/properties/commands/type",
														keyword: "type",
														params: { type: "object" },
														message: "must be object"
													}], !1;
													{
														let r;
														if (e.fight === void 0 && (r = "fight") || e.escape === void 0 && (r = "escape") || e.attack === void 0 && (r = "attack") || e.guard === void 0 && (r = "guard") || e.item === void 0 && (r = "item") || e.skill === void 0 && (r = "skill") || e.equip === void 0 && (r = "equip") || e.status === void 0 && (r = "status") || e.formation === void 0 && (r = "formation") || e.save === void 0 && (r = "save") || e.gameEnd === void 0 && (r = "gameEnd") || e.options === void 0 && (r = "options") || e.weapon === void 0 && (r = "weapon") || e.armor === void 0 && (r = "armor") || e.cancel === void 0 && (r = "cancel") || e.clear === void 0 && (r = "clear") || e.continueGame === void 0 && (r = "continueGame") || e.toTitle === void 0 && (r = "toTitle") || e.sell === void 0 && (r = "sell") || e.keyItem === void 0 && (r = "keyItem") || e.equip2 === void 0 && (r = "equip2") || e.optimize === void 0 && (r = "optimize") || e.newGame === void 0 && (r = "newGame") || e.buy === void 0 && (r = "buy")) return n.errors = [{
															instancePath: t + "/terms/commands",
															schemaPath: "#/properties/terms/properties/commands/required",
															keyword: "required",
															params: { missingProperty: r },
															message: "must have required property '" + r + "'"
														}], !1;
														if (e.fight !== void 0) {
															if (typeof e.fight != "string") return n.errors = [{
																instancePath: t + "/terms/commands/fight",
																schemaPath: "#/properties/terms/properties/commands/properties/fight/type",
																keyword: "type",
																params: { type: "string" },
																message: "must be string"
															}], !1;
															var l = !0;
														} else l = !0;
														if (l) {
															if (e.escape !== void 0) {
																if (typeof e.escape != "string") return n.errors = [{
																	instancePath: t + "/terms/commands/escape",
																	schemaPath: "#/properties/terms/properties/commands/properties/escape/type",
																	keyword: "type",
																	params: { type: "string" },
																	message: "must be string"
																}], !1;
																l = !0;
															} else l = !0;
															if (l) {
																if (e.attack !== void 0) {
																	if (typeof e.attack != "string") return n.errors = [{
																		instancePath: t + "/terms/commands/attack",
																		schemaPath: "#/properties/terms/properties/commands/properties/attack/type",
																		keyword: "type",
																		params: { type: "string" },
																		message: "must be string"
																	}], !1;
																	l = !0;
																} else l = !0;
																if (l) {
																	if (e.guard !== void 0) {
																		if (typeof e.guard != "string") return n.errors = [{
																			instancePath: t + "/terms/commands/guard",
																			schemaPath: "#/properties/terms/properties/commands/properties/guard/type",
																			keyword: "type",
																			params: { type: "string" },
																			message: "must be string"
																		}], !1;
																		l = !0;
																	} else l = !0;
																	if (l) {
																		if (e.item !== void 0) {
																			if (typeof e.item != "string") return n.errors = [{
																				instancePath: t + "/terms/commands/item",
																				schemaPath: "#/properties/terms/properties/commands/properties/item/type",
																				keyword: "type",
																				params: { type: "string" },
																				message: "must be string"
																			}], !1;
																			l = !0;
																		} else l = !0;
																		if (l) {
																			if (e.skill !== void 0) {
																				if (typeof e.skill != "string") return n.errors = [{
																					instancePath: t + "/terms/commands/skill",
																					schemaPath: "#/properties/terms/properties/commands/properties/skill/type",
																					keyword: "type",
																					params: { type: "string" },
																					message: "must be string"
																				}], !1;
																				l = !0;
																			} else l = !0;
																			if (l) {
																				if (e.equip !== void 0) {
																					if (typeof e.equip != "string") return n.errors = [{
																						instancePath: t + "/terms/commands/equip",
																						schemaPath: "#/properties/terms/properties/commands/properties/equip/type",
																						keyword: "type",
																						params: { type: "string" },
																						message: "must be string"
																					}], !1;
																					l = !0;
																				} else l = !0;
																				if (l) {
																					if (e.status !== void 0) {
																						if (typeof e.status != "string") return n.errors = [{
																							instancePath: t + "/terms/commands/status",
																							schemaPath: "#/properties/terms/properties/commands/properties/status/type",
																							keyword: "type",
																							params: { type: "string" },
																							message: "must be string"
																						}], !1;
																						l = !0;
																					} else l = !0;
																					if (l) {
																						if (e.formation !== void 0) {
																							if (typeof e.formation != "string") return n.errors = [{
																								instancePath: t + "/terms/commands/formation",
																								schemaPath: "#/properties/terms/properties/commands/properties/formation/type",
																								keyword: "type",
																								params: { type: "string" },
																								message: "must be string"
																							}], !1;
																							l = !0;
																						} else l = !0;
																						if (l) {
																							if (e.save !== void 0) {
																								if (typeof e.save != "string") return n.errors = [{
																									instancePath: t + "/terms/commands/save",
																									schemaPath: "#/properties/terms/properties/commands/properties/save/type",
																									keyword: "type",
																									params: { type: "string" },
																									message: "must be string"
																								}], !1;
																								l = !0;
																							} else l = !0;
																							if (l) {
																								if (e.gameEnd !== void 0) {
																									if (typeof e.gameEnd != "string") return n.errors = [{
																										instancePath: t + "/terms/commands/gameEnd",
																										schemaPath: "#/properties/terms/properties/commands/properties/gameEnd/type",
																										keyword: "type",
																										params: { type: "string" },
																										message: "must be string"
																									}], !1;
																									l = !0;
																								} else l = !0;
																								if (l) {
																									if (e.options !== void 0) {
																										if (typeof e.options != "string") return n.errors = [{
																											instancePath: t + "/terms/commands/options",
																											schemaPath: "#/properties/terms/properties/commands/properties/options/type",
																											keyword: "type",
																											params: { type: "string" },
																											message: "must be string"
																										}], !1;
																										l = !0;
																									} else l = !0;
																									if (l) {
																										if (e.weapon !== void 0) {
																											if (typeof e.weapon != "string") return n.errors = [{
																												instancePath: t + "/terms/commands/weapon",
																												schemaPath: "#/properties/terms/properties/commands/properties/weapon/type",
																												keyword: "type",
																												params: { type: "string" },
																												message: "must be string"
																											}], !1;
																											l = !0;
																										} else l = !0;
																										if (l) {
																											if (e.armor !== void 0) {
																												if (typeof e.armor != "string") return n.errors = [{
																													instancePath: t + "/terms/commands/armor",
																													schemaPath: "#/properties/terms/properties/commands/properties/armor/type",
																													keyword: "type",
																													params: { type: "string" },
																													message: "must be string"
																												}], !1;
																												l = !0;
																											} else l = !0;
																											if (l) {
																												if (e.cancel !== void 0) {
																													if (typeof e.cancel != "string") return n.errors = [{
																														instancePath: t + "/terms/commands/cancel",
																														schemaPath: "#/properties/terms/properties/commands/properties/cancel/type",
																														keyword: "type",
																														params: { type: "string" },
																														message: "must be string"
																													}], !1;
																													l = !0;
																												} else l = !0;
																												if (l) {
																													if (e.clear !== void 0) {
																														if (typeof e.clear != "string") return n.errors = [{
																															instancePath: t + "/terms/commands/clear",
																															schemaPath: "#/properties/terms/properties/commands/properties/clear/type",
																															keyword: "type",
																															params: { type: "string" },
																															message: "must be string"
																														}], !1;
																														l = !0;
																													} else l = !0;
																													if (l) {
																														if (e.continueGame !== void 0) {
																															if (typeof e.continueGame != "string") return n.errors = [{
																																instancePath: t + "/terms/commands/continueGame",
																																schemaPath: "#/properties/terms/properties/commands/properties/continueGame/type",
																																keyword: "type",
																																params: { type: "string" },
																																message: "must be string"
																															}], !1;
																															l = !0;
																														} else l = !0;
																														if (l) {
																															if (e.toTitle !== void 0) {
																																if (typeof e.toTitle != "string") return n.errors = [{
																																	instancePath: t + "/terms/commands/toTitle",
																																	schemaPath: "#/properties/terms/properties/commands/properties/toTitle/type",
																																	keyword: "type",
																																	params: { type: "string" },
																																	message: "must be string"
																																}], !1;
																																l = !0;
																															} else l = !0;
																															if (l) {
																																if (e.sell !== void 0) {
																																	if (typeof e.sell != "string") return n.errors = [{
																																		instancePath: t + "/terms/commands/sell",
																																		schemaPath: "#/properties/terms/properties/commands/properties/sell/type",
																																		keyword: "type",
																																		params: { type: "string" },
																																		message: "must be string"
																																	}], !1;
																																	l = !0;
																																} else l = !0;
																																if (l) {
																																	if (e.keyItem !== void 0) {
																																		if (typeof e.keyItem != "string") return n.errors = [{
																																			instancePath: t + "/terms/commands/keyItem",
																																			schemaPath: "#/properties/terms/properties/commands/properties/keyItem/type",
																																			keyword: "type",
																																			params: { type: "string" },
																																			message: "must be string"
																																		}], !1;
																																		l = !0;
																																	} else l = !0;
																																	if (l) {
																																		if (e.equip2 !== void 0) {
																																			if (typeof e.equip2 != "string") return n.errors = [{
																																				instancePath: t + "/terms/commands/equip2",
																																				schemaPath: "#/properties/terms/properties/commands/properties/equip2/type",
																																				keyword: "type",
																																				params: { type: "string" },
																																				message: "must be string"
																																			}], !1;
																																			l = !0;
																																		} else l = !0;
																																		if (l) {
																																			if (e.optimize !== void 0) {
																																				if (typeof e.optimize != "string") return n.errors = [{
																																					instancePath: t + "/terms/commands/optimize",
																																					schemaPath: "#/properties/terms/properties/commands/properties/optimize/type",
																																					keyword: "type",
																																					params: { type: "string" },
																																					message: "must be string"
																																				}], !1;
																																				l = !0;
																																			} else l = !0;
																																			if (l) {
																																				if (e.newGame !== void 0) {
																																					if (typeof e.newGame != "string") return n.errors = [{
																																						instancePath: t + "/terms/commands/newGame",
																																						schemaPath: "#/properties/terms/properties/commands/properties/newGame/type",
																																						keyword: "type",
																																						params: { type: "string" },
																																						message: "must be string"
																																					}], !1;
																																					l = !0;
																																				} else l = !0;
																																				if (l) if (e.buy !== void 0) {
																																					if (typeof e.buy != "string") return n.errors = [{
																																						instancePath: t + "/terms/commands/buy",
																																						schemaPath: "#/properties/terms/properties/commands/properties/buy/type",
																																						keyword: "type",
																																						params: { type: "string" },
																																						message: "must be string"
																																					}], !1;
																																					l = !0;
																																				} else l = !0;
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
													c = !0;
												} else c = !0;
												if (c) {
													if (r.messages !== void 0) {
														let e = r.messages;
														if (!e || typeof e != "object" || Array.isArray(e)) return n.errors = [{
															instancePath: t + "/terms/messages",
															schemaPath: "#/properties/terms/properties/messages/type",
															keyword: "type",
															params: { type: "object" },
															message: "must be object"
														}], !1;
														{
															let r;
															if (e.actorDamage === void 0 && (r = "actorDamage") || e.actorGain === void 0 && (r = "actorGain") || e.actorLoss === void 0 && (r = "actorLoss") || e.actorDrain === void 0 && (r = "actorDrain") || e.enemyDamage === void 0 && (r = "enemyDamage") || e.enemyRecovery === void 0 && (r = "enemyRecovery") || e.enemyGain === void 0 && (r = "enemyGain") || e.enemyLoss === void 0 && (r = "enemyLoss") || e.enemyDrain === void 0 && (r = "enemyDrain") || e.touchUI === void 0 && (r = "touchUI") || e.autosave === void 0 && (r = "autosave") || e.alwaysDash === void 0 && (r = "alwaysDash") || e.commandRemember === void 0 && (r = "commandRemember") || e.bgmVolume === void 0 && (r = "bgmVolume") || e.bgsVolume === void 0 && (r = "bgsVolume") || e.meVolume === void 0 && (r = "meVolume") || e.seVolume === void 0 && (r = "seVolume") || e.possession === void 0 && (r = "possession") || e.expTotal === void 0 && (r = "expTotal") || e.expNext === void 0 && (r = "expNext") || e.saveMessage === void 0 && (r = "saveMessage") || e.loadMessage === void 0 && (r = "loadMessage") || e.file === void 0 && (r = "file") || e.partyName === void 0 && (r = "partyName") || e.emerge === void 0 && (r = "emerge") || e.preemptive === void 0 && (r = "preemptive") || e.surprise === void 0 && (r = "surprise") || e.escapeStart === void 0 && (r = "escapeStart") || e.escapeFailure === void 0 && (r = "escapeFailure") || e.victory === void 0 && (r = "victory") || e.defeat === void 0 && (r = "defeat") || e.obtainExp === void 0 && (r = "obtainExp") || e.obtainGold === void 0 && (r = "obtainGold") || e.obtainItem === void 0 && (r = "obtainItem") || e.obtainSkill === void 0 && (r = "obtainSkill") || e.levelUp === void 0 && (r = "levelUp") || e.useItem === void 0 && (r = "useItem") || e.criticalToEnemy === void 0 && (r = "criticalToEnemy") || e.criticalToActor === void 0 && (r = "criticalToActor") || e.actorRecovery === void 0 && (r = "actorRecovery") || e.actorNoDamage === void 0 && (r = "actorNoDamage") || e.actorNoHit === void 0 && (r = "actorNoHit") || e.enemyNoDamage === void 0 && (r = "enemyNoDamage") || e.enemyNoHit === void 0 && (r = "enemyNoHit") || e.evasion === void 0 && (r = "evasion") || e.magicEvasion === void 0 && (r = "magicEvasion") || e.magicReflection === void 0 && (r = "magicReflection") || e.counterAttack === void 0 && (r = "counterAttack") || e.substitute === void 0 && (r = "substitute") || e.buffAdd === void 0 && (r = "buffAdd") || e.debuffAdd === void 0 && (r = "debuffAdd") || e.buffRemove === void 0 && (r = "buffRemove") || e.actionFailure === void 0 && (r = "actionFailure")) return n.errors = [{
																instancePath: t + "/terms/messages",
																schemaPath: "#/properties/terms/properties/messages/required",
																keyword: "required",
																params: { missingProperty: r },
																message: "must have required property '" + r + "'"
															}], !1;
															if (e.hpRecover !== void 0) {
																if (typeof e.hpRecover != "string") return n.errors = [{
																	instancePath: t + "/terms/messages/hpRecover",
																	schemaPath: "#/properties/terms/properties/messages/properties/hpRecover/type",
																	keyword: "type",
																	params: { type: "string" },
																	message: "must be string"
																}], !1;
																var u = !0;
															} else u = !0;
															if (u) {
																if (e.mpRecover !== void 0) {
																	if (typeof e.mpRecover != "string") return n.errors = [{
																		instancePath: t + "/terms/messages/mpRecover",
																		schemaPath: "#/properties/terms/properties/messages/properties/mpRecover/type",
																		keyword: "type",
																		params: { type: "string" },
																		message: "must be string"
																	}], !1;
																	u = !0;
																} else u = !0;
																if (u) {
																	if (e.tpRecover !== void 0) {
																		if (typeof e.tpRecover != "string") return n.errors = [{
																			instancePath: t + "/terms/messages/tpRecover",
																			schemaPath: "#/properties/terms/properties/messages/properties/tpRecover/type",
																			keyword: "type",
																			params: { type: "string" },
																			message: "must be string"
																		}], !1;
																		u = !0;
																	} else u = !0;
																	if (u) {
																		if (e.actorDamage !== void 0) {
																			if (typeof e.actorDamage != "string") return n.errors = [{
																				instancePath: t + "/terms/messages/actorDamage",
																				schemaPath: "#/properties/terms/properties/messages/properties/actorDamage/type",
																				keyword: "type",
																				params: { type: "string" },
																				message: "must be string"
																			}], !1;
																			u = !0;
																		} else u = !0;
																		if (u) {
																			if (e.actorRecover !== void 0) {
																				if (typeof e.actorRecover != "string") return n.errors = [{
																					instancePath: t + "/terms/messages/actorRecover",
																					schemaPath: "#/properties/terms/properties/messages/properties/actorRecover/type",
																					keyword: "type",
																					params: { type: "string" },
																					message: "must be string"
																				}], !1;
																				u = !0;
																			} else u = !0;
																			if (u) {
																				if (e.actorGain !== void 0) {
																					if (typeof e.actorGain != "string") return n.errors = [{
																						instancePath: t + "/terms/messages/actorGain",
																						schemaPath: "#/properties/terms/properties/messages/properties/actorGain/type",
																						keyword: "type",
																						params: { type: "string" },
																						message: "must be string"
																					}], !1;
																					u = !0;
																				} else u = !0;
																				if (u) {
																					if (e.actorLoss !== void 0) {
																						if (typeof e.actorLoss != "string") return n.errors = [{
																							instancePath: t + "/terms/messages/actorLoss",
																							schemaPath: "#/properties/terms/properties/messages/properties/actorLoss/type",
																							keyword: "type",
																							params: { type: "string" },
																							message: "must be string"
																						}], !1;
																						u = !0;
																					} else u = !0;
																					if (u) {
																						if (e.actorDrain !== void 0) {
																							if (typeof e.actorDrain != "string") return n.errors = [{
																								instancePath: t + "/terms/messages/actorDrain",
																								schemaPath: "#/properties/terms/properties/messages/properties/actorDrain/type",
																								keyword: "type",
																								params: { type: "string" },
																								message: "must be string"
																							}], !1;
																							u = !0;
																						} else u = !0;
																						if (u) {
																							if (e.enemyDamage !== void 0) {
																								if (typeof e.enemyDamage != "string") return n.errors = [{
																									instancePath: t + "/terms/messages/enemyDamage",
																									schemaPath: "#/properties/terms/properties/messages/properties/enemyDamage/type",
																									keyword: "type",
																									params: { type: "string" },
																									message: "must be string"
																								}], !1;
																								u = !0;
																							} else u = !0;
																							if (u) {
																								if (e.enemyRecover !== void 0) {
																									if (typeof e.enemyRecover != "string") return n.errors = [{
																										instancePath: t + "/terms/messages/enemyRecover",
																										schemaPath: "#/properties/terms/properties/messages/properties/enemyRecover/type",
																										keyword: "type",
																										params: { type: "string" },
																										message: "must be string"
																									}], !1;
																									u = !0;
																								} else u = !0;
																								if (u) {
																									if (e.enemyGain !== void 0) {
																										if (typeof e.enemyGain != "string") return n.errors = [{
																											instancePath: t + "/terms/messages/enemyGain",
																											schemaPath: "#/properties/terms/properties/messages/properties/enemyGain/type",
																											keyword: "type",
																											params: { type: "string" },
																											message: "must be string"
																										}], !1;
																										u = !0;
																									} else u = !0;
																									if (u) {
																										if (e.enemyLoss !== void 0) {
																											if (typeof e.enemyLoss != "string") return n.errors = [{
																												instancePath: t + "/terms/messages/enemyLoss",
																												schemaPath: "#/properties/terms/properties/messages/properties/enemyLoss/type",
																												keyword: "type",
																												params: { type: "string" },
																												message: "must be string"
																											}], !1;
																											u = !0;
																										} else u = !0;
																										if (u) {
																											if (e.enemyDrain !== void 0) {
																												if (typeof e.enemyDrain != "string") return n.errors = [{
																													instancePath: t + "/terms/messages/enemyDrain",
																													schemaPath: "#/properties/terms/properties/messages/properties/enemyDrain/type",
																													keyword: "type",
																													params: { type: "string" },
																													message: "must be string"
																												}], !1;
																												u = !0;
																											} else u = !0;
																											if (u) {
																												if (e.critical !== void 0) {
																													if (typeof e.critical != "string") return n.errors = [{
																														instancePath: t + "/terms/messages/critical",
																														schemaPath: "#/properties/terms/properties/messages/properties/critical/type",
																														keyword: "type",
																														params: { type: "string" },
																														message: "must be string"
																													}], !1;
																													u = !0;
																												} else u = !0;
																												if (u) {
																													if (e.touchUI !== void 0) {
																														if (typeof e.touchUI != "string") return n.errors = [{
																															instancePath: t + "/terms/messages/touchUI",
																															schemaPath: "#/properties/terms/properties/messages/properties/touchUI/type",
																															keyword: "type",
																															params: { type: "string" },
																															message: "must be string"
																														}], !1;
																														u = !0;
																													} else u = !0;
																													if (u) {
																														if (e.autosave !== void 0) {
																															if (typeof e.autosave != "string") return n.errors = [{
																																instancePath: t + "/terms/messages/autosave",
																																schemaPath: "#/properties/terms/properties/messages/properties/autosave/type",
																																keyword: "type",
																																params: { type: "string" },
																																message: "must be string"
																															}], !1;
																															u = !0;
																														} else u = !0;
																														if (u) {
																															if (e.alwaysDash !== void 0) {
																																if (typeof e.alwaysDash != "string") return n.errors = [{
																																	instancePath: t + "/terms/messages/alwaysDash",
																																	schemaPath: "#/properties/terms/properties/messages/properties/alwaysDash/type",
																																	keyword: "type",
																																	params: { type: "string" },
																																	message: "must be string"
																																}], !1;
																																u = !0;
																															} else u = !0;
																															if (u) {
																																if (e.commandRemember !== void 0) {
																																	if (typeof e.commandRemember != "string") return n.errors = [{
																																		instancePath: t + "/terms/messages/commandRemember",
																																		schemaPath: "#/properties/terms/properties/messages/properties/commandRemember/type",
																																		keyword: "type",
																																		params: { type: "string" },
																																		message: "must be string"
																																	}], !1;
																																	u = !0;
																																} else u = !0;
																																if (u) {
																																	if (e.bgmVolume !== void 0) {
																																		if (typeof e.bgmVolume != "string") return n.errors = [{
																																			instancePath: t + "/terms/messages/bgmVolume",
																																			schemaPath: "#/properties/terms/properties/messages/properties/bgmVolume/type",
																																			keyword: "type",
																																			params: { type: "string" },
																																			message: "must be string"
																																		}], !1;
																																		u = !0;
																																	} else u = !0;
																																	if (u) {
																																		if (e.bgsVolume !== void 0) {
																																			if (typeof e.bgsVolume != "string") return n.errors = [{
																																				instancePath: t + "/terms/messages/bgsVolume",
																																				schemaPath: "#/properties/terms/properties/messages/properties/bgsVolume/type",
																																				keyword: "type",
																																				params: { type: "string" },
																																				message: "must be string"
																																			}], !1;
																																			u = !0;
																																		} else u = !0;
																																		if (u) {
																																			if (e.meVolume !== void 0) {
																																				if (typeof e.meVolume != "string") return n.errors = [{
																																					instancePath: t + "/terms/messages/meVolume",
																																					schemaPath: "#/properties/terms/properties/messages/properties/meVolume/type",
																																					keyword: "type",
																																					params: { type: "string" },
																																					message: "must be string"
																																				}], !1;
																																				u = !0;
																																			} else u = !0;
																																			if (u) {
																																				if (e.seVolume !== void 0) {
																																					if (typeof e.seVolume != "string") return n.errors = [{
																																						instancePath: t + "/terms/messages/seVolume",
																																						schemaPath: "#/properties/terms/properties/messages/properties/seVolume/type",
																																						keyword: "type",
																																						params: { type: "string" },
																																						message: "must be string"
																																					}], !1;
																																					u = !0;
																																				} else u = !0;
																																				if (u) {
																																					if (e.possession !== void 0) {
																																						if (typeof e.possession != "string") return n.errors = [{
																																							instancePath: t + "/terms/messages/possession",
																																							schemaPath: "#/properties/terms/properties/messages/properties/possession/type",
																																							keyword: "type",
																																							params: { type: "string" },
																																							message: "must be string"
																																						}], !1;
																																						u = !0;
																																					} else u = !0;
																																					if (u) {
																																						if (e.expTotal !== void 0) {
																																							if (typeof e.expTotal != "string") return n.errors = [{
																																								instancePath: t + "/terms/messages/expTotal",
																																								schemaPath: "#/properties/terms/properties/messages/properties/expTotal/type",
																																								keyword: "type",
																																								params: { type: "string" },
																																								message: "must be string"
																																							}], !1;
																																							u = !0;
																																						} else u = !0;
																																						if (u) {
																																							if (e.expNext !== void 0) {
																																								if (typeof e.expNext != "string") return n.errors = [{
																																									instancePath: t + "/terms/messages/expNext",
																																									schemaPath: "#/properties/terms/properties/messages/properties/expNext/type",
																																									keyword: "type",
																																									params: { type: "string" },
																																									message: "must be string"
																																								}], !1;
																																								u = !0;
																																							} else u = !0;
																																							if (u) {
																																								if (e.saveMessage !== void 0) {
																																									if (typeof e.saveMessage != "string") return n.errors = [{
																																										instancePath: t + "/terms/messages/saveMessage",
																																										schemaPath: "#/properties/terms/properties/messages/properties/saveMessage/type",
																																										keyword: "type",
																																										params: { type: "string" },
																																										message: "must be string"
																																									}], !1;
																																									u = !0;
																																								} else u = !0;
																																								if (u) {
																																									if (e.loadMessage !== void 0) {
																																										if (typeof e.loadMessage != "string") return n.errors = [{
																																											instancePath: t + "/terms/messages/loadMessage",
																																											schemaPath: "#/properties/terms/properties/messages/properties/loadMessage/type",
																																											keyword: "type",
																																											params: { type: "string" },
																																											message: "must be string"
																																										}], !1;
																																										u = !0;
																																									} else u = !0;
																																									if (u) {
																																										if (e.file !== void 0) {
																																											if (typeof e.file != "string") return n.errors = [{
																																												instancePath: t + "/terms/messages/file",
																																												schemaPath: "#/properties/terms/properties/messages/properties/file/type",
																																												keyword: "type",
																																												params: { type: "string" },
																																												message: "must be string"
																																											}], !1;
																																											u = !0;
																																										} else u = !0;
																																										if (u) {
																																											if (e.partyName !== void 0) {
																																												if (typeof e.partyName != "string") return n.errors = [{
																																													instancePath: t + "/terms/messages/partyName",
																																													schemaPath: "#/properties/terms/properties/messages/properties/partyName/type",
																																													keyword: "type",
																																													params: { type: "string" },
																																													message: "must be string"
																																												}], !1;
																																												u = !0;
																																											} else u = !0;
																																											if (u) {
																																												if (e.emerge !== void 0) {
																																													if (typeof e.emerge != "string") return n.errors = [{
																																														instancePath: t + "/terms/messages/emerge",
																																														schemaPath: "#/properties/terms/properties/messages/properties/emerge/type",
																																														keyword: "type",
																																														params: { type: "string" },
																																														message: "must be string"
																																													}], !1;
																																													u = !0;
																																												} else u = !0;
																																												if (u) {
																																													if (e.preemptive !== void 0) {
																																														if (typeof e.preemptive != "string") return n.errors = [{
																																															instancePath: t + "/terms/messages/preemptive",
																																															schemaPath: "#/properties/terms/properties/messages/properties/preemptive/type",
																																															keyword: "type",
																																															params: { type: "string" },
																																															message: "must be string"
																																														}], !1;
																																														u = !0;
																																													} else u = !0;
																																													if (u) {
																																														if (e.surprise !== void 0) {
																																															if (typeof e.surprise != "string") return n.errors = [{
																																																instancePath: t + "/terms/messages/surprise",
																																																schemaPath: "#/properties/terms/properties/messages/properties/surprise/type",
																																																keyword: "type",
																																																params: { type: "string" },
																																																message: "must be string"
																																															}], !1;
																																															u = !0;
																																														} else u = !0;
																																														if (u) {
																																															if (e.escapeStart !== void 0) {
																																																if (typeof e.escapeStart != "string") return n.errors = [{
																																																	instancePath: t + "/terms/messages/escapeStart",
																																																	schemaPath: "#/properties/terms/properties/messages/properties/escapeStart/type",
																																																	keyword: "type",
																																																	params: { type: "string" },
																																																	message: "must be string"
																																																}], !1;
																																																u = !0;
																																															} else u = !0;
																																															if (u) {
																																																if (e.escapeFailure !== void 0) {
																																																	if (typeof e.escapeFailure != "string") return n.errors = [{
																																																		instancePath: t + "/terms/messages/escapeFailure",
																																																		schemaPath: "#/properties/terms/properties/messages/properties/escapeFailure/type",
																																																		keyword: "type",
																																																		params: { type: "string" },
																																																		message: "must be string"
																																																	}], !1;
																																																	u = !0;
																																																} else u = !0;
																																																if (u) {
																																																	if (e.victory !== void 0) {
																																																		if (typeof e.victory != "string") return n.errors = [{
																																																			instancePath: t + "/terms/messages/victory",
																																																			schemaPath: "#/properties/terms/properties/messages/properties/victory/type",
																																																			keyword: "type",
																																																			params: { type: "string" },
																																																			message: "must be string"
																																																		}], !1;
																																																		u = !0;
																																																	} else u = !0;
																																																	if (u) {
																																																		if (e.defeat !== void 0) {
																																																			if (typeof e.defeat != "string") return n.errors = [{
																																																				instancePath: t + "/terms/messages/defeat",
																																																				schemaPath: "#/properties/terms/properties/messages/properties/defeat/type",
																																																				keyword: "type",
																																																				params: { type: "string" },
																																																				message: "must be string"
																																																			}], !1;
																																																			u = !0;
																																																		} else u = !0;
																																																		if (u) {
																																																			if (e.obtainExp !== void 0) {
																																																				if (typeof e.obtainExp != "string") return n.errors = [{
																																																					instancePath: t + "/terms/messages/obtainExp",
																																																					schemaPath: "#/properties/terms/properties/messages/properties/obtainExp/type",
																																																					keyword: "type",
																																																					params: { type: "string" },
																																																					message: "must be string"
																																																				}], !1;
																																																				u = !0;
																																																			} else u = !0;
																																																			if (u) {
																																																				if (e.obtainGold !== void 0) {
																																																					if (typeof e.obtainGold != "string") return n.errors = [{
																																																						instancePath: t + "/terms/messages/obtainGold",
																																																						schemaPath: "#/properties/terms/properties/messages/properties/obtainGold/type",
																																																						keyword: "type",
																																																						params: { type: "string" },
																																																						message: "must be string"
																																																					}], !1;
																																																					u = !0;
																																																				} else u = !0;
																																																				if (u) {
																																																					if (e.obtainItem !== void 0) {
																																																						if (typeof e.obtainItem != "string") return n.errors = [{
																																																							instancePath: t + "/terms/messages/obtainItem",
																																																							schemaPath: "#/properties/terms/properties/messages/properties/obtainItem/type",
																																																							keyword: "type",
																																																							params: { type: "string" },
																																																							message: "must be string"
																																																						}], !1;
																																																						u = !0;
																																																					} else u = !0;
																																																					if (u) {
																																																						if (e.obtainSkill !== void 0) {
																																																							if (typeof e.obtainSkill != "string") return n.errors = [{
																																																								instancePath: t + "/terms/messages/obtainSkill",
																																																								schemaPath: "#/properties/terms/properties/messages/properties/obtainSkill/type",
																																																								keyword: "type",
																																																								params: { type: "string" },
																																																								message: "must be string"
																																																							}], !1;
																																																							u = !0;
																																																						} else u = !0;
																																																						if (u) {
																																																							if (e.levelUp !== void 0) {
																																																								if (typeof e.levelUp != "string") return n.errors = [{
																																																									instancePath: t + "/terms/messages/levelUp",
																																																									schemaPath: "#/properties/terms/properties/messages/properties/levelUp/type",
																																																									keyword: "type",
																																																									params: { type: "string" },
																																																									message: "must be string"
																																																								}], !1;
																																																								u = !0;
																																																							} else u = !0;
																																																							if (u) {
																																																								if (e.useItem !== void 0) {
																																																									if (typeof e.useItem != "string") return n.errors = [{
																																																										instancePath: t + "/terms/messages/useItem",
																																																										schemaPath: "#/properties/terms/properties/messages/properties/useItem/type",
																																																										keyword: "type",
																																																										params: { type: "string" },
																																																										message: "must be string"
																																																									}], !1;
																																																									u = !0;
																																																								} else u = !0;
																																																								if (u) {
																																																									if (e.criticalToEnemy !== void 0) {
																																																										if (typeof e.criticalToEnemy != "string") return n.errors = [{
																																																											instancePath: t + "/terms/messages/criticalToEnemy",
																																																											schemaPath: "#/properties/terms/properties/messages/properties/criticalToEnemy/type",
																																																											keyword: "type",
																																																											params: { type: "string" },
																																																											message: "must be string"
																																																										}], !1;
																																																										u = !0;
																																																									} else u = !0;
																																																									if (u) {
																																																										if (e.criticalToActor !== void 0) {
																																																											if (typeof e.criticalToActor != "string") return n.errors = [{
																																																												instancePath: t + "/terms/messages/criticalToActor",
																																																												schemaPath: "#/properties/terms/properties/messages/properties/criticalToActor/type",
																																																												keyword: "type",
																																																												params: { type: "string" },
																																																												message: "must be string"
																																																											}], !1;
																																																											u = !0;
																																																										} else u = !0;
																																																										if (u) {
																																																											if (e.actorRecovery !== void 0) {
																																																												if (typeof e.actorRecovery != "string") return n.errors = [{
																																																													instancePath: t + "/terms/messages/actorRecovery",
																																																													schemaPath: "#/properties/terms/properties/messages/properties/actorRecovery/type",
																																																													keyword: "type",
																																																													params: { type: "string" },
																																																													message: "must be string"
																																																												}], !1;
																																																												u = !0;
																																																											} else u = !0;
																																																											if (u) {
																																																												if (e.actorNoDamage !== void 0) {
																																																													if (typeof e.actorNoDamage != "string") return n.errors = [{
																																																														instancePath: t + "/terms/messages/actorNoDamage",
																																																														schemaPath: "#/properties/terms/properties/messages/properties/actorNoDamage/type",
																																																														keyword: "type",
																																																														params: { type: "string" },
																																																														message: "must be string"
																																																													}], !1;
																																																													u = !0;
																																																												} else u = !0;
																																																												if (u) {
																																																													if (e.actorNoHit !== void 0) {
																																																														if (typeof e.actorNoHit != "string") return n.errors = [{
																																																															instancePath: t + "/terms/messages/actorNoHit",
																																																															schemaPath: "#/properties/terms/properties/messages/properties/actorNoHit/type",
																																																															keyword: "type",
																																																															params: { type: "string" },
																																																															message: "must be string"
																																																														}], !1;
																																																														u = !0;
																																																													} else u = !0;
																																																													if (u) {
																																																														if (e.enemyNoDamage !== void 0) {
																																																															if (typeof e.enemyNoDamage != "string") return n.errors = [{
																																																																instancePath: t + "/terms/messages/enemyNoDamage",
																																																																schemaPath: "#/properties/terms/properties/messages/properties/enemyNoDamage/type",
																																																																keyword: "type",
																																																																params: { type: "string" },
																																																																message: "must be string"
																																																															}], !1;
																																																															u = !0;
																																																														} else u = !0;
																																																														if (u) {
																																																															if (e.enemyNoHit !== void 0) {
																																																																if (typeof e.enemyNoHit != "string") return n.errors = [{
																																																																	instancePath: t + "/terms/messages/enemyNoHit",
																																																																	schemaPath: "#/properties/terms/properties/messages/properties/enemyNoHit/type",
																																																																	keyword: "type",
																																																																	params: { type: "string" },
																																																																	message: "must be string"
																																																																}], !1;
																																																																u = !0;
																																																															} else u = !0;
																																																															if (u) {
																																																																if (e.enemyRecovery !== void 0) {
																																																																	if (typeof e.enemyRecovery != "string") return n.errors = [{
																																																																		instancePath: t + "/terms/messages/enemyRecovery",
																																																																		schemaPath: "#/properties/terms/properties/messages/properties/enemyRecovery/type",
																																																																		keyword: "type",
																																																																		params: { type: "string" },
																																																																		message: "must be string"
																																																																	}], !1;
																																																																	u = !0;
																																																																} else u = !0;
																																																																if (u) {
																																																																	if (e.evasion !== void 0) {
																																																																		if (typeof e.evasion != "string") return n.errors = [{
																																																																			instancePath: t + "/terms/messages/evasion",
																																																																			schemaPath: "#/properties/terms/properties/messages/properties/evasion/type",
																																																																			keyword: "type",
																																																																			params: { type: "string" },
																																																																			message: "must be string"
																																																																		}], !1;
																																																																		u = !0;
																																																																	} else u = !0;
																																																																	if (u) {
																																																																		if (e.magicEvasion !== void 0) {
																																																																			if (typeof e.magicEvasion != "string") return n.errors = [{
																																																																				instancePath: t + "/terms/messages/magicEvasion",
																																																																				schemaPath: "#/properties/terms/properties/messages/properties/magicEvasion/type",
																																																																				keyword: "type",
																																																																				params: { type: "string" },
																																																																				message: "must be string"
																																																																			}], !1;
																																																																			u = !0;
																																																																		} else u = !0;
																																																																		if (u) {
																																																																			if (e.magicReflection !== void 0) {
																																																																				if (typeof e.magicReflection != "string") return n.errors = [{
																																																																					instancePath: t + "/terms/messages/magicReflection",
																																																																					schemaPath: "#/properties/terms/properties/messages/properties/magicReflection/type",
																																																																					keyword: "type",
																																																																					params: { type: "string" },
																																																																					message: "must be string"
																																																																				}], !1;
																																																																				u = !0;
																																																																			} else u = !0;
																																																																			if (u) {
																																																																				if (e.counterAttack !== void 0) {
																																																																					if (typeof e.counterAttack != "string") return n.errors = [{
																																																																						instancePath: t + "/terms/messages/counterAttack",
																																																																						schemaPath: "#/properties/terms/properties/messages/properties/counterAttack/type",
																																																																						keyword: "type",
																																																																						params: { type: "string" },
																																																																						message: "must be string"
																																																																					}], !1;
																																																																					u = !0;
																																																																				} else u = !0;
																																																																				if (u) {
																																																																					if (e.substitute !== void 0) {
																																																																						if (typeof e.substitute != "string") return n.errors = [{
																																																																							instancePath: t + "/terms/messages/substitute",
																																																																							schemaPath: "#/properties/terms/properties/messages/properties/substitute/type",
																																																																							keyword: "type",
																																																																							params: { type: "string" },
																																																																							message: "must be string"
																																																																						}], !1;
																																																																						u = !0;
																																																																					} else u = !0;
																																																																					if (u) {
																																																																						if (e.buffAdd !== void 0) {
																																																																							if (typeof e.buffAdd != "string") return n.errors = [{
																																																																								instancePath: t + "/terms/messages/buffAdd",
																																																																								schemaPath: "#/properties/terms/properties/messages/properties/buffAdd/type",
																																																																								keyword: "type",
																																																																								params: { type: "string" },
																																																																								message: "must be string"
																																																																							}], !1;
																																																																							u = !0;
																																																																						} else u = !0;
																																																																						if (u) {
																																																																							if (e.debuffAdd !== void 0) {
																																																																								if (typeof e.debuffAdd != "string") return n.errors = [{
																																																																									instancePath: t + "/terms/messages/debuffAdd",
																																																																									schemaPath: "#/properties/terms/properties/messages/properties/debuffAdd/type",
																																																																									keyword: "type",
																																																																									params: { type: "string" },
																																																																									message: "must be string"
																																																																								}], !1;
																																																																								u = !0;
																																																																							} else u = !0;
																																																																							if (u) {
																																																																								if (e.buffRemove !== void 0) {
																																																																									if (typeof e.buffRemove != "string") return n.errors = [{
																																																																										instancePath: t + "/terms/messages/buffRemove",
																																																																										schemaPath: "#/properties/terms/properties/messages/properties/buffRemove/type",
																																																																										keyword: "type",
																																																																										params: { type: "string" },
																																																																										message: "must be string"
																																																																									}], !1;
																																																																									u = !0;
																																																																								} else u = !0;
																																																																								if (u) if (e.actionFailure !== void 0) {
																																																																									if (typeof e.actionFailure != "string") return n.errors = [{
																																																																										instancePath: t + "/terms/messages/actionFailure",
																																																																										schemaPath: "#/properties/terms/properties/messages/properties/actionFailure/type",
																																																																										keyword: "type",
																																																																										params: { type: "string" },
																																																																										message: "must be string"
																																																																									}], !1;
																																																																									u = !0;
																																																																								} else u = !0;
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
																					}
																				}
																			}
																		}
																	}
																}
															}
														}
														c = !0;
													} else c = !0;
													if (c) if (r.params !== void 0) {
														let e = r.params;
														if (!e || typeof e != "object" || Array.isArray(e)) return n.errors = [{
															instancePath: t + "/terms/params",
															schemaPath: "#/properties/terms/properties/params/type",
															keyword: "type",
															params: { type: "object" },
															message: "must be object"
														}], !1;
														{
															let r;
															if (e.mhp === void 0 && (r = "mhp") || e.mmp === void 0 && (r = "mmp") || e.atk === void 0 && (r = "atk") || e.def === void 0 && (r = "def") || e.mat === void 0 && (r = "mat") || e.mdf === void 0 && (r = "mdf") || e.agi === void 0 && (r = "agi") || e.luk === void 0 && (r = "luk") || e.hit === void 0 && (r = "hit") || e.eva === void 0 && (r = "eva")) return n.errors = [{
																instancePath: t + "/terms/params",
																schemaPath: "#/properties/terms/properties/params/required",
																keyword: "required",
																params: { missingProperty: r },
																message: "must have required property '" + r + "'"
															}], !1;
															if (e.mhp !== void 0) {
																if (typeof e.mhp != "string") return n.errors = [{
																	instancePath: t + "/terms/params/mhp",
																	schemaPath: "#/properties/terms/properties/params/properties/mhp/type",
																	keyword: "type",
																	params: { type: "string" },
																	message: "must be string"
																}], !1;
																var d = !0;
															} else d = !0;
															if (d) {
																if (e.mmp !== void 0) {
																	if (typeof e.mmp != "string") return n.errors = [{
																		instancePath: t + "/terms/params/mmp",
																		schemaPath: "#/properties/terms/properties/params/properties/mmp/type",
																		keyword: "type",
																		params: { type: "string" },
																		message: "must be string"
																	}], !1;
																	d = !0;
																} else d = !0;
																if (d) {
																	if (e.atk !== void 0) {
																		if (typeof e.atk != "string") return n.errors = [{
																			instancePath: t + "/terms/params/atk",
																			schemaPath: "#/properties/terms/properties/params/properties/atk/type",
																			keyword: "type",
																			params: { type: "string" },
																			message: "must be string"
																		}], !1;
																		d = !0;
																	} else d = !0;
																	if (d) {
																		if (e.def !== void 0) {
																			if (typeof e.def != "string") return n.errors = [{
																				instancePath: t + "/terms/params/def",
																				schemaPath: "#/properties/terms/properties/params/properties/def/type",
																				keyword: "type",
																				params: { type: "string" },
																				message: "must be string"
																			}], !1;
																			d = !0;
																		} else d = !0;
																		if (d) {
																			if (e.mat !== void 0) {
																				if (typeof e.mat != "string") return n.errors = [{
																					instancePath: t + "/terms/params/mat",
																					schemaPath: "#/properties/terms/properties/params/properties/mat/type",
																					keyword: "type",
																					params: { type: "string" },
																					message: "must be string"
																				}], !1;
																				d = !0;
																			} else d = !0;
																			if (d) {
																				if (e.mdf !== void 0) {
																					if (typeof e.mdf != "string") return n.errors = [{
																						instancePath: t + "/terms/params/mdf",
																						schemaPath: "#/properties/terms/properties/params/properties/mdf/type",
																						keyword: "type",
																						params: { type: "string" },
																						message: "must be string"
																					}], !1;
																					d = !0;
																				} else d = !0;
																				if (d) {
																					if (e.agi !== void 0) {
																						if (typeof e.agi != "string") return n.errors = [{
																							instancePath: t + "/terms/params/agi",
																							schemaPath: "#/properties/terms/properties/params/properties/agi/type",
																							keyword: "type",
																							params: { type: "string" },
																							message: "must be string"
																						}], !1;
																						d = !0;
																					} else d = !0;
																					if (d) {
																						if (e.luk !== void 0) {
																							if (typeof e.luk != "string") return n.errors = [{
																								instancePath: t + "/terms/params/luk",
																								schemaPath: "#/properties/terms/properties/params/properties/luk/type",
																								keyword: "type",
																								params: { type: "string" },
																								message: "must be string"
																							}], !1;
																							d = !0;
																						} else d = !0;
																						if (d) {
																							if (e.hit !== void 0) {
																								if (typeof e.hit != "string") return n.errors = [{
																									instancePath: t + "/terms/params/hit",
																									schemaPath: "#/properties/terms/properties/params/properties/hit/type",
																									keyword: "type",
																									params: { type: "string" },
																									message: "must be string"
																								}], !1;
																								d = !0;
																							} else d = !0;
																							if (d) if (e.eva !== void 0) {
																								if (typeof e.eva != "string") return n.errors = [{
																									instancePath: t + "/terms/params/eva",
																									schemaPath: "#/properties/terms/properties/params/properties/eva/type",
																									keyword: "type",
																									params: { type: "string" },
																									message: "must be string"
																								}], !1;
																								d = !0;
																							} else d = !0;
																						}
																					}
																				}
																			}
																		}
																	}
																}
															}
														}
														c = !0;
													} else c = !0;
												}
											}
										}
										o = !0;
									} else o = !0;
								}
							}
						}
					}
				}
			}
		}
		return n.errors = null, !0;
	}
	t.exports = n, t.exports.default = n;
}))()), s = (e) => (0, o.default)(e);
export { a as isDataSystem, s as isSystemTexts, i as validateSystemData };
