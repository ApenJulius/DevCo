__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */ default: () => /* binding */ Game,
    /* harmony export */
});
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ =
    __webpack_require__(
        /*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js"
    );
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ =
    __webpack_require__(
        /*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"
    );
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ =
    __webpack_require__(
        /*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"
    );
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ =
    __webpack_require__(
        /*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"
    );
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ =
    __webpack_require__(
        /*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js"
    );
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__ =
    __webpack_require__(
        /*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"
    );
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/ __webpack_require__.n(
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__
    );
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ =
    __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/ __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_7__ =
    __webpack_require__(/*! ./animations */ "./src/animations.js");
/* harmony import */ var _creature_queue__WEBPACK_IMPORTED_MODULE_8__ =
    __webpack_require__(/*! ./creature_queue */ "./src/creature_queue.js");
/* harmony import */ var _utility_gamelog__WEBPACK_IMPORTED_MODULE_9__ =
    __webpack_require__(/*! ./utility/gamelog */ "./src/utility/gamelog.js");
/* harmony import */ var _sound_soundsys__WEBPACK_IMPORTED_MODULE_10__ =
    __webpack_require__(/*! ./sound/soundsys */ "./src/sound/soundsys.ts");
/* harmony import */ var _sound_musicplayer__WEBPACK_IMPORTED_MODULE_11__ =
    __webpack_require__(
        /*! ./sound/musicplayer */ "./src/sound/musicplayer.js"
    );
/* harmony import */ var _utility_hex__WEBPACK_IMPORTED_MODULE_12__ =
    __webpack_require__(/*! ./utility/hex */ "./src/utility/hex.ts");
/* harmony import */ var _utility_hexgrid__WEBPACK_IMPORTED_MODULE_13__ =
    __webpack_require__(/*! ./utility/hexgrid */ "./src/utility/hexgrid.ts");
