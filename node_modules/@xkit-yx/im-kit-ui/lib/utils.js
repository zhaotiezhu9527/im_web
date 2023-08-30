"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleEmojiTranslate = exports.parseSessionId = exports.frequencyControl = exports.groupByPy = exports.mergeActions = exports.mergeArrs = exports.logger = exports.logDebug = void 0;
var yunxin_log_debug_1 = __importDefault(require("yunxin-log-debug"));
exports.logDebug = yunxin_log_debug_1.default;
var package_json_1 = __importDefault(require("../package.json"));
exports.logger = (0, yunxin_log_debug_1.default)({
    level: 'debug',
    version: package_json_1.default.version,
    appName: package_json_1.default.name,
});
// 传入的是空，返回旧值
function mergeArrs(oldArr, newArr, key) {
    var map = new Map();
    oldArr.forEach(function (item) {
        // @ts-ignore
        map.set(item[key], item);
    });
    newArr.forEach(function (item) {
        // @ts-ignore
        var exist = map.get(item[key]);
        var finalItem = item;
        if (exist) {
            finalItem = __assign(__assign({}, exist), item);
        }
        // @ts-ignore
        map.set(item[key], finalItem);
    });
    return __spreadArray([], __read(map.values()), false);
}
exports.mergeArrs = mergeArrs;
// 传入的是空，返回空
var mergeActions = function (defaultActions, propsActions, key) {
    return propsActions.map(function (i) {
        var defaultAction = defaultActions.find(function (j) { return i[key] === j[key]; });
        if (defaultAction) {
            return __assign(__assign({}, defaultAction), i);
        }
        else {
            return i;
        }
    });
};
exports.mergeActions = mergeActions;
var groupByPy = function (arr, keys, isLowerCase) {
    if (isLowerCase === void 0) { isLowerCase = true; }
    var res = {};
    var OTHER_TAG = '#';
    var add = function (k, v) {
        var _k = isLowerCase ? k.toLowerCase() : k.toUpperCase();
        if (!res[_k]) {
            res[_k] = [v];
        }
        else {
            res[_k].push(v);
        }
    };
    arr.forEach(function (item) {
        var v = item[keys.firstKey] ||
            item[keys.secondKey || ''] ||
            item[keys.thirdKey || ''];
        if (!!v && typeof v === 'string') {
            var str_1 = v[0];
            if (/^[a-zA-Z]$/.test(str_1)) {
                add(str_1.toLowerCase(), item);
            }
            else if (/^[\u4e00-\u9fa5]$/.test(str_1)) {
                var en = '*abcdefghjklmnopqrstwxyz'.split('');
                var zh_1 = '阿八嚓哒妸发旮哈讥咔垃痳拏噢妑七呥扨它穵夕丫帀'.split('');
                var k = en.find(function (k, ki) {
                    return (!zh_1[ki - 1] || zh_1[ki - 1].localeCompare(str_1, 'zh') <= 0) &&
                        str_1.localeCompare(zh_1[ki], 'zh') == -1;
                });
                if (k && k !== '*') {
                    add(k, item);
                }
                else {
                    add(OTHER_TAG, item);
                }
            }
            else {
                add(OTHER_TAG, item);
            }
        }
        else {
            add(OTHER_TAG, item);
        }
    });
    var data = Object.keys(res).map(function (k) { return ({ key: k, data: res[k] }); });
    var sortData = data
        .filter(function (item) { return item.key !== OTHER_TAG; })
        .sort(function (a, b) { return a.key.localeCompare(b.key, 'en'); });
    var otherData = data.filter(function (item) { return item.key === OTHER_TAG; });
    return sortData.concat(otherData);
};
exports.groupByPy = groupByPy;
var frequencyControl = function (fn, delay, limit) {
    var promiseQueue = [];
    var requesting = false;
    var timer;
    return function (args) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var p = promiseQueue.find(function (item) { return item.args === args; });
            if (p) {
                p.queue.push({ resolve: resolve, reject: reject });
            }
            else {
                promiseQueue.push({ args: args, queue: [{ resolve: resolve, reject: reject }] });
            }
            if (requesting) {
                return;
            }
            var handler = function (pq) {
                if (!pq.length) {
                    return;
                }
                requesting = true;
                fn.call(
                // @ts-ignore
                _this, pq.map(function (item) { return item.args; }))
                    .then(function (res) {
                    var _loop_1 = function () {
                        var p_1 = pq.shift();
                        if (p_1) {
                            var _1 = res.find(function (j) { return j.account === p_1.args; });
                            p_1.queue.forEach(function (j) { return j.resolve(_1); });
                        }
                    };
                    while (pq.length) {
                        _loop_1();
                    }
                })
                    .catch(function (err) {
                    while (pq.length) {
                        var p_2 = pq.shift();
                        if (p_2) {
                            p_2.queue.forEach(function (item) { return item.reject(err); });
                        }
                    }
                })
                    .finally(function () {
                    requesting = false;
                    if (promiseQueue.length) {
                        handler(promiseQueue.splice(0, limit));
                    }
                });
            };
            // 如果参数数量到达 limit，立即执行
            if (promiseQueue.length >= limit) {
                clearTimeout(timer);
                handler(promiseQueue.splice(0, limit));
            }
            else {
                clearTimeout(timer);
                timer = setTimeout(function () {
                    handler(promiseQueue.splice(0, limit));
                }, delay);
            }
        });
    };
};
exports.frequencyControl = frequencyControl;
/**
 * 解析 sessionId，形如 scene-accid
 */
