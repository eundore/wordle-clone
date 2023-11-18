// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/components/Header/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = definHeader;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var Header = /*#__PURE__*/function (_HTMLElement) {
  _inherits(Header, _HTMLElement);
  var _super = _createSuper(Header);
  function Header() {
    var _this;
    _classCallCheck(this, Header);
    _this = _super.call(this);
    _this.innerHTML = "Wordle";
    return _this;
  }
  return _createClass(Header);
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
function definHeader() {
  customElements.define("main-header", Header);
}
},{}],"src/constants/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WORDS = exports.ROW_LENGTH = exports.KEYS = exports.COLUMN_LENGTH = void 0;
var COLUMN_LENGTH = exports.COLUMN_LENGTH = 5;
var ROW_LENGTH = exports.ROW_LENGTH = 6;
var KEYS = exports.KEYS = [["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"], ["a", "s", "d", "f", "g", "h", "j", "k", "l"], [{
  data: "↵",
  label: "enter",
  name: "enter"
}, "z", "x", "c", "v", "b", "n", "m", {
  data: "←",
  label: "backspace",
  name: '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20" class="game-icon" data-testid="icon-backspace"><path fill="#ffffff" d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"></path></svg>'
}]];
var WORDS = exports.WORDS = ["right", "tibet", "zakat", "droid", "byway", "swole", "nahua", "veery", "goods", "marri", "dukka", "egham", "parle", "wiggy", "tihwa", "cuddy", "hoban", "hejaz", "choke", "embus", "fundy", "agura", "algin", "comal", "ounce", "zappa", "brice", "laura", "gobat", "stank", "buchu", "caria", "micra", "penni", "leady", "dippy", "shoad", "arras", "abbey", "hogue", "mache", "glubb", "pricy", "peace", "pansy", "shaft", "dicey", "bronc", "lovat", "caman", "squaw", "stake", "lasso", "lyard", "naive", "fency", "amber", "lyell", "redux", "ackee", "revel", "round", "speck", "pupil", "convo", "rainy", "friml", "nadir", "lotta", "ayana", "calah", "tying", "soyuz", "fucus", "bryce", "annie", "agave", "kerry", "chill", "small", "frank", "carat", "indri", "ellis", "gotta", "farsi", "sofar", "asana", "grove", "micah", "ccanz", "luzon", "clunk", "cukor", "gippy", "subsc", "depot", "forde", "catch", "tarai", "relay", "mosby", "sorta", "zaria", "hindi", "ewald", "stone", "yucko", "penki", "monro", "missy", "wisby", "whiny", "arepa", "afrin", "shula", "snoot", "radio", "niddm", "vycor", "tanta", "ranke", "bakst", "serry", "unbox", "pilaf", "azeri", "taupe", "quinn", "ovule", "gully", "flagg", "biach", "sitka", "douce", "bardo", "fukui", "foley", "amine", "intuc", "chiro", "talaq", "cabet", "besot", "adolf", "leven", "scorn", "hallo", "yetta", "tebow", "terri", "polyp", "chela", "tatty", "karun", "luton", "lohan", "vogie", "tuktu", "kaska", "rangy", "gyppo", "mahan", "orbit", "sadie", "octad", "metra", "washy", "dixie", "tabes", "ronin", "holly", "gavin", "gamin", "jibba", "toddy", "smush", "imine", "goyen", "wrest", "nazir", "toast", "chiai", "buffa", "staid", "kinin", "wirer", "almon", "poult", "jabot", "tussi", "hmong", "banal", "joule", "lisle", "quiet", "snafu", "mense", "shope", "bunny", "azoth", "krems", "lhasa", "dylan", "udall", "monza", "hadas", "eusol", "stahl", "sandy", "panga", "toady", "ceric", "culch", "creon", "steig", "lebes", "foggy", "llama", "valve", "salto", "gonne", "stoat", "bleat", "brill", "weyse", "kyzyl", "varix", "tutto", "thymy", "crumb", "recto", "hadst", "gosse", "boson", "patti", "yokel", "cynic", "bleed", "moira", "wince", "chaps", "rabat", "seely", "emmet", "juice", "buteo", "kirby", "outen", "sheer", "abide", "wppsi", "arbil", "pitri", "lamia", "cauri", "sarod", "dhikr", "ohmic", "borel", "buzau", "mammy", "sedan", "fauve", "faded", "balch", "frosh", "prier", "bunin", "rekey", "waltz", "pleon", "louse", "laoag", "moldy", "massy", "kufic", "erode", "elsan", "ghoul", "jehol", "linen", "quran", "kelly", "murra", "tubby", "glove", "glebe", "capiz", "chirr", "zooks", "berry", "taxon", "vagus", "ousel", "dynel", "clown", "zloty", "aught", "swonk", "aunis", "rigor", "verve", "scrag", "stonk", "unset", "flare", "curly", "matsu", "cloak", "dirge", "rocky", "pollo", "ruben", "cupid", "silko", "lendl", "input", "mowat", "baeck", "shiny", "droit", "bield", "query", "spark", "balpa", "pryer", "cesta", "inion", "aduki", "flunk", "sonsy", "nikko", "trime", "motif", "borer", "abled", "junky", "leaky", "riven", "zaddy", "sarre", "spork", "darts", "pogey", "rebar", "afire", "revue", "tepic", "crios", "boost", "pheba", "rhoda", "tyler", "dubbo", "warty", "mondo", "karsh", "banda", "shame", "viron", "noose", "ponca", "nabis", "serin", "sheba", "dovap", "basil", "hally", "grama", "sghwr", "murex", "thank", "stime", "joual", "lamus", "plack", "beige", "mayan", "biggs", "oaked", "mtech", "tache", "tartu", "fayre", "eblis", "janet", "uvula", "targe", "india", "lwoff", "minah", "zebec", "exude", "spoon", "boggy", "sibyl", "later", "tyson", "riata", "donga", "scrod", "fayal", "evita", "cambs", "craxi", "diels", "busra", "bonze", "lyase", "yakka", "faccp", "erbil", "subha", "stage", "itchy", "hobby", "obeah", "ennog", "phyle", "thoth", "tithe", "stark", "buffo", "soony", "patos", "passy", "lunik", "viseu", "nevis", "gesso", "dough", "quoit", "minsk", "gross", "graft", "natal", "pardi", "lansa", "laval", "sefer", "beryl", "merge", "crook", "snead", "torah", "dandy", "acrid", "azido", "monad", "clegg", "sassy", "drone", "prime", "sylva", "vidya", "vigny", "powan", "ganof", "marya", "combo", "gopak", "hupeh", "sheik", "anova", "crate", "tacan", "kinky", "eruct", "serax", "fella", "fiver", "aruru", "ester", "spicy", "potto", "piece", "seism", "saice", "grote", "easel", "tyner", "spasm", "metre", "mafia", "habit", "saman", "hopak", "lobby", "asser", "vroom", "karla", "osage", "sibiu", "asura", "plano", "gleam", "ulsan", "amino", "almah", "angus", "turps", "robot", "choon", "spica", "gezer", "hoser", "lamar", "clare", "hania", "aster", "awner", "asean", "bosun", "vodka", "climb", "throe", "saser", "emoji", "orion", "lyons", "fluey", "iviza", "culet", "makna", "gonof", "skill", "sulfa", "herem", "spoil", "fleek", "semen", "churl", "ozark", "offal", "draft", "stipo", "lento", "dubos", "sahel", "sixmo", "bectu", "silly", "bergh", "sprog", "datuk", "jugal", "argas", "varna", "kukui", "ouida", "awoke", "molto", "hella", "dicty", "skirr", "jawed", "butsu", "pavis", "tulip", "clomp", "baiza", "shady", "stade", "darky", "major", "conad", "homie", "gogra", "banns", "modoc", "humor", "boche", "prang", "niger", "malle", "hbsag", "evers", "shote", "arber", "timon", "romeo", "sukuk", "dewan", "stowp", "spirt", "taman", "creep", "nosey", "haver", "bowse", "anent", "jamie", "iscsi", "gride", "flite", "blida", "dinar", "wrick", "lipan", "spaak", "secam", "ozawa", "unary", "chari", "swoon", "urger", "pseud", "covin", "dildo", "tryma", "stile", "match", "dirty", "copht", "fairy", "rason", "ramos", "cadge", "excel", "shalt", "avens", "guare", "lludd", "poise", "clang", "enola", "bemba", "wonga", "sappy", "zygon", "bowls", "swazi", "bigly", "vimen", "tevet", "crura", "phage", "agger", "prowl", "volar", "mande", "drawn", "greer", "uhuru", "sushi", "tauon", "vowel", "ranga", "hulky", "daesh", "spide", "aidin", "mouse", "maple", "dulse", "event", "yukky", "froth", "tambo", "bulge", "lesbo", "bornu", "fatty", "baird", "navel", "bruno", "logic", "cohab", "quoth", "sarky", "syver", "navar", "lumpy", "madly", "texan", "sinal", "usbeg", "ahull", "venus", "paste", "renin", "rotor", "regal", "balbo", "dwaal", "bolus", "peavy", "clava", "malay", "hence", "parse", "pisay", "curst", "lemur", "mirza", "telos", "xeres", "norad", "pinny", "drung", "mungo", "quirt", "manor", "salts", "girsh", "halas", "piles", "wafer", "reuse", "scion", "caste", "samoa", "erwin", "gater", "boysy", "andie", "tonga", "crake", "grief", "edsel", "snell", "basti", "troth", "runup", "kedge", "buran", "chile", "dells", "luray", "diped", "palki", "mourn", "seedy", "milky", "sadhu", "grist", "spare", "winge", "fazed", "zingy", "sofia", "davie", "flaky", "fiume", "maser", "thiol", "osaka", "erika", "festy", "fhlbs", "alick", "those", "rhumb", "kondo", "clone", "usnea", "widow", "genie", "havel", "bluet", "gemot", "bundh", "potus", "tango", "ziska", "moble", "annul", "crust", "cosec", "kauru", "bhaji", "horus", "weepy", "titty", "unrwa", "frape", "ionia", "crowe", "vouch", "teres", "ornis", "basal", "tchad", "hiram", "gower", "sweet", "roach", "ronco", "kauai", "kuksu", "selma", "hills", "amiss", "pussy", "manas", "caryl", "ujiji", "ombre", "minim", "weill", "prune", "iulus", "shoji", "ophir", "leach", "pavid", "maroc", "slime", "artur", "donna", "haiku", "suede", "allow", "inapt", "ditto", "chink", "mujik", "berar", "tigon", "skies", "atman", "pasta", "nullo", "halma", "campo", "shuck", "luria", "fifth", "irina", "zarqa", "sated", "saber", "seoul", "faldo", "hsien", "dated", "pixel", "tizzy", "avast", "hafiz", "eagle", "sneck", "bacca", "lulab", "azide", "yclad", "torne", "hoare", "helio", "xebec", "luffa", "rouge", "guano", "lahar", "bialy", "lenis", "caput", "middx", "konev", "diene", "adler", "rowan", "ronde", "dubna", "golem", "field", "bland", "moron", "ought", "arris", "largo", "whomp", "cooch", "thach", "saadi", "entad", "stool", "swear", "danke", "brian", "lenya", "horta", "kogal", "konak", "tides", "hines", "gussy", "blume", "rooty", "cling", "seine", "meant", "earth", "plier", "flood", "grace", "smout", "olwen", "norge", "palma", "clipt", "hives", "comte", "scaup", "fytte", "liman", "chuff", "exile", "ilves", "sumba", "waver", "lenox", "aalto", "trill", "tuart", "stink", "spear", "sidhe", "zukor", "irwin", "handy", "bipoc", "react", "abbie", "bruhn", "acute", "soupy", "edgar", "dyaus", "heres", "baugh", "bight", "angle", "kandy", "volti", "vagal", "moray", "fitna", "antic", "tooke", "knopf", "threw", "colum", "chirk", "tiler", "hubel", "digby", "wonna", "ramie", "moria", "greys", "acidy", "wizen", "dalit", "elara", "ewery", "blunt", "zumba", "apnea", "ipsus", "nitid", "cilia", "cover", "regis", "murre", "sepia", "tsade", "durzi", "palsa", "lungs", "jerid", "brine", "plant", "miles", "tuner", "dying", "geber", "blowy", "fuchs", "wanky", "scuff", "faena", "fiery", "braai", "resaw", "imido", "salat", "inane", "cheep", "saury", "botel", "ament", "lexan", "fishy", "nauch", "braza", "assai", "qishm", "velum", "keats", "cleck", "gooey", "floss", "lizzy", "vicky", "ensor", "gonna", "sissy", "sills", "amuck", "afnor", "agnew", "lexis", "manon", "genic", "ambry", "grani", "grump", "means", "oaten", "grift", "oller", "panth", "kansu", "tinea", "drier", "sling", "fully", "masur", "nasho", "ducat", "eldon", "spiky", "adown", "llwyd", "vilma", "domed", "thrix", "boers", "coamo", "tutti", "hetty", "darby", "zhuzh", "femic", "embar", "aslib", "mopes", "chaka", "bagel", "ceded", "begem", "abyss", "volte", "trave", "inner", "brisk", "patis", "gushy", "merca", "copra", "expwy", "druse", "apart", "agree", "lille", "coact", "tepee", "trini", "debut", "blois", "world", "obrit", "merit", "notes", "silva", "bonus", "pills", "helix", "swirl", "mohwa", "coast", "liber", "occam", "waken", "thane", "secos", "condo", "goopy", "witty", "wocas", "tried", "caval", "sekos", "oryol", "siren", "bongo", "pinko", "plane", "guiro", "gitim", "espoo", "swage", "brain", "avgas", "vioxx", "thirl", "gryke", "emden", "bruch", "annex", "fugio", "kylix", "durra", "bondi", "mccoy", "mayon", "cello", "lurid", "prism", "babul", "hertz", "biome", "erisa", "sapir", "leafy", "netty", "gigli", "piker", "seler", "suomi", "gyoza", "plook", "upend", "bract", "peart", "schul", "clair", "hadji", "buffy", "epact", "salta", "neill", "caaba", "hazer", "equid", "kythe", "study", "groma", "skien", "lupus", "wilma", "tesol", "tromp", "danzi", "ofris", "ploce", "nawab", "liard", "menon", "rasse", "wharf", "troke", "strop", "hydro", "denim", "bbsrc", "amaze", "rasta", "super", "smile", "syene", "youth", "doura", "legit", "video", "corno", "swith", "naiad", "iraqi", "griot", "speer", "balkh", "decaf", "arrow", "temps", "goudy", "ukase", "folie", "padre", "drunk", "pingo", "qiana", "rooky", "ramus", "heber", "humid", "witte", "zaire", "burin", "alate", "nzcer", "ailey", "apsis", "glaze", "ponce", "lulac", "bwana", "truce", "tahoe", "thrum", "mulki", "debir", "being", "racer", "jeeps", "numen", "runny", "oasis", "irbil", "davys", "womyn", "gnome", "depth", "jewry", "petty", "dogma", "carib", "idyll", "prexy", "deign", "peaky", "murky", "pliny", "pamuk", "azapo", "prawn", "cutie", "faial", "gueux", "grebe", "breve", "agnel", "coypu", "wilga", "cinch", "guyon", "hovey", "pasha", "lyric", "murti", "libau", "crwth", "ayous", "lysol", "repay", "cavel", "belay", "balmy", "nixie", "gitmo", "zomig", "sexed", "masai", "sixth", "lorca", "sonya", "dedal", "tinny", "kaput", "swede", "patio", "rovno", "grice", "smoke", "woald", "herat", "hosta", "brink", "frons", "cmiiw", "morse", "skein", "snake", "mamba", "macaw", "soper", "davit", "anode", "alden", "ewart", "dewar", "snick", "shied", "realm", "primo", "eagre", "barmy", "bumex", "joust", "gamow", "tolyl", "crass", "sente", "regan", "addax", "celan", "upton", "merci", "indre", "calpe", "nuque", "spake", "skool", "gonif", "skirl", "botte", "almug", "capot", "nonce", "corby", "helgi", "pooch", "viral", "yssel", "hooey", "doran", "advil", "lubra", "bindi", "maneb", "dhaka", "sinew", "adieu", "ceiba", "wrong", "kilim", "rupia", "oflem", "corvo", "crete", "silex", "leigh", "manta", "scaly", "smolt", "syros", "leery", "cruck", "maize", "parca", "skeet", "baron", "regma", "malar", "worse", "bizet", "plash", "alure", "amain", "joppa", "owner", "drack", "hivid", "facer", "debye", "judas", "rollo", "wilno", "pedon", "hemal", "sadat", "inlaw", "nazis", "bogle", "frcvs", "nivkh", "rammy", "cadet", "hinge", "cathy", "salah", "ginge", "himbo", "gusty", "dyula", "smatv", "bring", "hunan", "sabah", "begin", "albee", "uncus", "freak", "ninth", "rinse", "fauna", "helot", "ibada", "sudra", "funis", "aries", "piave", "magus", "gnash", "ochre", "ernie", "gazar", "brush", "conto", "marne", "ensue", "uncut", "razoo", "monde", "vajra", "drail", "wussy", "alvar", "mulct", "sloka", "basis", "laban", "roose", "salmi", "ionic", "lifer", "thant", "kauch", "ascap", "flown", "penal", "adeem", "lysin", "spiny", "soane", "psych", "kamik", "ruana", "china", "eosin", "wotan", "dashy", "gally", "liken", "peeve", "agent", "scowl", "model", "bragi", "spain", "imide", "omber", "oleum", "leman", "reest", "calve", "mandi", "edith", "slapp", "lytic", "abase", "tamis", "czech", "rumpo", "scrum", "henry", "gimpy", "sheen", "swain", "nasus", "canea", "dholl", "obole", "pydna", "lousy", "logan", "proxy", "momme", "timor", "liven", "clyde", "vigil", "scend", "sniff", "stork", "altai", "modem", "khoja", "nippy", "tabby", "salii", "alogi", "pusan", "amate", "lamas", "kamet", "hexad", "slave", "dinky", "ofgem", "befit", "frizz", "alcid", "munro", "orsha", "warta", "belle", "limit", "vault", "muses", "vireo", "gelid", "ashet", "swami", "duran", "calyx", "quaky", "kopit", "balak", "spitz", "zoril", "reast", "nisus", "kranj", "hapai", "panic", "meson", "arius", "kajar", "scrim", "deane", "amigo", "obiit", "bound", "japan", "dolce", "trudy", "thera", "gutsy", "peony", "decca", "meshy", "agung", "assad", "tenno", "roget", "benin", "twine", "craal", "shirk", "binky", "taste", "yauld", "hygge", "umami", "akron", "shirt", "anaya", "tharp", "diouf", "biisk", "karat", "dwang", "slier", "stray", "bloop", "filch", "faker", "ofuro", "maund", "accad", "karst", "safar", "brute", "surly", "forel", "tomsk", "nomen", "burke", "peres", "archy", "eight", "simla", "plebs", "cronk", "shelf", "fancy", "bandh", "tylor", "fluor", "parol", "brics", "bilgy", "womxn", "voter", "slipe", "blais", "panne", "alien", "kulla", "hanks", "iamaw", "otago", "pucka", "uriel", "lefty", "poboy", "nanny", "amble", "spyri", "boozy", "jihad", "cheju", "kyack", "gweru", "flied", "nerts", "zante", "chick", "yowie", "rayed", "menam", "mazey", "nikon", "viper", "quota", "colic", "fargo", "ligne", "nitti", "korma", "dirac", "calix", "spuky", "buyer", "tutee", "dipso", "roneo", "mahoe", "crepe", "spilt", "month", "shura", "woman", "dwell", "tunka", "croce", "izzat", "khazi", "slant", "nsaid", "encke", "siege", "bacha", "timur", "kroon", "curli", "dubai", "aging", "hight", "loyal", "agena", "yodle", "ratha", "shiva", "intal", "nikau", "scope", "flies", "wuhan", "wahoo", "kabwe", "cheek", "daley", "their", "jumbo", "avram", "recpt", "cairn", "cooze", "ligan", "fedex", "felis", "dhoti", "surra", "inurn", "tryke", "viola", "boxer", "mealy", "appal", "civic", "lewis", "beach", "jumpy", "rhein", "trone", "fhlba", "fracp", "whirl", "atoll", "chany", "meiny", "banks", "sturt", "iowan", "desai", "abate", "ahaus", "casey", "hebei", "adobo", "cbing", "borne", "abash", "dives", "heder", "farro", "pfalz", "hooch", "alope", "woose", "kochi", "noway", "fanny", "glock", "webby", "urena", "astir", "uredo", "hakea", "shott", "hatti", "hosey", "finzi", "ivied", "chevy", "dunno", "genro", "braxy", "quorn", "smish", "pelly", "mouth", "marie", "comex", "sonal", "perky", "belau", "hubby", "spode", "oleic", "agita", "sousa", "cinna", "bevel", "stent", "ossie", "phene", "cimon", "feast", "muted", "mopey", "picul", "kluck", "sarai", "ansar", "broun", "which", "genck", "foist", "rosin", "moxie", "cruor", "irone", "scena", "sulky", "banon", "tales", "traps", "danai", "lurgy", "byrne", "vegan", "efate", "slaty", "sugar", "flout", "claim", "tanka", "wisht", "plain", "vivax", "cocom", "sudan", "flaps", "jaggy", "prana", "ingle", "rosas", "scour", "shawn", "negus", "deism", "panda", "piney", "whity", "aptly", "knack", "siret", "weedy", "locke", "atilt", "fiord", "schmo", "rover", "educe", "blond", "quare", "aztec", "possy", "debar", "slype", "ugali", "bison", "mtdna", "stowe", "borak", "fuchu", "patna", "menat", "nytol", "runed", "quern", "wirra", "kadai", "corea", "oujda", "sande", "faqir", "blink", "perea", "aloha", "athos", "ledgy", "kafue", "mitra", "frail", "mongo", "poilu", "plumb", "frink", "forum", "gauzy", "oxbow", "longe", "jinne", "karaj", "hilla", "manic", "sarum", "tries", "clump", "meter", "gorey", "feria", "blanc", "jewel", "brahe", "typey", "snark", "farce", "patsy", "blaeu", "chufa", "axman", "pikey", "nemea", "rerun", "alive", "larky", "pesty", "cobra", "stang", "adman", "where", "achan", "whoso", "cilla", "mabel", "early", "bardy", "wrath", "frass", "kansa", "culpa", "duple", "ozena", "imbue", "solon", "amiga", "monod", "cites", "blini", "woven", "kreon", "boomy", "lossy", "minni", "awful", "sears", "hokey", "amato", "triad", "kathy", "frome", "chord", "bajan", "unsay", "uriah", "negro", "caleb", "rosie", "usage", "biysk", "corey", "tutty", "heavy", "ecchi", "okapi", "tesla", "cymry", "minto", "lunar", "fassa", "rebid", "corgi", "shack", "prose", "liter", "whorf", "dahna", "yemen", "rifle", "guava", "ghyll", "sword", "covet", "error", "hater", "decan", "boong", "jacob", "armco", "tammy", "ofili", "flung", "brava", "abram", "clasp", "saddo", "glamp", "manga", "ebert", "idasa", "soong", "needy", "saran", "atony", "ancho", "doozy", "salam", "embed", "elias", "zosyn", "bazin", "kodok", "tbyte", "squib", "celeb", "matai", "dagan", "yauco", "proem", "prius", "verne", "ratio", "punan", "compt", "domme", "yawny", "torse", "salvo", "blain", "fusil", "knock", "retox", "segue", "chock", "hoagy", "henan", "donny", "tease", "sorgo", "opsin", "wormy", "nabob", "kheda", "ejido", "inept", "reply", "skank", "kippy", "ravel", "savvy", "unlax", "ladon", "lotte", "drawl", "thraw", "fabre", "skint", "betsy", "ameds", "qursh", "baire", "doula", "atget", "bucca", "acock", "arnel", "wagyu", "dolos", "value", "cabby", "unman", "molar", "liwan", "ickes", "deffo", "sooty", "alala", "quaco", "crabs", "wicca", "chubb", "lidar", "hiree", "salic", "sherd", "lease", "taler", "yeats", "ohrid", "nokyo", "roast", "chyle", "index", "icymi", "smith", "baker", "pasok", "dusky", "shrew", "dania", "putto", "sycon", "naomi", "cosas", "kelpy", "gibbs", "elgar", "aydin", "sedna", "macer", "stupe", "mired", "siang", "jammy", "patch", "worcs", "jerne", "tuber", "tubus", "karen", "freud", "upter", "folic", "leidy", "yonge", "nooky", "jeans", "swill", "andes", "gawra", "poser", "tonus", "krona", "berks", "begun", "nadph", "pious", "vocal", "yaaas", "colin", "ileal", "iwaki", "coopt", "khama", "choom", "smaze", "fount", "folia", "leech", "strep", "mauby", "punic", "floyd", "piled", "above", "quake", "throw", "happy", "ender", "whisk", "akkad", "jerez", "tooth", "tutsi", "rowen", "hazel", "miche", "allot", "gleet", "loire", "known", "makar", "felly", "smuts", "bligh", "percy", "monal", "damia", "sacks", "latah", "arson", "laird", "moola", "knies", "verna", "bulky", "shank", "xerox", "hunky", "taine", "ethel", "slyly", "mecon", "botha", "pilau", "quest", "rspca", "elgon", "prove", "pissy", "dukes", "ulcer", "optic", "argal", "trend", "djaja", "nkosi", "grind", "feral", "puffy", "kerma", "colly", "enure", "brawn", "alger", "kaaba", "tupik", "haoma", "angor", "vogts", "grave", "micky", "bloat", "yourn", "natty", "couru", "aston", "lassi", "whore", "doyen", "wroth", "swamp", "cenis", "vibey", "texel", "tinge", "britt", "pulka", "spohr", "flame", "losel", "quipu", "heyse", "haste", "eland", "sidle", "annam", "indic", "dacko", "droop", "spean", "biker", "coiba", "makai", "spill", "laius", "corky", "urban", "skype", "burpy", "marga", "byrds", "worde", "outer", "locus", "torii", "ambit", "nutsy", "ratan", "sinon", "proof", "sybil", "lassa", "klebs", "titre", "idiot", "hoogh", "whang", "nguni", "moses", "errol", "hoxha", "arose", "artex", "thief", "takao", "lusty", "raver", "lucas", "walsh", "pairs", "carol", "caner", "bonce", "mogul", "whips", "menad", "carie", "toran", "naxos", "nomad", "ennis", "pasay", "angst", "enoki", "evora", "busby", "arica", "quito", "injun", "lords", "wadai", "honor", "aloof", "haiti", "esher", "rsfsr", "oslav", "edile", "pinch", "aioli", "lapin", "playa", "cogon", "chemo", "hotel", "wheen", "lange", "aalst", "curse", "radix", "mucid", "finis", "pinto", "dower", "nubia", "tovey", "ducal", "bembo", "frayn", "lynda", "azote", "asian", "troat", "tenty", "bolar", "bilge", "duffy", "slimy", "kneel", "march", "oxter", "minus", "ncpac", "latin", "jinja", "duala", "cezve", "splad", "prosy", "plate", "agate", "gorse", "gunge", "jugum", "axile", "pemba", "tegea", "guija", "octal", "simic", "reave", "tenor", "relic", "heinz", "ileac", "ghaut", "bekaa", "visit", "fleur", "bioko", "filth", "level", "yanan", "chose", "gymel", "plath", "glean", "monet", "cajan", "capra", "imena", "ervil", "bolas", "snack", "wintu", "pyrex", "vassa", "ritzy", "tails", "thuya", "blitz", "engle", "drook", "layer", "himes", "groin", "senti", "steve", "pogge", "askey", "reach", "motel", "lethe", "sevan", "smock", "cecum", "cameo", "smote", "havoc", "lippe", "conon", "churr", "grunt", "galah", "drear", "onkus", "flail", "laari", "aqaba", "ameba", "naris", "tempt", "tabun", "hnrna", "bless", "boart", "upset", "cease", "thanx", "pecan", "aweto", "trait", "spurn", "gaius", "boole", "atrek", "torsk", "chide", "regin", "lowan", "fruit", "banjo", "caver", "sasha", "specs", "meaty", "wesak", "kanak", "voces", "yumpy", "whort", "rafvr", "queef", "addie", "tsana", "vries", "pudge", "plait", "bizzy", "demon", "saarc", "exist", "emmer", "zineb", "fries", "kibei", "medal", "unwit", "crunk", "farad", "steak", "storage", "reins", "cream", "tiran", "hatch", "mucky", "idaho", "lulav", "tawse", "salal", "parve", "polis", "often", "mckay", "pzazz", "scrog", "faggi", "bantu", "quaff", "caren", "segno", "gouda", "genoa", "gibus", "manat", "duero", "forty", "charm", "elion", "latus", "qeshm", "tyche", "scone", "sarfu", "flair", "stutz", "umber", "janny", "kriol", "rolfe", "chuuk", "marsh", "gulag", "splat", "briar", "cornu", "kamba", "taxco", "lucre", "renan", "tampa", "evens", "ibsen", "durry", "tazza", "ramet", "ovett", "fulah", "ectad", "enter", "peggy", "eridu", "doona", "hunks", "primp", "franc", "arrah", "masan", "kotch", "spang", "hanky", "flats", "incel", "prahu", "crank", "skirt", "fpsps", "cento", "tythe", "neato", "argun", "kurds", "hamer", "elroy", "stair", "patri", "berat", "menes", "yeast", "hambo", "parks", "cruft", "crena", "ascon", "melic", "liney", "slunk", "ukaea", "linux", "posit", "cahan", "islip", "barky", "aural", "wacky", "memel", "vegie", "chive", "muddy", "ibadi", "fanon", "aisha", "nukus", "towel", "cutch", "hollo", "fluid", "aidos", "toner", "tabla", "thali", "cocky", "faced", "servo", "paeon", "katla", "mucho", "impar", "anise", "agata", "pyxis", "clack", "thuja", "hakim", "shtup", "bmews", "provo", "toxic", "kenya", "coyly", "hyper", "sight", "boule", "norco", "porae", "nevin", "hamas", "serai", "blest", "glede", "drupe", "araks", "tanga", "peter", "corso", "slurp", "butyl", "neral", "camel", "nauru", "mecca", "fugle", "nyoro", "clomb", "ilium", "unify", "bhili", "phase", "huggy", "goner", "haydn", "forby", "prion", "mphil", "scout", "asine", "fslic", "score", "moult", "drest", "eager", "nappy", "snort", "depew", "loppy", "yampa", "snook", "glume", "gloam", "fiber", "leavy", "naima", "mensa", "corps", "nrotc", "cowps", "shiso", "jules", "moshi", "emacs", "cavie", "penne", "cozey", "steal", "gloat", "copal", "newly", "haole", "satan", "buyup", "aleve", "oakum", "heave", "erato", "bicol", "tudor", "routh", "bodhi", "bogor", "tinct", "roman", "finer", "larum", "agaze", "vidar", "voxel", "miter", "mesic", "sally", "berio", "aswan", "axion", "pines", "pippa", "nobly", "spect", "salop", "expel", "estop", "unhip", "agnon", "runic", "trank", "rolla", "speir", "sonar", "unity", "pedro", "thigh", "abamp", "order", "hagen", "oribi", "awash", "joyce", "about", "lenca", "vogel", "epsom", "skier", "yucky", "winny", "temne", "terna", "choco", "edyth", "slack", "finca", "cheka", "rheda", "ruska", "morph", "mossi", "dwale", "adore", "pigmy", "pinxy", "burry", "bento", "moism", "loper", "calif", "haden", "misty", "gould", "yurev", "forge", "abuzz", "claes", "owing", "yasht", "hilda", "looby", "stagg", "dorba", "paria", "tayra", "quite", "minor", "teens", "cacky", "artic", "aimee", "dulce", "mooch", "estes", "wrens", "pabst", "crick", "young", "jiggy", "indie", "image", "hubli", "dowel", "belyi", "neiva", "lurch", "tripe", "ninib", "sales", "hound", "glbtq", "wrack", "dolus", "slosh", "stein", "uncas", "bivvy", "horme", "lacus", "jaffa", "flexo", "jumar", "amity", "abbed", "crise", "tichy", "fauld", "abaco", "short", "intoe", "viren", "meths", "inbox", "gauss", "nzrfu", "ormuz", "gains", "pater", "antre", "angie", "schwa", "bathe", "lowry", "weser", "teide", "sapid", "lucid", "loris", "cobot", "golgi", "hooks", "fatah", "loewy", "asper", "rouyn", "durex", "debra", "wylie", "meros", "wield", "coala", "khaki", "tepid", "grown", "utzon", "whiff", "libra", "herts", "frame", "huron", "blate", "roupy", "cadre", "dewey", "herne", "squiz", "surat", "nixer", "tapis", "helve", "igloo", "spank", "hythe", "pants", "ammon", "vined", "tulpa", "morel", "quine", "spade", "chewy", "atone", "nyaff", "close", "simpy", "mcjob", "wolds", "niton", "rally", "dirae", "cabal", "homme", "olein", "nasby", "loads", "vanir", "sculp", "canst", "dawah", "pohai", "synge", "scaud", "guild", "snipe", "sophy", "jello", "petit", "pyric", "tajik", "leroy", "frsnz", "cholo", "maqui", "greed", "fling", "slily", "forky", "mater", "cayey", "rebus", "spall", "ponzi", "yayoi", "fugal", "arles", "jones", "oncer", "drops", "fight", "proud", "lukan", "brede", "cloky", "telco", "neuss", "gemmy", "poove", "amrit", "tilth", "chant", "sorus", "diana", "orant", "leave", "lathe", "vodou", "healy", "waddy", "dread", "dolly", "donar", "heidi", "tical", "heloc", "siepi", "welty", "namur", "ajman", "irgun", "dummy", "ofcom", "mcfee", "neher", "omani", "ladin", "tuzla", "rural", "ready", "baffy", "gmdss", "graph", "swish", "pilum", "rahab", "kavya", "motor", "multi", "janky", "pulpy", "quint", "thyme", "semis", "newry", "favid", "louis", "melty", "tondo", "chary", "valid", "zoaea", "lapel", "cavil", "might", "mycid", "augur", "aloin", "wokas", "poley", "thieu", "ramal", "skiff", "siris", "sivan", "alban", "italy", "sixte", "junta", "waist", "curch", "hards", "crony", "undro", "nepad", "reify", "cigfa", "gamey", "korah", "manna", "pluto", "teddy", "noyon", "scopa", "simba", "welch", "aiora", "gunny", "doris", "hurri", "trick", "scoby", "sligo", "frump", "fraud", "while", "lithy", "gyani", "sucky", "degas", "sware", "nairu", "nanna", "ninon", "mainz", "sambo", "leben", "groat", "spoor", "metol", "ebony", "blind", "haugh", "upham", "taken", "emcee", "eurax", "storm", "elope", "unsew", "urewe", "aspic", "nomex", "hades", "aleck", "mamey", "sarge", "guise", "auger", "payer", "afyon", "gates", "leppy", "ekman", "pratt", "dunaj", "fibre", "fromm", "leahy", "aarau", "tough", "goren", "degum", "rydal", "twins", "palla", "inert", "cecal", "altus", "anion", "doing", "cower", "cabin", "dryly", "holon", "nahal", "radom", "polos", "pappy", "vulva", "samos", "groan", "essay", "ohlin", "methb", "adlai", "jabir", "clwyd", "dixit", "ceroc", "nones", "nigga", "oscar", "valse", "trigo", "tenge", "hanoi", "boree", "actor", "irony", "demur", "helga", "kiang", "aport", "bobby", "reffo", "adour", "livor", "niece", "nikky", "mitla", "henna", "shire", "bayle", "nates", "curve", "rumba", "newel", "bebop", "shays", "whoop", "denny", "skald", "akure", "druid", "duane", "finch", "lithe", "leapt", "lomax", "axiom", "wimpy", "irazu", "daily", "sperm", "gauge", "jedda", "armed", "soult", "begad", "lycra", "snips", "barro", "firth", "began", "welsh", "tench", "tangy", "dnepr", "kodel", "kymry", "chalk", "jotun", "coorg", "tungo", "sakai", "extra", "freer", "recon", "oflag", "burka", "talky", "nydia", "dheas", "bevan", "brale", "jnana", "diyer", "cause", "draff", "miass", "dowdy", "trugo", "haler", "balla", "cajal", "miser", "comms", "dexie", "namen", "aglet", "dodds", "rules", "choko", "duped", "ichor", "solan", "ricci", "micro", "outdo", "macho", "flute", "welly", "foehn", "merde", "hudud", "saxon", "sunni", "dowie", "broil", "norma", "agony", "crump", "blend", "untie", "lever", "never", "elint", "waste", "naacp", "akebi", "chard", "circe", "skeef", "spent", "franz", "aggro", "aulos", "abuja", "duppy", "baler", "immie", "snowy", "gyges", "spout", "tevez", "tumid", "katie", "makua", "cloth", "chair", "store", "dyfed", "poway", "gansu", "jelly", "tobit", "miffy", "goral", "flank", "junto", "pitch", "manak", "kulan", "silky", "opium", "simul", "barge", "pudgy", "bylaw", "alofi", "kombu", "kugel", "hitch", "chest", "gleba", "bello", "ruche", "donus", "teach", "deice", "usphs", "pokey", "pacey", "telic", "haply", "salol", "edict", "iffen", "acron", "taxis", "botch", "aesir", "narky", "abaca", "chung", "litho", "argue", "joist", "lowes", "light", "tetra", "radge", "totes", "bijou", "matte", "dicot", "artal", "inure", "notus", "hammy", "mitre", "brith", "usury", "yearn", "elect", "herod", "ginep", "lanny", "petti", "cadiz", "immix", "sicko", "blood", "prick", "arcus", "mokha", "melee", "kopje", "segor", "caddy", "genet", "gable", "nudge", "sakel", "stroy", "modge", "vidin", "glass", "ushki", "adust", "fritz", "tirol", "rajah", "heath", "wedgy", "kisan", "vital", "ilmen", "built", "brant", "whelp", "tabor", "races", "flora", "blear", "benne", "kalam", "kolar", "riley", "wurst", "juana", "taihu", "toyon", "kosha", "oared", "faith", "front", "lying", "qualm", "lgbtq", "osmic", "sobor", "merlo", "jacal", "wythe", "lahti", "laing", "pirog", "kabir", "vinny", "motty", "bedew", "redon", "mommy", "drove", "devil", "ysaye", "width", "abbai", "situs", "ghats", "funic", "ither", "liger", "grass", "shirr", "opole", "cheth", "spoof", "bosky", "swati", "ameer", "amort", "lucca", "nitra", "nohow", "covey", "slash", "basad", "fumet", "tobey", "kalif", "adnah", "swarf", "sutra", "gloom", "remix", "klint", "chiba", "dript", "urawa", "quale", "awacs", "lemme", "palea", "kleve", "sadly", "stall", "pommy", "burro", "cerro", "malik", "hofer", "deify", "buddy", "thema", "cropt", "esbat", "haley", "soggy", "dealt", "vidal", "dacha", "flour", "parts", "lazio", "csiro", "luach", "annal", "agape", "imbed", "bronx", "bevin", "waite", "crypt", "vouge", "comes", "grill", "yours", "gadid", "marae", "eaves", "ppnet", "loewe", "rhine", "since", "dinna", "alter", "mosey", "bairn", "edger", "exalt", "onlay", "woken", "vinum", "hafun", "jebus", "helen", "brick", "redox", "prink", "thegn", "cindy", "mosso", "femmy", "biddy", "alexa", "sabot", "priam", "wispy", "papaw", "punty", "pupin", "avery", "squab", "lakin", "anima", "waley", "dogie", "vitry", "thumb", "halon", "surah", "bandy", "karri", "kutch", "haunt", "fatso", "arsis", "aetna", "toile", "miler", "showy", "fiona", "bendy", "tokay", "niosh", "skean", "howff", "privy", "whorl", "twort", "canal", "stays", "uzbeg", "peele", "carse", "owens", "seuss", "pouch", "abort", "alfie", "abhor", "ceres", "koala", "honan", "wyeth", "suzie", "furze", "dolby", "creps", "ickle", "zille", "aleus", "abaya", "valor", "amida", "abihu", "calmy", "devon", "ploat", "louie", "sonia", "siirt", "madre", "teary", "hicky", "oshun", "cotta", "balky", "pilos", "april", "abdon", "nudie", "title", "zyban", "armor", "jacks", "akala", "nhtsa", "strow", "lacey", "anhui", "betti", "lazar", "vinic", "kiver", "satay", "strut", "spend", "fouls", "meryl", "jambi", "moros", "amuse", "resto", "crept", "limes", "cosby", "tanto", "couth", "holey", "juvie", "claro", "vince", "orang", "gooch", "isnad", "ratch", "hindu", "hocus", "harry", "satem", "libel", "radha", "risen", "kente", "deneb", "stops", "licht", "hoist", "grieg", "gombe", "nanus", "aroid", "ajmer", "widdy", "civil", "diwan", "daffy", "yaqui", "tanya", "xhosa", "royal", "denar", "horne", "poker", "rheum", "morea", "miaul", "dorab", "pubis", "noisy", "solve", "worms", "fuage", "byron", "leeds", "valla", "ental", "lepto", "knowe", "dumas", "skulk", "reyes", "grimy", "stela", "briny", "pinky", "kwela", "shunt", "hoyle", "afoot", "fecit", "suger", "spook", "alwyn", "celom", "hanse", "crile", "argol", "aholt", "tawny", "ninja", "tagus", "eyrie", "getup", "soler", "ngoma", "chain", "skase", "horae", "pareu", "llano", "foram", "folio", "invar", "nihon", "scute", "oudry", "dilly", "assay", "bercy", "tokyo", "taboo", "clear", "cowal", "bluff", "perch", "menem", "cacao", "susan", "licit", "ketch", "palos", "iglau", "wirtz", "frost", "furry", "lehua", "socle", "decyl", "bushy", "plage", "bakra", "spray", "igfet", "dover", "swapo", "braun", "borax", "fluty", "kiaat", "rotan", "rashi", "benny", "rebop", "juror", "indio", "scarf", "izzak", "outro", "meier", "lawks", "vomer", "compo", "mukha", "goosy", "weary", "lofty", "reich", "nicht", "moral", "oyama", "fakir", "berle", "prill", "cohen", "spile", "modal", "jidda", "nyaya", "bough", "bunko", "leges", "based", "breed", "incur", "nigra", "clepe", "cadgy", "gulch", "showa", "paean", "zelos", "emend", "hulse", "grits", "hussy", "sweyn", "lawes", "stoep", "stand", "shoon", "troll", "slope", "lukas", "pedes", "pross", "craic", "chado", "stood", "verdi", "metmb", "print", "tasty", "kendo", "weeny", "abbas", "boofy", "broca", "cycas", "verra", "cleft", "mitty", "benzo", "olive", "gruff", "plunk", "anglo", "nitty", "boise", "sweir", "lotze", "plata", "wanna", "tired", "ethic", "horsa", "queen", "beria", "breen", "admix", "domal", "dhobi", "sized", "khufu", "demit", "laity", "jumna", "wodge", "redly", "retem", "zooid", "alwin", "popov", "weeds", "polar", "maybe", "beers", "testa", "dufus", "icily", "hausa", "omagh", "dross", "forth", "woods", "chasm", "macao", "slate", "parvo", "glace", "giddy", "labov", "nitre", "stoor", "ganja", "cushy", "saugh", "gouge", "jazzy", "bobol", "uxmal", "adana", "whizz", "cates", "baden", "smoko", "adept", "flags", "bangs", "prase", "petro", "tryst", "bogey", "lushy", "vixen", "koppa", "balao", "pepys", "ragga", "mardy", "griff", "moped", "perse", "monck", "badly", "gimme", "humph", "tangi", "yield", "codex", "cissy", "dykon", "sober", "alert", "milan", "genin", "stony", "speed", "banat", "fionn", "molly", "vasal", "vivid", "coven", "ephor", "urase", "tonal", "cunha", "kyoga", "stane", "point", "among", "klutz", "nexus", "glyph", "elute", "lopid", "awato", "orson", "diddy", "ghana", "paula", "remus", "dotty", "pinup", "haulm", "ascus", "actin", "rawls", "crier", "craig", "gorky", "lunge", "usitc", "pitta", "heiss", "lupin", "nanai", "lecce", "paoli", "vatic", "clept", "mixer", "kylie", "asyut", "woozy", "dnase", "tomba", "culex", "hijab", "hooke", "ndola", "koloa", "rojak", "odets", "entry", "appia", "aduwa", "tempo", "teena", "delos", "frown", "tulle", "hudna", "bench", "fewer", "purse", "skite", "brail", "aspen", "algor", "sebum", "shane", "pareo", "lozol", "bette", "gaper", "cuomo", "eaton", "stans", "glint", "pyran", "ootid", "werra", "lamed", "matey", "twyer", "seven", "josep", "varro", "cumae", "henle", "ollie", "fluon", "pyxie", "cluny", "mimeo", "halle", "ocean", "jinni", "aarti", "tolar", "lucky", "dairy", "exert", "glute", "worry", "bidet", "anger", "theft", "oruro", "spunk", "trove", "debit", "ardeb", "lippy", "tiros", "synod", "water", "bihar", "golda", "wraac", "nafta", "jaded", "alist", "rimer", "heian", "guppy", "smite", "hotan", "capon", "hoffa", "honda", "askos", "wingy", "sauce", "dvina", "fenny", "josie", "north", "gbari", "rieti", "rurik", "tumor", "druze", "moire", "bueno", "pinsk", "hooky", "wreck", "ogham", "swath", "wessi", "blade", "drive", "arbor", "coper", "ivory", "scrub", "spool", "lincs", "befog", "monge", "tonne", "trode", "roxas", "speke", "unisa", "piano", "magda", "selam", "organ", "homey", "opera", "putty", "latex", "paige", "infix", "clara", "costa", "basso", "bigot", "mooli", "ditzy", "ricey", "malty", "skene", "ucatt", "gault", "queue", "velox", "grody", "lymph", "trade", "kelep", "carob", "saiva", "puggy", "tezel", "fadge", "slart", "foxed", "gavel", "milko", "godey", "duroc", "aerie", "doeth", "opine", "gehry", "makah", "icker", "bombe", "deets", "meath", "hodge", "alone", "pusey", "coria", "cutin", "cowes", "myope", "casas", "alpha", "yikes", "sagan", "aoede", "colza", "konbu", "femme", "looie", "medea", "amice", "doggo", "shufu", "strip", "debug", "admin", "beale", "yonks", "reign", "zibet", "poona", "aroha", "argil", "vigor", "impel", "troia", "rigid", "douro", "merak", "nuddy", "outta", "spelk", "della", "mavis", "kabul", "conga", "zaidi", "speel", "gaily", "caryn", "altar", "furan", "jolie", "crape", "tenth", "irons", "plumy", "bouar", "curvy", "arsed", "twirp", "cully", "haute", "gudea", "belie", "douma", "datum", "istle", "hoick", "steer", "fjord", "loady", "dopey", "remit", "sided", "frond", "frigg", "swung", "trull", "music", "marcy", "scott", "brave", "frier", "raita", "shine", "weigh", "pawky", "pella", "agile", "kesha", "hempy", "zerit", "squeg", "posen", "ceorl", "ricin", "groot", "punga", "unsub", "again", "irbid", "drain", "kline", "butch", "libri", "genre", "gluey", "fletc", "quena", "pekin", "fayum", "cirio", "icann", "sense", "horal", "syrah", "purty", "truss", "kurta", "seise", "gutta", "bethe", "pipal", "hurly", "limbo", "nymph", "maros", "jason", "apple", "filmi", "taleb", "comic", "exeat", "batum", "parma", "jujuy", "james", "areal", "narco", "rodeo", "bowen", "peppy", "pilot", "patin", "jowly", "warks", "inari", "nobby", "navew", "lotus", "awake", "pains", "burma", "cagey", "ishum", "toxin", "trawl", "oaken", "sigyn", "kovno", "salpa", "arene", "abele", "scraw", "moton", "grapy", "check", "buroo", "chunk", "vinci", "elisa", "decry", "embla", "plush", "cayes", "phano", "chore", "group", "booby", "unarm", "matzo", "naker", "tempi", "sough", "glaur", "olden", "mambo", "barra", "pygmy", "obote", "oxide", "mudir", "glitz", "froze", "asses", "lisse", "rnzaf", "veldt", "kench", "hijra", "squit", "laker", "shade", "killy", "meyer", "derby", "unlit", "swift", "flyte", "today", "zebra", "steyr", "yulan", "richt", "kirke", "kawau", "sedum", "cough", "sepik", "maven", "asher", "cleon", "haram", "shahn", "barre", "lilac", "pagan", "cried", "canid", "prunt", "reedy", "lempa", "janus", "chita", "sever", "ahern", "powys", "pozzy", "daddy", "tyree", "rigel", "stead", "xylyl", "batwa", "coral", "whish", "atrip", "venin", "feces", "chian", "shema", "burra", "lamda", "nogai", "guido", "sigil", "louhi", "hapuu", "daych", "flory", "pulmo", "agone", "tweed", "copse", "ghazi", "aimak", "qabis", "sabre", "eagan", "float", "biffy", "oromo", "works", "nylon", "kasme", "kazan", "hoxie", "jassy", "paper", "amowt", "wavey", "dubhe", "comfy", "elder", "goldi", "ormer", "prone", "prato", "fauns", "stell", "metic", "abrin", "savor", "solar", "angel", "pregl", "lorre", "rider", "crown", "mound", "dulia", "sruti", "delle", "rhyme", "crisp", "chott", "ovary", "plump", "camus", "pyoid", "filet", "yakow", "hamza", "gogol", "diose", "galle", "biped", "tocol", "kayes", "willa", "reval", "babel", "penna", "pearl", "unzip", "jokai", "grike", "spiel", "geest", "baric", "jilin", "spahi", "oldie", "elihu", "skate", "uncia", "amgun", "sexto", "worst", "midge", "poesy", "nazca", "acker", "audit", "evatt", "plume", "adsum", "arlon", "actra", "trump", "imroz", "miner", "ileus", "queso", "frics", "wadna", "agamy", "dobla", "halog", "myron", "datal", "frith", "arrau", "abuse", "nerva", "haifa", "prize", "bippy", "pasty", "cheat", "craft", "defer", "ahold", "tawie", "fagin", "herma", "alvin", "pagad", "numic", "gomel", "glare", "adobe", "combe", "vizor", "kishi", "chiel", "sepoy", "fatwa", "azoic", "fluky", "julia", "nesta", "orpen", "hazan", "schav", "ergot", "ottar", "arran", "fonda", "lenny", "knout", "tumen", "orton", "morro", "edwin", "sunup", "blite", "pshaw", "rorem", "cauld", "trike", "cutup", "oxeye", "bedim", "movie", "kiwis", "fence", "remak", "anton", "yapon", "lorry", "plebe", "expat", "shush", "flier", "blurt", "logos", "kalpa", "ogden", "wagga", "jougs", "shilh", "enemy", "loose", "utile", "leger", "gomer", "faqih", "simms", "pinel", "stull", "yoker", "murat", "rater", "muley", "pongo", "allyl", "pablo", "cahow", "truth", "taraz", "grosz", "orate", "funds", "serow", "punky", "flong", "jasey", "ambon", "omuta", "mboya", "pekoe", "nodus", "skimp", "furor", "moggy", "ellen", "nidge", "shake", "parry", "bower", "cudjo", "kebab", "erica", "stour", "ugric", "jomon", "kylin", "sodom", "sirup", "aboil", "donut", "saucy", "dress", "duras", "douai", "vague", "baith", "hyoid", "unfit", "voema", "nixon", "tower", "santo", "osset", "blent", "agley", "meigs", "urmia", "ippon", "nigel", "kevel", "ixtle", "yuman", "syrup", "fylde", "slice", "monks", "cooke", "hecht", "mcrae", "bundu", "await", "posho", "supra", "resit", "alapa", "lenin", "gance", "clime", "liana", "offer", "sizer", "pandy", "lopez", "squad", "baath", "dayak", "drily", "argie", "jubal", "vying", "flowy", "brier", "coapt", "clive", "cloze", "jutty", "coeur", "elegy", "aside", "barba", "jesus", "chloe", "trass", "loony", "torso", "crome", "bacon", "shone", "humic", "unfix", "tongs", "spine", "alyce", "waspy", "break", "party", "wonky", "magog", "hyson", "boldo", "pagne", "klein", "nudgy", "cuneo", "skeif", "mocha", "kassa", "mains", "stain", "brood", "prong", "toman", "vesta", "darcy", "ganda", "gurry", "sisal", "bread", "anoka", "lived", "rayah", "jehad", "intel", "cesti", "saona", "flynn", "molal", "lorna", "nervi", "click", "eyrir", "lanza", "earom", "yamen", "ovolo", "deave", "prise", "foote", "banka", "scoop", "idler", "perey", "papal", "pibal", "mohur", "waitz", "droll", "rushy", "tufty", "tildy", "sengi", "meiji", "perak", "pasco", "colby", "tiled", "bonny", "fusor", "jinks", "cusco", "willy", "toefl", "clary", "roton", "sewan", "xysma", "plouk", "scale", "skiey", "lurex", "ankus", "liner", "quiff", "ciano", "fecht", "grail", "drank", "bodge", "azlon", "tawai", "thong", "three", "squat", "spate", "galax", "civet", "balun", "dayan", "brose", "picus", "dabba", "alfur", "enrol", "serra", "debus", "holst", "agama", "ditch", "cider", "gutty", "yukon", "trash", "trabs", "kitaj", "zaydi", "havre", "bowed", "trans", "troop", "paddy", "roset", "jammu", "dolma", "scody", "hayes", "melba", "faint", "dumps", "seton", "pager", "hullo", "scads", "mirth", "baldy", "emlyn", "flint", "hedge", "arawn", "alost", "lyman", "intro", "coxey", "essen", "beery", "fitly", "bream", "artie", "villi", "sudor", "adige", "bowie", "potty", "abbot", "kauri", "danby", "nanak", "piste", "rente", "alias", "socko", "piper", "peene", "blush", "lecky", "yeisk", "mynes", "write", "presa", "lovey", "jinju", "doily", "dagda", "bowel", "boito", "wazoo", "porny", "islam", "oater", "metho", "praia", "madam", "bicep", "argot", "dobro", "tinia", "crimp", "heart", "flamy", "swale", "pinoy", "tommy", "zippy", "zomba", "elver", "poppy", "anata", "cargo", "spier", "bliny", "amass", "zocor", "defog", "atria", "gassy", "mimic", "kelek", "tobin", "palme", "nonet", "troas", "pavia", "amora", "aznar", "cuffs", "hikoi", "shawm", "hance", "evict", "gamut", "betel", "amram", "caius", "vigia", "campy", "riant", "krill", "crine", "acoma", "aaron", "kafir", "katar", "choir", "brume", "kursk", "sarka", "mapau", "shout", "moers", "kindy", "ginzo", "skive", "bubba", "quote", "nowel", "oxime", "pasig", "trier", "mucus", "braga", "attar", "wacke", "carpo", "torsi", "moqui", "mayst", "pique", "massa", "kicky", "terai", "minke", "sprat", "embow", "laten", "peers", "taxol", "hants", "colet", "drink", "shoyu", "binet", "cords", "diary", "gabor", "cards", "beefy", "hutch", "laski", "zooty", "blues", "dipad", "zadar", "ihram", "ascii", "knurl", "geoid", "rival", "riyal", "octan", "topic", "salty", "iznik", "minch", "scran", "sharp", "jingo", "piety", "ricky", "messy", "seder", "ectal", "elfin", "lundy", "trace", "hadar", "slung", "lefse", "rabot", "karan", "endue", "lunch", "pashm", "jolly", "volta", "manus", "titer", "chaos", "sound", "korda", "tours", "zetia", "sauch", "basho", "night", "runch", "emote", "ginny", "acrux", "plaid", "swanz", "tread", "circs", "anear", "tikal", "codon", "given", "gobby", "floor", "puppp", "laois", "kamut", "ribat", "haori", "orono", "biota", "pisco", "court", "mumps", "heigh", "fetor", "catho", "zelig", "glenn", "fried", "indus", "hames", "footy", "leant", "gauze", "haida", "serps", "prole", "busty", "polje", "ahtna", "humpy", "usbek", "kahlo", "kiawe", "seami", "henze", "farhi", "galea", "waals", "spahn", "scall", "damon", "after", "sikra", "yabby", "scoff", "scene", "adowa", "segal", "anyon", "chine", "forgo", "pulao", "moose", "alack", "pewit", "twirl", "epoxy", "freon", "lodge", "nelly", "cetyl", "godly", "shiel", "fizzy", "leith", "grope", "skull", "ahuru", "conic", "velma", "farcy", "singe", "rewin", "turki", "shell", "bleep", "eolic", "aboon", "coomb", "kulun", "fader", "ieper", "soldo", "acton", "torus", "muzak", "hsdpa", "bluey", "hurst", "plink", "kasha", "dinka", "assez", "shore", "other", "puppy", "balti", "zoser", "brest", "woden", "croup", "trine", "seepy", "mflem", "banco", "jurel", "capet", "lieve", "seles", "lares", "jinan", "treen", "kusch", "sloan", "gabar", "boink", "gloze", "leoni", "tebet", "ratel", "icing", "skelm", "gawsy", "loupe", "abohm", "totty", "verny", "spell", "xerus", "blurb", "filar", "quick", "waugh", "promo", "shool", "under", "aitch", "waney", "human", "tapas", "paxos", "tarot", "seppo", "donee", "tears", "avert", "nubby", "jiffy", "meade", "flesh", "venge", "ceuta", "gummy", "eames", "berth", "smarm", "ikeja", "quilt", "dakar", "sotol", "strap", "babar", "chape", "moist", "gular", "ample", "schiz", "traik", "shari", "focus", "padua", "kerel", "honed", "gript", "feint", "bania", "wells", "mousy", "goofy", "lobar", "hokum", "mucro", "hello", "wares", "firie", "mobie", "venlo", "mylar", "greek", "splay", "xiang", "jared", "glinn", "korea", "scoot", "houri", "lumme", "swine", "cenci", "kevin", "chime", "gunky", "ascot", "fremd", "ridge", "annan", "utica", "citta", "khios", "crack", "kissy", "crewe", "gecko", "knosp", "motet", "swamy", "piggy", "saida", "mezzo", "letup", "haven", "nehru", "ninny", "keyed", "salus", "stare", "lover", "paley", "asset", "lathi", "rabid", "desex", "negev", "vidor", "churn", "simar", "apply", "boone", "sammy", "ofgas", "mauve", "cyber", "trali", "epulo", "nooit", "paisa", "taupo", "imago", "unser", "swats", "butty", "naked", "wagon", "theca", "levee", "eerie", "longa", "dorky", "drouk", "pinza", "wilco", "kiasu", "niort", "fiske", "buraq", "sorry", "minny", "durga", "nahum", "cozen", "beady", "price", "freya", "akola", "monic", "creed", "crock", "skunk", "wersh", "along", "linin", "dobby", "yoked", "trakl", "bahau", "sixty", "orcus", "fawny", "harem", "ewing", "nitro", "crudo", "ixion", "leggy", "phish", "heyer", "gujju", "letch", "breid", "whilk", "prado", "doors", "lungi", "caulk", "klong", "kempe", "oscan", "coley", "gurge", "mesad", "paver", "clark", "nucha", "cimex", "spoke", "baton", "unmew", "vanda", "autry", "swive", "twain", "mules", "moody", "dawes", "maxim", "assam", "clype", "hrolf", "shaba", "lynch", "breda", "akita", "salep", "slake", "oracy", "youse", "daisy", "newar", "grape", "slick", "cyano", "tiree", "chopa", "ilion", "husky", "rosse", "eejit", "tolan", "carey", "sewin", "dekko", "sural", "knell", "novio", "selva", "harte", "broom", "jalee", "thana", "therm", "vacay", "drake", "orlov", "ouzel", "peale", "local", "oiler", "attis", "capua", "cyclo", "haber", "gobbi", "growl", "ether", "range", "puget", "inset", "saite", "shove", "nancy", "jenny", "rhone", "laigh", "lepra", "sarpi", "brunt", "curio", "vogue", "taffy", "mneme", "otter", "heist", "ducks", "bagie", "uther", "tatar", "tisza", "iceni", "daunt", "acold", "varia", "donko", "tidal", "rodez", "satin", "knole", "zande", "spree", "futon", "kraut", "tarne", "naira", "nairn", "knelt", "bojer", "anita", "wolly", "taegu", "globe", "heine", "laver", "adele", "trunk", "basin", "rando", "dowry", "blame", "power", "ravin", "tutor", "bundy", "undid", "lotos", "artsy", "vodun", "cross", "amour", "ayont", "aruhe", "thole", "kaury", "fanti", "mekka", "afoul", "jemmy", "carme", "felid", "start", "bulgy", "murry", "byzas", "corti", "malwa", "serif", "fuzzy", "preen", "terah", "lepus", "strew", "troad", "kraal", "hemet", "umiak", "boyce", "julie", "ceram", "carew", "recce", "enema", "turnt", "howel", "dasyu", "paseo", "hesse", "softy", "alsop", "baeda", "aryan", "ainga", "koine", "ngaio", "hogan", "chewa", "blaes", "nadar", "praha", "munge", "nogay", "crime", "icftu", "mccay", "aftra", "sotie", "ashab", "crest", "kesia", "clave", "mimir", "hedgy", "plaza", "shiai", "steed", "incus", "askja", "fhlbb", "judge", "force", "thorp", "cycle", "coney", "goltz", "lauda", "kosti", "raman", "feoff", "horde", "dorje", "panel", "padus", "carer", "comma", "ileum", "shaef", "sorel", "wrang", "gaddi", "watap", "yarak", "terry", "scull", "figgy", "adeni", "kumon", "stola", "stoop", "shard", "piman", "rowel", "hanau", "dunny", "jupon", "alcon", "conwy", "stijl", "wolfe", "kedah", "salsa", "hongi", "lolly", "tessa", "maori", "sleek", "staun", "pause", "areca", "frick", "stunk", "clamp", "raise", "shute", "pokie", "blaze", "coaly", "noble", "yapok", "carny", "feeze", "braid", "nares", "licet", "midst", "shuha", "geese", "alton", "loach", "feign", "dooly", "pharr", "verst", "starr", "delft", "wring", "gaeta", "bloke", "elwin", "chowk", "mitis", "could", "gundi", "genip", "bonds", "stick", "smack", "veena", "vaduz", "ovoid", "chess", "euler", "bugle", "laksa", "narva", "scots", "miami", "ibert", "bifid", "vomit", "canon", "moyle", "nerve", "scamp", "dried", "payee", "onion", "samaj", "ocala", "grego", "pilar", "rundi", "slink", "estoc", "begum", "urals", "nacho", "sheet", "foshu", "poind", "polly", "visby", "krieg", "thule", "cuffe", "ficus", "cedax", "funky", "maile", "green", "derma", "olean", "angry", "abmho", "issus", "thing", "solum", "uluru", "blake", "awaji", "murom", "cyder", "canto", "snash", "roble", "bacne", "gilet", "toque", "meges", "podge", "mimas", "hazor", "erech", "gamer", "zendo", "palsy", "avian", "krebs", "duomo", "zelda", "sloop", "somme", "enugu", "swoln", "cline", "tagua", "notch", "kecks", "talca", "parev", "horny", "swell", "nammu", "treed", "rogue", "germy", "zilch", "stoup", "behan", "mussy", "emery", "snail", "sizar", "ashen", "garda", "class", "nerdy", "miwok", "steel", "reade", "facia", "shuar", "gallo", "weave", "recur", "rodin", "eject", "lasix", "perth", "benue", "seamy", "showd", "bytom", "patty", "indra", "ninus", "doyle", "suess", "waxen", "ofwat", "affix", "whose", "polio", "prank", "crush", "ozone", "sergt", "press", "rouse", "algie", "trout", "erose", "serov", "dingy", "natch", "kanin", "thump", "first", "lingo", "matie", "clade", "wrier", "butte", "accra", "avita", "levin", "facsm", "apepi", "litas", "comer", "berne", "dhole", "fixer", "lives", "whelm", "rivet", "nagor", "irade", "gamba", "retch", "stale", "douse", "onlap", "rance", "stogy", "medan", "punch", "filly", "ethan", "croft", "otaru", "alkyl", "kerak", "savin", "parch", "bends", "loath", "pacer", "ouphe", "hasid", "tychy", "riser", "hagia", "adhan", "chuse", "gigot", "payne", "potoo", "jakes", "speos", "zweig", "quair", "kiosk", "hbcag", "fluke", "links", "tunja", "badge", "minho", "flake", "rejig", "porus", "prost", "henty", "ednas", "yummo", "szold", "abuna", "appro", "luing", "aglow", "turin", "batak", "giono", "antsy", "basie", "waved", "susah", "dreck", "sheol", "kerch", "klaus", "camra", "curie", "rains", "hufuf", "brady", "delhi", "abysm", "wedge", "unrra", "munin", "cohse", "selye", "credo", "meads", "jerky", "titan", "njord", "congo", "fable", "shave", "waadt", "crius", "suint", "wales", "chios", "virid", "tubal", "notts", "sprag", "chivy", "endow", "equip", "derro", "below", "algar", "tarok", "geode", "cardy", "drago", "pylos", "bilby", "pubic", "katal", "aiche", "kaiak", "kofta", "third", "cwlth", "ahura", "fabry", "ember", "quean", "pecos", "lippi", "liege", "mukti", "dweeb", "birse", "atopy", "alkyd", "vichy", "mamet", "babka", "alula", "unsex", "burse", "velde", "sulfo", "bruit", "perdu", "rebec", "copen", "clerk", "owlet", "facet", "steep", "aksum", "pampa", "argus", "tamil", "mumsy", "ephah", "stasi", "houma", "porch", "melos", "mayor", "jarmo", "gator", "ictal", "flask", "addio", "yonic", "wyatt", "nkomo", "hoary", "state", "avail", "borah", "anoia", "veeck", "peril", "arden", "hipaa", "elyse", "wrans", "scurf", "house", "barea", "carby", "donne", "yabba", "usher", "yonne", "vires", "trial", "karma", "kells", "delay", "glans", "stuka", "marut", "money", "tenet", "hangi", "hexyl", "ziram", "apast", "milch", "unbar", "svevo", "huila", "fixed", "lancs", "carbo", "marin", "creel", "sloid", "zappy", "friar", "alder", "carve", "knish", "cubba", "ellet", "shall", "diner", "amiee", "nottm", "adder", "spawn", "baber", "wundt", "bloor", "moity", "moore", "atlas", "sedgy", "cache", "zesty", "scala", "snide", "brung", "ahwaz", "teiid", "tacit", "beast", "watch", "flyby", "panza", "nusku", "hyena", "blert", "bourg", "aeria", "aulic", "burgh", "poler", "ruddy", "gourd", "snout", "bedel", "dinan", "large", "tatin", "robin", "plomb", "marta", "axial", "place", "djawa", "manet", "egger", "gupta", "barce", "anvil", "dozer", "cooty", "scary", "elise", "stash", "niner", "tract", "ngoni", "grith", "poole", "gatun", "talys", "mafic", "visna", "shale", "huffy", "sauna", "tanis", "venom", "mahal", "looky", "pixie", "naval", "leone", "ruler", "munga", "koran", "ordos", "stook", "popsy", "yeysk", "berea", "caber", "effie", "brach", "rumpf", "dance", "pluck", "amply", "boyle", "blyth", "potsy", "radii", "scuzz", "clove", "ervin", "senza", "xylem", "loser", "flyer", "whist", "musar", "kesey", "kashi", "krupp", "dukas", "lasky", "momus", "every", "defoe", "litre", "cnida", "kerst", "buggy", "treat", "ryder", "verso", "karoo", "mahdi", "mangy", "sadoc", "inlay", "jerba", "chirp", "terra", "sloth", "batik", "cylix", "kindu", "thill", "kanzu", "cuban", "onset", "linac", "ellas", "balsa", "surge", "buber", "nakfa", "penda", "debag", "vaunt", "qiyas", "hemin", "zeist", "gombo", "sysop", "outgo", "draco", "taker", "mores", "carte", "elyot", "diazo", "flume", "choky", "besht", "ummah", "whine", "leyte", "algae", "wenny", "voile", "timid", "equal", "stalk", "birds", "swank", "barry", "loche", "tardy", "quill", "lesya", "balon", "yummy", "humus", "irate", "brash", "glory", "gammy", "poach", "cauca", "manes", "cabob", "crone", "bossy", "anzio", "croon", "selby", "mummy", "minya", "nedda", "boffo", "marka", "begat", "aight", "piton", "pivot", "table", "crabb", "solti", "adage", "terce", "shook", "gluon", "dorty", "luxor", "bezel", "varve", "thunk", "yechy", "topee", "hippo", "frill", "lobed", "jooss", "sapor", "kanji", "shend", "ghost", "posse", "mizar", "gabby", "ajiva", "aruba", "creak", "iatse", "serge", "wrapt", "filmy", "bogie", "commo", "guige", "imply", "koord", "cycad", "yawey", "wages", "piqua", "kideo", "girth", "grume", "dijon", "nampa", "algol", "rummy", "semey", "ochoa", "steno", "waned", "tilak", "recti", "split", "wreak", "anime", "piute", "ratal", "islet", "volos", "eacso", "bousy", "pipit", "lidex", "cisco", "ocrea", "ident", "slush", "drape", "rhino", "tacet", "tapir", "exine", "shluh", "mirin", "hefei", "ethyl", "onega", "preop", "fleam", "virtu", "reeve", "doubs", "davos", "basel", "lower", "trite", "dizzy", "gumma", "speug", "beaty", "detox", "bilbo", "razee", "lemay", "queer", "twerk", "crane", "yaren", "mahua", "raven", "nifty", "punce", "caine", "embay", "lagom", "cruet", "howdy", "snuff", "scalp", "pride", "pinay", "there", "chops", "craps", "aware", "erect", "blook", "batty", "magic", "craze", "temin", "mammo", "candy", "dozed", "nisei", "cuzco", "isaac", "crepy", "laith", "wifey", "capri", "dowse", "scree", "sidra", "blart", "baoji", "daven", "wyler", "vertu", "trona", "tacky", "nevus", "ewell", "goole", "jakey", "harsh", "xylan", "squee", "laden", "teind", "grana", "smelt", "amado", "myrrh", "otomi", "arany", "kazoo", "chili", "sarah", "udine", "begot", "rishi", "cutty", "chola", "bejel", "sworn", "codec", "fundi", "olsen", "unifi", "vimpa", "thick", "space", "hokku", "hakka", "sport", "tipsy", "brusa", "kings", "vibes", "overt", "serve", "waves", "abeam", "taser", "noddy", "maiko", "shrub", "siggo", "throb", "spina", "signy", "acorn", "whump", "horeb", "barth", "touch", "yocon", "virgo", "haman", "hippy", "smear", "vaasa", "adams", "arbus", "tolly", "stele", "shako", "bayar", "stimy", "lafta", "regle", "brett", "papen", "rapid", "hagar", "death", "swore", "peeps", "mende", "qatar", "radar", "choli", "oxfam", "javan", "charr", "sumer", "birne", "abaft", "rumal", "yahoo", "karyn", "sarto", "bloch", "pukey", "fogey", "joint", "laugh", "hedin", "logie", "adami", "kraft", "croze", "kehua", "comus", "woolf", "caret", "triac", "kvass", "zayin", "goose", "hooft", "faugh", "lists", "needs", "anzac", "curet", "carin", "nizam", "midas", "innit", "shogi", "aloft", "donor", "shona", "jaunt", "pulci", "virus", "novia", "orans", "wraaf", "balas", "nance", "roily", "sedge", "stech", "hooly", "buppy", "bible", "tavel", "route", "hsian", "sweep", "props", "xeric", "beano", "fyrom", "losey", "calor", "mlitt", "hours", "bribe", "ladle", "label", "dales", "quant", "mercy", "bloom", "cooee", "indue", "mewar", "jagan", "aurar", "wally", "dolin", "duchy", "baggy", "shiur", "hotch", "withy", "gayal", "qibla", "crowd", "oriya", "barbe", "latte", "kafka", "mulch", "sofer", "herby", "orale", "xylol", "alloa", "ridgy", "chimu", "ramen", "build", "enlil", "lotto", "twink", "chute", "hansa", "chief", "ixora", "shoot", "towie", "techy", "pocky", "lagan", "upaya", "gatha", "kirov", "canna", "sneak", "parti", "tight", "kapok", "slain", "sochi", "piend", "uncio", "sycee", "loran", "whaup", "actis", "damar", "mossy", "extol", "punny", "ascvd", "boyne", "ceria", "quits", "think", "iblis", "passe", "vance", "repel", "gyron", "ogive", "asdic", "twill", "eilat", "bells", "allen", "clash", "crash", "gowan", "skosh", "etrog", "iftar", "tress", "mould", "scart", "umpie", "perle", "potae", "nukes", "shily", "decay", "labra", "pithy", "lamut", "phlox", "khiva", "grime", "demob", "found", "weems", "fubsy", "inspo", "racon", "thine", "mitch", "bliss", "cavum", "taluk", "drama", "eprom", "stine", "iraki", "vater", "kappa", "resht", "wheat", "ngati", "bikol", "scram", "skarn", "berra", "boral", "nasik", "psalm", "iskur", "rupee", "heady", "shaka", "women", "coble", "genii", "wrist", "salon", "grade", "astor", "loury", "tobol", "hugli", "eliot", "barca", "nelda", "nmsqt", "ranid", "gwent", "bursa", "boron", "nashe", "eliza", "bauru", "leona", "pexis", "nacro", "gogga", "emily", "still", "signa", "bumph", "fjeld", "civvy", "macon", "faddy", "boner", "gyral", "larry", "gamma", "cable", "muton", "downs", "gaunt", "brook", "wolff", "tikka", "hilly", "wayne", "wacko", "cheap", "tulsa", "gerry", "palmy", "navvy", "repro", "infer", "veiny", "gruel", "inkle", "fresh", "email", "ahira", "amish", "allah", "yipes", "kwell", "rajar", "edina", "admah", "fuzee", "marwa", "turbo", "irene", "dakin", "appel", "chiru", "rioja", "slurb", "wrote", "potch", "fuxin", "pizza", "recap", "conte", "satyr", "esker", "hoorn", "leper", "kenaf", "gules", "beget", "nandi", "mugga", "godoy", "flick", "raupo", "dream", "gloss", "turku", "cluck", "snarl", "elbow", "kabob", "roust", "goetz", "pasto", "jamal", "venue", "greta", "hawse", "unpeg", "usecc", "calan", "truck", "chase", "tunic", "paned", "attic", "fetch", "narew", "doubt", "musil", "booty", "fugue", "dacca", "kiruv", "orrin", "chimb", "wilts", "warez", "curdy", "lions", "sprig", "phyla", "lloyd", "daman", "revet", "kilij", "irish", "orixa", "atomy", "usurp", "jukes", "feuar", "telex", "keene", "zamia", "apian", "bitsy", "bunco", "rutty", "ultra", "blaff", "jonah", "refel", "melon", "varah", "toric", "desna", "beedi", "sheaf", "rutin", "suent", "denis", "dense", "hovea", "booze", "paros", "least", "gleek", "aphid", "nvcjd", "libby", "hairy", "mucin", "skuld", "summa", "amati", "prodi", "herry", "deira", "galen", "aloud", "likin", "kerky", "hoast", "stole", "funny", "uscrc", "latke", "cutis", "fovea", "peaty", "jalap", "rizal", "dunne", "gonys", "pease", "orlon", "gaudy", "szell", "ashes", "quack", "velar", "henge", "downy", "drina", "decem", "remex", "momma", "clonk", "snood", "black", "slept", "baulk", "hawke", "bonne", "aleph", "garbo", "nodal", "tiara", "tuque", "stich", "sieve", "umist", "valet", "osler", "south", "bling", "nugae", "rabal", "jambo", "pinot", "khnum", "vasty", "vedic", "mehta", "enorm", "gregg", "banak", "arise", "leary", "wordy", "dagga", "knife", "kerki", "baiae", "argon", "redan", "clink", "sabin", "ulpan", "doric", "asben", "adoze", "usdaw", "armet", "kioto", "terse", "mutha", "eaten", "ekiti", "burnt", "coset", "bocor", "nyala", "frock", "abner", "amend", "belly", "anile", "vitta", "keith", "lucan", "drang", "burst", "tasso", "kayla", "ossia", "lands", "udder", "preta", "frege", "juicy", "jolty", "aviso", "mimba", "hench", "grate", "feist", "smaak", "refit", "plank", "gamic", "cubit", "hiney", "salud", "minty", "pwyll", "busch", "vexed", "hamal", "ibrik", "skell", "zowie", "aulis", "urgel", "duddy", "snoep", "spurt", "spiff", "poort", "bunch", "bundt", "fubar", "adret", "tater", "rowth", "raker", "henie", "enron", "focal", "slide", "hough", "soave", "bayou", "bella", "quell", "yazoo", "kurmi", "enact", "pekan", "tippy", "clpbd", "elmer", "shear", "booth", "whaur", "kolbe", "hilar", "drill", "sinus", "annoy", "carry", "rambo", "ourie", "ariki", "tronk", "maror", "skink", "hasan", "quart", "faffy", "foray", "fhlmc", "loess", "keble", "misti", "cedar", "angon", "islay", "flops", "idiom", "fingo", "swalk", "testy", "kasai", "xenia", "dicta", "pence", "parra", "hijaz", "evoke", "sprue", "soapy", "unhcr", "oiled", "arion", "picky", "misce", "truly", "khasi", "cyril", "stymy", "stirp", "saudi", "gigue", "neagh", "blown", "snuck", "nowty", "merry", "heard", "gilly", "danio", "fusan", "conus", "kelso", "manse", "gofer", "egest", "omaha", "oriel", "recta", "polka", "sunna", "watts", "whata", "gilda", "santa", "penis", "pudic", "withe", "togue", "soter", "evans", "binge", "sumac", "cooly", "rajas", "bader", "shamo", "oliva", "judea", "spado", "lated", "pound", "jerry", "moniz", "hawks", "synth", "becky", "train", "dobra", "rathe", "sceat", "zinco", "spoom", "coach", "stamp", "divan", "yquem", "hurds", "aroma", "tilly", "chyme", "faggy", "fesse", "verge", "cuppy", "bleak", "sonic", "arian", "nutso", "rhomb", "krans", "manny", "biffo", "gayle", "brown", "bouse", "aeaea", "fitch", "pursy", "ropey", "snarf", "lotic", "mason", "klimt", "halve", "reith", "dulcy", "sucks", "shang", "diode", "sulla", "essex", "bason", "livre", "metis", "snore", "dight", "eared", "shoah", "bourn", "athol", "mural", "skete", "stove", "aline", "krewe", "maris", "tardo", "satie", "finny", "scold", "ideal", "othin", "amasa", "loren", "kingu", "comet", "sipid", "davao", "fussy", "pleat", "nidal", "sango", "porta", "rawin", "scant", "hyrax", "ghent", "dimer", "byatt", "noemi", "teras", "soddy", "noyes", "dumbo", "dione", "beret", "pasch", "spike", "giant", "bisso", "susie", "anjou", "helle", "swink", "prome", "bhave", "limba", "ferny", "mbyte", "pombe", "bovid", "crude", "ralph", "dinah", "whelk", "athel", "chulo", "kempt", "pepin", "aegis", "guyot", "falda", "adama", "punka", "taiga", "sudsy", "bitty", "kolff", "yacht", "chert", "royce", "oveta", "gravy", "lindy", "ferly", "belah", "nyman", "qorma", "touse", "hilum", "scaur", "fagot", "frore", "triga", "edify", "etzel", "hurok", "jouve", "hovel", "ogdon", "ricer", "knead", "titov", "hypha", "elude", "shoer", "fldxt", "labor", "tamas", "hemic", "aleut", "skied", "balls", "amide", "talon", "grimm", "letha", "anzus", "billy", "vista", "hicks", "zenia", "gumbo", "braze", "shaun", "sidon", "sioux", "alarm", "daggy", "cater", "chaff", "donau", "parky", "loral", "ronan", "hamba", "gnawn", "stock", "apace", "adorn", "sotho", "learn", "runty", "jawan", "lycia", "quoll", "senna", "cutey", "uniat", "pocho", "unrig", "hinau", "couta", "gamay", "zorse", "bisto", "peach", "musty", "aldol", "galop", "akins", "rondo", "cleat", "wooly", "lough", "amman", "align", "imino", "kitty", "sheep", "fleck", "lurie", "rheme", "spice", "mbeki", "latch", "herzl", "bawdy", "bozen", "pukka", "amnio", "reman", "auric", "lauan", "refer", "faust", "dregs", "deere", "fated", "peary", "seral", "plonk", "natta", "boyla", "judgy", "wajda", "toise", "yarco", "khond", "vinyl", "cyrus", "exact", "glary", "adapt", "tenia", "river", "ponga", "fusee", "corny", "tonic", "oxlip", "barde", "naafi", "wigan", "clank", "cubic", "moser", "derry", "subah", "dutch", "hasty", "stiff", "anole", "white", "addle", "tansy", "kudzu", "keijo", "dumpy", "backs", "belga", "fumed", "lydda", "yenta", "mysap", "ifalp", "sooey", "sigma", "dioon", "nimps", "rabin", "favus", "boyer", "phono", "neath", "lorne", "cense", "kinda", "calla", "saker", "germs", "farci", "arcas", "kefir", "sluff", "rospa", "borno", "wader", "joker", "melun", "nihil", "tieck", "kirin", "scrip", "iliac", "rugby", "nirex", "venda", "orach", "boult", "fracs", "tanna", "sargo", "anson", "pouty", "koura", "skrik", "elura", "celia", "timer", "colon", "crore", "nopal", "aorta", "ponzu", "vapid", "divot", "saiga", "pulex", "jimmy", "twice", "twite", "straw", "wuxia", "villa", "topos", "cheer", "vogul", "dphil", "giles", "megan", "aegir", "ribby", "kudos", "briki", "kikoi", "clock", "macke", "broch", "lorin", "amorc", "aggie", "tarry", "mixte", "salem", "orlop", "softa", "mazer", "urial", "lunes", "maewo", "roshi", "nervy", "hugin", "shock", "decoy", "aunty", "rearm", "chank", "maira", "bevvy", "amole", "shill", "admit", "klick", "torch", "dozen", "derek", "elvis", "clapt", "reive", "ranch", "mange", "exurb", "doper", "khmer", "yalow", "scape", "gipon", "lager", "ajuga", "quail", "drava", "sangh", "sweat", "dalan", "cruel", "taira", "cotan", "uloid", "loden", "damas", "minge", "deter", "davis", "flush", "tunis", "brief", "pheon", "fowey", "texas", "cupel", "mitzi", "hofei", "necho", "panay", "gipsy", "voice", "mosul", "micht", "galla", "radin", "hardy", "gerar", "gemma", "gager", "woody", "chaco", "nanay", "maist", "piura", "coign", "shoal", "birth", "iddhi", "surfy", "gapes", "nicky", "scald", "stomp", "gabon", "wager", "lipid", "abzug", "cohan", "baste", "junco", "uzbek", "mohel", "lynen", "migas", "cusec", "hissy", "uigur", "syria", "blair", "evite", "shawl", "engel", "auber", "arsey", "stype", "mower", "dunce", "gypsy", "array", "budge", "foxie", "legco", "lardy", "pikau", "canty", "bahut", "elate", "gotha", "edman", "paris", "maker", "beech", "menel", "kokka", "nepos", "donec", "vicar", "quist", "sloot", "bipod", "razor", "truro", "cubeb", "bahia", "kanga", "turfy", "skyey", "stint", "cymru", "rebel", "clung", "pilon", "token", "tense", "henri", "glair", "gwari", "stupa", "apish", "oesel", "epoch", "broth", "romus", "savoy", "panto", "posey", "dizen", "dryas", "triol", "hejab", "cayce", "benda", "bravo", "aedes", "infra", "marge", "kvell", "ernst", "steam", "shape", "cetin", "beaut", "hoven", "defra", "pokal", "weber", "lully", "purge", "artel", "verse", "minos", "izard", "fiche", "augen", "resin", "psora", "jewie", "randy", "elkin", "dowly", "apgar", "betty", "vedda", "ketol", "alani", "cumin", "seato", "smart", "alene", "doddy", "knoll", "marry", "baccy", "bucks", "platy", "tibur", "velic", "gerah", "shrug", "gaffe", "reiki", "erase", "unami", "ashur", "ackey", "lobus", "logia", "sella", "zeami", "hymen", "pilus", "rivel", "thurm", "poddy", "bhang", "tenon", "canny", "typal", "nadab", "stoic", "aslef", "fondu", "beamy", "lutsk", "cliff", "kebbi", "facog", "elgin", "hoppe", "apeak", "arhat", "toots", "hevea", "comox", "forza", "stunt", "lytta", "tiger", "novel", "graze", "oread", "fryer", "lyssa", "fetid", "forex", "purim", "perry", "matlo", "greet", "mokpo", "metro", "oflot", "plato", "chump", "krait", "ducky", "skort", "boast", "foots", "softs", "bubal", "bohea", "album", "ahead", "butut", "tange", "cuppa", "eikon", "stirk", "falun", "bizzo", "topaz", "ypres", "plotz", "repot", "rebbe", "dalek", "conch", "hegel", "bimah", "hurry", "niter", "secco", "honey", "linum", "hunch", "board", "galba", "pecky", "chang", "daraf", "bhuna", "brank", "lapse", "stump", "kayak", "maire", "mount", "cocci", "glout", "lance", "tweet", "diver", "mudra", "stave", "boece", "betta", "mulga", "setup", "dropt", "waxer", "pskov", "kazin", "omiya", "dibai", "radon", "zygal", "oecus", "chark", "umbel", "doorn", "unido", "alway", "wendy", "cajun", "horst", "hydra", "wedel", "whack", "incas", "cavan", "coker", "inlet", "shama", "uhlan", "renal", "barye", "brass", "occur", "laine", "lumen", "clift", "tarde", "hadal", "login", "ripen", "odeum", "gills", "osman", "skelf", "sensi", "wired", "wives", "nisan", "carpi", "ulema", "omega", "fudge", "paced", "vitim", "dryad", "slang", "larne", "celle", "gwine", "stack", "stopt", "quass", "auxin", "alsek", "lysis", "berko", "ushas", "dally", "raspy", "orris", "guest", "obuda", "bebel", "arndt", "twist", "hands", "zonal", "hosea", "picot", "drown", "chico", "basic", "dorse", "felon", "biter", "misdo", "carom", "stilt", "munch", "sitar", "hatta", "swipe", "arkie", "iodic", "cfids", "upper", "yibin", "bauer", "larsa", "tweak", "hanna", "sepal", "amata", "lawin", "arlen", "tarty", "bored", "mirim", "noise", "shier", "elman", "afrit", "pushy", "bragg", "fatal", "lidia", "hoard", "sixer", "unpin", "media", "amory", "renew", "jivey", "lindi", "takin", "gonzo", "bubas", "lauds", "guess", "delts", "maury", "ledge", "quads", "otway", "leros", "koori", "alice", "track", "mania", "sasin", "gjuki", "adopt", "beaux", "sloyd", "lordy", "dacks", "trice", "bruin", "alley", "paint", "whole", "tiber", "tibia", "verde", "mysia", "eigen", "liver", "vealy", "emmen", "mayer", "rasht", "pinna", "nieve", "burns", "beuys", "vauch", "mucor", "bates", "elemi", "ursid", "johns", "theme", "mutch", "stope", "would", "sylph", "swept", "pewee", "style", "oapec", "gysgt", "adult", "photo", "pubes", "legal", "qirsh", "hofuf", "genus", "najaf", "buzzy", "ridic", "jarry", "gated", "imune", "chuck", "unita", "aisle", "maths", "flirt", "fiend", "leics", "dadah", "thurl", "janie", "aosta", "ulnad", "babur", "magma", "missa", "ruffe", "blast", "block", "solid", "prior", "botox", "saint", "ennui", "jetty", "salad", "waldo", "liszt", "inuit", "caddo", "fugly", "bitch", "xenon", "danny", "pparc", "taint", "enate", "stuck", "wound", "neper", "mushy", "rangi", "segni", "saggy", "grasp", "ratty", "corfu", "nyasa", "oates", "grout", "spelt", "bikie", "tzara", "kraus", "kwara", "sooth", "burly", "merse", "kbyte", "decal", "wheal", "jocko", "elena", "bohol", "julep", "afaik", "swash", "sweer", "monas", "catty", "tramp", "telly", "mince", "weird", "linus", "rahui", "these", "milly", "myrna", "aloes", "panko", "miaou", "aiken", "visor", "parka", "trope", "yuchy", "iliad", "stoke", "bally", "lasik", "azine", "coony", "gland", "solus", "bunya", "cager", "retry", "selah", "ozzie", "hopeh", "fatly", "rubby", "manit", "fetus", "allan", "kiley", "norse", "pulse", "wenge", "wanda", "kitwe", "sable", "sucre", "alary", "squid", "ngami", "falls", "undue", "amaut", "hosel", "altho", "banff", "tamar", "rojas", "hover", "akela", "cooey", "samey", "steen", "vutty", "fidge", "peake", "woosh", "widen", "nevil", "swoop", "fress", "aldan", "myall", "shark", "droke", "nappe", "jokey", "winch", "rukwa", "kithe", "laser", "theta", "rouen", "sicht", "ferry", "suave", "radek", "obese", "educt", "beyle", "myoma", "kyoto", "mochi", "yodel", "dufay", "gizmo", "staph", "vesey", "mimsy", "cipro", "shara", "argos", "sprit", "coupe", "yacca", "honky", "evert", "izmit", "enzed", "joash", "empty", "gorki", "ensky", "tocky", "karol", "kuban", "auris", "musky", "grain", "ebola", "cruse", "buell", "bosch", "scoke", "godet", "enoch", "blimp", "asoka", "osfcw", "snoop", "besti", "bogof", "wight", "lathy", "rajab", "odium", "skeat", "rabbi", "share", "sunny", "wrung", "boyar", "disco", "koner", "hague", "grant", "lillo", "tagma", "corse", "cousy", "edema", "deity", "fossa", "audio", "agram", "viand", "dolon", "clast", "mufti", "sloke", "elsie", "repic", "thokk", "tilde", "guilt", "ghast", "siena", "alloy", "chart", "stern", "surgy", "kalat", "thebe", "hymie", "sonde", "allay", "paine", "kanae", "fidel", "pilch", "wamus", "mario", "cress", "hunts", "plica", "bogan", "upolu", "issei", "kloof", "seize", "fluff", "copay", "crazy", "golly", "gawky", "dingo", "vinca", "hepar", "sakti", "didst", "acuff", "quire", "tendu", "comix", "guard", "egoli", "jurat", "witch", "aesop", "eidos", "trust", "niobe", "milne", "scent", "harpy", "neman", "smsgt", "duvet", "sivas", "prest", "audie", "quirk", "adunc", "nasal", "porgy", "assen", "yobbo", "magot", "skoal", "bully", "ethal", "meung", "aback", "pacha", "caird", "mucic", "odour", "flews", "harve", "dooms", "nyxis", "dogon", "dyson", "lacan", "tempe", "tafia", "sleet", "worth", "witan", "scand", "boots", "aurum", "tronc", "ganef", "garth", "malam", "pesky", "rufus", "reset", "kiore", "cirri", "azyme", "galvo", "gonad", "ostia", "loins", "lines", "cakra", "krogh", "guide", "penny", "larva", "sward", "reims", "dishy", "yampy", "chris", "smell", "ishim", "gordy", "assur", "palau", "nerol", "myoid", "skelp", "dumka", "shoat", "aphis", "moobs", "argan", "leila", "keita", "scuta", "madge", "latam", "usafi", "count", "ephod", "purdy", "cabot", "junot", "porky", "binal", "acerb", "prate", "kukri", "hubei", "deist", "nepal", "doggy", "carla", "beset", "spite", "fleet", "nicam", "gloop", "baboo", "psoas", "jembe", "stout", "brand", "bosom", "risky", "stoss", "enfin", "medic", "fusty", "ahkio", "vapor", "quasi", "yerba", "felix", "slump", "mavun", "roost", "older", "batna", "rayon", "lowse", "pakse", "curia", "nllst", "trama", "chafe", "filum", "labia", "nutty", "cufic", "muzzy", "sampo", "uncle", "wryly", "chawk", "veins", "colog", "lerna", "rebab", "chelp", "twerp", "manly", "utter", "porte", "lowly", "crool", "heads", "qubit", "lagos", "pendu", "drift", "redia", "kiowa", "sopor", "broke", "maera", "vives", "hobbs", "hoise", "delia", "ariel", "priss", "croat", "devoy", "sting", "sinan", "droob", "anigh", "wheel", "celly", "quash", "brawl", "uncap", "neddy", "algum", "roque", "hajji", "podgy", "forte", "agora", "eolus", "issue", "dicky", "bruce", "wills", "dacia", "turya", "durum", "denys", "gumri", "agnes", "nurmi", "gusto", "strum", "usual", "octet", "mohua", "lemon", "rufen", "acral", "apure", "dobie", "nobel", "freda", "false", "thorn", "kiska", "iroko", "hinky", "sadhe", "baize", "niche", "meuse", "benxi", "matin", "talus", "ciggy", "delve", "finna", "ampas", "tepal", "phyfe", "alike", "cobia", "teyde", "ddavp", "firry", "wench", "caper", "mansi", "elves", "rudny", "dryer", "fango", "mayas", "swarm", "jacky", "loved", "leash", "bingy", "basta", "retro", "cocoa", "gouty", "sogat", "blare", "silas", "fixie", "wolof", "imare", "elite", "matty", "loewi", "fordo", "jager", "waler", "chook", "papua", "reggy", "windy", "victa", "krips", "champ", "newsy", "naida", "yakut", "rilke", "brent", "renga", "drool", "buffe", "gorge", "paxil", "fetal", "aneto", "magna", "rudra", "tully", "speak", "simak", "soche", "konya", "rusty", "macro", "olmec", "folky", "foyer", "kiddo", "ocher", "bryan", "tycho", "motto", "shred", "uwist", "pesto", "tummy", "gluck", "medon", "lugar", "naled", "linty", "gwawl", "spire", "lagen", "ginza", "soppy", "taney", "tatum", "grand", "unite", "bovet", "phone", "kyloe", "coder", "batch", "cobol", "spore", "auden", "festa", "isiac", "munda", "osier", "going", "zuppa", "broad", "fomes", "whare", "chimp", "gynae", "snaky", "apery", "naggy", "aidan", "qahar", "chaga", "hulme", "famed", "orczy", "deuce", "ditty", "taata", "bazoo", "whale", "neuse", "hyman", "grefa", "quark", "bucko", "kohen", "feaze", "scarp", "soken", "livid", "getty", "fives", "screw", "favor", "chino", "lewes", "ngwee", "sully", "deary", "fosse", "tosca", "mango", "egypt", "alava", "hokan", "slorm", "volva", "roomy", "shorn", "horse", "wings", "lucia", "ingot", "trail", "staff", "urine", "blank", "mamie", "aisne", "apron", "clint", "notum", "cigar", "epode", "givey", "sumph", "buxom", "linda", "taper", "beebe", "uncal", "folly", "warne", "fault", "corot", "clerc", "lanky", "ikeda", "dwelt", "monte", "nenni", "pruta", "yenan", "raked", "barbu", "basov", "phial", "kiddy", "malic", "eifel", "bavin", "jesse", "agist", "landy", "edged", "gnarl", "shull", "sinai", "glide", "david", "neume", "niqab", "hirst", "mynah", "anele", "until", "vetch", "esaki", "pedal", "hanno", "croak", "inter", "harar", "morar", "flump", "afric", "azusa", "canso", "erupt", "vlach", "tyrol", "canoe", "virga", "rough", "kippa", "ibiza", "durst", "noria", "fifty", "arnim", "fates", "nanua", "styli", "zadok", "qubba", "mbira", "brock", "luger", "knave", "giron", "dvija", "doomy", "milpa", "great", "umbra", "pally", "aspro", "lifar", "canby", "foamy", "varus", "cauda", "teeny", "petra", "disme", "kodak", "acred", "lapis", "moved", "malta", "suber", "urate", "mesne", "ankle", "knuck", "rowdy", "heron", "louth", "kulfi", "hilus", "shown", "buffs", "flash", "exult", "besom", "talos", "dagon", "volga", "thoro", "malan", "enjoy", "jorum", "disko", "samba", "gooby", "sleep", "bothy", "agria", "trews", "cleek", "demos", "suite", "pinta", "lando", "tribe", "bingo", "meany", "beira", "likud", "cleve", "tracy", "rabia", "sodic", "bimbo", "kurus", "rates", "creek", "winey", "liang", "flock", "kooky", "hspda", "pluot", "ranee", "izmir", "digit", "cecil", "ludic", "nacre", "barak", "terne", "curry", "fichu", "simon", "unpen", "bride", "mures", "trent", "roots", "chomp", "conan", "penza", "crawl", "ghain", "holla", "azure", "dusty", "spock", "nasty", "cetus", "saith", "hying", "yupik", "oftel", "uccle", "waive", "plead", "coire", "hekla", "linea", "loner", "lairy", "fungi", "araby", "lydia", "doisy", "scudo", "nicad", "sabra", "eiger", "broga", "sahib", "eleia", "reger", "afore", "dancy", "robus", "kotte", "maidu", "sachs", "zohar", "sercq", "minot", "elide", "ovate", "hatty", "steek", "aalii", "titus", "bulla", "siple", "nabal", "avoid", "limey", "petal", "dench", "minna", "sacco", "suita", "pondo", "boris", "rumen", "terni", "eurus", "shive", "jabal", "mongu", "coati", "noyau", "stipe", "judah", "obama", "mothy", "sault", "brace", "incog", "sneer", "soman", "swing", "prout", "peano", "pools", "ruble", "crave", "dolor", "outie", "smoky", "dinge", "iqbal", "teton", "guile", "leccy", "quoin", "macle", "egret", "begar", "fever", "nader", "couch", "musth", "hondo", "rehab", "prude", "rotfl", "ramon", "burqa", "tunny", "terms", "paget", "twang", "rebut", "segar", "mills", "lichi", "glade", "gibli", "pugin", "nashi", "sabir", "maura", "kulak", "child", "olson", "mazda", "jural", "arena", "chirm", "samar", "sluit", "bogue", "hyphy", "emory", "phebe", "carex", "scuba", "poppa", "probe", "bogus", "divvy", "dixon", "souse", "circa", "greco", "bothe", "paton", "tally", "taunt", "musaf", "hinny", "muggy", "smyth", "whoof", "krone", "hearn", "sarin", "homer", "bases", "winze", "snoek", "bambi", "luser", "mover", "femur", "ortho", "fermi", "weald", "birch", "ovine", "sonny", "basra", "robey", "noted", "story", "elton", "phyma", "jalor", "varec", "mingy", "ocker", "akbar", "nurse", "eider", "viewy", "salve", "snath", "blype", "frisk", "akene", "cairo", "mysid", "dwarf", "sewer", "serum", "gimel", "evade", "stere", "plaas", "dogme", "marat", "niven", "ethos", "washo", "mweru", "alamo", "garni", "mamma", "color", "ontic", "scare", "goody", "swart", "nolde", "cloud", "exome", "basle", "toper", "innie", "ardor", "vrouw", "arete", "wiper", "swiss", "planh", "atigi", "kenny", "elche", "unrip", "award", "rnase", "roger", "birle", "furca", "smalt", "gripe", "nappa", "beard", "corer", "libia", "times", "valdo", "shaky", "ology", "total", "cubby", "debud", "unapt", "pylon", "stuff", "cella", "cloam", "jebel", "pilea", "boric", "lanai", "tarim", "baily", "neigh", "dodge", "nidus", "hefty", "daube", "luces", "wilde", "clout", "guaco", "brake", "bubby", "pears", "lemma", "cymar", "torte", "motte", "esrog", "yucca", "degut", "waaaf", "stung", "nival", "miras", "manky", "adios", "jayne", "cosla", "datel", "clean", "fecal", "seram", "belch", "cramp", "maine", "totem", "mauri", "bisho", "rubor", "xanax", "stria", "dashi", "asama", "panty", "dodgy", "libya", "raphe", "alsip", "merch", "nepit", "nolan", "middy", "teeth", "vacua", "fungo", "marvy", "clite", "yalta", "fedin", "gondi", "snare", "ukiah", "gyrus", "jahel", "azole", "envoy", "balop", "stacy", "swang", "bumpy", "algid", "biggy", "nabla", "septa", "dural", "stilb", "boned", "flack", "forme", "nalgo", "metal", "gleed", "delta", "bafta", "gotra", "loopy", "maria", "unlay", "limen", "rumor", "nimby", "salet", "shift", "daric", "moony", "saros", "stoma", "mckim", "trois", "relax", "venal", "bajer", "smirk", "alibi", "musca", "fleer", "merle", "tuple", "myers", "ouija", "yurak", "askew", "yasna", "oomph", "groom", "gursh", "ictus", "prodd", "kedar", "halal", "sigla", "mauka", "paten", "phony", "mixed", "smash", "dante", "palpi", "niles", "spiry", "stagy", "ancon", "abode", "cloot", "hayek", "union", "alcor", "spume", "larch", "kongo", "scrap", "final"];
},{}],"src/store/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _constants = require("../constants");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Store = /*#__PURE__*/function () {
  function Store() {
    _classCallCheck(this, Store);
    var randomIndex = Math.floor(Math.random() * _constants.WORDS.length);
    console.log(_constants.WORDS[randomIndex]);
    this.state = {
      storage: {
        index: 0,
        answer: _constants.WORDS[randomIndex],
        result_emoji: []
      }
    };
    this.listeners = {};
  }
  _createClass(Store, [{
    key: "getState",
    value: function getState(key) {
      return this.state[key];
    }
  }, {
    key: "setState",
    value: function setState(key, newState) {
      this.state[key] = _objectSpread(_objectSpread({}, this.state[key]), newState);
      this.notify(key);
    }
  }, {
    key: "subscribe",
    value: function subscribe(key, listener) {
      if (!this.listeners[key]) {
        this.listeners[key] = [];
      }
      this.listeners[key].push(listener);
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(key, listener) {
      if (this.listeners[key]) {
        var index = this.listeners[key].indexOf(listener);
        if (index !== -1) {
          this.listeners[key].splice(index, 1);
        }
      }
    }
  }, {
    key: "notify",
    value: function notify(key) {
      if (this.listeners[key]) {
        this.listeners[key].forEach(function (listener) {
          return listener();
        });
      }
    }
  }]);
  return Store;
}();
var store = new Store();
var _default = exports.default = store;
},{"../constants":"src/constants/index.js"}],"src/components/Tiles/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = defineTiles;
var _store = _interopRequireDefault(require("../../store"));
var _constants = require("../../constants");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var Tiles = /*#__PURE__*/function (_HTMLElement) {
  _inherits(Tiles, _HTMLElement);
  var _super = _createSuper(Tiles);
  function Tiles() {
    var _this;
    _classCallCheck(this, Tiles);
    _this = _super.call(this);
    _this.init();
    _store.default.subscribe("storage", function () {
      _this.render();
    });
    return _this;
  }
  _createClass(Tiles, [{
    key: "init",
    value: function init() {
      for (var i = 0; i < _constants.ROW_LENGTH; i++) {
        var row = document.createElement("div");
        row.classList.add("row");
        row.id = "row-".concat(i);
        for (var j = 0; j < _constants.COLUMN_LENGTH; j++) {
          row.innerHTML += "<div class='tile' data-state='empty'></div>";
        }
        this.appendChild(row);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _store$getState = _store.default.getState("storage"),
        key = _store$getState.key,
        index = _store$getState.index;
      var row = document.getElementById("row-".concat(index));
      if (!row) {
        return;
      }
      if (key) {
        var tile = row.querySelector("[data-state='empty']");
        if (tile) {
          tile.innerHTML = key;
          tile.setAttribute("data-state", "tbd");
        }
        return;
      }
      var tiles = row.querySelectorAll("[data-state='tbd']");
      if (tiles) {
        var lastIndex = tiles.length - 1;
        var lastTile = tiles[lastIndex];
        if (lastTile) {
          lastTile.innerHTML = "";
          lastTile.setAttribute("data-state", "empty");
        }
      }
    }
  }]);
  return Tiles;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
function defineTiles() {
  customElements.define("main-tiles", Tiles);
}
},{"../../store":"src/store/index.js","../../constants":"src/constants/index.js"}],"src/utils/toast.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createToast;
function createToast(message) {
  var timer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1500;
  var toast = document.getElementById("toast");
  var messageContainer = document.createElement("div");
  messageContainer.textContent = message;
  toast.appendChild(messageContainer);
  setTimeout(function () {
    toast.removeChild(messageContainer);
  }, timer);
}
},{}],"src/components/Keyboard/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = defineKeyboard;
var _store = _interopRequireDefault(require("../../store"));
var _constants = require("../../constants");
var _toast = _interopRequireDefault(require("../../utils/toast"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var Keyboard = /*#__PURE__*/function (_HTMLElement) {
  _inherits(Keyboard, _HTMLElement);
  var _super = _createSuper(Keyboard);
  function Keyboard() {
    var _this;
    _classCallCheck(this, Keyboard);
    _this = _super.call(this);
    _this.init();
    _this.render();
    _this.addClickEventListener();
    _this.addKeyEventListener();
    return _this;
  }
  _createClass(Keyboard, [{
    key: "init",
    value: function init() {
      var _this2 = this;
      this.word = "";
      this.index = 0;
      this.answer = "";
      this.result_emoji = [];
      this.isEnd = false;
      this.isLast = false;
      this.isNotEnough = true;
      this.isNotWord = true;
      this.isCorrect = false;
      _store.default.subscribe("storage", function () {
        _this2.updateState();
      });
    }
  }, {
    key: "render",
    value: function render() {
      for (var index in _constants.KEYS) {
        var row = document.createElement("div");
        row.classList.add("row");
        var _iterator = _createForOfIteratorHelper(_constants.KEYS[index]),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var key = _step.value;
            if (typeof key === "string") {
              row.innerHTML += "<button type='button' data-key='".concat(key, "' aria-label='add ").concat(key, "' aria-disabled='false' class='key'>").concat(key, "</button>");
              continue;
            }
            row.innerHTML += "<button type='button' data-key='".concat(key.data, "' aria-label='").concat(key.label, "' aria-disabled='true' class='key oneAndHalf'>").concat(key.name, "</button>");
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        this.appendChild(row);
      }
    }
  }, {
    key: "updateState",
    value: function updateState() {
      var _store$getState = _store.default.getState("storage"),
        word = _store$getState.word,
        index = _store$getState.index,
        answer = _store$getState.answer,
        result_emoji = _store$getState.result_emoji;
      this.word = word;
      this.index = index;
      this.answer = answer;
      this.result_emoji = _toConsumableArray(result_emoji);
      this.isEnd = index >= _constants.ROW_LENGTH;
      this.isLast = index === _constants.ROW_LENGTH - 1;
      this.isNotEnough = word.length < _constants.COLUMN_LENGTH;
      this.isNotWord = !_constants.WORDS.includes(word);
    }
  }, {
    key: "addClickEventListener",
    value: function addClickEventListener() {
      var _this3 = this;
      var keys = this.querySelectorAll(".key:not(.oneAndHalf)");
      var enter = this.querySelector("[aria-label='enter']");
      var backspace = this.querySelector("[aria-label='backspace']");
      var _iterator2 = _createForOfIteratorHelper(keys),
        _step2;
      try {
        var _loop = function _loop() {
          var key = _step2.value;
          key.addEventListener("click", function () {
            return _this3.keyEvent(key.dataset.key);
          });
        };
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      enter.addEventListener("click", function (e) {
        return _this3.enterkeyEvent();
      });
      backspace.addEventListener("click", function () {
        return _this3.backspaceKeyEvent();
      });
    }
  }, {
    key: "addKeyEventListener",
    value: function addKeyEventListener() {
      var _this4 = this;
      document.addEventListener("keydown", function (e) {
        if (e.key.match(/^[a-zA-Z]$/)) {
          var key = e.key.toLowerCase();
          _this4.keyEvent(key);
        }
        if (e.key === "Enter") {
          _this4.enterkeyEvent();
        }
        if (e.key === "Backspace") {
          _this4.backspaceKeyEvent();
        }
      });
    }
  }, {
    key: "keyEvent",
    value: function keyEvent(key) {
      var isEnd = this.isEnd,
        isCorrect = this.isCorrect;
      if (isEnd || isCorrect) {
        return;
      }
      if (this.word.length < _constants.COLUMN_LENGTH) {
        _store.default.setState("storage", {
          key: key,
          word: this.word + key
        });
      }
    }
  }, {
    key: "enterkeyEvent",
    value: function enterkeyEvent() {
      var isEnd = this.isEnd,
        isLast = this.isLast,
        isNotEnough = this.isNotEnough,
        isNotWord = this.isNotWord,
        isCorrect = this.isCorrect;
      if (isEnd || isCorrect) {
        return;
      }
      if (isNotEnough) {
        (0, _toast.default)("Not enough letter!");
        return;
      }
      if (isNotWord) {
        (0, _toast.default)("Not in word list!");
        return;
      }
      var word = _toConsumableArray(this.word);
      var answer = _toConsumableArray(this.answer);
      var result_emoji = _toConsumableArray(this.result_emoji);
      var result = [];
      for (var i = 0; i < _constants.COLUMN_LENGTH; i++) {
        if (word[i] === answer[i]) {
          result.push("correct");
          result_emoji.push("🟦");
        } else if (answer.includes(word[i])) {
          result.push("present");
          result_emoji.push("🟨");
        } else {
          result.push("absent");
          result_emoji.push("⬛");
        }
      }
      var row = document.getElementById("row-".concat(this.index));
      var tiles = row.querySelectorAll("[data-state='tbd']");
      tiles.forEach(function (tile, index) {
        tile.setAttribute("data-state", result[index]);
        var key = document.querySelector("button[data-key='".concat(word[index], "']"));
        var key_state = key.getAttribute("data-state");
        switch (key_state) {
          case "present":
            if (result[index] === "correct") {
              key.setAttribute("data-state", result[index]);
            }
          case "correct":
            break;
          default:
            key.setAttribute("data-state", result[index]);
            break;
        }
      });
      if (this.word === this.answer) {
        (0, _toast.default)("Congratulations!", 5000);
        this.isCorrect = true;
      } else if (isLast) {
        (0, _toast.default)(this.answer, 5000);
      }
      _store.default.setState("storage", {
        index: this.index + 1,
        word: "",
        key: null,
        result_emoji: result_emoji,
        isCorrect: this.isCorrect
      });
    }
  }, {
    key: "backspaceKeyEvent",
    value: function backspaceKeyEvent() {
      var isEnd = this.isEnd,
        isCorrect = this.isCorrect,
        word = this.word;
      if (isEnd || isCorrect) {
        return;
      }
      if (word) {
        _store.default.setState("storage", {
          key: null,
          word: this.word.slice(0, -1)
        });
      }
    }
  }]);
  return Keyboard;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
function defineKeyboard() {
  customElements.define("main-keyboard", Keyboard);
}
},{"../../store":"src/store/index.js","../../constants":"src/constants/index.js","../../utils/toast":"src/utils/toast.js"}],"src/components/Popup/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = definePopup;
var _constants = require("../../constants");
var _store = _interopRequireDefault(require("../../store"));
var _toast = _interopRequireDefault(require("../../utils/toast"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var Popup = /*#__PURE__*/function (_HTMLElement) {
  _inherits(Popup, _HTMLElement);
  var _super = _createSuper(Popup);
  function Popup() {
    var _this;
    _classCallCheck(this, Popup);
    _this = _super.call(this);
    _this.result = "";
    _store.default.subscribe("storage", function () {
      _this.render();
    });
    return _this;
  }
  _createClass(Popup, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var _store$getState = _store.default.getState("storage"),
        isCorrect = _store$getState.isCorrect,
        index = _store$getState.index,
        result_emoji = _store$getState.result_emoji;
      if (index < _constants.ROW_LENGTH && !isCorrect) {
        return;
      }
      this.style.opacity = 100;
      this.style.zIndex = 1000;
      var today = new Date();
      var currentTime = today.toLocaleString();
      var attempts = index;
      var background = document.createElement("div");
      background.classList.add("background");
      var popup = document.createElement("div");
      popup.classList.add("popup");
      var content = document.createElement("span");
      for (var i = 0; i < result_emoji.length; i++) {
        if (i % _constants.COLUMN_LENGTH === 0) {
          this.result += "<br />";
        }
        this.result += result_emoji[i];
      }
      content.innerHTML = "Wordle ".concat(currentTime, " ").concat(attempts, "/6 <br /><br /><br /> ").concat(this.result);
      var shareBtn = document.createElement("button");
      shareBtn.classList.add("share");
      shareBtn.innerHTML = "Share";
      shareBtn.addEventListener("click", function () {
        window.navigator.clipboard.writeText(content.innerHTML.replaceAll("<br>", "\n")).then(function () {
          (0, _toast.default)("Copied!");
        });
      });
      var tryAgainBtn = document.createElement("button");
      tryAgainBtn.classList.add("try-again");
      tryAgainBtn.innerHTML = "Try Again";
      tryAgainBtn.addEventListener("click", function () {
        location.reload();
      });
      var btnContainer = document.createElement("div");
      btnContainer.classList.add("btnContainer");
      btnContainer.appendChild(shareBtn);
      btnContainer.appendChild(tryAgainBtn);
      var closeBtn = document.createElement("div");
      closeBtn.classList.add("close");
      closeBtn.innerHTML = "<svg height=\"20\" viewBox=\"0 0 24 24\" width=\"20\"\n     xmlns=\"http://www.w3.org/2000/svg\">\n    <line x1=\"1\" y1=\"22\" \n          x2=\"22\" y2=\"1\" \n          stroke=\"white\" \n          stroke-width=\"4\"/>\n    <line x1=\"1\" y1=\"1\" \n          x2=\"22\" y2=\"22\" \n          stroke=\"white\" \n          stroke-width=\"4\"/>\n</svg>";
      closeBtn.addEventListener("click", function () {
        _this2.style.opacity = 0;
        _this2.style.zIndex = -1;
      });
      popup.appendChild(content);
      popup.appendChild(btnContainer);
      background.appendChild(popup);
      background.appendChild(closeBtn);
      this.appendChild(background);
    }
  }]);
  return Popup;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
function definePopup() {
  customElements.define("main-popup", Popup);
}
},{"../../constants":"src/constants/index.js","../../store":"src/store/index.js","../../utils/toast":"src/utils/toast.js"}],"src/pages/main/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = onCreateMainPage;
var _Header = _interopRequireDefault(require("../../components/Header"));
var _Tiles = _interopRequireDefault(require("../../components/Tiles"));
var _Keyboard = _interopRequireDefault(require("../../components/Keyboard"));
var _Popup = _interopRequireDefault(require("../../components/Popup"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function onCreateMainPage() {
  return "<main-header></main-header>\n    <main-tiles></main-tiles>\n    <main-keyboard></main-keyboard>\n    <main-popup></main-popup>";
}
addEventListener("DOMContentLoaded", function () {
  (0, _Header.default)();
  (0, _Tiles.default)();
  (0, _Keyboard.default)();
  (0, _Popup.default)();
});
},{"../../components/Header":"src/components/Header/index.js","../../components/Tiles":"src/components/Tiles/index.js","../../components/Keyboard":"src/components/Keyboard/index.js","../../components/Popup":"src/components/Popup/index.js"}],"src/index.js":[function(require,module,exports) {
"use strict";

var _main = _interopRequireDefault(require("./pages/main"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var app = document.getElementById("app");
var onCreateComponent = function onCreateComponent(element) {
  app.insertAdjacentHTML("beforeend", element);
};
addEventListener("DOMContentLoaded", function () {
  onCreateComponent((0, _main.default)());
});
},{"./pages/main":"src/pages/main/index.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59637" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.js.map