/* harmony import */ var _assetLoader__WEBPACK_IMPORTED_MODULE_14__ =
    __webpack_require__(/*! ./assetLoader */ "./src/assetLoader.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_15__ =
    __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _ui_interface__WEBPACK_IMPORTED_MODULE_16__ =
    __webpack_require__(/*! ./ui/interface */ "./src/ui/interface.js");
/* harmony import */ var _creature__WEBPACK_IMPORTED_MODULE_17__ =
    __webpack_require__(/*! ./creature */ "./src/creature.ts");
/* harmony import */ var _data_units_json__WEBPACK_IMPORTED_MODULE_18__ =
    __webpack_require__(/*! ./data/units.json */ "./src/data/units.json");
/* harmony import */ var pixi__WEBPACK_IMPORTED_MODULE_19__ =
    __webpack_require__(
        /*! pixi */ "./node_modules/phaser-ce/build/custom/pixi-exposed.js"
    );
/* harmony import */ var pixi__WEBPACK_IMPORTED_MODULE_19___default =
    /*#__PURE__*/ __webpack_require__.n(pixi__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var p2__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! p2 */ "./node_modules/phaser-ce/build/custom/p2-exposed.js"
);
/* harmony import */ var p2__WEBPACK_IMPORTED_MODULE_20___default =
    /*#__PURE__*/ __webpack_require__.n(p2__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_21__ =
    __webpack_require__(
        /*! phaser */ "./node_modules/phaser-ce/build/custom/phaser-split-exposed.js"
    );
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_21___default =
    /*#__PURE__*/ __webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _multiplayer_match__WEBPACK_IMPORTED_MODULE_22__ =
    __webpack_require__(
        /*! ./multiplayer/match */ "./src/multiplayer/match.js"
    );
/* harmony import */ var _multiplayer_gameplay__WEBPACK_IMPORTED_MODULE_23__ =
    __webpack_require__(
        /*! ./multiplayer/gameplay */ "./src/multiplayer/gameplay.js"
    );
/* harmony import */ var _utility_time__WEBPACK_IMPORTED_MODULE_24__ =
    __webpack_require__(/*! ./utility/time */ "./src/utility/time.js");
/* harmony import */ var _debug__WEBPACK_IMPORTED_MODULE_25__ =
    __webpack_require__(/*! ./debug */ "./src/debug.ts");

function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly &&
            (symbols = symbols.filter(function (sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })),
            keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2
            ? ownKeys(Object(source), !0).forEach(function (key) {
                  (0,
                  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[
                      "default"
                  ])(target, key, source[key]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                  target,
                  Object.getOwnPropertyDescriptors(source)
              )
            : ownKeys(Object(source)).forEach(function (key) {
                  Object.defineProperty(
                      target,
                      key,
                      Object.getOwnPropertyDescriptor(source, key)
                  );
              });
    }
    return target;
}

/* Game Class
 *
 * Game contains all Game elements and functions.
 * It's the root element and defined only one time through the G variable.
 *
 * NOTE: Constructor does nothing because the G object must be defined
 * before creating other class instances. The game setup is triggered
 * to really start the game.
 */
var Game = /*#__PURE__*/ (function () {
    /* Attributes
     *
     * NOTE : attributes and variables starting with $ are jQuery elements
     * and jQuery functions can be called directly from them.
     *
     * // jQuery attributes
     * $combatFrame :	Combat element containing all graphics except the UI
     *
     * // Game elements
     * players :			Array :	Contains Player objects ordered by player ID (0 to 3)
     * creatures :			Array :	Contains Creature objects (creatures[creature.id]) start at index 1
     *
     * grid :				Grid :	Grid object
     * UI :				UI :	UI object
     *
     * queue :				CreatureQueue :	queue of creatures to manage phase order
     *
     * turn :				Integer :	Current's turn number
     *
     * // Normal attributes
     * playerMode :		Integer :	Number of players in the game
     * activeCreature :	Creature :	Current active creature object reference
     * creatureData :		Array :		Array containing all data for the creatures
     *
     */
    function Game(version) {
        (0,
        _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[
            "default"
        ])(this, Game);
        this.version = version || "dev";
        this.abilities = [];
        this.players = [];
        this.creatures = [];
        this.effects = [];
        this.activeCreature = {
            id: 0,
        };
        this.matchid = null;
        this.playersReady = false;
        this.preventSetup = false;
        this.animations =
            new _animations__WEBPACK_IMPORTED_MODULE_7__.Animations(this);
        this.queue =
            new _creature_queue__WEBPACK_IMPORTED_MODULE_8__.CreatureQueue(
                this
            );
        this.creatureData = [];
        this.pause = false;
        this.gameState = "initialized";
        this.pauseTime = 0;
        this.unitDrops = 0;
        this.minimumTurnBeforeFleeing = 12;
        this.availableCreatures = [];
        this.animationQueue = [];
        this.checkTimeFrequency = 1000;
        this.gamelog =
            new _utility_gamelog__WEBPACK_IMPORTED_MODULE_9__.GameLog(
                null,
                this
            );
        this.configData = {};
        this.match = {};
        this.gameplay = {};
        this.session = null;
        this.client = null;
        this.connect = null;
        this.multiplayer = false;
        this.matchInitialized = false;
        this.realms = ["A", "E", "G", "L", "P", "S", "W"];
        this.availableMusic = [];
        this.inputMethod = "Mouse";

        // Gameplay properties
        this.firstKill = false;
        this.freezedInput = false;
        this.turnThrottle = false;
        this.turn = 0;

        // Phaser
        this.Phaser = new (phaser__WEBPACK_IMPORTED_MODULE_21___default().Game)(
            1920,
            1080,
            phaser__WEBPACK_IMPORTED_MODULE_21___default().AUTO,
            "combatwrapper",
            {
                update: this.phaserUpdate.bind(this),
                render: this.phaserRender.bind(this),
            }
        );

        // Messages
        // TODO: Move strings to external file in order to be able to support translations
        // https://github.com/FreezingMoon/AncientBeast/issues/923
        this.msg = {
            abilities: {
                noTarget: "No targets available.",
                noPlasma: "Not enough plasma.",
                noPsy: "Psyhelm overload: too many units!",
                alreadyUsed: "This ability has already been used.",
                tooMuch: "Too much %stat%.",
                notEnough: "Not enough %stat%.",
                notMoveable: "This creature cannot be moved.",
                passiveCycle: "Switches between any usable abilities.",
                passiveUnavailable: "No usable abilities to switch to.",
            },
            ui: {
                dash: {
                    materializeOverload:
                        "Overload! Maximum number of units controlled",
                    selectUnit:
                        "Please select an available unit from the left grid",
                    lowPlasma:
                        "Low Plasma! Cannot materialize the selected unit",
                    // plasmaCost :    String :    plasma cost of the unit to materialize
                    materializeUnit: function materializeUnit(plasmaCost) {
                        return (
                            "Materialize unit at target location for " +
                            plasmaCost +
                            " plasma"
                        );
                    },
                    materializeUsed:
                        "Materialization has already been used this round",
                    heavyDev: "This unit is currently under heavy development",
                },
            },
        };

        /* Regex Test for triggers */
        this.triggers = {
            onStepIn: /\bonStepIn\b/,
            onStepOut: /\bonStepOut\b/,
            onReset: /\bonReset\b/,
            onStartPhase: /\bonStartPhase\b/,
            onEndPhase: /\bonEndPhase\b/,
            onMovement: /\bonMovement\b/,
            onUnderAttack: /\bonUnderAttack\b/,
            onDamage: /\bonDamage\b/,
            onHeal: /\bonHeal\b/,
            onAttack: /\bonAttack\b/,
            onCreatureMove: /\bonCreatureMove\b/,
            onCreatureDeath: /\bonCreatureDeath\b/,
            onCreatureSummon: /\bonCreatureSummon\b/,
            onStepIn_other: /\bonOtherStepIn\b/,
            onStepOut_other: /\bonOtherStepOut\b/,
            onReset_other: /\bonOtherReset\b/,
            onStartPhase_other: /\bonOtherStartPhase\b/,
            onEndPhase_other: /\bonOtherEndPhase\b/,
            onMovement_other: /\bonOtherMovement\b/,
            onAttack_other: /\bonOtherAttack\b/,
            onDamage_other: /\bonOtherDamage\b/,
            onHeal_other: /\bonOtherHeal\b/,
            onUnderAttack_other: /\bonOtherUnderAttack\b/,
            onCreatureMove_other: /\bonOtherCreatureMove\b/,
            onCreatureDeath_other: /\bonOtherCreatureDeath\b/,
            onCreatureSummon_other: /\bonOtherCreatureSummon\b/,
            onEffectAttach: /\bonEffectAttach\b/,
            onEffectAttach_other: /\bonOtherEffectAttach\b/,
            onStartOfRound: /\bonStartOfRound\b/,
            onQuery: /\bonQuery\b/,
            oncePerDamageChain: /\boncePerDamageChain\b/,
        };
        var signalChannels = ["ui", "metaPowers", "creature", "hex"];
        this.signals = this.setupSignalChannels(signalChannels);
    }
    (0,
    _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(
        Game,
        [
            {
                key: "dataLoaded",
                value: function dataLoaded(data) {
                    var _this = this;
                    var dpcolor = ["blue", "orange", "green", "red"];
                    this.creatureData = data;
                    data.forEach(function (creature) {
                        if (!creature.playable) {
                            return;
                        }
                        var creatureId = creature.id,
                            realm = creature.realm,
                            level = creature.level,
                            type = realm.toUpperCase() + level,
                            name = creature.name,
                            count,
                            i;
                        creature.type = type;

                        // Load unit shouts
                        _this.soundsys.loadSound("units/shouts/" + name);

                        // Load artwork
                        _this.getImage(
                            (0,
                            _assetLoader__WEBPACK_IMPORTED_MODULE_14__.getUrl)(
                                "units/artwork/" + name
                            )
                        );
                        if (name == "Dark Priest") {
                            for (
                                i = 0, count = dpcolor.length;
                                i < count;
                                i++
                            ) {
                                _this.Phaser.load.image(
                                    name + dpcolor[i] + "_cardboard",
                                    (0,
                                    _assetLoader__WEBPACK_IMPORTED_MODULE_14__.getUrl)(
                                        "units/cardboards/" +
                                            name +
                                            " " +
                                            dpcolor[i]
                                    )
                                );
                                _this.getImage(
                                    (0,
                                    _assetLoader__WEBPACK_IMPORTED_MODULE_14__.getUrl)(
                                        "units/avatars/" +
                                            name +
                                            " " +
                                            dpcolor[i]
                                    )
                                );
                            }
                        } else {
                            if (creature.drop) {
                                _this.Phaser.load.image(
                                    "drop_" + creature.drop.name,
                                    (0,
                                    _assetLoader__WEBPACK_IMPORTED_MODULE_14__.getUrl)(
                                        "drops/" + creature.drop.name
                                    )
                                );
                            }
                            _this.Phaser.load.image(
                                name + "_cardboard",
                                (0,
                                _assetLoader__WEBPACK_IMPORTED_MODULE_14__.getUrl)(
                                    "units/cardboards/" + name
                                )
                            );
                            _this.getImage(
                                (0,
                                _assetLoader__WEBPACK_IMPORTED_MODULE_14__.getUrl)(
                                    "units/avatars/" + name
                                )
                            );
                        }

                        // For code compatibility
                        _this.availableCreatures[creatureId] = type;
                    });
                    this.Phaser.load.start();
                },

                /* loadGame(setupOpt) preload
                 *
                 * setupOpt :	Object :	Setup options from matchmaking menu
                 *
                 * Load all required game files
                 */
            },
            {
                key: "loadGame",
                value: function loadGame(setupOpt, matchInitialized, matchid) {
                    // Need to remove keydown listener before new game start
                    // to prevent memory leak and mixing hotkeys between start screen and game
                    jquery__WEBPACK_IMPORTED_MODULE_6__(document).off(
                        "keydown"
                    );
                    if (this.multiplayer && !matchid) {
                        this.matchInitialized = matchInitialized;
                    }
                    if (matchid) {
                        this.matchid = matchid;
                    }
                    this.gameState = "loading";
                    if (setupOpt) {
                        this.gamelog.gameConfig = setupOpt;
                        this.configData = setupOpt;
                        jquery__WEBPACK_IMPORTED_MODULE_6__.extend(
                            this,
                            setupOpt
                        );
                    }
                    // console.log(this);
                    this.startLoading();

                    // Sounds
                    var paths = [
                        "sounds/step",
                        "sounds/swing",
                        "sounds/swing2",
                        "sounds/swing3",
                        "sounds/heartbeat",
                        "sounds/drums",
                        "sounds/upgrade",
                        "sounds/mudbath",
                        "sounds/AncientBeast",
                    ];
                    this.soundsys =
                        new _sound_soundsys__WEBPACK_IMPORTED_MODULE_10__.SoundSys(
                            {
                                paths: paths,
                            }
                        );
                    this.musicPlayer = this.soundsys.musicPlayer;
                    this.Phaser.load.onFileComplete.add(this.loadFinish, this);

                    // Health
                    var playerColors = ["red", "blue", "orange", "green"];
                    var i;
                    for (i = 0; i < 4; i++) {
                        this.Phaser.load.image(
                            "p" + i + "_health",
                            (0,
                            _assetLoader__WEBPACK_IMPORTED_MODULE_14__.getUrl)(
                                "interface/rectangle_" + playerColors[i]
                            )
                        );
                        this.Phaser.load.image(
                            "p" + i + "_plasma",
                            (0,
                            _assetLoader__WEBPACK_IMPORTED_MODULE_14__.getUrl)(
                                "interface/capsule_" + playerColors[i]
                            )
                        );
                        this.Phaser.load.image(
                            "p" + i + "_frozen",
                            (0,
                            _assetLoader__WEBPACK_IMPORTED_MODULE_14__.getUrl)(
                                "interface/rectangle_frozen_" + playerColors[i]
                            )
                        );
                    }

                    // Ability SFX
                    this.Phaser.load.audio(
                        "MagmaSpawn0",
                        (0, _assetLoader__WEBPACK_IMPORTED_MODULE_14__.getUrl)(
                            "units/sfx/Infernal 0"
                        )
                    );

                    // Grid
                    this.Phaser.load.image(
                        "hex",
                        (0, _assetLoader__WEBPACK_IMPORTED_MODULE_14__.getUrl)(
                            "interface/hex"
                        )
                    );
                    this.Phaser.load.image(
                        "hex_dashed",
                        (0, _assetLoader__WEBPACK_IMPORTED_MODULE_14__.getUrl)(
                            "interface/hex_dashed"
                        )
                    );
                    this.Phaser.load.image(
                        "hex_deadzone",
                        (0, _assetLoader__WEBPACK_IMPORTED_MODULE_14__.getUrl)(
                            "interface/hex_deadzone"
                        )
                    );
                    this.Phaser.load.image(
                        "hex_path",
                        (0, _assetLoader__WEBPACK_IMPORTED_MODULE_14__.getUrl)(
                            "interface/hex_path"
                        )
                    );
                    this.Phaser.load.image(
                        "cancel",
                        (0, _assetLoader__WEBPACK_IMPORTED_MODULE_14__.getUrl)(
                            "interface/cancel"
                        )
                    );
                    this.Phaser.load.image(
                        "input",
                        (0, _assetLoader__WEBPACK_IMPORTED_MODULE_14__.getUrl)(
                            "interface/hex_input"
                        )
                    );
                    for (i = 0; i < 4; i++) {
                        this.Phaser.load.image(
                            "hex_p" + i,
                            (0,
                            _assetLoader__WEBPACK_IMPORTED_MODULE_14__.getUrl)(
                                "interface/hex_glowing_" + playerColors[i]
                            )
                        );
                        this.Phaser.load.image(
                            "hex_hover_p" + i,
                            (0,
                            _assetLoader__WEBPACK_IMPORTED_MODULE_14__.getUrl)(
                                "interface/hex_outline_" + playerColors[i]
                            )
                        );
                    }

                    // Traps
                    this.Phaser.load.image(
                        "trap_royal-seal",
                        (0, _assetLoader__WEBPACK_IMPORTED_MODULE_14__.getUrl)(
                            "units/sprites/Gumble - Royal Seal"
                        )
                    );
                    this.Phaser.load.image(
                        "trap_mud-bath",
                        (0, _assetLoader__WEBPACK_IMPORTED_MODULE_14__.getUrl)(
                            "units/sprites/Swine Thug - Mud Bath"
                        )
                    );
                    this.Phaser.load.image(
                        "trap_scorched-ground",
                        (0, _assetLoader__WEBPACK_IMPORTED_MODULE_14__.getUrl)(
                            "units/sprites/Infernal - Scorched Ground"
                        )
                    );
                    this.Phaser.load.image(
                        "trap_firewall",
                        (0, _assetLoader__WEBPACK_IMPORTED_MODULE_14__.getUrl)(
                            "units/sprites/Infernal - Scorched Ground"
                        )
                    );
                    this.Phaser.load.image(
                        "trap_poisonous-vine",
                        (0, _assetLoader__WEBPACK_IMPORTED_MODULE_14__.getUrl)(
                            "units/sprites/Impaler - Poisonous Vine"
                        )
                    );

                    // Effects
                    this.Phaser.load.image(
                        "effects_fiery-touch",
                        (0, _assetLoader__WEBPACK_IMPORTED_MODULE_14__.getUrl)(
                            "units/sprites/Abolished - Fiery Touch"
                        )
                    );
                    this.Phaser.load.image(
                        "effects_fissure-vent",
                        (0, _assetLoader__WEBPACK_IMPORTED_MODULE_14__.getUrl)(
                            "units/sprites/Infernal - Scorched Ground"
                        )
                    );
                    this.Phaser.load.image(
                        "effects_freezing-spit",
                        (0, _assetLoader__WEBPACK_IMPORTED_MODULE_14__.getUrl)(
                            "units/sprites/Snow Bunny - Freezing Spit"
                        )
                    );

                    // Background
                    this.Phaser.load.image(
                        "background",
                        (0, _assetLoader__WEBPACK_IMPORTED_MODULE_14__.getUrl)(
                            "locations/" + this.background_image + "/bg"
                        )
                    );

                    // Get JSON files
                    this.dataLoaded(
                        _data_units_json__WEBPACK_IMPORTED_MODULE_18__
                    );
                },
            },
            {
                key: "activePlayer",
                get: function get() {
                    if (this.multiplayer) {
                        if (this.players && this.match && this.match.userTurn) {
                            return this.players[this.match.userTurn];
                        }
                        return undefined;
                    }
                    if (this.activeCreature && this.activeCreature.player) {
                        return this.activeCreature.player;
                    }
                    return undefined;
                },
            },
            {
                key: "startLoading",
                value: function startLoading() {
                    jquery__WEBPACK_IMPORTED_MODULE_6__(
                        "#gameSetupContainer"
                    ).hide();
                    jquery__WEBPACK_IMPORTED_MODULE_6__("#loader").removeClass(
                        "hide"
                    );
                    jquery__WEBPACK_IMPORTED_MODULE_6__("body").css(
                        "cursor",
                        "wait"
                    );
                },
            },
            {
                key: "loadFinish",
                value: function loadFinish() {
                    var _this2 = this;
                    var progress = this.Phaser.load.progress,
                        progressWidth = progress + "%";
                    jquery__WEBPACK_IMPORTED_MODULE_6__(
                        "#barLoader .progress"
                    ).css("width", progressWidth);
                    if (progress == 100) {
                        setTimeout(function () {
                            _this2.gameState = "loaded";
                            jquery__WEBPACK_IMPORTED_MODULE_6__(
                                "#combatwrapper"
                            ).show();
                            jquery__WEBPACK_IMPORTED_MODULE_6__("body").css(
                                "cursor",
                                "default"
                            );

                            // Do not call setup if we are not active.
                            if (!_this2.preventSetup) {
                                _this2.setup(_this2.playerMode);
                            }
                        }, 100);
                    }
                },
            },
            {
                key: "phaserUpdate",
                value: function phaserUpdate() {
                    if (this.gameState != "playing") {
                        return;
                    }
                },
            },
            {
                key: "phaserRender",
                value: function phaserRender() {
                    var count = this.creatures.length,
                        i;
                    for (i = 1; i < count; i++) {
                        //G.Phaser.debug.renderSpriteBounds(G.creatures[i].sprite);
                    }
                },

                // Catch the browser being made inactive to prevent initial rendering bugs.
            },
            {
                key: "onBlur",
                value: function onBlur() {
                    this.preventSetup = true;
                },

                // Catch the browser coming back into focus so we can render the game board.
            },
            {
                key: "onFocus",
                value: function onFocus() {
                    var _this3 = this;
                    this.preventSetup = false;
                    // If loaded, call maybeSetup with a tiny delay to prevent rendering issues.
                    if (this.gameState == "loaded") {
                        setTimeout(function () {
                            _this3.maybeSetup();
                        }, 100);
                    }
                },

                // If no red flags, remove the loading bar and begin rendering the game.
            },
            {
                key: "maybeSetup",
                value: function maybeSetup() {
                    if (this.preventSetup) {
                        return;
                    }
                    jquery__WEBPACK_IMPORTED_MODULE_6__("#loader").addClass(
                        "hide"
                    );
                    jquery__WEBPACK_IMPORTED_MODULE_6__("body").css(
                        "cursor",
                        "default"
                    );
                    this.setup(this.playerMode);
                },

                /* Setup(playerMode)
                 *
                 * playerMode :		Integer :	Ideally 2 or 4, number of players to configure
                 *
                 * Launch the game with the given number of player.
                 *
                 */
            },
            {
                key: "setup",
                value: function setup(playerMode) {
                    var _this4 = this;
                    var bg, i;

                    // Phaser
                    this.Phaser.scale.parentIsWindow = true;
                    this.Phaser.scale.pageAlignHorizontally = true;
                    this.Phaser.scale.pageAlignVertically = true;
                    this.Phaser.scale.scaleMode =
                        phaser__WEBPACK_IMPORTED_MODULE_21___default().ScaleManager.SHOW_ALL;
                    this.Phaser.scale.fullScreenScaleMode =
                        phaser__WEBPACK_IMPORTED_MODULE_21___default().ScaleManager.SHOW_ALL;
                    this.Phaser.scale.refresh();
                    this.Phaser.stage.disableVisibilityChange = true;
                    if (!this.Phaser.device.desktop) {
                        this.Phaser.stage.forcePortrait = true;
                    }
                    bg = this.Phaser.add.sprite(0, 0, "background");
                    bg.inputEnabled = true;
                    bg.events.onInputUp.add(function (Sprite, Pointer) {
                        if (_this4.freezedInput || _this4.UI.dashopen) {
                            return;
                        }
                        switch (Pointer.button) {
                            case 0:
                                // Left mouse button pressed
                                break;
                            case 1:
                                // Middle mouse button pressed
                                break;
                            case 2:
                                // Right mouse button pressed
                                _this4.UI.showCreature(
                                    _this4.activeCreature.type,
                                    _this4.activeCreature.player.id
                                );
                                break;
                        }
                    }, this);

                    // Reset global counters
                    this.trapId = 0;
                    this.effectId = 0;
                    this.dropId = 0;
                    this.grid =
                        new _utility_hexgrid__WEBPACK_IMPORTED_MODULE_13__.HexGrid(
                            {},
                            this
                        ); // Create Hexgrid

                    this.startMatchTime = new Date();
                    this.$combatFrame =
                        jquery__WEBPACK_IMPORTED_MODULE_6__("#combatframe");
                    this.$combatFrame.show();

                    // Remove loading screen
                    jquery__WEBPACK_IMPORTED_MODULE_6__("#matchMaking").hide();
                    for (i = 0; i < playerMode; i++) {
                        var player =
                            new _player__WEBPACK_IMPORTED_MODULE_15__.Player(
                                i,
                                this
                            );
                        this.players.push(player);

                        // Initialize players' starting positions
                        var pos = {};
                        if (playerMode > 2) {
                            // If 4 players
                            switch (player.id) {
                                case 0:
                                    pos = {
                                        x: 0,
                                        y: 1,
                                    };
                                    break;
                                case 1:
                                    pos = {
                                        x: 15,
                                        y: 1,
                                    };
                                    break;
                                case 2:
                                    pos = {
                                        x: 0,
                                        y: 7,
                                    };
                                    break;
                                case 3:
                                    pos = {
                                        x: 15,
                                        y: 7,
                                    };
                                    break;
                            }
                        } else {
                            // If 2 players
                            switch (player.id) {
                                case 0:
                                    pos = {
                                        x: 0,
                                        y: 4,
                                    };
                                    break;
                                case 1:
                                    pos = {
                                        x: 14,
                                        y: 4,
                                    };
                                    break;
                            }
                        }
                        player.summon("--", pos); // Summon Dark Priest
                    }

                    this.activeCreature = this.players[0].creatures[0]; // Prevent errors

                    this.UI =
                        new _ui_interface__WEBPACK_IMPORTED_MODULE_16__.UI(
                            this
                        ); // Create UI (not before because some functions require creatures to already exist)

                    // DO NOT CALL LOG BEFORE UI CREATION
                    this.gameState = "playing";
                    this.log("Welcome to Ancient Beast pre-Alpha");
                    this.log("Setting up a " + playerMode + " player match");
                    this.timeInterval = setInterval(function () {
                        _this4.checkTime();
                    }, this.checkTimeFrequency);
                    this.nextCreature();
                    this.resizeCombatFrame(); // Resize while the game is starting
                    this.UI.resizeDash();
                    var resizeGame = function () {
                        var _this5 = this;
                        clearTimeout(this.windowResizeTimeout);
                        this.windowResizeTimeout = setTimeout(function () {
                            _this5.resizeCombatFrame();
                            _this5.UI.resizeDash();
                        }, 100);
                    }.bind(this);

                    // Handle resize events
                    jquery__WEBPACK_IMPORTED_MODULE_6__(window).resize(
                        function () {
                            // Throttle down to 1 event every 100ms of inactivity
                            resizeGame();
                        }
                    );
                    this.soundsys.playMusic();
                    if (
                        _debug__WEBPACK_IMPORTED_MODULE_25__.DEBUG_DISABLE_MUSIC
                    ) {
                        this.musicPlayer.audio.pause();
                    }
                    if (this.gamelog.data) {
                        // TODO: Remove the need for a timeout here by having a proper
                        // "game is ready to play" event that can trigger log replays if
                        // they are queued. -- ktiedt
                        setTimeout(function () {
                            _this4.gamelog.play.apply(_this4.gamelog);
                        }, 1000);
                    }
                    this.matchInit();
                },
            },
            {
                key: "matchInit",
                value: (function () {
                    var _matchInit = (0,
                    _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[
                        "default"
                    ])(
                        /*#__PURE__*/ _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().mark(
                            function _callee() {
                                var match, gameplay, n, _n;
                                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().wrap(
                                    function _callee$(_context) {
                                        while (1)
                                            switch (
                                                (_context.prev = _context.next)
                                            ) {
                                                case 0:
                                                    if (!this.multiplayer) {
                                                        _context.next = 21;
                                                        break;
                                                    }
                                                    if (
                                                        !(
                                                            Object.keys(
                                                                this.match
                                                            ).length === 0
                                                        )
                                                    ) {
                                                        _context.next = 16;
                                                        break;
                                                    }
                                                    _context.next = 4;
                                                    return this.connect.serverConnect(
                                                        this.session
                                                    );
                                                case 4:
                                                    match =
                                                        new _multiplayer_match__WEBPACK_IMPORTED_MODULE_22__[
                                                            "default"
                                                        ](
                                                            this.connect,
                                                            this,
                                                            this.session
                                                        );
                                                    gameplay =
                                                        new _multiplayer_gameplay__WEBPACK_IMPORTED_MODULE_23__[
                                                            "default"
                                                        ](this, match);
                                                    match.gameplay = gameplay;
                                                    this.gameplay = gameplay;
                                                    this.match = match;

                                                    // Only host
                                                    if (
                                                        !this.matchInitialized
                                                    ) {
                                                        _context.next = 16;
                                                        break;
                                                    }
                                                    _context.next = 12;
                                                    return this.match.matchCreate();
                                                case 12:
                                                    n = _context.sent;
                                                    console.log(
                                                        "created match",
                                                        n
                                                    );
                                                    _context.next = 16;
                                                    return match.matchMaker(
                                                        n,
                                                        this.configData
                                                    );
                                                case 16:
                                                    if (!this.matchid) {
                                                        _context.next = 21;
                                                        break;
                                                    }
                                                    _context.next = 19;
                                                    return this.match.matchJoin(
                                                        this.matchid
                                                    );
                                                case 19:
                                                    _n = _context.sent;
                                                    console.log(
                                                        "joined match",
                                                        _n
                                                    );
                                                case 21:
                                                case "end":
                                                    return _context.stop();
                                            }
                                    },
                                    _callee,
                                    this
                                );
                            }
                        )
                    );
                    function matchInit() {
                        return _matchInit.apply(this, arguments);
                    }
                    return matchInit;
                })(),
            },
            {
                key: "matchJoin",
                value: (function () {
                    var _matchJoin = (0,
                    _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[
                        "default"
                    ])(
                        /*#__PURE__*/ _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().mark(
                            function _callee2() {
                                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().wrap(
                                    function _callee2$(_context2) {
                                        while (1)
                                            switch (
                                                (_context2.prev =
                                                    _context2.next)
                                            ) {
                                                case 0:
                                                    _context2.next = 2;
                                                    return this.matchInit();
                                                case 2:
                                                    _context2.next = 4;
                                                    return this.match.matchMaker();
                                                case 4:
                                                case "end":
                                                    return _context2.stop();
                                            }
                                    },
                                    _callee2,
                                    this
                                );
                            }
                        )
                    );
                    function matchJoin() {
                        return _matchJoin.apply(this, arguments);
                    }
                    return matchJoin;
                })(),
            },
            {
                key: "updateLobby",
                value: (function () {
                    var _updateLobby = (0,
                    _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[
                        "default"
                    ])(
                        /*#__PURE__*/ _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().mark(
                            function _callee3() {
                                var _this6 = this;
                                var self;
                                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().wrap(
                                    function _callee3$(_context3) {
                                        while (1)
                                            switch (
                                                (_context3.prev =
                                                    _context3.next)
                                            ) {
                                                case 0:
                                                    if (
                                                        !this.matchInitialized
                                                    ) {
                                                        _context3.next = 2;
                                                        break;
                                                    }
                                                    return _context3.abrupt(
                                                        "return"
                                                    );
                                                case 2:
                                                    self = this;
                                                    jquery__WEBPACK_IMPORTED_MODULE_6__(
                                                        ".lobby-match-list"
                                                    )
                                                        .html("")
                                                        .addClass("refreshing");
                                                    jquery__WEBPACK_IMPORTED_MODULE_6__(
                                                        "#refreshMatchButton"
                                                    ).addClass("disabled");
                                                    jquery__WEBPACK_IMPORTED_MODULE_6__(
                                                        ".lobby-loader"
                                                    ).removeClass("hide");
                                                    jquery__WEBPACK_IMPORTED_MODULE_6__(
                                                        ".lobby-no-matches"
                                                    ).addClass("hide");

                                                    // Short delay to let the user know something has happened.
                                                    _context3.next = 9;
                                                    return (0,
                                                    _utility_time__WEBPACK_IMPORTED_MODULE_24__.sleep)(
                                                        phaser__WEBPACK_IMPORTED_MODULE_21___default()
                                                            .Timer.SECOND * 2
                                                    );
                                                case 9:
                                                    jquery__WEBPACK_IMPORTED_MODULE_6__(
                                                        ".lobby-match-list"
                                                    ).removeClass("refreshing");
                                                    jquery__WEBPACK_IMPORTED_MODULE_6__(
                                                        "#refreshMatchButton"
                                                    ).removeClass("disabled");
                                                    jquery__WEBPACK_IMPORTED_MODULE_6__(
                                                        ".lobby-loader"
                                                    ).addClass("hide");
                                                    if (
                                                        this.match.matchUsers
                                                            .length
                                                    ) {
                                                        _context3.next = 15;
                                                        break;
                                                    }
                                                    jquery__WEBPACK_IMPORTED_MODULE_6__(
                                                        ".lobby-no-matches"
                                                    ).removeClass("hide");
                                                    return _context3.abrupt(
                                                        "return"
                                                    );
                                                case 15:
                                                    this.match.matchUsers.forEach(
                                                        function (v) {
                                                            var isAvailableMatch =
                                                                v.string_properties &&
                                                                v
                                                                    .string_properties
                                                                    .match_id;
                                                            if (
                                                                !isAvailableMatch
                                                            ) {
                                                                return;
                                                            }
                                                            var gameConfig = {
                                                                background_image:
                                                                    v
                                                                        .string_properties
                                                                        .background_image,
                                                                abilityUpgrades:
                                                                    v
                                                                        .numeric_properties
                                                                        .abilityUpgrades,
                                                                creaLimitNbr:
                                                                    v
                                                                        .numeric_properties
                                                                        .creaLimitNbr,
                                                                plasma_amount:
                                                                    v
                                                                        .numeric_properties
                                                                        .plasma_amount,
                                                                playerMode:
                                                                    v
                                                                        .numeric_properties
                                                                        .playerMode,
                                                                timePool:
                                                                    v
                                                                        .numeric_properties
                                                                        .timePool,
                                                                turnTimePool:
                                                                    v
                                                                        .numeric_properties
                                                                        .turnTimePool,
                                                                unitDrops:
                                                                    v
                                                                        .numeric_properties
                                                                        .unitDrops,
                                                            };
                                                            var turntimepool =
                                                                v
                                                                    .numeric_properties
                                                                    .turnTimePool <
                                                                0
                                                                    ? "∞"
                                                                    : v
                                                                          .numeric_properties
                                                                          .timePool;
                                                            var timepool =
                                                                v
                                                                    .numeric_properties
                                                                    .timePool <
                                                                0
                                                                    ? "∞"
                                                                    : v
                                                                          .numeric_properties
                                                                          .timePool;
                                                            var unitdrops =
                                                                v
                                                                    .numeric_properties
                                                                    .unitDrops <
                                                                0
                                                                    ? "off"
                                                                    : "on";
                                                            _this6.unitDrops =
                                                                v.numeric_properties.unitDrops;
                                                            var _matchBtn =
                                                                jquery__WEBPACK_IMPORTED_MODULE_6__(
                                                                    '<a class="user-match"><div class="avatar"></div><div class="user-match__col">\n        Host: '
                                                                        .concat(
                                                                            v
                                                                                .presence
                                                                                .username,
                                                                            "<br />\n        Player Mode: "
                                                                        )
                                                                        .concat(
                                                                            v
                                                                                .numeric_properties
                                                                                .playerMode,
                                                                            "<br />\n        Active Units: "
                                                                        )
                                                                        .concat(
                                                                            v
                                                                                .numeric_properties
                                                                                .creaLimitNbr,
                                                                            "<br />\n        Ability Upgrades: "
                                                                        )
                                                                        .concat(
                                                                            v
                                                                                .numeric_properties
                                                                                .abilityUpgrades,
                                                                            '<br />\n        </div><div class="user-match__col">\n        Plasma Points: '
                                                                        )
                                                                        .concat(
                                                                            v
                                                                                .numeric_properties
                                                                                .plasma_amount,
                                                                            "<br />\n        Turn Time(seconds): "
                                                                        )
                                                                        .concat(
                                                                            turntimepool,
                                                                            "<br />\n        Turn Pools(minutes): "
                                                                        )
                                                                        .concat(
                                                                            timepool,
                                                                            "<br />\n        Unit Drops: "
                                                                        )
                                                                        .concat(
                                                                            unitdrops,
                                                                            "<br /></div></a>\n        "
                                                                        )
                                                                );
                                                            _matchBtn.on(
                                                                "click",
                                                                function () {
                                                                    jquery__WEBPACK_IMPORTED_MODULE_6__(
                                                                        ".lobby"
                                                                    ).hide();
                                                                    _this6.loadGame(
                                                                        gameConfig,
                                                                        false,
                                                                        v
                                                                            .string_properties
                                                                            .match_id
                                                                    );
                                                                }
                                                            );
                                                            jquery__WEBPACK_IMPORTED_MODULE_6__(
                                                                ".lobby-match-list"
                                                            ).append(_matchBtn);
                                                        }
                                                    );
                                                case 16:
                                                case "end":
                                                    return _context3.stop();
                                            }
                                    },
                                    _callee3,
                                    this
                                );
                            }
                        )
                    );
                    function updateLobby() {
                        return _updateLobby.apply(this, arguments);
                    }
                    return updateLobby;
                })(),
                /* resizeCombatFrame()
                 *
                 * Resize the combat frame
                 */
            },
            {
                key: "resizeCombatFrame",
                value: function resizeCombatFrame() {
                    if (
                        jquery__WEBPACK_IMPORTED_MODULE_6__(
                            "#cardwrapper"
                        ).width() <
                        jquery__WEBPACK_IMPORTED_MODULE_6__("#card").width()
                    ) {
                        jquery__WEBPACK_IMPORTED_MODULE_6__(
                            "#cardwrapper_inner"
                        ).width();
                    }
                },

                /* nextRound()
                 *
                 * Replace the current queue with the next queue
                 */
            },
            {
                key: "nextRound",
                value: function nextRound() {
                    var totalCreatures = this.creatures.length,
                        i;
                    this.turn++;
                    this.log("Round " + this.turn, "roundmarker", true);
                    this.queue.nextRound();

                    // Resets values
                    for (i = 0; i < totalCreatures; i++) {
                        if (
                            this.creatures[i] instanceof
                            _creature__WEBPACK_IMPORTED_MODULE_17__.Creature
                        ) {
                            this.creatures[i].delayable = true;
                            this.creatures[i].delayed = false;
                        }
                    }
                    this.onStartOfRound();
                    this.nextCreature();
                },

                /* nextCreature()
                 *
                 * Activate the next creature in queue
                 */
            },
            {
                key: "nextCreature",
                value: function nextCreature() {
                    var _this7 = this;
                    this.UI.closeDash();
                    this.UI.btnToggleDash.changeState("normal");
                    this.grid.xray(
                        new _utility_hex__WEBPACK_IMPORTED_MODULE_12__.Hex(
                            -1,
                            -1,
                            null,
                            this
                        )
                    ); // Clear Xray

                    if (this.gameState == "ended") {
                        return;
                    }
                    this.stopTimer();
                    // Delay
                    setTimeout(function () {
                        var interval = setInterval(function () {
                            clearInterval(interval);
                            var differentPlayer = false;
                            if (_this7.queue.isCurrentEmpty()) {
                                _this7.nextRound(); // Switch to the next Round
                                return;
                            } else {
                                var next = _this7.queue.dequeue();
                                if (_this7.activeCreature) {
                                    differentPlayer =
                                        _this7.activeCreature.player !=
                                        next.player;
                                } else {
                                    differentPlayer = true;
                                }
                                var last = _this7.activeCreature;
                                _this7.activeCreature = next; // Set new activeCreature

                                if (!last.dead) {
                                    last.updateHealth(); // Update health display due to active creature change
                                }
                            }

                            if (_this7.activeCreature.player.hasLost) {
                                _this7.nextCreature();
                                return;
                            }

                            // Play heartbeat sound on other player's turn
                            if (differentPlayer) {
                                _this7.soundsys.playHeartBeat(
                                    "sounds/heartbeat"
                                );
                            }
                            _this7.log(
                                "Active Creature : %CreatureName" +
                                    _this7.activeCreature.id +
                                    "%"
                            );
                            _this7.activeCreature.activate();
                            // console.log(this.activeCreature);

                            // Show mini tutorial in the first round for each player
                            if (_this7.turn == 1) {
                                _this7.log(
                                    "The active unit has a flashing hexagon"
                                );
                                _this7.log(
                                    "It uses a plasma field to protect itself"
                                );
                                _this7.log(
                                    "Its portrait is displayed in the upper left"
                                );
                                _this7.log(
                                    "Under the portrait are the unit's abilities"
                                );
                                _this7.log(
                                    "The ones with revealed icons are usable"
                                );
                                _this7.log(
                                    "Use the last one to materialize a creature"
                                );
                                _this7.log(
                                    "Making units drains your plasma points"
                                );
                                _this7.log(
                                    "Press the hourglass icon to skip the turn"
                                );
                                _this7.log(
                                    "%CreatureName" +
                                        _this7.activeCreature.id +
                                        "%, press here to toggle tutorial!"
                                );
                            }

                            // Updates UI to match new creature
                            _this7.UI.updateActivebox();
                            _this7.updateQueueDisplay();
                            _this7.signals.creature.dispatch("activate", {
                                creature: _this7.activeCreature,
                            });
                            if (_this7.multiplayer && _this7.playersReady) {
                                _this7.gameplay.updateTurn();
                            } else {
                                _this7.playersReady = true;
                            }
                        }, 50);
                    }, 300);
                },
            },
            {
                key: "updateQueueDisplay",
                value: function updateQueueDisplay(excludeActiveCreature) {
                    if (this.UI) {
                        this.UI.updateQueueDisplay(excludeActiveCreature);
                    }
                },

                /* log(obj)
                 *
                 * obj :	Any :	Any variable to display in console and game log
                 *
                 * Display obj in the console log and in the game log
                 */
            },
            {
                key: "log",
                value: function log(obj, htmlclass) {
                    var ifNoTimestamp =
                        arguments.length > 2 && arguments[2] !== undefined
                            ? arguments[2]
                            : false;
                    // Formating
                    var stringConsole = obj,
                        stringLog = obj,
                        totalCreatures = this.creatures.length,
                        creature,
                        i;
                    for (i = 0; i < totalCreatures; i++) {
                        creature = this.creatures[i];
                        if (
                            creature instanceof
                            _creature__WEBPACK_IMPORTED_MODULE_17__.Creature
                        ) {
                            stringConsole = stringConsole.replace(
                                "%CreatureName" + i + "%",
                                creature.player.name + "'s " + creature.name
                            );
                            stringLog = stringLog.replace(
                                "%CreatureName" + i + "%",
                                "<span class='" +
                                    creature.player.color +
                                    "'>" +
                                    creature.name +
                                    "</span>"
                            );
                        }
                    }
                    if (
                        !_debug__WEBPACK_IMPORTED_MODULE_25__.DEBUG_DISABLE_GAME_STATUS_CONSOLE_LOG
                    ) {
                        console.log(stringConsole);
                    }
                    this.UI.chat.addMsg(stringLog, htmlclass, ifNoTimestamp);
                },
            },
            {
                key: "togglePause",
                value: function togglePause() {
                    if (this.freezedInput && this.pause) {
                        this.pause = false;
                        this.freezedInput = false;
                        this.pauseTime += new Date() - this.pauseStartTime;
                        jquery__WEBPACK_IMPORTED_MODULE_6__("#pause").remove();
                        this.startTimer();
                    } else if (!this.pause && !this.freezedInput) {
                        this.pause = true;
                        this.freezedInput = true;
                        this.pauseStartTime = new Date();
                        this.stopTimer();
                        jquery__WEBPACK_IMPORTED_MODULE_6__("#ui").append(
                            '<div id="pause">Pause</div>'
                        );
                    }
                },

                /* skipTurn()
                 *
                 * End turn for the current unit
                 */
            },
            {
                key: "skipTurn",
                value: function skipTurn(o) {
                    var _this8 = this;
                    // Removes temporary Creature from queue when Player skips turn
                    // while choosing materialize location for Creature
                    this.queue.removeTempCreature();

                    // Send skip turn to server

                    if (this.turnThrottle) {
                        return;
                    }
                    o = jquery__WEBPACK_IMPORTED_MODULE_6__.extend(
                        {
                            callback: function callback() {},
                            noTooltip: false,
                            tooltip: "Skipped",
                        },
                        o
                    );
                    this.turnThrottle = true;
                    this.UI.btnSkipTurn.changeState("disabled");
                    this.UI.btnDelay.changeState("disabled");
                    this.UI.btnAudio.changeState("disabled");
                    if (!o.noTooltip) {
                        this.activeCreature.hint(o.tooltip, "msg_effects");
                    }
                    setTimeout(function () {
                        _this8.turnThrottle = false;
                        _this8.UI.btnSkipTurn.changeState("normal");
                        if (
                            !_this8.activeCreature.hasWait &&
                            _this8.activeCreature.delayable &&
                            !_this8.queue.isCurrentEmpty()
                        ) {
                            _this8.UI.btnDelay.changeState("normal");
                        }
                        o.callback.apply();
                    }, 1000);
                    this.activeCreature.facePlayerDefault();
                    var skipTurn = new Date();
                    var p = this.activeCreature.player;
                    p.totalTimePool =
                        p.totalTimePool - (skipTurn - p.startTime);
                    this.pauseTime = 0;
                    this.activeCreature.deactivate(false);
                    this.nextCreature();

                    // Reset temporary Creature
                    this.queue.tempCreature = {};
                },

                /* delayCreature()
                 *
                 * Delay the action turn of the current creature
                 */
            },
            {
                key: "delayCreature",
                value: function delayCreature(o) {
                    var _this9 = this;
                    // Send skip turn to server
                    if (this.multiplayer) {
                        this.gameplay.delay();
                    }
                    if (this.turnThrottle) {
                        return;
                    }
                    if (
                        this.activeCreature.hasWait ||
                        !this.activeCreature.delayable ||
                        this.queue.isCurrentEmpty()
                    ) {
                        return;
                    }
                    o = jquery__WEBPACK_IMPORTED_MODULE_6__.extend(
                        {
                            callback: function callback() {},
                        },
                        o
                    );
                    this.turnThrottle = true;
                    this.UI.btnSkipTurn.changeState("disabled");
                    this.UI.btnDelay.changeState("disabled");
                    setTimeout(function () {
                        _this9.turnThrottle = false;
                        _this9.UI.btnSkipTurn.changeState("normal");
                        if (
                            !_this9.activeCreature.hasWait &&
                            _this9.activeCreature.delayable &&
                            !_this9.queue.isCurrentEmpty()
                        ) {
                            _this9.UI.btnDelay.changeState("slideIn");
                        }
                        o.callback.apply();
                    }, 1000);
                    var skipTurn = new Date(),
                        p = this.activeCreature.player;
                    p.totalTimePool =
                        p.totalTimePool - (skipTurn - p.startTime);
                    this.activeCreature.wait();
                    this.nextCreature();
                },
            },
            {
                key: "startTimer",
                value: function startTimer() {
                    var _this10 = this;
                    clearInterval(this.timeInterval);
                    this.activeCreature.player.startTime =
                        new Date() - this.pauseTime;
                    this.checkTime();
                    this.timeInterval = setInterval(function () {
                        _this10.checkTime();
                    }, this.checkTimeFrequency);
                },
            },
            {
                key: "stopTimer",
                value: function stopTimer() {
                    clearInterval(this.timeInterval);
                },

                /* checkTime()
                 */
            },
            {
                key: "checkTime",
                value: function checkTime() {
                    var date = new Date() - this.pauseTime,
                        p = this.activeCreature.player,
                        alertTime = 5,
                        // In seconds
                        msgStyle = "msg_effects",
                        totalPlayers = this.playerMode,
                        i;
                    p.totalTimePool = Math.max(p.totalTimePool, 0); // Clamp

                    // Check all timepools
                    // Check is always true for infinite time
                    var playerStillHaveTime = this.timePool > 0 ? false : true;
                    for (i = 0; i < totalPlayers; i++) {
                        // Each player
                        playerStillHaveTime =
                            this.players[i].totalTimePool > 0 ||
                            playerStillHaveTime;
                    }

                    // Check Match Time
                    if (!playerStillHaveTime) {
                        this.endGame();
                        return;
                    }
                    this.UI.updateTimer();

                    // Turn time and timepool not infinite
                    if (this.timePool > 0 && this.turnTimePool > 0) {
                        if (
                            (date - p.startTime) / 1000 > this.turnTimePool ||
                            p.totalTimePool - (date - p.startTime) < 0
                        ) {
                            if (p.totalTimePool - (date - p.startTime) < 0) {
                                p.deactivate(); // Only if timepool is empty
                            }

                            this.skipTurn();
                            return;
                        } else {
                            if (
                                (p.totalTimePool - (date - p.startTime)) /
                                    1000 <
                                alertTime
                            ) {
                                msgStyle = "damage";
                            }
                            if (
                                this.turnTimePool -
                                    (date - p.startTime) / 1000 <
                                    alertTime &&
                                this.UI.dashopen
                            ) {
                                // Alert
                                this.UI.btnToggleDash.changeState("glowing");
                                this.activeCreature.hint(
                                    Math.ceil(
                                        this.turnTimePool -
                                            (date - p.startTime) / 1000
                                    ),
                                    msgStyle
                                );
                            }
                        }
                    } else if (this.turnTimePool > 0) {
                        // Turn time is not infinite
                        if ((date - p.startTime) / 1000 > this.turnTimePool) {
                            this.skipTurn();
                            return;
                        } else {
                            if (
                                this.turnTimePool -
                                    (date - p.startTime) / 1000 <
                                    alertTime &&
                                this.UI.dashopen
                            ) {
                                // Alert
                                this.UI.btnToggleDash.changeState("glowing");
                                this.activeCreature.hint(
                                    Math.ceil(
                                        this.turnTimePool -
                                            (date - p.startTime) / 1000
                                    ),
                                    msgStyle
                                );
                            }
                        }
                    } else if (this.timePool > 0) {
                        // Timepool is not infinite
                        if (p.totalTimePool - (date - p.startTime) < 0) {
                            p.deactivate();
                            this.skipTurn();
                            return;
                        } else {
                            if (
                                p.totalTimePool - (date - p.startTime) <
                                alertTime
                            ) {
                                msgStyle = "damage";
                            }
                            if (
                                this.turnTimePool -
                                    (date - p.startTime) / 1000 <
                                    alertTime &&
                                this.UI.dashopen
                            ) {
                                // Alert
                                this.UI.btnToggleDash.changeState("glowing");
                                this.activeCreature.hint(
                                    Math.ceil(
                                        this.turnTimePool -
                                            (date - p.startTime) / 1000
                                    ),
                                    msgStyle
                                );
                            }
                        }
                    }
                },

                /* retrieveCreatureStats(type)
                 *
                 * type :	String :	Creature's type (ex: "0" for Dark Priest and "L2" for Magma Spawn)
                 *
                 * Query the database for creature stats
                 */
            },
            {
                key: "retrieveCreatureStats",
                value: function retrieveCreatureStats(type) {
                    var totalCreatures = this.creatureData.length,
                        i;
                    for (i = totalCreatures - 1; i >= 0; i--) {
                        if (
                            this.creatureData[i].type == type ||
                            this.creatureData[i].realm +
                                this.creatureData[i].level ==
                                type
                        ) {
                            if (!this.creatureData[i].type) {
                                // When type property is missing, create it using formula: concat(realm + level)
                                this.creatureData[i].type =
                                    this.creatureData[i].realm +
                                    this.creatureData[i].level;
                            }
                            return this.creatureData[i];
                        }
                    }
                },
            },
            {
                key: "triggerAbility",
                value: function triggerAbility(trigger, arg, retValue) {
                    var _this11 = this;
                    var _arg = (0,
                        _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[
                            "default"
                        ])(arg, 2),
                        triggeredCreature = _arg[0],
                        required = _arg[1];

                    // For triggered creature
                    triggeredCreature.abilities.forEach(function (ability) {
                        if (triggeredCreature.dead === true) {
                            return;
                        }
                        if (
                            _this11.triggers[trigger].test(ability.getTrigger())
                        ) {
                            if (ability.require(required)) {
                                retValue = ability.animation(required);
                            }
                        }
                    });

                    // For other creatures
                    this.creatures.forEach(function (creature) {
                        if (
                            triggeredCreature === creature ||
                            creature.dead === true
                        ) {
                            return;
                        }
                        creature.abilities.forEach(function (ability) {
                            if (
                                _this11.triggers[trigger + "_other"].test(
                                    ability.getTrigger()
                                )
                            ) {
                                if (ability.require(required)) {
                                    retValue = ability.animation(
                                        required,
                                        triggeredCreature
                                    );
                                }
                            }
                        });
                    });
                    return retValue;
                },
            },
            {
                key: "triggerEffect",
                value: function triggerEffect(trigger, arg, retValue) {
                    var _this12 = this;
                    var _arg2 = (0,
                        _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[
                            "default"
                        ])(arg, 2),
                        triggeredCreature = _arg2[0],
                        required = _arg2[1];

                    // For triggered creature
                    triggeredCreature.effects.forEach(function (effect) {
                        if (triggeredCreature.dead === true) {
                            return;
                        }
                        if (_this12.triggers[trigger].test(effect.trigger)) {
                            retValue = effect.activate(required);
                        }
                    });

                    // For other creatures
                    this.creatures.forEach(function (creature) {
                        if (
                            creature instanceof
                            _creature__WEBPACK_IMPORTED_MODULE_17__.Creature
                        ) {
                            if (
                                triggeredCreature === creature ||
                                creature.dead === true
                            ) {
                                return;
                            }
                            creature.effects.forEach(function (effect) {
                                if (
                                    _this12.triggers[trigger + "_other"].test(
                                        effect.trigger
                                    )
                                ) {
                                    retValue = effect.activate(required);
                                }
                            });
                        }
                    });
                    return retValue;
                },
            },
            {
                key: "triggerTrap",
                value: function triggerTrap(trigger, arg) {
                    var _this13 = this;
                    var _arg3 = (0,
                        _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[
                            "default"
                        ])(arg, 1),
                        triggeredCreature = _arg3[0];
                    triggeredCreature.hexagons.forEach(function (hex) {
                        hex.activateTrap(
                            _this13.triggers[trigger],
                            triggeredCreature
                        );
                    });
                },
            },
            {
                key: "triggerDeleteEffect",
                value: function triggerDeleteEffect(trigger, creature) {
                    var effects =
                            creature == "all" ? this.effects : creature.effects,
                        totalEffects = effects.length,
                        i;
                    for (i = 0; i < totalEffects; i++) {
                        var effect = effects[i];
                        if (
                            effect.turnLifetime > 0 &&
                            trigger === effect.deleteTrigger &&
                            this.turn - effect.creationTurn >=
                                effect.turnLifetime
                        ) {
                            effect.deleteEffect();
                            // Updates UI in case effect changes it
                            if (effect.target) {
                                effect.target.updateHealth();
                            }
                            i--;
                            totalEffects--;
                        }
                    }
                },
            },
            {
                key: "onStepIn",
                value: function onStepIn(creature, hex, opts) {
                    this.triggerAbility("onStepIn", arguments);
                    this.triggerEffect("onStepIn", arguments);
                    // Check traps last; this is because traps adds effects triggered by
                    // this event, which gets triggered again via G.triggerEffect. Otherwise
                    // the trap's effects will be triggered twice.
                    if (!opts || !opts.ignoreTraps) {
                        this.triggerTrap("onStepIn", arguments);
                    }
                },

                /**
                 * Be careful when using this trigger to apply damage as it can kill a creature
                 * before it has completed its movement, resulting in incorrect Drop placement
                 * and other bugs. Refer to Impaler Poisonous Vine ability for an example on how
                 * to delay damage until the end of movement.
                 *
                 * Removed individual args from definition because we are using the arguments variable.
                 */
            },
            {
                key: "onStepOut",
                value: function onStepOut /* creature, hex, callback */() {
                    this.triggerAbility("onStepOut", arguments);
                    this.triggerEffect("onStepOut", arguments);
                    // Check traps last; this is because traps add effects triggered by
                    // this event, which gets triggered again via G.triggerEffect. Otherwise
                    // the trap's effects will be triggered twice.
                    this.triggerTrap("onStepOut", arguments);
                },
            },
            {
                key: "onReset",
                value: function onReset(creature) {
                    this.triggerDeleteEffect("onReset", creature);
                    this.triggerAbility("onReset", arguments);
                    this.triggerEffect("onReset", [creature, creature]);
                },

                // Removed individual args from definition because we are using the arguments variable.
            },
            {
                key: "onStartPhase",
                value: function onStartPhase /* creature, callback */() {
                    var creature = arguments[0],
                        totalTraps = this.grid.traps.length,
                        trap,
                        i;
                    for (i = 0; i < totalTraps; i++) {
                        trap = this.grid.traps[i];
                        if (trap === undefined) {
                            continue;
                        }
                        if (trap.turnLifetime > 0) {
                            if (
                                this.turn - trap.creationTurn >=
                                trap.turnLifetime
                            ) {
                                if (trap.fullTurnLifetime) {
                                    if (
                                        trap.ownerCreature ==
                                        this.activeCreature
                                    ) {
                                        trap.destroy();
                                        i--;
                                    }
                                } else {
                                    trap.destroy();
                                    i--;
                                }
                            }
                        }
                    }
                    this.triggerDeleteEffect("onStartPhase", creature);
                    this.triggerAbility("onStartPhase", arguments);
                    this.triggerEffect("onStartPhase", [creature, creature]);
                },

                // Removed individual args from definition because we are using the arguments variable.
            },
            {
                key: "onEndPhase",
                value: function onEndPhase /* creature, callback */() {
                    var creature = arguments[0];
                    this.triggerDeleteEffect("onEndPhase", creature);
                    this.triggerAbility("onEndPhase", arguments);
                    this.triggerEffect("onEndPhase", [creature, creature]);
                },

                // Removed individual args from definition because we are using the arguments variable.
            },
            {
                key: "onStartOfRound",
                value: function onStartOfRound /* creature, callback */() {
                    this.triggerDeleteEffect("onStartOfRound", "all");
                },

                // Removed individual args from definition because we are using the arguments variable.
            },
            {
                key: "onCreatureMove",
                value: function onCreatureMove /* creature, hex, callback */() {
                    this.triggerAbility("onCreatureMove", arguments);
                },

                // Removed individual args from definition because we are using the arguments variable.
            },
            {
                key: "onCreatureDeath",
                value: function onCreatureDeath /* creature, callback */() {
                    var creature = arguments[0];
                    this.triggerAbility("onCreatureDeath", arguments);
                    this.triggerEffect("onCreatureDeath", [creature, creature]);

                    // Looks for traps owned by this creature and destroy them
                    this.grid.traps
                        .filter(function (trap) {
                            return (
                                trap.turnLifetime > 0 &&
                                trap.fullTurnLifetime &&
                                trap.ownerCreature == creature
                            );
                        })
                        .forEach(function (trap) {
                            return trap.destroy();
                        });

                    // Look for effects owned by this creature and destroy them if necessary
                    this.effects
                        .filter(function (effect) {
                            return (
                                effect.owner === creature &&
                                effect.deleteOnOwnerDeath
                            );
                        })
                        .forEach(function (effect) {
                            effect.deleteEffect();
                            // Update UI in case effect changes it
                            if (effect.target) {
                                effect.target.updateHealth();
                            }
                        });
                },
            },
            {
                key: "onCreatureSummon",
                value: function onCreatureSummon(creature, callback) {
                    console.log(creature, callback);
                    this.triggerAbility("onCreatureSummon", [
                        creature,
                        creature,
                        callback,
                    ]);
                    this.triggerEffect("onCreatureSummon", [
                        creature,
                        creature,
                    ]);
                },

                // Removed individual args from definition because we are using the arguments variable.
            },
            {
                key: "onEffectAttach",
                value: function onEffectAttach(
                    creature,
                    effect /*, callback */
                ) {
                    this.triggerEffect("onEffectAttach", [creature, effect]);
                },
            },
            {
                key: "onUnderAttack",
                value: function onUnderAttack(creature, damage) {
                    this.triggerAbility("onUnderAttack", arguments, damage);
                    this.triggerEffect("onUnderAttack", arguments, damage);
                    return damage;
                },

                // Removed individual args from definition because we are using the arguments variable.
            },
            {
                key: "onDamage",
                value: function onDamage /* creature, damage */() {
                    this.triggerAbility("onDamage", arguments);
                    this.triggerEffect("onDamage", arguments);
                },

                // Removed individual args from definition because we are using the arguments variable.
            },
            {
                key: "onHeal",
                value: function onHeal /* creature, amount */() {
                    this.triggerAbility("onHeal", arguments);
                    this.triggerEffect("onHeal", arguments);
                },
            },
            {
                key: "onAttack",
                value: function onAttack(creature, damage) {
                    this.triggerAbility("onAttack", arguments, damage);
                    this.triggerEffect("onAttack", arguments, damage);
                },
            },
            {
                key: "findCreature",
                value: function findCreature(o) {
                    var ret = [],
                        o2 = jquery__WEBPACK_IMPORTED_MODULE_6__.extend(
                            {
                                team: -1,
                                // No team
                                type: "--", // Dark Priest
                            },
                            o
                        ),
                        creatures = this.creatures,
                        totalCreatures = creatures.length,
                        creature,
                        match,
                        wrongTeam,
                        i;
                    for (i = 0; i < totalCreatures; i++) {
                        creature = creatures[i];
                        if (
                            creature instanceof
                            _creature__WEBPACK_IMPORTED_MODULE_17__.Creature
                        ) {
                            match = true;
                            jquery__WEBPACK_IMPORTED_MODULE_6__.each(
                                o2,
                                function (key, val) {
                                    if (key == "team") {
                                        if (val == -1) {
                                            return;
                                        }
                                        if (val instanceof Array) {
                                            wrongTeam = true;
                                            if (
                                                val.indexOf(creature[key]) != -1
                                            ) {
                                                wrongTeam = false;
                                            }
                                            if (wrongTeam) {
                                                match = false;
                                            }
                                            return;
                                        }
                                    }
                                    if (creature[key] != val) {
                                        match = false;
                                    }
                                }
                            );
                            if (match) {
                                ret.push(creature);
                            }
                        }
                    }
                    return ret;
                },
            },
            {
                key: "clearOncePerDamageChain",
                value: function clearOncePerDamageChain() {
                    var creatures = this.creatures,
                        totalCreatures = creatures.length,
                        totalEffects = this.effects.length,
                        creature,
                        totalAbilities,
                        i,
                        j;
                    for (i = totalCreatures - 1; i >= 0; i--) {
                        creature = this.creatures[i];
                        if (
                            creature instanceof
                            _creature__WEBPACK_IMPORTED_MODULE_17__.Creature
                        ) {
                            totalAbilities = creature.abilities.length;
                            for (j = totalAbilities - 1; j >= 0; j--) {
                                creature.abilities[
                                    j
                                ].triggeredThisChain = false;
                            }
                        }
                    }
                    for (i = 0; i < totalEffects; i++) {
                        this.effects[i].triggeredThisChain = false;
                    }
                },

                /* endGame()
                 *
                 * End the game and print stats
                 */
            },
            {
                key: "endGame",
                value: function endGame() {
                    this.soundsys.stopMusic();
                    this.endGameSound = this.soundsys.playSFX("sounds/drums");
                    this.stopTimer();
                    this.gameState = "ended";

                    //-------End bonuses--------//
                    for (var i = 0; i < this.playerMode; i++) {
                        // No fleeing
                        if (!this.players[i].hasFled) {
                            this.players[i].score.push({
                                type: "nofleeing",
                            });
                        }

                        // Surviving Creature Bonus
                        var immortal = true;
                        for (
                            var j = 0;
                            j < this.players[i].creatures.length;
                            j++
                        ) {
                            if (!this.players[i].creatures[j].dead) {
                                if (this.players[i].creatures[j].type != "--") {
                                    this.players[i].score.push({
                                        type: "creaturebonus",
                                        creature: this.players[i].creatures[j],
                                    });
                                } else {
                                    // Dark Priest Bonus
                                    this.players[i].score.push({
                                        type: "darkpriestbonus",
                                    });
                                }
                            } else {
                                immortal = false;
                            }
                        }

                        // Immortal
                        if (immortal && this.players[i].creatures.length > 1) {
                            // At least 1 creature summoned
                            this.players[i].score.push({
                                type: "immortal",
                            });
                        }
                    }
                    this.UI.endGame();
                },
            },
            {
                key: "action",
                value: function action(o, opt) {
                    var _this14 = this;
                    var defaultOpt = {
                        callback: function callback() {},
                    };
                    opt = jquery__WEBPACK_IMPORTED_MODULE_6__.extend(
                        defaultOpt,
                        opt
                    );
                    this.clearOncePerDamageChain();
                    switch (o.action) {
                        case "move":
                            this.activeCreature.moveTo(
                                this.grid.hexes[o.target.y][o.target.x],
                                {
                                    callback: opt.callback,
                                }
                            );
                            break;
                        case "skip":
                            this.skipTurn({
                                callback: opt.callback,
                            });
                            break;
                        case "delay":
                            this.delayCreature({
                                callback: opt.callback,
                            });
                            break;
                        case "flee":
                            this.activeCreature.player.flee({
                                callback: opt.callback,
                            });
                            break;
                        case "ability": {
                            var args =
                                jquery__WEBPACK_IMPORTED_MODULE_6__.makeArray(
                                    o.args[1]
                                );
                            if (o.target.type == "hex") {
                                args.unshift(
                                    this.grid.hexes[o.target.y][o.target.x]
                                );
                                this.activeCreature.abilities[o.id].animation2({
                                    callback: opt.callback,
                                    arg: args,
                                });
                            }
                            if (o.target.type == "creature") {
                                args.unshift(this.creatures[o.target.crea]);
                                this.activeCreature.abilities[o.id].animation2({
                                    callback: opt.callback,
                                    arg: args,
                                });
                            }
                            if (o.target.type == "array") {
                                var array = o.target.array.map(function (item) {
                                    return _this14.grid.hexes[item.y][item.x];
                                });
                                args.unshift(array);
                                this.activeCreature.abilities[o.id].animation2({
                                    callback: opt.callback,
                                    arg: args,
                                });
                            }
                            break;
                        }
                    }
                },
            },
            {
                key: "getImage",
                value: function getImage(url) {
                    var img = new Image();
                    img.src = url;
                    img.onload = function () {
                        // No-op
                    };
                },
            },
            {
                key: "resetGame",
                value: function resetGame() {
                    this.endGameSound.pause();
                    this.UI.showGameSetup();
                    this.stopTimer(this.timeInterval);
                    this.players = [];
                    this.creatures = [];
                    this.effects = [];
                    this.activeCreature = {
                        id: 0,
                    };
                    this.matchid = null;
                    this.playersReady = false;
                    this.preventSetup = false;
                    this.animations =
                        new _animations__WEBPACK_IMPORTED_MODULE_7__.Animations(
                            this
                        );
                    this.queue =
                        new _creature_queue__WEBPACK_IMPORTED_MODULE_8__.CreatureQueue(
                            this
                        );
                    this.creatureData = [];
                    this.pause = false;
                    this.gameState = "initialized";
                    this.availableCreatures = [];
                    this.animationQueue = [];
                    this.configData = {};
                    this.match = {};
                    this.gameplay = {};
                    this.matchInitialized = false;
                    this.firstKill = false;
                    this.freezedInput = false;
                    this.turnThrottle = false;
                    this.turn = 0;
                    this.gamelog.reset();
                },

                /**
                 * Setup signal channels based on a list of channel names.
                 *
                 * @example setupSignalChannels(['ui', 'game'])
                 * // ... another file
                 * this.game.signals.ui.add((message, payload) => console.log(message, payload), this);
                 *
                 * @see https://photonstorm.github.io/phaser-ce/Phaser.Signal.html
                 *
                 * @param {array} channels List of channel names.
                 * @returns {object} Phaser signals keyed by channel name.
                 */
            },
            {
                key: "setupSignalChannels",
                value: function setupSignalChannels(channels) {
                    var signals = channels.reduce(function (acc, curr) {
                        return _objectSpread(
                            _objectSpread({}, acc),
                            {},
                            (0,
                            _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__[
                                "default"
                            ])(
                                {},
                                curr,
                                new phaser__WEBPACK_IMPORTED_MODULE_21__.Signal()
                            )
                        );
                    }, {});
                    return signals;
                },
            },
        ]
    );
    return Game;
})();

//# sourceURL=webpack://ancientbeast/./src/game.js?