var parseSessionId = function (sessionId) {
    var _a = __read(sessionId.split('-')), scene = _a[0], to = _a.slice(1);
    return {
        scene: scene,
        // 这样处理是为了防止有些用户 accid 中自带 -
        to: to.join('-'),
    };
};
exports.parseSessionId = parseSessionId;
var handleEmojiTranslate = function (t) {
    var _a;
    var EMOJI_ICON_MAP_CONFIG = (_a = {},
        _a[t('Laugh')] = 'icon-a-1',
        _a[t('Happy')] = 'icon-a-2',
        _a[t('Sexy')] = 'icon-a-3',
        _a[t('Cool')] = 'icon-a-4',
        _a[t('Mischievous')] = 'icon-a-5',
        _a[t('Kiss')] = 'icon-a-6',
        _a[t('Spit')] = 'icon-a-7',
        _a[t('Squint')] = 'icon-a-8',
        _a[t('Cute')] = 'icon-a-9',
        _a[t('Grimace')] = 'icon-a-10',
        _a[t('Snicker')] = 'icon-a-11',
        _a[t('Joy')] = 'icon-a-12',
        _a[t('Ecstasy')] = 'icon-a-13',
        _a[t('Surprise')] = 'icon-a-14',
        _a[t('Tears')] = 'icon-a-15',
        _a[t('Sweat')] = 'icon-a-16',
        _a[t('Angle')] = 'icon-a-17',
        _a[t('Funny')] = 'icon-a-18',
        _a[t('Awkward')] = 'icon-a-19',
        _a[t('Thrill')] = 'icon-a-20',
        _a[t('Cry')] = 'icon-a-21',
        _a[t('Fretting')] = 'icon-a-22',
        _a[t('Terrorist')] = 'icon-a-23',
        _a[t('Halo')] = 'icon-a-24',
        _a[t('Shame')] = 'icon-a-25',
        _a[t('Sleep')] = 'icon-a-26',
        _a[t('Tired')] = 'icon-a-27',
        _a[t('Mask')] = 'icon-a-28',
        _a[t('ok')] = 'icon-a-29',
        _a[t('AllRight')] = 'icon-a-30',
        _a[t('Despise')] = 'icon-a-31',
        _a[t('Uncomfortable')] = 'icon-a-32',
        _a[t('Disdain')] = 'icon-a-33',
        _a[t('ill')] = 'icon-a-34',
        _a[t('Mad')] = 'icon-a-35',
        _a[t('Ghost')] = 'icon-a-36',
        _a[t('Angry')] = 'icon-a-37',
        _a[t('Angry')] = 'icon-a-38',
        _a[t('Unhappy')] = 'icon-a-39',
        _a[t('Frown')] = 'icon-a-40',
        _a[t('Broken')] = 'icon-a-41',
        _a[t('Beckoning')] = 'icon-a-42',
        _a[t('Ok')] = 'icon-a-43',
        _a[t('Low')] = 'icon-a-44',
        _a[t('Nice')] = 'icon-a-45',
        _a[t('Applause')] = 'icon-a-46',
        _a[t('GoodJob')] = 'icon-a-47',
        _a[t('Hit')] = 'icon-a-48',
        _a[t('Please')] = 'icon-a-49',
        _a[t('Bye')] = 'icon-a-50',
        _a[t('First')] = 'icon-a-51',
        _a[t('Fist')] = 'icon-a-52',
        _a[t('GiveMeFive')] = 'icon-a-53',
        _a[t('Knife')] = 'icon-a-54',
        _a[t('Hi')] = 'icon-a-55',
        _a[t('No')] = 'icon-a-56',
        _a[t('Hold')] = 'icon-a-57',
        _a[t('Think')] = 'icon-a-58',
        _a[t('Pig')] = 'icon-a-59',
        _a[t('NoListen')] = 'icon-a-60',
        _a[t('NoLook')] = 'icon-a-61',
        _a[t('NoWords')] = 'icon-a-62',
        _a[t('Monkey')] = 'icon-a-63',
        _a[t('Bomb')] = 'icon-a-64',
        _a[t('Sleep')] = 'icon-a-65',
        _a[t('Cloud')] = 'icon-a-66',
        _a[t('Rocket')] = 'icon-a-67',
        _a[t('Ambulance')] = 'icon-a-68',
        _a[t('Poop')] = 'icon-a-70',
        _a);
    // TODO react-string-replace 的行为不是那么的好理解，比如像下面这个正则就一定要加 '()'，后面最好干掉自己实现
    var INPUT_EMOJI_SYMBOL_REG = new RegExp('(' +
        Object.keys(EMOJI_ICON_MAP_CONFIG)
            .map(function (item) {
            var left = "\\".concat(item.slice(0, 1));
            var right = "\\".concat(item.slice(-1));
            var mid = item.slice(1, -1);
            return "".concat(left).concat(mid).concat(right);
        })
            .join('|') +
        ')', 'g');
    return {
        EMOJI_ICON_MAP_CONFIG: EMOJI_ICON_MAP_CONFIG,
        INPUT_EMOJI_SYMBOL_REG: INPUT_EMOJI_SYMBOL_REG,
    };
};
exports.handleEmojiTranslate = handleEmojiTranslate;
